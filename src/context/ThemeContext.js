import React, { createContext, useReducer, useContext } from "react";
import { darkTheme, lightTheme } from "../theme";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const initialState = {
		isDay: null,
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "SET_DAY":
				return { ...state, isDay: action.payload };

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	let siteTheme = darkTheme;
	if (state?.isDay) siteTheme = lightTheme;

	return (
		<AppContext.Provider value={{ siteTheme, state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
