import ButtonLoader from "../../../common/ButtonLoader/ButtonLoader";
import style from "./SubsButton.module.css"
import React, {FC} from "react";

type Props = { userId: number, blockedSubButtons: Array<number>, followed: boolean,
    unsubscribe: (userId: number) => void, subscribe: (userId: number) => void }
const SubsButton: FC<Props> = (props) => {
    return <>
        {props.blockedSubButtons.some(u => u === props.userId) ? (
            <ButtonLoader/>
        ) : (
            <div>
                {props.followed ? (
                    <button
                        className={style.button}
                        onClick={() => props.unsubscribe(props.userId)}>
                        Subs
                    </button>
                ) : (
                    <button
                        className={style.button}
                        onClick={() => props.subscribe(props.userId)}>
                        Unsubs
                    </button>
                )}
            </div>
        )}
    </>;
};

export default SubsButton;