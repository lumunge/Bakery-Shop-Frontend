import { Paper, Grid, Typography } from "@material-ui/core";
import conf1 from "../../img/conf1.webp";
import conf2 from "../../img/conf2.webp";
import conf3 from "../../img/conf3.webp";
import useStyles from "./styles";

const Shop = () => {
	const classes = useStyles();

	return (
		<div className={classes.mainContainer}>
			<div>
				<h1>Slider Here</h1>
			</div>
			<Grid container spacing={2} className={classes.adGrid}>
				<Grid item xs={4}>
					<div className={classes.ad}>
						<div>
							<img
								className={classes.headerImg}
								src={conf1}
								alt="cake"
							/>
						</div>
						<Typography variant="h5">Confectionaries</Typography>
						<Typography variant="p">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, fugiat.
						</Typography>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div className={classes.ad}>
						<div>
							<img
								className={classes.headerImg}
								src={conf2}
								alt="cake"
							/>
						</div>
						<Typography variant="h5">Celebrations</Typography>
						<Typography variant="p">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, numquam.
						</Typography>
					</div>
				</Grid>
				<Grid item xs={4} className={classes.ad}>
					<div className={classes.ad}>
						<div>
							<img
								className={classes.headerImg}
								src={conf3}
								alt="cake"
							/>
						</div>
						<Typography variant="h5">100% Chocolate</Typography>
						<Typography variant="p">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellendus.
						</Typography>
					</div>
				</Grid>
                <hr className={classes.divider} />
			</Grid>
			
			<div>
				<h1>Cake Shop products</h1>
			</div>
			<div>
				<h1>advert</h1>
				<div>
					<h1>Dotted slider</h1>
				</div>
			</div>
			<div>
				<h1>Footer Here</h1>
			</div>
		</div>
	);
};

export default Shop;
