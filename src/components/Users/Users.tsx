import React, {FC, useEffect} from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {UsersSearchForm} from './UsersSearchForm';
import {FilterType, requestUsers} from '../../redux/usersReducer';
import {useDispatch, useSelector} from 'react-redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from '../../redux/usersSelectors';
import { useHistory } from 'react-router-dom';
import * as queryString from 'querystring';

type PropsType = {}

type QueryParamsType = {
    term?: string
    friend?: string
    page?: string
};
export const Users: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const followingInProgress = useSelector(getFollowingInProgress)

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType
        let actualPage = currentPage;
        let actualFilter = filter;
        if (!!parsed.page) actualPage = +(parsed.page)

        if (!!parsed.page) actualFilter = {...actualFilter, term: parsed.term as string}

        if (!!parsed.friend) {
            actualFilter = {
                ...actualFilter,
                friend: parsed.friend === 'null'
                    ? null
                    : parsed.friend === 'true'
            }
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter))

    }, []);
    useEffect(() => {

        const query: QueryParamsType = {}
        if(!!filter.term) {query.term = filter.term}
        if(filter.friend !== null) {query.friend = String(filter.friend)}
        if(currentPage !== 1) {query.page = String(currentPage)}

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage]);

    return <div className="Users block">
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        <UsersSearchForm
            onFilterChanged={onFilterChanged}
        />
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={followingInProgress}
                                     follow={follow}
                                     unfollow={unfollow}
                                     key={u.id}
                />)
            }
        </div>
    </div>
}