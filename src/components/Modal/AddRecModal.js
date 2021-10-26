import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/app.actions";
import { authService } from "../../utils/api";

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

function AddRecModal(props) {
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
		const addRec = await authService.addRecommendation({
			...addTitle,
			userId: props.userId,
		});

		console.log(addRec);

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
					<TextField
						id="outlined-basic"
						onChange={inputHandler}
						label="Category Name"
						name="categoryName"
						variant="outlined"
					/>
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

export default connect(mstp, { ...actions })(AddRecModal);
