import React from 'react';
import styles from './UserStatus.module.css';

class UserStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status

    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <div>
                {
                !this.state.editMode &&
                    <span className={styles._statusString} onDoubleClick={this.activateEditMode}>
                        {this.props.status || 'set status'}
                    </span>
                }
                {this.state.editMode &&
                    <div>
                    <input value={this.state.status} autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange}/>
                    </div>
                }

            </div>
        )
    }
}

export default UserStatus;