import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomePage from "./pages/HomePage";
import { AppProvider } from "./context/ThemeContext";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import Recaptcha from "./pages/Recaptcha";
import ErrorPage from "./pages/ErrorPage";

function App() {
	return (
		<AppProvider>
			<Routes>
				<Route exact path="/privacy" element={<PrivacyPolicy />} />
				<Route exact path="/terms" element={<TermsOfService />} />
				<Route exact path="/contact-us" element={<ContactUs />} />
				<Route exact path="/recaptcha" element={<Recaptcha />} />
				<Route exact path="*" element={<ErrorPage />} />
				<Route exact path="/" element={<HomePage />} />
			</Routes>
		</AppProvider>
	);
}

export default App;
