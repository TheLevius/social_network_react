import React from 'react';
import styles from './Users.module.css';
import avatarPic from './../../../img/jpg/avatar.jpg';
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className="Users block">
        <div className={styles._pagePanel}>

            {pages.map( p => {
                return <span className={props.currentPage === p && styles._selectedPage} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} >
                <div className={styles._usersBox1}>
                    <NavLink to={'/profile/' + u.id}>
                        <div className={styles._imgBox}>
                            <img className={styles._img} alt="faceAvatar" src={u.photos.small !== null ? u.photos.small : avatarPic}/>
                        </div>
                    </NavLink>
                    <div className={styles._followBtnBox}>

                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={ () => {props.unfollow(u.id) }
                            }>FOLLOW</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={ () => {props.follow(u.id) }
                            }>UNFOLLOW</button>
                        }
                    </div>
                </div>
                <div className={styles._usersBox2}>
                    <div className={styles._personInfoBox1}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={styles._personInfoBox2}>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;