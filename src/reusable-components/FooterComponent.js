import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

function FooterComponent({ siteTheme }) {
	const { pathname } = useLocation();
	const path = pathname;
	const footerList = [
		{ name: "Contact Us", link: "/contact-us" },
		{ name: "Terms & Conditions", link: "/terms" },
		{ name: "Privacy Policy", link: "/privacy" },
	];
	return (
		<div
			className={[siteTheme?.headerBorder, siteTheme?.headingBackground].join(
				" "
			)}>
			<div className="py-2 mx-auto text-[10px] text-center text-lines/80 max-w-max-content-width">
				<div className="">
					{footerList.map((item, idx) => (
						<Fragment key={idx}>
							<Link
								to={
									process.env.REACT_APP_NODE_ENV === "development" // remove when site is live
										? `${item.link}`
										: "/"
								}
								className={[path === item.link && "text-lines/30"].join(" ")}>
								{item.name}
							</Link>
							<span className="mx-[5px] sm:mx-1 last:hidden">•</span>
						</Fragment>
					))}
				</div>
				<p className="">
					&copy; {new Date().getUTCFullYear()} <span>wiingr</span>
					<span> • All right reserved</span>
				</p>
			</div>
		</div>
	);
}

export default FooterComponent;
