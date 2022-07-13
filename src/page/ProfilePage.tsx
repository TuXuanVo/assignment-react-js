import Profile from "../component/profile/profile";
import Layout from "./Layout";

function ProfilePage() {
	return <Layout header footer Body={<Profile />} />;
}

export default ProfilePage;
