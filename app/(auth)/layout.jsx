"use client";

import Loading from "@/components/generic/loading";
import Logo from "@/components/generic/logo";
import useAuthGard from "@/hooks/useAuthGard";

export default function AuthLayout({ children }) {
  const loading = useAuthGard("auth");

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <Logo className="mb-4" size="lg" />
      {children}
    </div>
  );
}
