import React from 'react';
import style from './ThirdFunction.module.scss'

const ThirdFunction = ({profile, userID}) => {
    return (
        <div className={style.add}>
            {userID === profile.userId
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
    );
}

export default ThirdFunction;