import { FETCH_PRODUCTS } from "../Constants/types";

export const fetchProducts = () => async (dispatch) => {
	const res = await fetch("http://locathost:5000/api/products");
	const data = await res.json();
	console.log(data);
	dispatch({
		type: FETCH_PRODUCTS,
		payload: data,
	});
};
