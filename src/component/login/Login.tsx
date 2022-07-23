import "../signup/signup.css";
import Input from "../signup/input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useState } from "react";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import { UserContextType } from "../../@type/user";

function Login() {
	const { saveEmail } = useContext(UserContext) as UserContextType;
	const [token, setToken] = useState("");
	const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			role: "",
			username: "",
			password: "",
		},
		validationSchema: Yup.object().shape({
			role: Yup.string().required("Please choose role"),
			username: Yup.string().required("Please enter your username"),
			password: Yup.string().required("Please enter your password"),
		}),
		onSubmit: async (values) => {
			console.log(process.env);
			axios
				.post(`${process.env.REACT_APP_API_URL_SIGNIN}`, {
					username: values.username,
					password: values.password,
					tokenCaptcha: token,
				})
				.then((response) => response.data)
				.then((user) => {
					saveEmail(user.email);
					navigate(`/profile`);
				})
				.catch(function (error) {
					console.log(error);
					alert(error.response.data.message);
				});
			setRefreshReCaptcha((r) => !r);
		},
	});

	const onVerify = useCallback((token: string) => {
		setToken(token);
	}, []);

	return (
		<GoogleReCaptchaProvider reCaptchaKey={`${process.env.REACT_APP_PUBLIC_CAPTCHA_KEY}`}>
			<form onSubmit={formik.handleSubmit}>
				<div className="signup">
					<div className="signupContent">
						<div className="title">
							<span>Log</span>
							<span className="impressTextBlue">In</span>
						</div>
						<div className="role">
							<p>Choose your role</p>
							<div className="roleChoose">
								<div className="roleItem">
									<input
										type="radio"
										name="role"
										onChange={formik.handleChange}
										value="Candidate"
									/>
									<label htmlFor="role">Candidate</label>
								</div>
								<div className="roleItem">
									<input
										type="radio"
										name="role"
										onChange={formik.handleChange}
										value="Employer"
									/>
									<label htmlFor="role">Employer</label>
								</div>
							</div>
							{formik.touched.role && formik.errors.role ? (
								<div className="warningText">{formik.errors.role}</div>
							) : null}
						</div>
						<div className="inputField">
							<Input
								type="text"
								name="username"
								label="Username"
								placeholder="Type your username here"
								onChange={formik.handleChange}
								value={formik.values.username}
								errorMessage={formik.errors.username}
								touched={formik.touched.username}
							/>
							<Input
								type="password"
								name="password"
								label="Password"
								placeholder="Create password"
								onChange={formik.handleChange}
								value={formik.values.password}
								errorMessage={formik.errors.password}
								touched={formik.touched.password}
							/>
						</div>
						<button type="submit" className="primayBtn signupBtn">
							LOG IN
						</button>
						<div className="note">
							<span>Don't have an account?</span>
							<span className="impressTextBlue">Signup</span>
						</div>
					</div>
				</div>
				<GoogleReCaptcha onVerify={onVerify} refreshReCaptcha={refreshReCaptcha} />
			</form>
		</GoogleReCaptchaProvider>
	);
}

export default Login;
