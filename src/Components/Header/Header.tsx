import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Logo from "./Logo/Logo";
import styles from './Header.module.css';

export type MapPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}
export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = props => {
    return (
        <header className={'Header block'}>
            <div className={styles._wrapper}>
                <div className={styles._container}>
                    <Logo/>

                    <div className={styles._loginBox}>
                        {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div> : <NavLink to={'/login'}>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;