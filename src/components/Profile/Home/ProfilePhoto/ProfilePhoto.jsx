import React from 'react';
import style from './ProfilePhoto.module.scss'
import user from '../../../../assets/img/user.jpg'
import edit from '../../../../assets/img/edit.png'

const ProfilePhoto = ({profile, isOwner, savePhoto}) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) savePhoto(e.target.files[0])
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