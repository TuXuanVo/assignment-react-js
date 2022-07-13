import "./signup.css";
import Input from "./input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserContextType } from "../../@type/user";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Signup() {
	const { saveUser } = useContext(UserContext) as UserContextType;
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			role: "",
			name: "",
			email: "",
			password: "",
			rePassword: "",
			subcribe: false,
			acceptTerm: false,
		},
		validationSchema: Yup.object().shape({
			role: Yup.string().required("Please choose role"),
			name: Yup.string()
				.required("Please enter the required field")
				.matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
			email: Yup.string().email("Invalid email address").required("Please enter your email"),
			password: Yup.string()
				.required("Please enter your password")
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
					"Password must has at least one upper case, one lower case, one number one special" +
						"charactor and the length greater than 8"
				),
			rePassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
			acceptTerm: Yup.bool().isTrue("You must accept term of Use"),
		}),
		onSubmit: (values) => {
			// alert(JSON.stringify(values, null, 2));
			console.log(values);
			saveUser(values);
			navigate(`/profile`);
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="signup">
				<div className="signupContent">
					<div className="title">
						<span>SIGN</span>
						<span className="impressTextOrange">UP</span>
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
							name="name"
							label="Name"
							placeholder="Type your name here"
							onChange={formik.handleChange}
							value={formik.values.name}
							errorMessage={formik.errors.name}
							touched={formik.touched.name}
						/>
						<Input
							type="text"
							name="email"
							label="Email"
							placeholder="Type your email here"
							onChange={formik.handleChange}
							value={formik.values.email}
							errorMessage={formik.errors.email}
							touched={formik.touched.email}
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
						<Input
							type="password"
							name="rePassword"
							label="Re-enter Password"
							placeholder="Re-type password"
							onChange={formik.handleChange}
							value={formik.values.rePassword}
							errorMessage={formik.errors.rePassword}
							touched={formik.touched.rePassword}
						/>
					</div>
					<div className="policy">
						<div className="checkboxItem">
							<input
								type="checkbox"
								name="subcribe"
								id="subcribe"
								onChange={formik.handleChange}
							/>
							<label htmlFor="subcribe">Subscribe to news letter</label>
						</div>
						<div className="checkboxItem">
							<input
								type="checkbox"
								name="acceptTerm"
								id="acceptTerm"
								onChange={formik.handleChange}
							/>
							<label htmlFor="acceptTerm">I accept Term of Use</label>
						</div>
						{formik.touched.acceptTerm && formik.errors.acceptTerm ? (
							<div className="warningText">{formik.errors.acceptTerm}</div>
						) : null}
					</div>
					<button type="submit" className="primayBtn signupBtn">
						SIGN UP
					</button>
					<div className="note">
						<span>Already have an account?</span>
						<span className="impressTextBlue">Login</span>
					</div>
				</div>
			</div>
		</form>
	);
}

export default Signup;
