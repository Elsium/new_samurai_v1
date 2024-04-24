import React from 'react';
import style from './ProfilePhoto.module.scss'
import user from '../../../../assets/img/user.jpg'
import edit from '../../../../assets/img/edit.png'
import {ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType,
    isOwner: boolean,
    savePhoto: (file: any) => void
}

const ProfilePhoto = ({profile, isOwner, savePhoto}: PropsType) => {
    const onMainPhotoSelected = (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        if (input.files && input.files.length) savePhoto(input.files[0])
    }

    return (
        <div className={style.photo}>
            <img
                src={profile.photos.large || user}
                alt=''/>
            {isOwner && <label>
                <input type={'file'} accept="image/png, image/jpeg" className={style.input}
                       onChange={onMainPhotoSelected}/>
                <img src={edit} alt="Edit" className={style.edit}/>
            </label>}
        </div>
    );
}

export default ProfilePhoto;