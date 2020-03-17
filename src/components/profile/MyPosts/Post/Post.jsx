import React from "react";
import style from "./Post.module.css";

const Post = React.memo(props => {
    return (
        <div className={style.post}>
            <div className={style.title}>
                <img src={props.ava} alt='avaPost'/>
            </div>
            <div className={style.title}>Name: {props.name}</div>
            <div className={style.title}>Age: {props.age}</div>
            <div className={style.message}>{props.message}</div>
            <div className={style.like}>
                <img
                    src='https://media.istockphoto.com/vectors/like-vector-icon-isolated-on-transparent-background-like-transparency-vector-id1042603678'
                    alt='likePost'
                />
                <span className='likeCounter'> {props.likeCount}</span>
            </div>
        </div>
    );
});
export default Post;
