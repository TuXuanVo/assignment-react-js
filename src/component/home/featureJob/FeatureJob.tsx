import "./featureJob.css";
import FeatureJobItem, { featureJob } from "./FeatureJobItem";

let featureJobs: featureJob[] = [
	{
		jobImg: "/img/Lionflame.png",
		jobTitle: "User Experience Design",
		jobAddress: "Lionflame - Vietnam",
		workTime: "Full Time",
	},
	{
		jobImg: "/img/bloom.png",
		jobTitle: "Art Director",
		jobAddress: "BLOOM - Singapore",
		workTime: "Part Time",
	},
	{
		jobImg: "/img/MiaStudio.png",
		jobTitle: "SEO Expert",
		jobAddress: "Mia Studios - Singapore",
		workTime: "Freelance",
	},
	{
		jobImg: "/img/uiux.png",
		jobTitle: "UI/UX Design",
		jobAddress: "Lionflame - Vietnam",
		workTime: "Full Time",
	},
	{
		jobImg: "/img/Giant.png",
		jobTitle: "SEO Expert",
		jobAddress: "Mia Studios - Singapore",
		workTime: "Freelance",
	},
	{
		jobImg: "/img/avanta.png",
		jobTitle: "Art Director",
		jobAddress: "BLOOM - Singapore",
		workTime: "Internship",
	},
	{
		jobImg: "/img/parrot.png",
		jobTitle: "Art Director",
		jobAddress: "BLOOM - Singapore",
		workTime: "Part Time",
	},
	{
		jobImg: "/img/axon.png",
		jobTitle: "Project Manager",
		jobAddress: "Lionflame - Vietnam",
		workTime: "Full Time",
	},
];

function FeatureJob() {
	return (
		<div className="featureJobs">
			<div className="featureJobsTitle">
				<span>FEATURE</span>
				<span className="impressTextOrange">JOBS</span>
			</div>
			<div className="row">
				{featureJobs.map((item, index) => (
					<FeatureJobItem
						key={item.jobTitle + index}
						jobAddress={item.jobAddress}
						jobImg={item.jobImg}
						jobTitle={item.jobTitle}
						workTime={item.workTime}
					/>
				))}
				<div className="featureJobsItemMore">
					<div>
						<div>
							<span className="moreJobText">Explore more</span>
						</div>
						<span className="moreJobTextBold">1565+</span>
						<span className="moreJobText">job posted</span>
					</div>
					<div className="detailFeatureJob">
						<img className="detailFeatureJob" src="./icon/Arrow_Right.png" alt="arrowRight" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeatureJob;
