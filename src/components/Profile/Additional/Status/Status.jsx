import React from 'react';
import style from './Status.module.scss'

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onUpdateStatus = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
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
                        <span onDoubleClick={this.activateEditMode} className={this.props.status ? "" : style.nostatus}>{this.props.status || "No have status yet."}</span>
                    </div>
                }
            </div>
        );
    }
}

export default Status;