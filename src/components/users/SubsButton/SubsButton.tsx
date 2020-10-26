import ButtonLoader from "../../../common/ButtonLoader/ButtonLoader";
import style from "./SubsButton.module.css";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribe, unsubscribe } from "redux/usersReducer/usersReducer";
import { getBlockedSubButtons } from "redux/usersReducer/usersSelector";

type Props = {
  userId: number;
  followed: boolean;
};
const SubsButton: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const blockedSubButtons = useSelector(getBlockedSubButtons);
  return (
    <>
      {blockedSubButtons.some((u) => u === props.userId) ? (
        <ButtonLoader />
      ) : (
        <div>
          {props.followed ? (
            <button
              className={style.button}
              onClick={() => dispatch(unsubscribe(props.userId))}
            >
              Отписаться
            </button>
          ) : (
            <button
              className={style.button}
              onClick={() => dispatch(subscribe(props.userId))}
            >Подписаться
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default SubsButton;
