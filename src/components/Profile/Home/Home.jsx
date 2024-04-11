import React from "react";
import style from "./Home.module.scss"
import user from "../../../assets/img/user.jpg"

const Home = (props) => {
    return (
        <section>
            <div className={style.banner}></div>
            <div className={style.content}>
                <img
                    src={props.profile.photos.large ? props.profile.photos.large : user}
                    alt=""/>
                <div className={style.name}>
                    {props.profile.fullName}
                </div>
                <div className={style.sub}>
                    2.5M subscribers
                </div>
            </div>
        </section>
    );
}

export default Home;