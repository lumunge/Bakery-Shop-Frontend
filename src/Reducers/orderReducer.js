const { act } = require('react-dom/test-utils');
const { CREATE_ORDER } = require('../types');

const orderReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_ORDER:
            return{
                order: action.payload
            };
        default:
            return state;
    }
}

export { orderReducer }