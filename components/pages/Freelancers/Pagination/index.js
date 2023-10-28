import React from "react";
import styles from "./styles.module.css";
import { TiMediaPlayReverse, TiMediaPlay } from "react-icons/ti";

export default function Pagination() {
  return (
    <div classNameName={styles["pagination-wrapper"]}>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <TiMediaPlayReverse />
            </a>
          </li>
          <li classNameName={`${styles["is-active"]} page-item`}>
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <TiMediaPlay />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
