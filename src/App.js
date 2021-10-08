import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/Footer";
import MultiActionAreaCard from "./components/Cards";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Header />
				<Footer />
				<MultiActionAreaCard />
			</div>
		</Provider>
	);
}
export default App;
