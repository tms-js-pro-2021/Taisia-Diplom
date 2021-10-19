import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/app.actions";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CreateIcon from "@mui/icons-material/Create";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AddIcon from "@mui/icons-material/Add";

const bottomMenuItems = [
	{
		text: "Sign Up",
		handler: () => console.log("Sign Up"),
		icon: () => <CreateIcon />,
	},
	{
		text: "Sign In",
		handler: () => console.log("Sign In"),
		icon: () => <AssignmentIndIcon />,
	},
	{
		text: "Add Recommendation",
		handler: () => console.log("Add Recommendation"),
		icon: () => <AddIcon />,
	},
];

function SideMenu(props) {
	const bottomMenuItems = [
		{
			text: "Sign Up",
			handler: () => props.setModalType("signUp"),
			icon: () => <CreateIcon />,
		},
		{
			text: "Sign In",
			handler: () => props.setModalType("signIn"),
			icon: () => <AssignmentIndIcon />,
		},
		{
			text: "Add Recommendation",
			handler: () => props.setModalType("addRecommendation"),
			icon: () => <AddIcon />,
		},
	];

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={props.toggleMenu}
			onKeyDown={props.toggleMenu}
		>
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{bottomMenuItems.map((item, index) => (
					<ListItem button key={item.text} onClick={item.handler}>
						<ListItemIcon>{item.icon()}</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<Drawer anchor={"left"} open={props.sideMenu} onClose={props.toggleMenu}>
				{list("left")}
			</Drawer>
		</div>
	);
}

const mstp = (state) => ({ sideMenu: state.appReducer.sideMenu });

export default connect(mstp, { ...actions })(SideMenu);
