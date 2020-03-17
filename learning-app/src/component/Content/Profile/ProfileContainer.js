import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";

import fullProfileReducer, {
    getFullProfileThunkCreator,
    setProfileActionCreator, updateProfileStatusThunkCreator
} from "../../../redux/fullProfile-reducer";

import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getFullProfile(this.props.match.params.userId);
        /*this.props.setIsFetching(true);
        axios.get(`/profile/fullProfile?id=${this.props.match.params.userId}`).then(response => {
            this.props.setProfile(response.data.profile);
            this.props.setIsFetching(false);
        })*/
    }

    render() {
        console.log(this.props)
        return (<Profile {...this.props}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        preloader: state.fetchingReducer,
        profile: state.fullProfileReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       /* setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching));
        },
        setProfile: (profile) => {
            dispatch(setProfileActionCreator(profile))
        },*/
        getFullProfile: (userId) => {
            dispatch(getFullProfileThunkCreator(userId));
        },
        updateProfileStatus: (userId, newStatus) => {
            dispatch(updateProfileStatusThunkCreator(userId, newStatus))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)(ProfileContainer)