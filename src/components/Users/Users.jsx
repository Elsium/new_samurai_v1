import React from "react";
import style from "./Users.module.scss"
import user from "./img/user.jpg"
import {Pagination} from "@mui/material";

const Users = (props) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // let pages = [];
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i);
    // }
    return (
        <section className={style.container}>
            {/*<div className={style.pageNumbers}>*/}
            {/*    {*/}
            {/*        pages.map(i => <button key={i}*/}
            {/*                               className={props.currentPage === i ? style.activePage: ""}*/}
            {/*                               onClick={() => {props.onChangePage(i)}}>{i}*/}
            {/*        </button>)*/}
            {/*    }*/}
            {/*</div>*/}
            <Pagination className={style.pageNumbers}
                        count={pageCount}
                        showFirstButton showLastButton
                        page={props.currentPage}
                        color='secondary'
                        onChange={(e, page) => {props.onChangePage(page)}}/>
            <div className={style.users}>
                {props.users.map(u => <div className={style.user} key={u.id}>
                    <div className={style.first}>
                        <div className={style.avatar}>
                            <img src={!!u.photos.small ? u.photos.small : user} alt=""/>
                        </div>
                        <div>
                            <div className={style.name}>{u.name} {/*u.surname*/}</div>
                            <div className={style.status}>Status: <span>{u.status ? u.status : "no status yet."}</span></div>
                        </div>
                    </div>
                    <div className={style.second}>
                        <div>
                            <div className={style.location}>{/*u.location.city*/"city"}, <br/> {/*u.location.country*/"country"}</div>
                            <div className={style.subscribers}>{/*u.subscribes*/"count"} <span>sub</span></div>
                        </div>
                    </div>
                    <div className={style.subBtn}>
                        { u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unsubscribe</button>
                            : <button onClick={() => {props.following(u.id)}}>Subscribe</button>
                        }
                    </div>
                </div>)}
            </div>
        </section>
    )
}

export default Users;