"use client";

import api_config from "@/constants/api/config";
import { getCookie } from "@/utils/cookie";
import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: api_config.BASE_URL,
  timeout: api_config.TIMEOUT,
  headers: api_config.HEADERS,
});

api.interceptors.request.use(
  (request) => {
    const token = getCookie("token");
    
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (error) => {
    toast.error("خطا در ارسال درخاست");
    console.error(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    if (error.response) {
      const resData = error.response.data;

      // نمایش پیام کلی
      if (resData.error) {
        toast.error(resData.error);
      }

      // نمایش خطاهای فیلدی (errors: { field: [msg1, msg2] })
      if (resData.errors && typeof resData.errors === "object") {
        Object.values(resData.errors).forEach(messages => {
          if (Array.isArray(messages)) {
            messages.forEach(msg => toast.error(msg));
          }
        });
      }

      switch (error.response.status) {
        case 400:
          if (!resData.error && !resData.errors) {
            toast.error("درخواست نامعتبر است");
          }
          break;
        case 401:
          toast.error("لطفا مجددا وارد شوید");
          removeCookie("token");
          removeCookie("refresh");
          window.location.href = "/login";
          break;
        case 403:
          toast.error("شما به این بخش دسترسی ندارید");
          break;
        case 404:
          toast.error("  یافت نشد");
          break;
        case 500:
          toast.error("خطای سرور");
          break;
        default:
          if (!resData.error && !resData.errors) {
            toast.error("خطایی رخ داده است");
          }
      }
    } else if (error.request) {
      toast.error("خطا در ارتباط با سرور");
    } else {
      toast.error("خطایی رخ داده است");
    }

    return Promise.reject(error);
  }
);




const authFetch = axios.create({
  baseURL: "https://api.novaprop.org/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

authFetch.interceptors.request.use(
  (request) => request,
  (error) => console.log(error)
);

authFetch.interceptors.response.use(
  (response) => response,
  (error) => error.response
);



export default api