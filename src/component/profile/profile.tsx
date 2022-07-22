import "./profile.css";
import { UserContextType } from "../../@type/user";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
	const { email } = useContext(UserContext) as UserContextType;
	const [imgUrl, setImgUrl] = useState("");
	const [token, setToken] = useState("");
	const navigate = useNavigate();

	axios
		.post(`${process.env.REACT_APP_API_URL}/auth/qrcode`, {
			email,
		})
		.then((response) => response.data)
		.then((data) => {
			setImgUrl(data);
		})
		.catch(function (error) {
			console.log(error);
			alert(error.response.data.message);
		});
	const handleSubmit = (event: any) => {
		event.preventDefault();
		axios
			.post(`${process.env.REACT_APP_API_URL}/auth/verifyQR`, {
				token,
			})
			.then((response) => response.data)
			.then((data) => {
				if (data) {
					alert("login success");
				} else {
					alert("Invalid OTP");
					navigate("/login");
				}
			})
			.catch(function (error) {
				console.log(error);
				alert(error.response.data.message);
			});
	};

	return (
		<div className="QRComponet">
			<form className="QRForm" onSubmit={handleSubmit}>
				<img src={imgUrl} alt="qrcode" />
				<input
					className="QRInput"
					type="text"
					name="token"
					id="token"
					onChange={(e) => setToken(e.target.value)}
				/>
				<button className="QRButton" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Profile;
