import Banner from "./banner/Banner";
import BrowseJobs from "./browseJob/BrowseJobs";
import FeatureJob from "./featureJob/FeatureJob";
import Menu from "./menu/Menu";
import ProductiveTeam from "./productiveTeam/ProductiveTeam";
import Sponsor from "./sponsor/Sponsor";

function Body() {
	return (
		<div className="body">
			<Menu />
			<Banner />
			<ProductiveTeam />
			<BrowseJobs />
			<FeatureJob />
			<Sponsor />
		</div>
	);
}

export default Body;
