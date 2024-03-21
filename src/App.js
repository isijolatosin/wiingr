import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomePage from "./pages/HomePage";
import { AppProvider } from "./context/ThemeContext";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route exact path="/terms-of-service" element={<TermsOfService />} />
					<Route exact path="/contact-us" element={<ContactUs />} />
				</Routes>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;
