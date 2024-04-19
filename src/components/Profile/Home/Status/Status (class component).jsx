import React from 'react';
import style from './Status.module.scss'

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        if (this.props.canStatusChange) {
            this.setState({
                editMode: true,
            });
        }
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.sendUpdateStatus(this.state.status);
    }

    onUpdateStatus = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div className={style.wrapper}>
                {this.state.editMode
                    ? <div className={style.changed}>
                        <div>Status:</div>
                        <input onChange={this.onUpdateStatus} onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status} type="text"/>
                    </div>
                    : <div className={style.noChanged}>
                        <div>Status:</div>
                        <span onDoubleClick={this.activateEditMode} className={this.props.status ? "" : style.nostatus}>{this.props.status || "No status yet."}</span>
                    </div>
                }
            </div>
        );
    }
}

export default Status;