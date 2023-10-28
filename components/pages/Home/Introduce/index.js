import BigTitleComponent from "@/components/UI/BigTitle";
import DividerComponent from "@/components/UI/Divider";
import MarginBottom from "@/components/UI/MarginBottom";
import Image from "next/image";
import React from "react";
export default function IntroduceComponent() {
  return (
    <>
      <MarginBottom />
      <div className="container-custom  container text-center">
        <BigTitleComponent title="GIỚI THIỆU TRANG WEB" />
      </div>
      <MarginBottom />
      <div
        className="container-custom container rounded"
        style={{ backgroundColor: "#0087a5" }}
      >
        <div className="row">
          <div className="col-6 col-sm-6 text-white p-2">
            <p className="fs-5 font-bold">
              Tập đoàn OKVIP phát triển website Freelancer nhằm kết nối những
              bạn trẻ yêu thích kiếm tiền. Chúng tôi cung cấp những công việc mà
              các bạn có thể tham gia mọi lúc, mọi nơi.
            </p>
            <p className="fs-5">+ Bạn là một content writer tự do?</p>
            <p className="fs-5">+ Bạn đam mê viết lách, sáng tạo? </p>
            <p className="fs-5">+ Bạn có kiến thức cơ bản về content SEO?</p>
            <p className="fs-5">
              + Bạn mong muốn kiếm được thu nhập khủng từ sở thích của mình?
            </p>
            <p className="fs-5">
              Chào mừng đến với Freelancer okvip.vin - Tại đây có hàng trăm job
              viết bài mỗi ngày cùng những phúc lợi chỉ có tại tập đoàn OKVIP
            </p>
          </div>
          <div className="col-6 col-sm-6">
            <img
              src={"/images/home/Freelance-content-writer.jpg"}
              width={600}
              height="100%"
              alt=""
              className="rounded-end"
            />
          </div>
        </div>
      </div>
      <MarginBottom />
      <DividerComponent />
    </>
  );
}
