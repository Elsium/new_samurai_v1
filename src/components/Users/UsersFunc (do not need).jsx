import React from "react";
import style from "./Users.module.scss"
import axios from "axios";
import user from "../../assets/img/user.jpg"

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }

    return (
        <section className={style.container}>
            <div className={style.users}>
                {props.users.map(u => <div className={style.user} key={u.id}>
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
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unsubscribe</button>
                            : <button onClick={() => {props.following(u.id)}}>Subscribe</button>
                        }
                    </div>
                </div>)}
            </div>
            <button className={style.getUsers} onClick={getUsers}>Get user</button>
        </section>
    );
}

export default Users;