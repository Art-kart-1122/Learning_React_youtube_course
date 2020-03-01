const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

const initalState ={
    posts: [
        {info: "the 1 post"},
        {info: "the 2 post"}
    ],
    newPost: "Arturka React"
}

//sequence parameters (state, action )
const profileReducer = (state = initalState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const post = {
                info: state.newPost
            }
            state.posts.push(post);
            state.newPost = "Arturka React";
            return state;
        }
        case UPDATE_POST: {
            state.newPost = action.info;
            return state
        }
        default: return state;
    }
}

export  default profileReducer;