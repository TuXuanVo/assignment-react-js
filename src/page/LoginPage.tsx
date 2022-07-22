import Login from "../component/login/Login";
import Layout from "./Layout";
function LoginPage() {
	return <Layout header footer={false} Body={<Login />} />;
}

export default LoginPage;
