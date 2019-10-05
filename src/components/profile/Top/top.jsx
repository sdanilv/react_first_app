/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./top.module.css";

const Top = () => {
  return (
    <div className={style.header}>
      <img
        className={style.headerImg}
        src="https://www.w3schools.com/howto/img_snow_wide.jpg"
        alt="content"
      />
      <div>
        {" "}
        <img
          className={style.avaImg}
          src="https://2krota.ru/wp-content/uploads/2019/02/0_i-1-1024x1547.jpg"
        />
      </div>
        <div>
          <span className={style.description}>
            Awesome Frozen Cheese proactive scale New York Awesome Wooden Fish
            Digitized
          </span>
        </div>
    </div>
  );
};

export default Top;
