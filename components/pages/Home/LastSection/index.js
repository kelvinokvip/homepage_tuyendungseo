import BigTitleComponent from "@/components/UI/BigTitle";
import DividerComponent from "@/components/UI/Divider";
import MarginBottom from "@/components/UI/MarginBottom";
import React from "react";
import Image from "next/image";

export default function LastSectionComponent() {
  return (
    <>
      <MarginBottom />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-md-12 col-sm-12">
            <h2 className="text-color-primary text-uppercase">Cách thức tham gia</h2>
            <div>
              <Image alt="icon" src={"/images/home/icon-usegroup.png"} width={80} height={20} />
            </div>
            <MarginBottom />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div className="bg-color-primary rounded p-3">
              <div className="text-center">
                <p className="fs-3 text-white text-uppercase">Bước 1:</p>
              </div>
              <div className="text-left text-white">
                Đăng ký tài khoản tại website: okvip.vin
              </div>
              <div className="text-center p-3">
                <Image alt src={"/images/home/comuni.jpg"} className="rounded-circle border border-color-primary border-4" width={250} height={250} />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div className="bg-color-primary rounded p-3">
              <div className="text-center">
                <p className="fs-3 text-white text-uppercase">Bước 2:</p>
              </div>
              <div className="text-left text-white">
                Đăng ký tài khoản tại website: okvip.vin
              </div>
              <div className="text-center p-3">
                <Image alt src={"/images/home/comuni.jpg"} className="rounded-circle border border-color-primary border-4" width={250} height={250} />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div className="bg-color-primary rounded p-3">
              <div className="text-center">
                <p className="fs-3 text-white text-uppercase">Bước 3:</p>
              </div>
              <div className="text-left text-white">
                Nhận tài khoản CTV nếu vượt qua bài test
              </div>
              <div className="text-center p-3">
                <Image alt src={"/images/home/comuni.jpg"} className="rounded-circle border border-color-primary border-4" width={250} height={250} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarginBottom />
      <DividerComponent />
    </>
  );
}
