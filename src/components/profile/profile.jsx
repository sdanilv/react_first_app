import React from "react"
import style from "./profile.module.css"
import Myposts from "./MyPosts/myposts"


const Profile = () => {
    return (

        <div >
            <img className={style.profileImg} src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="content" />
            <div>
                <div> Ava+discrip</div>
                <Myposts />
            </div>


        </div>

    );
}
export default Profile;