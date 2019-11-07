import React, {memo, useState} from "react";
import style from "./Pagination.module.css";
let activeKit = 1;
const Pagination = memo(props => {
    const [kit, setKit] = useState(1);
    const {currentPage, numbersPage, onPageClick, countOfVisiblePages = 5} = props;

    // let countOfVisiblePages = 5;
    const lastKit = Math.ceil(numbersPage/countOfVisiblePages);
    const lastPage = numbersPage -1;
    let start = (kit - 1) * countOfVisiblePages + 1;
    let end = kit * countOfVisiblePages;

    let arrayOfPages = [];

    for (let i = 1; i < numbersPage; i++) {
        arrayOfPages.push(i);
    }

    let button = p => {
        return (
            <button
                className={currentPage === p ? style.selectedPage : null}
                key={p}
                onClick={e => {
                  // if(p===1) {activeKit= 1}
                  // if(p===lastPage)
                  //  { activeKit = lastKit;}
                  onPageClick(p);}}>
                {p}
            </button>
        );
    };

    let pages = (start, end) => arrayOfPages.map(p => {

        if ((p >= start && p <= end) || p === arrayOfPages.length || p === 1) {
            return button(p);
        }
        if (start !== 1 && p === 2) return <button onClick={() => setKit(kit - 1)} key={p}>...</button>;
        if (p === arrayOfPages.length - 1 && end !== arrayOfPages.length)
            return <button onClick={() => setKit(kit + 1)} key={p}>...</button>;
        return "";
    });

    return <div className={style.pagination}>{pages(start, end)}</div>;
});

export default Pagination;
