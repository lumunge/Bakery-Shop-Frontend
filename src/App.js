import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import CakesAndConfectionaries from "./Pages/CakesAndConfectionaries";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";
import Login from "./Admin/Login";
import Signup from "./User/Signup";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route
					path="/cakes-&-confectionaries"
					component={CakesAndConfectionaries}
				/>
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/login-and-sign-up" component={Login} />
				<Route path="/sign-up" component={Signup} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
