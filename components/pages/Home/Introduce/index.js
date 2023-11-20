import BigTitleComponent from "@/components/UI/BigTitle";
import DividerComponent from "@/components/UI/Divider";
import MarginBottom from "@/components/UI/MarginBottom";
import Image from "next/image";
import React from "react";
export default function IntroduceComponent() {
  return (
    <>
      <MarginBottom />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-6 col-sm-12">
            <h2 className="text-color-primary">GIỚI THIỆU</h2>
            <div>
              <Image src={"/images/home/icon-usegroup.png"} width={80} height={20} />
            </div>
            <MarginBottom />
            <div className="text-color-primary">
              <p>
                Tập đoàn OKVIP phát triển website Freelancer nhằm kết nối những bạn trẻ yêu thích kiếm tiền. Chúng tôi cung cấp những công việc mà các bạn có thể tham gia mọi lúc, mọi nơi.
              </p>
              <ul>
                <li>+ Bạn là một content writer tự do?</li>
                <li>+ Bạn đam mê viết lách, sáng tạo?</li>
                <li>+ Bạn có kiến thức cơ bản về content SEO?</li>
                <li>+ Bạn mong muốn kiếm được thu nhập khủng từ sở thích của mình?</li>
              </ul>
              <p>Chào mừng đến với cộng đồng Freelancer của chúng tôi. Tại đây có hàng trăm job viết bài mỗi ngày cùng những phúc lợi chỉ có tại tập đoàn OKVIP!</p>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12">
            <div className="text-center">
              <Image src={"/images/home/comuni.jpg"} className="rounded-circle" width={350} height={350} />
            </div>
          </div>
        </div>
      </div>
      <MarginBottom />
      <DividerComponent />
    </>
  );
}
