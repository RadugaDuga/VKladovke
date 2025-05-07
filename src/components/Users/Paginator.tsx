import React, { useState } from "react";
import s from "./Users.module.css";

interface PaginatorProps {
  usersTotalCount: number;
  pageSize: number;
  currentPageNum: number;
  onPageChanged: (pageNumber: number) => void;
}

const Paginator: React.FC<PaginatorProps> = (props) => {
  let portionSize = 10;
  let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftEdgePageNum = (portionNumber - 1) * portionSize + 1;
  let rightEdgePageNum = portionNumber * portionSize;

  return (
    <div className={s.paginator}>
      {portionNumber > 1 ? (
        <button
          className={s.prevBtn}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        ></button>
      ) : null}
      {pages
        .filter((f) => f >= leftEdgePageNum && f <= rightEdgePageNum)
        .map((p) => {
          return (
            <button
              key={p}
              onClick={() => {
                props.onPageChanged(p);
              }}
              className={`${s.pageBtn} ${props.currentPageNum === p ? s.activePage : ""}`}
            >
              {p}
            </button>
          );
        })}
      {portionCount > portionNumber ? (
        <button
          className={s.nextBtn}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        ></button>
      ) : null}
    </div>
  );
};
export default Paginator;
