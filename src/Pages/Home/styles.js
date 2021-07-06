import { makeStyles } from "@material-ui/core/styles";
import back from "../../img/986763.jpg";
import aboutBack from "../../img/aboutBack.jpg";

export default makeStyles(() => ({
	main: {
		position: "relative",
		left: 0,
		right: 0,
	},
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
		margin: "0 328px",
	},
	featured: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		// padding: "4rem 0",
		margin: "0 328px",
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
		position: "absolute",
		fontSize: "3rem",
	},
	nextIconLeft: {
		left: 0,
		paddingLeft: "4rem",
		// padding: "0 6rem 0 4rem",
	},
	nextIconRight: {
		right: 0,
		paddingRight: "4rem",
		// margin: "0 4rem 0 6rem",
	},
	featuredFooter: {
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
		margin: "0 328px",
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
	aboutText: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "left",
		margin: "0 328px",
		padding: "180px 215px",
	},
	aboutTextHeader: {
		padding: "2rem 0",
	},
	AboutFooter: {
		padding: "2rem 0",
	},
	contactSection: {
		height: "100vh",
		backgroundImage:
			"url('https://images.unsplash.com/photo-1511018556340-d16986a1c194?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGJha2VyeSUyMGNvdW50ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));
