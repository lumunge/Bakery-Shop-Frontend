import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	mainContainer: {
		paddingTop: "4rem",
	},
	adGrid: {
		display: "flex",
		justifyContent: "center",
	},
	ad: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "2rem",
	},
	headerImg: {
		width: 400,
		height: 300,
		paddingBottom: "2rem",
	},
	divider: {
		width: "50%",
	},
	shopContainer: {
		padding: "4rem 0",
		textAlign: "center",
	},
	cakeImg: {
		width: 300,
		height: 250,
	},
}));
