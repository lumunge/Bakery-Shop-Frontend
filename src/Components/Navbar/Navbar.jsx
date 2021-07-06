import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import {NavLinks} from './NavLinks';

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
                {NavLinks.map((link) => (
                    <Button className={classes.link} component={Link} to={link.to}>
                        {link.name}
                    </Button>
                ))}
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
