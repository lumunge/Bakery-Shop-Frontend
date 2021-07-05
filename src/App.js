import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Shop from "./Pages/Shop/Shop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/shop" component={Shop} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/login" component={Login} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
