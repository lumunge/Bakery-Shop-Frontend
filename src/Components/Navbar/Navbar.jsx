import {AppBar, Toolbar, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
    
    const classes = useStyles();

    return(
        <AppBar className={classes.navbar}>
        <Toolbar className={classes.links}>
            <div>
                <Button component={Link} to="/">Logo</Button>
            </div>
                <div>
                <Button component={Link} to="/shop">Shop</Button>
                <Button component={Link} to="/about">About</Button>
                <Button component={Link} to="/contact">Contact</Button>
                <Button component={Link} to="/login">Login</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;