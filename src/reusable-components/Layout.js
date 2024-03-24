import React, { useEffect, useState } from "react";
import { debounce } from "throttle-debounce";

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useAppContext } from "../context/ThemeContext";

function Layout({ children }) {
	const { siteTheme, state, dispatch } = useAppContext();
	const isDaytime = () => {
		const currentHour = new Date().getHours();
		return currentHour >= 7 && currentHour < 19; // Assuming daytime is between 6 AM and 6 PM
	};
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		dispatch({
			type: "SET_DAY",
			payload: isDaytime(),
		});

		const handleResize = debounce(200, () => {
			setWindowWidth(window.innerWidth);
		});

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [dispatch]);

	return (
		<div className="mx-auto ">
			<HeaderComponent
				siteTheme={siteTheme}
				isDay={state?.isDay}
				windowWidth={windowWidth}
			/>
			<div className={[siteTheme?.background, siteTheme.textColor].join(" ")}>
				{children}
			</div>
			<FooterComponent siteTheme={siteTheme} />
		</div>
	);
}

export default Layout;
