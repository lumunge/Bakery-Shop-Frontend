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

const Home = () => {
	const classes = useStyles();

	const cakes = [
		{
			image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			name: "Choloclate Cake",
			price: "$7878",
		},
		{
			image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			name: "Choloclate Cake",
			price: "$7878",
		},
		{
			image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			name: "Choloclate Cake",
			price: "$7878",
		},
		{
			image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			name: "Choloclate Cake",
			price: "$7878",
		},
		{
			image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			name: "Choloclate Cake",
			price: "$7878",
		},
		{
			image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			name: "Choloclate Cake",
			price: "$7878",
		},
		{
			image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			name: "Choloclate Cake",
			price: "$7878",
		},
		{
			image: "https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			name: "Choloclate Cake",
			price: "$7878",
		},
	];

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
							<ArrowBack className={classes.icon} />
						</div>
						<Grid
							container
							spacing={3}
							className={classes.cakeItems}
						>
							{cakes.map((cake) => (
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
							))}
						</Grid>
						<div
							className={`${classes.icon} ${classes.nextIconRight}`}
						>
							<ArrowForward className={classes.icon} />
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
