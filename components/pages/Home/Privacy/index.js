import BigTitleComponent from "@/components/UI/BigTitle";
import DividerComponent from "@/components/UI/Divider";
import MarginBottom from "@/components/UI/MarginBottom";
import React from "react";
import Image from "next/image";

export default function Privacy() {
  return (
    <>
      <MarginBottom />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-md-12 col-sm-12">
            <h2 className="text-color-primary text-uppercase">chính sách nổi bật</h2>
            <div>
              <Image alt="icon" src={"/images/home/icon-usegroup.png"} width={80} height={20} />
            </div>
            <MarginBottom />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-4 col-sm-12 px-4">
            <div className="text-center">
              <Image alt src={"/images/home/comuni.jpg"} className="rounded-circle border border-color-primary border-4" width={250} height={250} />
            </div>
            <div className="is-divider"></div>
            <div className="p-2">
              <p class="fw-bold text-color-secondary">Bảo mật thông tin - Minh bạch chính sách</p>
              <ul className="ms-0 ps-0 text-color-primary">
                <li>Thông tin cá nhân của CTV sẽ được OKVIP bảo mật với bên thứ 3.</li>
                <li>Chúng tôi có chính sách rõ ràng, minh bạch đảm bảo lợi ích cho cả hai bên.</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12 px-4">
            <div className="text-center">
              <Image alt src={"/images/home/comuni.jpg"} className="rounded-circle border border-color-primary border-4" width={250} height={250} />
            </div>
            <div className="is-divider"></div>
            <div className="p-2">
              <p class="fw-bold text-color-secondary">Không sợ bị “bùm” nhuận bút</p>
              <ul className="ms-0 ps-0 text-color-primary">
                <li>Nhuận bút sẽ được thanh toán vào 20 tây hàng tháng, chuyển trực tiếp vào tài khoản ngân hàng của CTV.</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12 px-4">
            <div className="text-center">
              <Image alt src={"/images/home/comuni.jpg"} className="rounded-circle border border-color-primary border-4" width={250} height={250} />
            </div>
            <div className="is-divider"></div>
            <div className="p-2">
              <p class="fw-bold text-color-secondary">Đội ngũ tư vấn nhiệt tình</p>
              <ul className="ms-0 ps-0 text-color-primary">
                <li>CTV sẽ luôn được trợ giúp giải đáp thắc mắc, xử lý sự cố từ đội ngũ nhân viên quản lý phần mềm. </li>
                <li>Đội ngũ quản lý phần mềm luôn đảm bảo sự công bằng cho tất cả CTV.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <MarginBottom />
      <DividerComponent />
    </>
  );
}
