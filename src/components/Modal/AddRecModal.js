import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import * as appActions from "../../redux/actions/app.actions";
import * as userActions from "../../redux/actions/user.actions";
import { authService } from "../../utils/api";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const categories = {
	books: "Books",
	films: "Films",
	anime: "Anime",
	music: "Music",
	food: "Food",
};

function AddRecModal(props) {
	const [categoryName, setCategory] = React.useState("");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	const [addTitle, setAddTitle] = React.useState({
		categoryName: "",
		productName: "",
		productDescription: "",
	});
	const handleClose = () => props.setModalType(null);

	const inputHandler = (event) => {
		setAddTitle({
			...addTitle,
			[event.target.name]: event.target.value,
		});
	};

	const addRecommendationHandler = async () => {
		await authService.addRecommendation({
			...addTitle,
			categoryName,
			userId: props.userId,
		});

		const data = await authService.getRecommendation();

		props.addRecommendation(data);

		handleClose();
	};

	return (
		<div>
			<Modal
				open={props.modalType === "addRecommendation"}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Add your recommendation
					</Typography>
					<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Category</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={categoryName}
								label="Category Name"
								name="categoryName"
								onChange={handleChange}
							>
								<MenuItem value={categories.films}>Films</MenuItem>
								<MenuItem value={categories.anime}>Anime</MenuItem>
								<MenuItem value={categories.music}>Music</MenuItem>
								<MenuItem value={categories.books}>Books</MenuItem>
								<MenuItem value={categories.food}>Food</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<TextField
						id="outlined-basic"
						onChange={inputHandler}
						label="Recommendation Name"
						name="productName"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						onChange={inputHandler}
						label="Description"
						name="productDescription"
						variant="outlined"
					/>
					<Button variant="contained" onClick={addRecommendationHandler}>
						Confirm
					</Button>
				</Box>
			</Modal>
		</div>
	);
}

const mstp = (state) => ({
	modalType: state.appReducer.modalType,
	userId: state.userReducer.userId,
});

export default connect(mstp, { ...appActions, ...userActions })(AddRecModal);
