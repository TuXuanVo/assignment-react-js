import "./featureJobItem.css";

export type featureJob = {
	jobImg: string;
	jobTitle: string;
	jobAddress: string;
	workTime: string;
};

function FeatureJobItem({ jobImg, jobAddress, jobTitle, workTime }: featureJob) {
	return (
		<div className="featureJobsItem">
			<img className="imgFeatureJob" src={jobImg} alt={jobImg} />
			<div className="featureJobsItemContent">
				<span className="jobTitle">{jobTitle}</span>
				<span className="jobAddress">{jobAddress}</span>
				<span className="workTime">{workTime}</span>
			</div>
			<div className="detailFeatureJob">
				<img src="./icon/Arrow_Right.png" alt="arrowRight" />
			</div>
		</div>
	);
}

export default FeatureJobItem;
