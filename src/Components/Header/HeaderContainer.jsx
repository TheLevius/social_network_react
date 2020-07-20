import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

const MapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,


});

export default connect(MapStateToProps, {getAuthUserData, logout})(HeaderContainer);