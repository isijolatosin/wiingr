import React from "react";
import Lottie from "react-lottie";
import connect from "../assets/animation/connect.json";
import { Link, useNavigate, useLocation } from "react-router-dom";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: connect, // Replace 'animationData' with your imported JSON animation file
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

function HeaderComponent({ siteTheme, isDay }) {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	return (
		<div
			className={[
				siteTheme?.headerBorder,
				siteTheme?.headingBackground,
				"border-b-[1px] px-3 lg:px-auto fixed w-full z-10",
			].join(" ")}>
			<div className="flex flex-row items-center py-1 mx-auto cursor-pointer max-w-max-content-width ">
				<div className="w-6 h-6 sm:ml-2 sm:w-10 sm:h-10">
					<Lottie options={defaultOptions} height="100%" width="100%" />
				</div>
				<div className="w-[3px] rounded-full h-11 bg-brand mx-3" />
				<div className="flex flex-row items-center justify-between flex-1">
					<figure
						onClick={() => navigate("/")}
						className={[
							"text-2xl sm:text-3xl font-bold font-arima",
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
							to="/privacy-policy"
							className={[
								"mr-2 sm:ml-5 sm:mr-3 duration-500 ease-out",
								isDay ? "hover:text-brandwhite/30" : "hover:text-deepGrey/20",
								pathname === "/privacy-policy" && "font-bold",
							].join(" ")}>
							Privacy Policy
						</Link>
						<Link
							to="/terms-of-service"
							className={[
								"sm:mx-3 duration-500 ease-out",
								isDay ? "hover:text-brandwhite/30" : "hover:text-deepGrey/20",
								pathname === "/terms-of-service" && "font-bold",
							].join(" ")}>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderComponent;
