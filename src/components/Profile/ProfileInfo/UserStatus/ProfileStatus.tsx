import React, {ChangeEvent} from 'react';
import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<PropsType, StateType> {

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
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:PropsType, prevState: StateType) {
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