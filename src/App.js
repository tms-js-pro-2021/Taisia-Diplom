import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Footer from './components/Footer'
import Modal from './components/Modal'
import ItemsList from "./components/ItemsList";

function App() {
	return (
		<Provider store={store}>
			<Modal />
			<Header></Header>
			<SideMenu></SideMenu>
			<ItemsList />
			<Footer></Footer>
		</Provider>
	);
}
export default App;
