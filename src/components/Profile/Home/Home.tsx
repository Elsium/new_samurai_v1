import React from 'react';
import style from './Home.module.scss'
import StatusHooks from "./Status/StatusHooks";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ThirdFunction from "./ThirdFunction/ThirdFunction";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType,
    userID: number,
    isOwner: boolean,
    savePhoto: (file: any) => void,
    canStatusChange: boolean,
    status: string,
    sendUpdateStatus: (status: string) => void,
    toggleEditMode: () => void,
    editMode: boolean
}

const Home = ({profile, userID, isOwner, savePhoto, canStatusChange, status, sendUpdateStatus, toggleEditMode, editMode}: PropsType) => {
    return (
        <section>
            <div className={style.banner}></div>
            <div className={style.content}>
                <ProfilePhoto profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
                <div className={style.name}>
                    <p>{profile.fullName}</p>
                    <StatusHooks canStatusChange={canStatusChange} status={status} sendUpdateStatus={sendUpdateStatus}/>
                </div>
                <ThirdFunction editMode={editMode} toggleEditMode={toggleEditMode} profile={profile} userID={userID}/>
            </div>
        </section>
    );
}

export default Home;