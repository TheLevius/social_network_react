import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize= 80, currentPage = 1, onPageChanged = x => x, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.paginator}>


        <div className={styles._pagePanel}>
            {portionNumber > 1 &&
            <button onClick={ () => { setPortionNumber(portionNumber - 1) } }
            >Previus
            </button>}

            {pages
                .filter(el => (el >= leftPortionPageNumber && el <= rightPortionPageNumber))
                .map(p => {
                    return <span className={ cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber) }
                                 onClick={(e) => {onPageChanged(p)}}
                                 key={p}
                    >
                        {p}
                    </span>
                })
            }
            {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
            }
        </div>

    </div>
}

export default Paginator;