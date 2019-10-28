import React from "react";
import style from "./ButtonLoader.module.css";
import loader from "../../img/loader1.svg";
const ButtonLoader = () => {
  return (
    <div>
      <img className={style.loader} alt='loader' src={loader} />
    </div>
  );
};

export default ButtonLoader;
