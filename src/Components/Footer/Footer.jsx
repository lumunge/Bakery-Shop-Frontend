import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from './styles';

const Footer = () => {
	const classes = useStyles();
	return (
		<Container className={classes.footer}>
			<Grid container>
				<Grid item xs={12} sm={4} className={classes.item}>
					<h2>Explore</h2>
					<Link to="/">Home</Link>
					<Link to="/cakes-&-confectionaries">Cakes</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/about">About</Link>
				</Grid>
				<Grid item xs={12} sm={4}  className={classes.item}>
					<h2>Socials</h2>
					<a href="#!">Instagram</a>
					<a href="#!">Facebook</a>
				</Grid>
				<Grid item xs={12} sm={4}  className={classes.item}>
					<h2>Legal</h2>
					<a href="#!">Privacy Policy</a>
					<a href="#!">Terms Of Use</a>
				</Grid>
			</Grid>
			<div className="copy">
				<Typography variant="body1">
					Made by <a href="https://github.com/lumunge">lumunge</a>
				</Typography>
			</div>
		</Container>
	);
};

export default Footer;
