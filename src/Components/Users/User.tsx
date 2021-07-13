import React from 'react';
import styles from './Users.module.css';
import avatarPic from '../../img/jpg/avatar.jpg';
import {NavLink} from "react-router-dom";
import {UserType} from '../../types/reduxTypes';

type PropsType = {
    user: UserType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {

    return (<div className="Users block">
            <div>
                <div className={styles._usersBox1}>
                    <NavLink to={'/profile/' + user.id}>
                        <div className={styles._imgBox}>
                            <img className={styles._img} alt="faceAvatar"
                                 src={user.photos.small !== null ? user.photos.small : avatarPic}/>
                        </div>
                    </NavLink>
                    <div className={styles._followBtnBox}>

                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }
                                      }>FOLLOW</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }
                                      }>UNFOLLOW</button>
                        }
                    </div>
                </div>
                <div className={styles._usersBox2}>
                    <div className={styles._personInfoBox1}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={styles._personInfoBox2}>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;