import "./browseJob.css";
import PositionItem, { position } from "./PositionItem";

let positions1: position[] = [
	{
		name: "Create Design",
		quantity: 14,
	},
	{
		name: "Admin",
		quantity: 4,
	},
	{
		name: "Database Administration",
		quantity: 8,
	},
	{
		name: "Graphic Design",
		quantity: 2,
	},
	{
		name: "Marketing",
		quantity: 2,
	},
];

let positions2: position[] = [
	{
		name: "Business Management",
		quantity: 14,
	},
	{
		name: "Sofware Web Development",
		quantity: 4,
	},
	{
		name: "Advertising",
		quantity: 8,
	},
	{
		name: "Electronics Technican",
		quantity: 2,
	},
	{
		name: "HR",
		quantity: 2,
	},
];

function BrowseJobs() {
	return (
		<div className="browseJobs">
			<div className="browseJobsTitle">
				<span>BROWSE</span>
				<span className="impressTextBlue">JOBS</span>
			</div>
			<div className="jobPositions">
				<div className="positionsLeft">
					{positions1.map((item, index) => (
						<PositionItem key={item.name} name={item.name} quantity={item.quantity} />
					))}
				</div>
				<div className="positionsRight">
					{positions2.map((item, index) => (
						<PositionItem key={item.name} name={item.name} quantity={item.quantity} />
					))}
				</div>
			</div>
		</div>
	);
}

export default BrowseJobs;
