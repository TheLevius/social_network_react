import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, followed: false, firstName: 'Nikita', status: 'I\'m student', location: {city: 'Minsk', country: 'Belarus'}, avatarUrl: 'https://www.meme-arsenal.com/memes/2c00b6b4ad3a5ca5d416bde4981a2b09.jpg'},
            {id: 2, followed: true, firstName: 'Petro', status: 'I\'m officer', location: {city: 'Kiev', country: 'Ukraine'}, avatarUrl: 'https://www.meme-arsenal.com/memes/2c00b6b4ad3a5ca5d416bde4981a2b09.jpg'},
            {id: 3, followed: false, firstName: 'Andrei', status: 'I\'m worker', location: {city: 'Moscow', country: 'Russia'}, avatarUrl: 'https://www.meme-arsenal.com/memes/2c00b6b4ad3a5ca5d416bde4981a2b09.jpg'}
        ]);
    }

    return <div className="Users block">
                {
                    props.users.map(u => <div key={u.id} >
                        <div className={styles._usersBox1}>
                            <div className={styles._imgBox}>
                                <img className={styles._img} alt="faceAvatar" src={u.avatarUrl}/>
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
                                <div>{u.firstName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={styles._personInfoBox2}>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    </div>)
                }
           </div>

}

export default Users;