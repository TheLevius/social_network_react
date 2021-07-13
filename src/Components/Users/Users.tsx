import React, { FC } from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from '../../types/reduxTypes';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    followingInProgress: number[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div className="Users block">
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}
                                     key={u.id}
                />)
            }
        </div>
    </div>
}

export default Users;