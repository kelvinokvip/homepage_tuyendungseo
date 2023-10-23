"use client";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useCheckAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      // đã có dữ liệu người dùng
      if (pathname.includes("/login") || pathname.includes("/signup")) {
        console.log(`vao day`);
        window.location.href = `${process.env.OFFICE_APP}/auth/login`;
      }
    } else {
    }
  }, [router, pathname]);

  return { user };
};
