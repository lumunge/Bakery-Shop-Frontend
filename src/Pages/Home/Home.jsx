import {useState} from 'react';
import {
	Button,
	CardMedia,
	Card,
	Grid,
	Typography,
	CardContent,
	TextField,
	TextareaAutosize,
} from "@material-ui/core";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import featuredImg from "../../img/featured-removebg-preview.png";
import useStyles from "./styles";
import CardData from '../../Components/Slider/Data';

const Home = () => {
	const classes = useStyles();
	const [current, setCurrent] = useState(0);
	const [slider, setSlider] = useState([]);
	const cards = Object.keys(CardData).length;
	


	const nextSlide = () => {
		setCurrent(current === cards - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? cards - 1 : current - 1)
	}

	console.log(current);


	if(!Array.isArray(Object.keys(CardData)) || Object.keys(CardData).length <= 0){
		return null;
	}

	return (
		<div className={classes.main}>
			<div className={classes.hero}>
				<div className={classes.heroText}>
					<Typography variant="h4">
						Welcome to Buy Cakes Here
					</Typography>
					<Typography variant="h6">
						For Weddings, Valentines, Chirstmas, and Just for Fun{" "}
					</Typography>
					<Button variant="contained">Shop Now</Button>
				</div>
			</div>
			<div className={classes.featured}>
				<div>
					<img src={featuredImg} alt="featured" />
				</div>
				<div className={classes.cakeContainer}>
					<header className={classes.header}>
						<div className="">
							<Typography variant="caption">
								Small Caption Here
							</Typography>
							<Typography variant="h4">Best Sellers</Typography>
						</div>
						<div className="">
							<Button variant="contained">View More</Button>
						</div>
					</header>
					<main className={classes.cakes}>
						<div
							className={`${classes.icon} ${classes.nextIconLeft}`}
						>
							<ArrowBack className={classes.icon} onClick={prevSlide}  />
						</div>
						<Grid
							container
							spacing={3}
							className={classes.cakeItems}
						>
							{/* {cards.map((card, index) => (
								<div className={index === current ? 'slide active' : 'slide'} key={index}>
									{index === current && (
										<h1>{card.name}</h1>
									)}
								</div>
							))} */}
							{/* {cakes.map((cake) => (
								<Grid item xs={12} md={3}>
									<Card>
										<CardMedia
											className={classes.media}
											image={cake.image}
											title={cake.name}
										/>
										<CardContent>
											<Typography variant="body1">
												{cake.name}
											</Typography>
											<Typography
												variant="body2"
												color="textSecondary"
												component="p"
											>
												{cake.price}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							))} */}
						</Grid>
						<div
							className={`${classes.icon} ${classes.nextIconRight}`}
						>
							<ArrowForward className={classes.icon} onClick={nextSlide} />
						</div>
					</main>
					<footer className={classes.featuredFooter}>
						<Button variant="h6">Availability</Button>
						<Typography variant="h4">|</Typography>
						<Button variant="h6">Shipping</Button>
					</footer>
				</div>
			</div>

			<div id="about" className={classes.about}>
				<div className={classes.aboutIntro}>
					<div className={classes.aboutIntroText}>
						<Typography variant="h4" className={classes.text1}>
							About Bakery Owner
						</Typography>
					</div>
					<Typography variant="h6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsum unde velit deleniti dolore, debitis voluptatibus
						sapiente vel ipsa quis porro?
					</Typography>
				</div>
			</div>

			<div className={classes.aboutText}>
				<header className={classes.aboutTextHeader}>
					<Typography variant="h4">I Humbly Receive</Typography>
					<br />
					<Typography variant="caption">April 27 2021</Typography>
					<br />
					<Typography variant="h6">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Repudiandae dolorum hic ab! Expedita accusantium
						odit quis ut. Sint provident eveniet, laudantium, nisi
						culpa eum porro dolores quo aperiam odit consectetur.
					</Typography>
					<br />
					<Button variant="contained">Read More</Button>
				</header>
				<main>
					<Typography variant="h3">Lorem ipsum dolor sit.</Typography>
					<Typography variant="caption">April 27 2021</Typography>
					<div>
						<img
							src="https://images.unsplash.com/photo-1604551969716-5d6d8f77b241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwaW4lMjBiYWtlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
						<br />
						<br />
						<Typography variant="h6">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Delectus pariatur sit ipsum quas nihil?
							Dolorem voluptatum consectetur laudantium soluta
							libero necessitatibus beatae voluptatem debitis
							reiciendis, ducimus fugit, nam quasi repellendus.
						</Typography>
					</div>
				</main>
				<footer className={classes.AboutFooter}>
					<Button variant="contained">Read More</Button>
				</footer>
			</div>

			<div id="contact" className={classes.contactSection}>
				<div className={classes.form}>
					<Typography variant="h5">Reach Us Here</Typography>
					<form>
						<label htmlFor="">Your Name</label>
						<br />
						<TextField
							color="secondary"
							variant="standard"
							InputProps={{
								className: classes.input,
							}}
						/>
						<br />
						<br />
						<label htmlFor="">Email Address</label>
						<br />
						<TextField
							color="secondary"
							InputProps={{
								className: classes.input,
							}}
						/>
						<br />
						<br />
						<label htmlFor="">Special Requests</label>
						<br />
						<TextareaAutosize
							rowsMin={4}
							cols={45}
							InputProps={{
								className: classes.input,
							}}
						/>
						<br />
						<br />
						<Button variant="contained">Send</Button>
					</form>
				</div>

				<></>

				<footer className={classes.contactFooter}>
					created by <a href="https://github.com/lumunge" className={classes.footerLink}>lumunge</a>
				</footer>
			</div>
		</div>
	);
};

export default Home;
