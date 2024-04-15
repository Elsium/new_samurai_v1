import React from 'react';
// import style from './Status.module.scss'

class Status extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode() {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false,
        })
    }
    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} value={this.props.status} type="text"/>
                    : <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>
                }
            </div>
        );
    }
}

export default Status;