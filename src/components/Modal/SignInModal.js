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

function SignUpModal(props) {
	const handleClose = () => props.setModalType(null);

	const [loginData, setLoginData] = React.useState({
		email: "",
		password: "",
	});

	const loginHandler = async () => {
		const login = await authService.login(loginData);

		console.log(login);
	};

	const inputHandler = (event) => {
		setLoginData({
			...loginData,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div>
			<Modal
				open={props.modalType === "signIn" && true}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Login
					</Typography>
					<TextField
						id="outlined-basic"
						name="email"
						onChange={inputHandler}
						label="Email"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						name="password"
						onChange={inputHandler}
						label="Password"
						variant="outlined"
					/>
					<Button variant="contained" onClick={loginHandler}>
						Login
					</Button>
				</Box>
			</Modal>
		</div>
	);
}

const mstp = (state) => ({ modalType: state.appReducer.modalType });

export default connect(mstp, { ...actions })(SignUpModal);
