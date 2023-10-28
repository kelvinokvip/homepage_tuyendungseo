import BigTitleComponent from "@/components/UI/BigTitle";
import DividerComponent from "@/components/UI/Divider";
import MarginBottom from "@/components/UI/MarginBottom";
import React from "react";

export default function Privacy() {
  return (
    <>
      <MarginBottom />
      <div className="container-custom container text-center">
        <BigTitleComponent title="CHÍNH SÁCH NỔI BẬT" />
      </div>
      <MarginBottom />
      <div className="container-custom container text-white">
        <div className="row">
          <p className="fs-4">
            CTV được hợp tác cùng tập đoàn giải trí lớn nhất châu Á
          </p>
          <p className="fs-4">Bảo mật thông tin, minh bạch chính sách</p>
          <p className="fs-4">Không giới độ tuổi</p>
          <p className="fs-4">Không giới hạn thu nhập</p>
          <p className="fs-4">Đãi ngộ hấp dẫn - an toàn - uy tín</p>
          <p className="fs-4">
            Thanh toán lương qua tài khoản vào ngày 20 hàng tháng
          </p>
          <p className="fs-4">
            Luôn luôn cởi mở với mọi ý kiến đóng góp, sẵn sàng tạo mối quan hệ
            hợp tác đôi bên cùng có lợi
          </p>
          <p className="fs-4">Nhuận bút của CTV được tính dựa trên cấp bậc</p>
          <table className="table  me-2 ms-2">
            <thead>
              <tr className="table-success text-center">
                <th scope="col">Level</th>
                <th scope="col">1000 chữ</th>
                <th scope="col">2000 chữ</th>
                <th scope="col">3000 chữ</th>
                <th scope="col">4000 chữ</th>
                <th scope="col">5000 chữ</th>
                <th scope="col">6000 chữ</th>
                <th scope="col">7000 chữ</th>
                <th scope="col">8000 chữ</th>
                <th scope="col">9000 chữ</th>
                <th scope="col">10000 chữ</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">Cấp độ 1</th>
                <td>55.000</td>
                <td>110.000</td>
                <td>165.000</td>
                <td>220.000</td>
                <td>275.000</td>
                <td>330.000</td>
                <td>385.000</td>
                <td>440.000</td>
                <td>495.000</td>
                <td>550.000</td>
              </tr>
              <tr>
                <th scope="row">Cấp độ 2</th>
                <td>65.000</td>
                <td>130.000</td>
                <td>195.000</td>
                <td>260.000</td>
                <td>325.000</td>
                <td>390.000</td>
                <td>455.000</td>
                <td>520.000</td>
                <td>585.000</td>
                <td>650.000</td>
              </tr>
              <tr>
                <th scope="row">Cấp độ 3</th>
                <td>80.000</td>
                <td>160.000</td>
                <td>240.000</td>
                <td>320.000</td>
                <td>400.000</td>
                <td>480.000</td>
                <td>560.000</td>
                <td>640.000</td>
                <td>720.000</td>
                <td>800.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <MarginBottom />
      <DividerComponent />
    </>
  );
}
