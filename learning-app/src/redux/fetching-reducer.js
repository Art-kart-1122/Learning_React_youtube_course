const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
    isFetching: false
}


const fetchingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: {
            return state;
        }

    }
}


export const setIsFetchingActionCreator = (isFetching) => ({type: SET_IS_FETCHING, isFetching: isFetching})


export default fetchingReducer;