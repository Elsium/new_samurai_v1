import React from "react";
import style from "./Home.module.scss"

const Home = () => {
    return (
        <section>
            <div className={style.banner}></div>
            <div className={style.content}>
                <img
                    src="https://yt3.googleusercontent.com/4ATipS780rafUGrk-eQxUhRVyAXcBNIONO1Pyta-0P7I0BPM89Rk1T4W1eB7PAzXS2Ms8m3cy0U=s900-c-k-c0x00ffffff-no-rj"
                    alt=""/>
                <div className={style.name}>
                    Diana Fox
                </div>
                <div className={style.sub}>
                    124 subscribers
                </div>
            </div>
        </section>
    );
}

export default Home;