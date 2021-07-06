import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Navbar = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.navbar}>
			<Toolbar className={classes.links}>
				<div>
					<Button className={classes.link} component={Link} to="/">
						Logo
					</Button>
				</div>
				<div>
				<Button className={classes.link} component={Link} to="/shop">
						Shop
					</Button>
					<Button href="#about" className={classes.link} >
						About
					</Button>
					<Button href="#contact" className={classes.link}>
						Contact
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
