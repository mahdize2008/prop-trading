"use client";

import infoData from "@/services/dashboard";
import useInfoStore from "@/store/dashboard";
import { getCookie } from "@/utils/cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useAuthGard(mode) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const token = getCookie("token");
  const router = useRouter();
  const { infoStore, setInfoStore } = useInfoStore();
  useEffect(() => {
    const authCheck = async () => {
      if (mode === "dashboard") {
        if (token) {
          try {
            const data = await infoData();
            setInfoStore(data);
          } catch (err) {
            console.error(err);
          }
        } else {
          toast.error("لطفا ابتدا وارد شوید");
          setInfoStore({});
          router.push("/login");
        }
      } else if (mode === "auth") {
        if (token) {           
          router.push("/panel");
        }
      }
      setLoading(false);
    };
    authCheck();
  }, [pathname]);

  return loading;
}
