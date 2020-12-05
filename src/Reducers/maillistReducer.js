const { MAIL_LIST } = require('../types');

const maillistReducer = (state ={}, action) => {
    switch(action.type){
        case MAIL_LIST:
            return{
                mail: action.payload
            };
        default:
            return state;
    }
}

export { maillistReducer }