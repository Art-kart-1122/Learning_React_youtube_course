import React from "react";
import style from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {}

    activeEditMode = () => {
        this.setState({
            status: this.props.status,
            editMode: true
        })
    }

    deactivatedEditMode = () => {
        this.setState({
            status: this.props.status,
            editMode: false
        });

        this.props.updateStatus(this.props.id, this.state.status );
    }

    onChangeState = (newStatus) => {
        this.setState({
            status: newStatus.currentTarget.value
        })
    }



    render() {
        return <div>
            {!this.state.editMode &&
            <div className={style.show}>
                <span onDoubleClick={ this.activeEditMode }>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <div className={style.edit}>
                <input  onChange={this.onChangeState} autoFocus={true} onBlur={this.deactivatedEditMode} type="text" value={this.state.status}/>
            </div>
            }
        </div>
    }
}


export default ProfileStatus;