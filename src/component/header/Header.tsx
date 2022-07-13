import { Link } from "react-router-dom";
import "./header.css";

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img src="/img/Logo.png" alt="logo" />
			</Link>

			<div className="headerRight">
				<div className="narBar">
					<span className="activePage">Homepage</span>
					<span>Candidate</span>
					<span>Enterprise</span>
					<span>Job</span>
					<span>News</span>
					<span>Notification</span>
				</div>
				<div className="login">
					<span>Login</span>
					<Link to="/signup" className="superRadiusBtn">
						Signup
					</Link>
				</div>
				<div className="language">
					<span className="activeLanguage">Vi</span>
					<span className="activeLanguage">/</span>
					<span>En</span>
				</div>
				<div className="iconMenu">
					<img src="/icon/menu.png" alt="menu" />
				</div>
			</div>
		</div>
	);
}

export default Header;
