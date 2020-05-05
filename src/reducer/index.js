const postReducer = (state = [], action) => {

    switch (action.type) {
        case 'POST_REGISTER':
            return state.concat([action.data]);
        default:
            return state;
    }
}

export default postReducer;