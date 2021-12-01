import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/user.actions";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { authService } from "../../utils/api";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const ResponsiveGrid = (props) => {
	React.useEffect(async () => {
		const data = await authService.getRecommendation();

		props.addRecommendation(data);
	}, [authService.getRecommendation]);

	React.useEffect(async () => {
		const user = await authService.checkAuth();

		if (user) {
			props.authUser(user[0].id);
		}
	});

	return (
		<Box
			sx={{ flexGrow: 1 }}
			style={{ margin: "auto", marginTop: 30, width: "80%" }}
		>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{props.recommendations.map((item, index) => (
					<Grid item xs={4} sm={1} md={2} key={index}>
						<Item>{item.categoryName}</Item>
						<Item>{item.productName}</Item>
						<Item>{item.productDescription}</Item>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

const mstp = (state) => ({
	recommendations: state.recReducer.recommendations,
});

export default connect(mstp, { ...actions })(ResponsiveGrid);
