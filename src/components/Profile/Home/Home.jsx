import React from 'react';
import style from './Home.module.scss'
import user from '../../../assets/img/user.jpg'

const Home = ({profile, userID}) => {
    return (
        <section>
            <div className={style.banner}></div>
            <div className={style.content}>
                <img
                    src={profile.photos.large || user}
                    alt=''/>
                <div className={style.name}>
                    {profile.fullName}
                </div>
                <div className={style.add}>
                    { userID === profile.userId
                        ? <div>edit</div>
                        : <div>
                            {/*{followed*/}
                            {/*    ? <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {*/}
                            {/*        props.unfollow(u.id)*/}
                            {/*    }}>Unfollow</button>*/}
                            {/*    : <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {*/}
                            {/*        props.follow(u.id)*/}
                            {/*    }}>Follow</button>}*/}
                            <div>message</div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default Home;