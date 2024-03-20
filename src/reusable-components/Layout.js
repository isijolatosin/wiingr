import React, { useEffect } from "react";

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useAppContext } from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../theme";

function Layout({ children }) {
	const { dispatch, state } = useAppContext();
	const isDaytime = () => {
		const currentHour = new Date().getHours();
		return currentHour >= 6 && currentHour < 18; // Assuming daytime is between 6 AM and 6 PM
	};

	useEffect(() => {
		dispatch({
			type: "SET_DAY",
			payload: isDaytime(),
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let siteTheme = darkTheme;

	if (state?.isDay) siteTheme = lightTheme;

	return (
		<div className="mx-auto ">
			<HeaderComponent siteTheme={siteTheme} />
			<div className={[siteTheme?.background, siteTheme.textColor].join(" ")}>
				{children}
			</div>
			<FooterComponent siteTheme={siteTheme} />
		</div>
	);
}

export default Layout;
