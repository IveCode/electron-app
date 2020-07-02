const messageReducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case 'MESSAGE_RECIVER':
            return {
                ...state, list: action.payload
            };
        case 'MESSAGE_SENDER':
            return {

            };
        default:
            return state;
    }
};

export default messageReducer;