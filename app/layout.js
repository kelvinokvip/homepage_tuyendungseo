"use client";
import "./globals.css";
import { useContext, useEffect } from "react";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });
import { AuthContext } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { usePathname } from "next/navigation";
import MenuComponent from "@/components/pages/Home/Menu";
import AuthProvider from "@/context/AuthContext";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <GoogleOAuthProvider
          clientId="124038751321-heq9tk8j8mvutq9o8rmspsm8omjr7r5v.apps.googleusercontent.com"
          auto_select={false}
        >
          <AuthProvider>
            <div style={{ zIndex: 9999 }}>
              <ToastContainer autoClose={2000} />
            </div>
            <Header pathname={pathname} />
            <MenuComponent pathname={pathname} />
            {children}
            <Footer pathname={pathname} />
          </AuthProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
