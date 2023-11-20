import BigTitleComponent from "@/components/UI/BigTitle";
import DividerComponent from "@/components/UI/Divider";
import MarginBottom from "@/components/UI/MarginBottom";
import React from "react";
import Image from "next/image";

export default function GoodWhat() {
  return (
    <>
      <MarginBottom />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-md-12 col-sm-12">
            <h2 className="text-color-primary text-uppercase">Nhuận bút tính theo cấp bậc</h2>
            <p className="fw-bold text-color-secondary text-uppercase">minh BẠCh công khai</p>

            <MarginBottom />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div className="text-end">
              <p className="fw-bold text-color-secondary text-uppercase fs-5">Cấp 1: 55k</p>
              <ul className="text-end text-color-primary">
                <li>Nhuận bút 55k/1000 từ </li>
                <li>CTV được nhận tối đa 10 bài/ giỏ hàng </li>
                <li>Số lượng bài tối đa hàng tháng không giới hạn </li>
              </ul>
              <div>
                <Image alt="icon" src={"/images/home/icon-usegroup.png"} width={80} height={20} />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div className="text-end" style={{'padding-top': '70px'}}>
              <p className="fw-bold text-color-secondary text-uppercase fs-5">Cấp 2: 65k</p>
              <ul className="text-end text-color-primary">
                <li>Nhuận bút 65k/ 1000 từ</li>
                <li>CTV được nhận tối đa 15 bài/ giỏ hàng</li>
                <li>Số lượng bài tối đa hàng tháng không giới hạn</li>
              </ul>
              <div>
                <Image alt="icon" src={"/images/home/icon-usegroup.png"} width={80} height={20} />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
          <div className="text-end" style={{'padding-top': '140px'}}>
              <p className="fw-bold text-color-secondary text-uppercase fs-5">Cấp 3: 80k</p>
              <ul className="text-end text-color-primary">
                <li>Nhuận bút 80k/ 1000 từ</li>
                <li>CTV được nhận tối đa 20 bài/ giỏ hàng</li>
                <li>Số lượng bài tối đa hàng tháng không giới hạn</li>
              </ul>
              <div>
                <Image alt="icon" src={"/images/home/icon-usegroup.png"} width={80} height={20} />
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
