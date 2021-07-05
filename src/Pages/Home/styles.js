import { makeStyles } from "@material-ui/core/styles";
import back from "../../img/986763.jpg";
import aboutBack from "../../img/aboutBack.jpg";

export default makeStyles(() => ({
	hero: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "80vh",
		backgroundImage: `url(${back})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
	},
	heroText: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "4rem 10rem",
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		color: "#fff",
	},
	featured: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		padding: "4rem 0",
	},
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "72%",
	},
	media: {
		height: 200,
	},
	cakeContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	cakes: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		width: "100%",
	},
	icon: {
		fontSize: "3rem",
	},
	nextIconLeft: {
		padding: "0 6rem 0 4rem",
	},
	nextIconRight: {
		margin: "0 4rem 0 6rem",
	},
	footer: {
		display: "flex",
		justifyContent: "space-around",
		margin: "2rem 0",
		width: "30%",
		padding: "1rem 0",
	},
	// About Styling
	about: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "60vh",
		backgroundImage: `url(${aboutBack})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
	},
	aboutIntro: {
		textAlign: "center",
		padding: "2rem",
		backgroundColor: "rgba(211, 201, 181, 0.23)",
	},
	aboutIntroText: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	text1: {
		padding: "1rem 0",
		borderTop: "2px solid #fff",
		borderBottom: "2px solid #fff",
	},
}));
