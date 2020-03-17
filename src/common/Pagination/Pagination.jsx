import React, {memo} from "react";
import style from "./Pagination.module.css";

const Pagination = memo(props => {

    const {kit, setKit, currentPage, numbersPage, onPageClick, countOfVisiblePages = 5} = props;

    const lastKit = Math.floor(numbersPage / countOfVisiblePages);
    const start = (kit - 1) * countOfVisiblePages + 1;
    const end = kit * countOfVisiblePages;
    let arrayOfPages = [];

    for (let i = 1; i < numbersPage; i++) {
        arrayOfPages.push(i);
    }

    const button = p => {
        return (
            <button
                className={currentPage === p ? style.selectedPage : null}
                key={p}
                onClick={() => {
                    if (p === 1) {
                        setKit(1)
                    }
                    if (p === numbersPage - 1) {
                        setKit(lastKit)
                    }
                    onPageClick(p);
                }}>
                {p}
            </button>
        );
    };

    const pages = (start, end) => arrayOfPages.map(p => {
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
