import React from "react";
import style from "./Users.module.scss"
import axios from "axios";
import user from "./img/user.jpg"
import {Pagination} from "@mui/material";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onChangePage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <section className={style.container}>
                {/*<div className={style.pageNumbers}>*/}
                {/*    {*/}
                {/*        pages.map(i => <button key={i}*/}
                {/*                               className={this.props.currentPage === i ? style.activePage: ""}*/}
                {/*                               onClick={() => {this.onChangePage(i)}}>{i}*/}
                {/*        </button>)*/}
                {/*    }*/}
                {/*</div>*/}
                <Pagination className={style.pageNumbers}
                            count={pageCount}
                            showFirstButton showLastButton
                            page={this.props.currentPage}
                            onChange={(e, page) => {this.onChangePage(page)}}/>
                <div className={style.users}>
                    {this.props.users.map(u => <div className={style.user} key={u.id}>
                        <div className={style.first}>
                            <div className={style.avatar}>
                                <img src={u.photos.small ? u.photos.small : user} alt=""/>
                            </div>
                            <div>
                                <div className={style.name}>{u.name} {"u.surname"}</div>
                                <div className={style.status}>Status: <span>{u.status ? u.status : "no status yet."}</span></div>
                            </div>
                        </div>
                        <div className={style.second}>
                            <div>
                                <div className={style.location}>{"u.location.city"}, <br/> {"u.location.country"}</div>
                                <div className={style.subscribers}>{"u.subscribes"} <span>sub</span></div>
                            </div>
                        </div>
                        <div className={style.subBtn}>
                            { u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unsubscribe</button>
                                : <button onClick={() => {this.props.following(u.id)}}>Subscribe</button>
                            }
                        </div>
                    </div>)}
                </div>
            </section>
        )
    }
}
export default Users;