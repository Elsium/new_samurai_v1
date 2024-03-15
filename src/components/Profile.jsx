import React from "react";
import style from './Profile.module.scss'
const Profile = () => {
    return (
        <main className={style.main}>
            <div>
                banner
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div className={style.item}>
                    post 1
                </div>
            </div>
        </main>
    );
}

export default Profile;