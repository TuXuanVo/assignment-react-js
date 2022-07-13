import { UserContextType } from "../../@type/user";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Profile() {
	const { user } = useContext(UserContext) as UserContextType;

	return (
		<div>
			<p>name : {user.name}</p>
			<p>email : {user.email}</p>
			<p>password : {user.password}</p>
			<p>rePassword : {user.rePassword}</p>
			<p>subcribe : {user.subcribe ? "true" : "false"}</p>
			<p>acceptTerm : {user.acceptTerm ? "true" : "false"}</p>
		</div>
	);
}

export default Profile;
