import React, {useState} from 'react';
import Home from './Home/Home';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoReduxForm from "./ProfileInfoForm/ProfileInfoForm";

const Profile = ({profile, userID, status, sendUpdateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    }

    return (
        <section>
            <Home toggleEditMode={() => {setEditMode(!editMode)}} editMode={editMode} profile={profile} userID={userID} isOwner={isOwner} savePhoto={savePhoto}
                  canStatusChange={userID === profile.userId} status={status} sendUpdateStatus={sendUpdateStatus}/>
            {
                editMode
                    ? <ProfileInfoReduxForm initialValues={profile} onSubmit={onSubmit} contacts={profile.contacts}/>
                    : <ProfileInfo profile={profile}/>
            }
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;