import React from "react";
import style from "./Users.module.scss"

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                userID: 1,
                photo: 'https://yt3.googleusercontent.com/4ATipS780rafUGrk-eQxUhRVyAXcBNIONO1Pyta-0P7I0BPM89Rk1T4W1eB7PAzXS2Ms8m3cy0U=s900-c-k-c0x00ffffff-no-rj',
                name: 'Diana',
                surname: 'Fox',
                status: 'Working',
                location: {
                    city: 'New-York',
                    country: 'USA'
                },
                subscribes: 362,
                subscribed: false,
            },
            {
                userID: 2,
                photo: 'https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg',
                name: 'Ivan',
                surname: 'Dog',
                status: 'Living',
                location: {
                    city: 'New-York',
                    country: 'USA'
                },
                subscribes: 12,
                subscribed: true,
            },
            {
                userID: 3,
                photo: 'https://static2.tgstat.ru/channels/_0/a3/a3193315ddbeecd0c7993cf1ac3cf9ba.jpg',
                name: 'Lisa',
                surname: 'Cat',
                status: 'Working',
                location: {
                    city: 'New-York',
                    country: 'USA'
                },
                subscribes: 42,
                subscribed: true,
            },
            {
                userID: 4,
                photo: 'https://www.mk.ru/upload/entities/2023/10/16/17/articlesImages/image/46/14/50/8a/73fa4719cef7e03e9ed31ccc955720d4.jpg',
                name: 'Marina',
                surname: 'El',
                status: 'Art designer',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                },
                subscribes: 142,
                subscribed: true,
            },
            {
                userID: 5,
                photo: 'https://static2.tgstat.ru/channels/_0/1e/1e4f42daa1c6ae0a03ce8419b805eaa2.jpg',
                name: 'Ignat',
                surname: 'El',
                status: 'Second art designer',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                },
                subscribes: 140,
                subscribed: false,
            },
            {
                userID: 6,
                photo: 'https://avatars.mds.yandex.net/i?id=9b28f240afac5ae950111f7b50f15dfa0eea1b3a-12491002-images-thumbs&n=13',
                name: 'Valentin',
                surname: 'Sumo',
                status: 'Fight master i think',
                location: {
                    city: 'Inocity',
                    country: 'Russia'
                },
                subscribes: 253,
                subscribed: false,
            },
            {
                userID: 7,
                photo: 'https://illustrators.ru/uploads/illustration/image/1749689/%D0%91%D0%B5%D0%B7_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.png',
                name: 'Vladimir',
                surname: 'Voronov',
                status: 'Writter',
                location: {
                    city: 'Saint-Peterburg',
                    country: 'Russia'
                },
                subscribes: 31,
                subscribed: false,
            }])
    }
    console.log(props.users)

    return (
        <section className={style.container}>
            {props.users.map(u => <div className={style.user} key={u.userID}>
                <div className={style.first}>
                    <div className={style.avatar}>
                        <img src={u.photo} alt=""/>
                    </div>
                    <div>
                        <div className={style.name}>{u.name} {u.surname}</div>
                        <div className={style.status}>Status: <span>{u.status}</span></div>
                    </div>
                </div>
                <div className={style.second}>
                    <div>
                        <div className={style.location}>{u.location.city}, <br/> {u.location.country}</div>
                        <div className={style.subscribers}>{u.subscribes} <span>sub</span></div>
                    </div>
                </div>
                <div className={style.subBtn}>
                    { u.subscribed
                        ? <button onClick={() => {props.unsubscribe(u.userID)}}>Unsubscribe</button>
                        : <button onClick={() => {props.subscribe(u.userID)}}>Subscribe</button>
                    }
                </div>
            </div>)}
        </section>
    );
}

export default Users;