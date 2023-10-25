import BigTitleComponent from "@/components/UI/BigTitle";
import CardComponent from "@/components/UI/Card";
import DividerComponent from "@/components/UI/Divider";
import MarginBottom from "@/components/UI/MarginBottom";
import React from "react";

export default function CompleteWorkComponent() {
  return (
    <>
      <MarginBottom />
      <div className="container-custom container text-center">
        <BigTitleComponent title="GIỚI THIỆU TRANG WEB" />
      </div>
      <MarginBottom />
      <div className="container-custom container">
        <div className="row">
          <p className="fs-3 font-bold">
            Tập đoàn OKVIP phát triển website Freelancer nhằm kết nối những bạn
            trẻ yêu thích kiếm tiền. Chúng tôi cung cấp những công việc mà các
            bạn có thể tham gia mọi lúc, mọi nơi.
          </p>
          <p className="fs-4">+ Bạn là một content writer tự do?</p>
          <p className="fs-4">+ Bạn đam mê viết lách, sáng tạo? </p>
          <p className="fs-4">+ Bạn có kiến thức cơ bản về content SEO?</p>
          <p className="fs-4">
            + Bạn mong muốn kiếm được thu nhập khủng từ sở thích của mình?
          </p>
          <p className="fs-4">
            Chào mừng đến với Freelancer okvip.vin - Tại đây có hàng trăm job
            viết bài mỗi ngày cùng những phúc lợi chỉ có tại tập đoàn OKVIP
          </p>
        </div>
      </div>
      <MarginBottom />
      <DividerComponent />
    </>
  );
}
