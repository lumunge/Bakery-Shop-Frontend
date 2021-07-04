import { FETCH_PRODUCTS } from "../Constants/types";

export const productReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return { items: action.payload, filteredItems: action.payload };
		default:
			return state;
	}
};
