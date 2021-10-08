import React from "react";
import {
	Button,
	CardActionArea,
	CardActions,
	Typography,
	CardMedia,
	CardContent,
	Card,
} from "@material-ui/core";

export default function MultiActionAreaCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image="/static/images/cards/contemplative-reptile.jpg"
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Films
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
			</CardActions>
		</Card>
	);
}
