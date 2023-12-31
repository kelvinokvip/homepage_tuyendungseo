import React from "react";
import style from "./style.module.css";
import Link from "next/link";
export default function MenuComponent({ pathname }) {
  return (
    <>
      <div
        style={{
          display:
            pathname.includes("login") ||
            pathname.includes("signup") ||
            pathname.includes("dashboard")
              ? "none"
              : "block",
        }}
      >
        <div className="col-12">
          <div className={style.box}>
            <div className="container-custom container text-center">
              <div className={style.menu}>
                <ul className={style.menu}>
                  <li>
                    <Link href="/about">GIỚI THIỆU TẬP ĐOÀN OKVIP</Link>
                  </li>
                  <li>
                    <Link href="/welfare">PHÚC LỢI CTV</Link>
                  </li>
                  <li>
                    <Link href="#">HƯỚNG DẪN THAM GIA</Link>
                  </li>
                  <li>
                    <Link href="/support">LIÊN HỆ HỖ TRỢ</Link>
                  </li>
                  <li>
                    <Link href="#">TIN TỨC OKVIP</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
