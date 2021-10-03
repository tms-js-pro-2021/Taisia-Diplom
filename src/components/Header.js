import React, { useState } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../redux/actions/user.actions";
import store from "../redux/store";

function Header(props) {
  const [showSearch, setShowSearch]
  const showSearchField = () => {
    
  }
	const displayDesktop = () => {
		return (
			<Toolbar>
				Recommend.Me
				<Button color="inherit" onClick={() => console.log(1)}>
					Show recommendations
				</Button>
				<Button
					color="inherit"
					onClick={() => {
						props.registerUser(123);
						console.log(store.getState());
					}}
				>
					Sign Up
				</Button>
				<Button color="inherit" onClick={() => console.log(3)}>
					Sign In
				</Button>
			</Toolbar>
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
