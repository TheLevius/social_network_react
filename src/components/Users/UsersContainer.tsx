import React from 'react';
import {useSelector} from 'react-redux';
import {Users} from './Users';
import Preloader from "../common/Preloader/Preloader";
import {getIsFetching,
} from '../../redux/usersSelectors';
import styles from './Users.module.css';

type UserPagePropsType = {
    pageTitle: string
}

export const UsersPage: React.FC<UserPagePropsType> = (props) => {

    const isFetching = useSelector(getIsFetching)

    return (<div className={styles._ProfileColumn}>
        <h2 style={{
            fontSize: '3.2rem',
            lineHeight: '2',
            color: '#1a8ccb'
        }}>{props.pageTitle}</h2>
        { isFetching ? <Preloader /> : null }
        <Users />
    </div>)
}