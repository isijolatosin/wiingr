import React from "react";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import Modal from "react-modal";

import { useAppContext } from "../context/ThemeContext";
import connect from "../assets/animation/connect.json";
import Layout from "../reusable-components/Layout";
import { getAllData } from "../utilities/firebase-connection";
import ReportsComponent from "../reusable-components/ReportsComponent";
import SelectedReportComponent from "../reusable-components/SelectedReportComponent";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: connect, // Replace 'animationData' with your imported JSON animation file
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

function AdminPage() {
	const {
		siteTheme,
		state: { isDay },
	} = useAppContext();
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [mobileView, setMobileView] = React.useState(false);
	const [reportsData, setReportsData] = React.useState([]);
	const [selectedData, setSelectedData] = React.useState({});
	const isMobile = window.matchMedia("(max-width: 767.98px)").matches;

	React.useEffect(() => {
		async function fetchData() {
			const reportsData = await getAllData("reports");
			setReportsData(reportsData);
		}

		if (isMobile) {
			setMobileView(isMobile);
		} else {
			setMobileView(false);
		}

		fetchData();
	}, [isMobile]);

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			width: mobileView ? "100%" : "70%",
			transform: "translate(-50%, -50%)",
			backgroundColor: isDay ? "#FFFDFD" : "#111418",
		},
	};

	function openModal(id) {
		setIsOpen(true);

		const selected = reportsData.filter((data) => data.id === id);
		setSelectedData(selected[0]);
	}

	function closeModal() {
		setIsOpen(false);
		setSelectedData([]);
	}

	return (
		<>
			<Helmet>
				<title>Wiingr | Admin-panel</title>
			</Helmet>
			<Layout>
				<div className="flex items-center justify-center h-full px-4 mx-auto overflow-scroll font-thin leading-5 text-center max-w-max-content-width">
					<div className="mt-20 mb-10">
						<div
							className={[
								"border-b-[1px] pb-3 mb-5 flex items-center justify-center",
								siteTheme.borderColor,
							].join(" ")}>
							<h1
								className={["text-2xl font-normal", siteTheme.textColor].join(
									" "
								)}>
								Reports
							</h1>
							<div className="w-5 h-5 sm:ml-2 sm:w-10 sm:h-10">
								<Lottie options={defaultOptions} height="100%" width="100%" />
							</div>
						</div>

						{reportsData.length > 0 ? (
							<div className="grid grid-cols-1 md:grid-cols-2">
								{reportsData.map((report, index) => (
									<ReportsComponent
										key={index}
										index={index}
										data={report}
										isDay={isDay}
										siteTheme={siteTheme}
										functionCall={openModal}
									/>
								))}
							</div>
						) : (
							<div>
								<span>No Report Data</span>
							</div>
						)}
					</div>
				</div>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal">
					<SelectedReportComponent
						data={selectedData}
						siteTheme={siteTheme}
						closeModal={closeModal}
					/>
				</Modal>
			</Layout>
		</>
	);
}

export default AdminPage;
