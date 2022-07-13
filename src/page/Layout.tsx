import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { ILayout } from "../@type/layout";

function Layout({ header, Body, footer }: ILayout) {
	return (
		<>
			{header && <Header />}
			<>{Body}</>
			{footer && <Footer />}
		</>
	);
}

export default Layout;
