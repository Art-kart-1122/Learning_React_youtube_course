import React from "react";
import {connect} from "react-redux";
import {
    followActionCreater, getUsersThunkCreator,/* setCountOnPageItemsActionCreator, setCurrentPageActionCreator,
    setTotalCountItemsActionCreator,
    setUsersActionCreator,*/
    unfollowActionCreater
} from "../../redux/users-reducer";

import Users from "./Users";




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.countOnPageItems);
        /*this.props.setIsFetching(true);
        axios.get(`/api/users?page=${this.props.usersPage.currentPage}&size=${this.props.usersPage.countOnPageItems}`).then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalCountItems(response.data.totalCount);
            this.props.setIsFetching(false);
        })*/

    }

    onChangePage=(page) => {
        this.props.getUsers(page, this.props.usersPage.countOnPageItems);
        /*this.props.setIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`/api/users?page=${page}&size=${this.props.usersPage.countOnPageItems}`).then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalCountItems(response.data.totalCount);
            this.props.setIsFetching(false);
        })*/
    }

    render() {

        let countPage = Math.ceil(this.props.usersPage.totalCountItems / this.props.usersPage.countOnPageItems);
        let pages = [...Array(countPage).keys()].map(item => ++item);
        return (<Users isFetching={this.props.preloader.isFetching}
                       currentPage={this.props.usersPage.currentPage}
                       users={this.props.usersPage.users}
                       unfollow={this.props.unfollow} follow={this.props.follow}
                       pages={pages}
                       changePage={this.onChangePage}/>)
    }
}


const mapToStateProps = (state) => {
    return {
        usersPage: state.usersReducer,
        preloader: state.fetchingReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowActionCreater(userId));
        },
        /*setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setTotalCountItems: (totalCountItems) => {
            dispatch(setTotalCountItemsActionCreator(totalCountItems));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setCountOnPageItems: (countOnPageItems) => {
            dispatch(setCountOnPageItemsActionCreator(countOnPageItems));
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching))
        },*/
        getUsers: (currentPage, countOnPageItems) => {
            dispatch(getUsersThunkCreator(currentPage, countOnPageItems))
        }
    }
}



export default connect(mapToStateProps, /*{
    follow: followActionCreater,
    unfollow: unfollowActionCreater,
    setUsers: setUsersActionCreator,
    setTotalCountItems: setTotalCountItemsActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    setCountOnPageItems: setCountOnPageItemsActionCreator,
    setIsFetching: setIsFetchingActionCreator
}*/mapDispatchToProps)(UsersContainer);