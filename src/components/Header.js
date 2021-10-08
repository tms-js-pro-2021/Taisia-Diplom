import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	TextField,
	Modal,
	Box,
} from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../redux/actions/user.actions";
import store from "../redux/store";
import SignUpModal from "./SignUpModal";
import api from "../utils/api";

function Header(props) {
	const [showSearch, setShowSearch] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);
	const showSearchField = () => {
		setShowSearch(true);
	};
	const submitSignUp = async () => {
		setShowSignUp(false);
		await api.post("/sign-up", props.signUpData);
	};
	const displayDesktop = () => {
		return (
			<>
				<SignUpModal open={showSignUp} handler={submitSignUp}></SignUpModal>
				<Toolbar
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-evenly",
					}}
				>
					Recommend.Me
					{showSearch ? (
						<TextField
							id="standard-basic"
							label="Standard"
							variant="standard"
						/>
					) : (
						<Button color="inherit" onClick={setShowSearch}>
							Select recommendations
						</Button>
					)}
					<Button
						color="inherit"
						onClick={() => {
							setShowSignUp(true);
						}}
					>
						Sign Up
					</Button>
					<Button color="inherit" onClick={() => console.log(3)}>
						Sign In
					</Button>
				</Toolbar>
			</>
		);
	};
	return (
		<div className="header">
			<AppBar>{displayDesktop()}</AppBar>
		</div>
	);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { ...actions })(Header);
