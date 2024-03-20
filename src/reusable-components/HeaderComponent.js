import React from "react";
import Lottie from "react-lottie";
import connect from "../assets/animation/connect.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: connect, // Replace 'animationData' with your imported JSON animation file
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

function HeaderComponent({ siteTheme }) {
	return (
		<div className={[siteTheme?.textColor, siteTheme.background].join(" ")}>
			<div
				className={[
					siteTheme?.headerBorder,
					siteTheme?.headingBackground,
					"border-b-[1px]",
				].join(" ")}>
				<div className="flex flex-row items-center py-2 mx-auto max-w-max-content-width">
					<div className="w-12 h-12 ml-2">
						<Lottie options={defaultOptions} height="100%" width="100%" />
					</div>
					<div className="w-[3px] rounded-full h-11 bg-brand mx-3" />
					<figure
						className={[
							"text-5xl font-bold font-arima",
							siteTheme?.headerTextColor,
						].join(" ")}>
						Wiingr
					</figure>
				</div>
			</div>
		</div>
	);
}

export default HeaderComponent;
