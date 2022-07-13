import "./footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footerContainer1">
				<img src="/img/WhiteLogo.png" alt="logo" />
				<div className="contactInfo">
					<div>
						<p className="titleFooter">DIGI-CONNECT</p>
						<div className="contactItem">
							<img src="/icon/location.png" alt="location" />
							<p>2nd Floor, ANNA Bldg., Quang Trung Sofware City, District 12, HCMC, Vietnam</p>
						</div>
						<div className="contactItem">
							<img src="/icon/smartphone.png" alt="smartphone" />
							<p>+84 28 3715 5325</p>
						</div>
						<div className="contactItem">
							<img src="/icon/mail.png" alt="mail" />
							<p>info@digi-connect.vn</p>
						</div>
					</div>
					<div>
						<p className="titleFooter">About</p>
						<div>
							<p>About Us</p>
							<p>Recruiting</p>
							<p>New</p>
						</div>
					</div>
					<div>
						<p className="titleFooter">Legal</p>
						<div>
							<p>Term of Services</p>
							<p>Privacy Policy</p>
							<p>Site Map</p>
						</div>
					</div>
					<div>
						<p className="titleFooter">Connect</p>
						<div>
							<p>Digi-Care</p>
							<p>Privacy Policy</p>
							<p>Contact Us</p>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="footerContainer2">
				<span>Copyrights 2020 DIGI-CONNECT. All rights reserved</span>
				<div className="socialMedia">
					<span>Follow us</span>
					<img src="/icon/facebook.png" alt="facebook" />
					<img src="/icon/twitter.png" alt="twitter" />
					<img src="/icon/youtube.png" alt="youtube" />
					<img src="/icon/linkedin.png" alt="linkedin" />
				</div>
			</div>
		</div>
	);
}

export default Footer;
