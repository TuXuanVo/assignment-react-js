import "./banner.css";

function Banner() {
	return (
		<div className="banner">
			<div>
				<p>One million success stories.</p>
				<p>Start your today.</p>
			</div>
			<div className="searchBox">
				<span>Keyword/Job Title</span>
				<div className="itemSearchBox">
					<input
						type="text"
						name="searchBox"
						id="searchBox"
						placeholder="Enter Skills or job title"
					/>
					<button className="primayBtn">SEARCH JOB</button>
				</div>
			</div>
		</div>
	);
}

export default Banner;
