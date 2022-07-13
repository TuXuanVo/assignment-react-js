import Signup from "../component/signup/Signup";
import Layout from "./Layout";
function SignupPage() {
	return <Layout header footer={false} Body={<Signup />} />;
}

export default SignupPage;
