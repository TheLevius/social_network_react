import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import avatarPic from "../../../img/jpg/avatar.jpg";

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            })
        }
    };

    return <div className="Users block">
        <button onClick={getUsers}>Get Users</button>
                {
                    props.users.map(u => <div key={u.id} >
                        <div className={styles._usersBox1}>
                            <div className={styles._imgBox}>
                                <img className={styles._img} alt="faceAvatar" src={u.photos.small !== null ? u.photos.small: avatarPic}/>
                            </div>
                            <div className={styles._followBtnBox}>
                                {u.followed
                                    ? <button onClick={ () => props.unfollow(u.id) }>FOLLOW</button>
                                    : <button onClick={ () => props.follow(u.id) }>UNFOLLOW</button>
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