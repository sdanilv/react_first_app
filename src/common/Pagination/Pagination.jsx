import React from "react";
import style from "./Pagination.module.css";

const Pagination = props => {
  let { currentPage, numbersPage } = props;
  let arrayOfPages = [];

  for (let i = 1; i < numbersPage; i++) {
    arrayOfPages.push(i);
  }

  let button = p => {
    return (
      <button
        className={currentPage === p ? style.selectedPage : null}
        key={p}
        onClick={e => props.onPageClick(p)}>
        {p}
      </button>
    );
  };

  let pages = arrayOfPages.map(p => {
    if ((p >= 1 && p <= 5) || p === arrayOfPages.length) {
      return button(p);
    }
    if (p === arrayOfPages.length - 1) return <button key={p}>...</button>;
    return "";
  });

  return <div className={style.pagination}>{pages}</div>;
};

export default Pagination;
