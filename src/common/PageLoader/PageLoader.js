import React from 'react';
import style from './PageLoader.module.css'


const PageLoader = () => {
    return (
        <div className={style.loader}>
            <div className={style.l_main}>
                <div className={style.l_square}><span></span><span></span><span></span></div>
                <div className={style.l_square}><span></span><span></span><span></span></div>
                <div className={style.l_square}><span></span><span></span><span></span></div>
                <div className={style.l_square}><span></span><span></span><span></span></div>
            </div>
        </div>
    );
};

export default PageLoader;