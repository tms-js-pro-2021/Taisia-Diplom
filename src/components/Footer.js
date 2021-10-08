import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import {
	Link,
	BottomNavigation,
	BottomNavigationAction,
} from "@material-ui/core";

const Footer = () => {
	return (
		<BottomNavigation
			style={{
				borderTop: "1px solid #E7E7E7",
				textAlign: "center",
				padding: "20px",
				position: "fixed",
				left: "0",
				bottom: "0",
				height: "60px",
				width: "100%",
			}}
			showLabels
			value={123}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction label="Recents" />
			<BottomNavigationAction label="Favorites" />
			<BottomNavigationAction label="Nearby" />
		</BottomNavigation>
		// <footer>
		// 	<Box bgcolor="text.secondary" color="white">
		// 		<Container maxWidth="lg">
		// 			<Grid container spacing={5}>
		// 				<Grid item xs={12} sm={4}>
		// 					<Box borderBottom={1}>Help</Box>
		// 					<Box>
		// 						<Link href="/" color="inherit">
		// 							Contact
		// 						</Link>
		// 					</Box>
		// 					<Box>
		// 						<Link href="/" color="inherit">
		// 							Support
		// 						</Link>
		// 					</Box>
		// 					<Box>
		// 						<Link href="/" color="inherit">
		// 							Privacy
		// 						</Link>
		// 					</Box>
		// 				</Grid>
		// 				<Grid item xs={12} sm={4}>
		// 					<Box borderBottom={1}>Messages</Box>
		// 					<Box>
		// 						<Link href="/" color="inherit">
		// 							Backup
		// 						</Link>
		// 					</Box>
		// 					<Box>
		// 						<Link href="/" color="inherit">
		// 							History
		// 						</Link>
		// 					</Box>
		// 				</Grid>
		// 				<Grid item xs={12} sm={4}>
		// 					<Box borderBottom={1}>Account</Box>
		// 					<Box>
		// 						<Link href="/" color="inherit">
		// 							Login
		// 						</Link>
		// 					</Box>
		// 					<Box>
		// 						<Link href="/" color="inherit">
		// 							Register
		// 						</Link>
		// 					</Box>
		// 				</Grid>
		// 			</Grid>
		// 		</Container>
		// 	</Box>
		// </footer>
	);
};

export default Footer;
