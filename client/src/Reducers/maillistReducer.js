import { MAIL_LIST } from "../Constants/types";

const maillistReducer = (state = {}, action) => {
	switch (action.type) {
		case MAIL_LIST:
			return {
				mail: action.payload,
			};
		default:
			return state;
	}
};

export { maillistReducer };
