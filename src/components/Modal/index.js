import * as React from "react";
import { connect } from "react-redux";

import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import AddRecModal from "./AddRecModal";

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

const modalTypes = {
	signUp: () => <SignUpModal />,
	signIn: () => <SignInModal />,
	addRecommendation: () => <AddRecModal />,
};

function ModalComponent(props) {
	console.log(props.modalType);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>{modalTypes[props.modalType] && modalTypes[props.modalType]()}</div>
	);
}

const mstp = (state) => ({ modalType: state.appReducer.modalType });

export default connect(mstp)(ModalComponent);
