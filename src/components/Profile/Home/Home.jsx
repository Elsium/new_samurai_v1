import React from 'react';
import style from './Home.module.scss'
import StatusHooks from "./Status/StatusHooks";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ThirdFunction from "./ThirdFunction/ThirdFunction";

const Home = ({profile, userID, isOwner, savePhoto, canStatusChange, status, sendUpdateStatus}) => {
    return (
        <section>
            <div className={style.banner}></div>
            <div className={style.content}>
                <ProfilePhoto profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
                <div className={style.name}>
                    <p>{profile.fullName}</p>
                    <StatusHooks canStatusChange={canStatusChange} status={status} sendUpdateStatus={sendUpdateStatus}/>
                </div>
                <ThirdFunction profile={profile} userID={userID}/>
            </div>
        </section>
    );
}

export default Home;