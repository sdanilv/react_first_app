import React from 'react';
import style from './PageLoader.module.css'


const PageLoader = () => {
  return (
    <div class={style.loader}>
    <div class={style.l_main}>
      <div class={style.l_square}><span></span><span></span><span></span></div>
      <div class={style.l_square}><span></span><span></span><span></span></div>
      <div class={style.l_square}><span></span><span></span><span></span></div>
      <div class={style.l_square}><span></span><span></span><span></span></div>
    </div>
    </div>
  );
}

export default PageLoader;