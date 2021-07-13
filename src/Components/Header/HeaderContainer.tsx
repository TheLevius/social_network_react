import React, {Props} from 'react';
import Header, {DispatchPropsType, MapPropsType} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from '../../redux/reduxStore';

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {

    render() {
        return <Header {...this.props} />
    }
}

const MapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,


} as MapPropsType);

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
    MapStateToProps,
    {logout})(HeaderContainer);