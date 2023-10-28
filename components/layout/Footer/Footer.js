import React from "react";
import {
  BsGlobe,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { PiPersonArmsSpreadFill } from "react-icons/pi";

import "./footer.css";

export default function Footer({ pathname }) {
  const contents = [
    {
      items: [
        { url: "", content: " Trang chủ " },
        { url: "", content: "Giới thiệu" },
        { url: "", content: "Hướng dẫn" },
        { url: "", content: "Nội quy CTV" },
      ],
    },
    {
      items: [
        { url: "https://okvip.network", content: "Đối tác OKVIP" },
        { url: "https://trafficseo.online/", content: "Traffic SEO" },
        { url: "https://okvip.ai/playgame/", content: "Giải trí" },
      ],
    },
  ];

  return (
    <div
      className="container-footer"
      style={{
        display:
          pathname.includes("login") ||
          pathname.includes("signup") ||
          pathname.includes("dashboard")
            ? "none"
            : "flex",
      }}
    >
      <div className="footer pt-3 container-custom container">
        <div className="footer1 py-4 px-1">
          <div className="footer1-wrapper d-flex flex-wrap row">
            <div className="footer-col col-lg-4 col-12 px-2 mb-3 pb-3">
              <div className="mb-4 d-flex justify-content-left">
                <img
                  className="freelancer-logo"
                  src="/freelancer-logo-light.svg"
                  alt="freelacer-logo-light.svg"
                />
              </div>
              <div className="text-item mb-3 text-center">
                {/* <BsGlobe className="me-3" /> */}
                freelancer@okvip.com
              </div>
              <div className="text-item mb-3 text-center">
                {/* <BsFillQuestionCircleFill className="me-3" /> */}
                Freelancer OKVIP - Kết nối cùng phát triển
              </div>
            </div>
            {contents.map((val, idx) => {
              return (
                <div
                  className="footer-col col-lg-4 col-md-4 col-12 px-2 mb-3 pb-3 text-center fs-3"
                  key={idx}
                >
                  <p className="title-column">{val.title}</p>
                  {val.items.map((item, index) => {
                    return (
                      <div className="text-item mb-1" key={index}>
                        <a href={item.url} target="_blank">
                          {item.content}
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="footer2">
          <div className="footer2-container">
            <div className="d-flex flex-wrap row pt-4">
              <div className="col-12 col-md-6 mb-3">
                <p className="text-11">
                  Freelancer ® is a registered Trademark of Freelancer
                  Technology Pty Limited (ACN 142 189 759)
                </p>
                <p className="text-11">
                  Copyright © 2023 Freelancer Technology Pty Limited (ACN 142
                  189 759)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
