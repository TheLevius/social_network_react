import React from 'react';
import {Link} from 'react-router-dom';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import Avatar from 'antd/lib/avatar';
import {UserOutlined} from '@ant-design/icons';
import {Layout} from 'antd';
import {logout} from '../../redux/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import Menu from 'antd/lib/menu';
import Button from 'antd/lib/button';
import {selectCurrentUserLogin, selectIsAuth} from '../../redux/authSelectors';

type PropsType = {}

export const Header: React.FC<PropsType> = props => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    const {Header} = Layout

    return (
        <Header >
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/developers">Developers</Link></Menu.Item>
                    </Menu>
                </Col>
                {isAuth
                    ? <>
                        <Col span={2}>
                            <Avatar alt={login || ''} icon={<UserOutlined/>}/>
                        </Col>
                        <Col span={4}>
                            <Button onClick={logoutCallback}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={6}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Col>}

            </Row>

        </Header>
    );
}