import React from "react";
import style from "./post.module.css";

const Post = (props) => {

    return (

        <div className={style.post}>
            
                <div className={style.title}><img src="data:image/png;base64,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" />
                </div>
                <div className={style.title}>Name: {props.name}</div>
                <div className={style.title}>Age: {props.age}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.like}><img src="data:image/png;base64,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"/>
                <span className="likeCounter"> {props.likeCount}</span>
                </div>
        </div>

    );
}
export default Post;