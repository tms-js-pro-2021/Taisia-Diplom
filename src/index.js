import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
// import store from "./store";
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById("root"),
// );
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root"),
);
reportWebVitals();
