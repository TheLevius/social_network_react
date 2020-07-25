import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className="Users block">
        <div className={styles._pagePanel}>
            {pages.map( p => {
                return <span className={currentPage === p && styles._selectedPage} onClick={(e) => {onPageChanged(p)}}>{p}</span>
            })}
        </div>
    </div>
}

export default Paginator;