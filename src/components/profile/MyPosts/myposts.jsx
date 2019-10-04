import React from "react"
import style from "./myposts.module.css"
import Post from "./Post/post";


const Myposts = () => {
    return (

        <div className={style.posts}>
            <div className={style.title}>
                <textarea></textarea>
            </div>
            <div>
                <button>Submit</button>
            </div>
            <div>
                <Post name="Boris" age="19" message="Hello world" likeCount="0"/>
                <Post name="Boris" age="19" message="Hello world" likeCount="12"/>
            </div>
        </div>
    );
}
export default Myposts;