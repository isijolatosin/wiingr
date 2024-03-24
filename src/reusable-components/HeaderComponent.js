import React from "react";
import Lottie from "react-lottie";
import connect from "../assets/animation/connect.json";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { mobileMaxWidth } from "../constants";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: connect, // Replace 'animationData' with your imported JSON animation file
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

function HeaderComponent({ siteTheme, isDay, windowWidth }) {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	return (
		<div
			className={[
				siteTheme?.headerBorder,
				siteTheme?.headingBackground,
				"border-b-[1px] px-3 lg:px-auto fixed w-full z-10",
			].join(" ")}>
			<div className="flex flex-row items-center py-2 mx-auto cursor-pointer sm:py-1 max-w-max-content-width ">
				<div className="w-5 h-5 sm:ml-2 sm:w-10 sm:h-10">
					<Lottie options={defaultOptions} height="100%" width="100%" />
				</div>
				<div className="w-[3px] rounded-full h-7 sm:h-11 bg-brand mx-3" />
				<div className="flex flex-row items-center justify-between flex-1">
					<figure
						onClick={() => navigate("/")}
						className={[
							"text-xl sm:text-3xl font-bold font-arima",
							siteTheme?.headerTextColor,
						].join(" ")}>
						Wiingr
					</figure>
					<div
						className={[
							"font-thin flex-row items-center text-xs sm:text-sm float-right",
							siteTheme?.headerTextColor,
						].join(" ")}>
						<Link
							to={
								process.env.REACT_APP_NODE_ENV === "development" // remove when site is live
									? "/privacy"
									: "/"
							}
							className={[
								"mr-4 sm:mr-10 duration-500 ease-out ",
								isDay ? "hover:text-lines/50" : "hover:text-deepGrey/20",
								pathname === "/privacy" ? "text-brandwhite" : "text-lines",
							].join(" ")}>
							{windowWidth <= mobileMaxWidth ? "Privacy" : "Privacy Policy"}
						</Link>
						<Link
							to={
								process.env.REACT_APP_NODE_ENV === "development" // remove when site is live
									? "/terms"
									: "/"
							}
							className={[
								"mr-4 sm:mr-10 duration-500 ease-out ",
								isDay ? "hover:text-lines/50" : "hover:text-deepGrey/20",
								pathname === "/terms" ? "text-brandwhite" : "text-lines",
							].join(" ")}>
							{windowWidth <= mobileMaxWidth ? "Terms" : "Terms of Service"}
						</Link>
						<Link
							to={
								process.env.REACT_APP_NODE_ENV === "development" // remove when site is live
									? "/contact-us"
									: "/"
							}
							className={[
								"sm:mr-3 duration-500 ease-out ",
								isDay ? "hover:text-lines/50" : "hover:text-deepGrey/20",
								pathname === "/contact-us" ? "text-brandwhite" : "text-lines",
							].join(" ")}>
							{windowWidth <= mobileMaxWidth ? "Contact" : "Contact-Us"}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderComponent;
