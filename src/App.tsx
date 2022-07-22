import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import SignupPage from "./page/SignupPage";
import Profile from "./page/ProfilePage";
import LoginPage from "./page/LoginPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/signup" element={<SignupPage />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
