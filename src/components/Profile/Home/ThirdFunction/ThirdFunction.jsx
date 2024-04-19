import React from 'react';
import style from './ThirdFunction.module.scss'

const ThirdFunction = ({profile, userID, toggleEditMode,editMode}) => {
    return (
        <div className={style.add}>
            {userID === profile.userId
                ? editMode
                    ? <button onClick={toggleEditMode}>Cancel</button>
                    : <button onClick={toggleEditMode}>Edit</button>
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
    );
}

export default ThirdFunction;