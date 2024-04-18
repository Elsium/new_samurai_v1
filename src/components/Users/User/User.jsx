import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './User.module.scss'
import userICO from '../../../assets/img/user.jpg'

const User = ({user, isFollowing, sendUnfollow, sendFollow, isAuth}) => {
    return (
        <div className={style.user}>
            <div className={style.first}>
                <div className={style.avatar}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={!!user.photos.small ? user.photos.small : userICO} alt=''/>
                    </NavLink>
                </div>
                <div>
                    <div className={style.name}>{user.name} {/*user.surname*/}</div>
                    <div
                        className={style.status}>Status: <span>{user.status ? user.status : 'no status yet.'}</span>
                    </div>
                </div>
            </div>
            <div className={style.second}>
                <div>
                    <div
                        className={style.location}>{/*user.location.city*/'city'}, <br/> {/*user.location.country*/'country'}
                    </div>
                    <div className={style.subscribers}>{/*user.subscribes*/'count'} <span>followers</span>
                    </div>
                </div>
            </div>
            <div className={style.subBtn}>
                {user.followed
                    ? <button disabled={!isAuth || isFollowing.some(id => id === user.id)} onClick={() => {
                        sendUnfollow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={!isAuth || isFollowing.some(id => id === user.id)} onClick={() => {
                        sendFollow(user.id)
                    }}>Follow</button>
                }
            </div>
        </div>

    )
}

export default User;