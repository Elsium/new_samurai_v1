import React from 'react';
import style from './Home.module.scss'
import user from '../../../assets/img/user.jpg'
import edit from '../../../assets/img/edit.png'

const Home = ({profile, userID, isOwner, savePhoto}) => {
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) savePhoto(e.target.files[0])
    }

    return (
        <section>
            <div className={style.banner}></div>
            <div className={style.content}>
                <div className={style.photo}>
                    <img
                        src={profile.photos.large || user}
                        alt=''/>
                    {isOwner && <label>
                        <input type={'file'} accept="image/png, image/jpeg" className={style.input} onChange={onMainPhotoSelected}/>
                        <img src={edit} alt="Edit" className={style.edit}/>
                    </label>}
                </div>
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