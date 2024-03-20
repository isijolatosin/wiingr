import React from "react";
import Layout from "./reusable-components/Layout";
import PrivacyPolicy from "./single-use-components/Privacy-policy";

function App() {
	return (
		<div className="bg-deepGrey">
			<Layout>
				<PrivacyPolicy />
			</Layout>
		</div>
	);
}

export default App;
