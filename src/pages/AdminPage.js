import React from "react";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import Modal from "react-modal";

import { useAppContext } from "../context/ThemeContext";
import connect from "../assets/animation/connect.json";
import Layout from "../reusable-components/Layout";
import {
	getAllData,
	updateUserValueField,
} from "../utilities/firebase-connection";
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
	const [shouldRefetch, setShouldRefetch] = React.useState(false);
	const [alertResolve, setAlertResolve] = React.useState({});

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
		const resetTrigger = setTimeout(() => {
			setShouldRefetch(false);
		}, 1000);

		return () => {
			clearTimeout(resetTrigger);
		};
	}, [isMobile, shouldRefetch]);

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			padding: "0px",
			width: mobileView ? "100%" : "70%",
			height: mobileView ? "100%" : "70%",
			transform: "translate(-50%, -50%)",
			backgroundColor: isDay ? "#FFFDFD" : "#111418",
		},
	};

	function openModal(id) {
		const selected = reportsData.filter((data) => data.id === id);

		if (!selected?.[0]?.status?.includes("resolved")) {
			setIsOpen(true);
			setSelectedData(selected[0]);
		}

		if (selected?.[0]?.status?.includes("resolved")) {
			setAlertResolve(selected[0].id);
		}
	}

	function closeModal() {
		setIsOpen(false);
		setSelectedData([]);
	}

	const sendEmail = async (updateText, isAction) => {
		let message;
		let subject;
		let decision;

		if (isAction) {
			decision = "Report Confirmed and Action Taken";
		} else {
			decision = "Report Not Confirmed";
		}

		if (updateText === "in review") {
			decision = "Yet to be resolved";
			subject = "Wiingr: Update on Your Recent Complaint Submission";
			message = `Hello,

Thank you for bringing this matter to our attention.

We have received your complaint regarding ${selectedData.title} involving another user on our platform. Your report is important to us, and we are committed to ensuring a safe and respectful environment for all our users.

Our team is currently reviewing the details of your report to determine the appropriate course of action. Please note that this process may take a little time as we carefully investigate and ensure fairness for all parties involved.

If we require any additional information or clarification, we will reach out to you. Once the review is complete, we will notify you of the outcome or any steps taken to resolve the issue.

We appreciate your patience and cooperation as we work on this. If you have any further details to share or questions in the meantime, feel free to reply to this email.

Thank you for helping us maintain the integrity of our platform.

Warm regards,
Wiingr Support Team`;
		} else {
			if (isAction) {
				subject = "Wiingr: Resolution of Your Recent Complaint";
				message = `Hello,

Thank you for your patience as we reviewed your complaint regarding ${selectedData.title}.

After a thorough investigation, we have confirmed that the reported behavior violated our platform's guidelines. As a result, we have taken the necessary actions to address the situation, which may include warning, restricting, or removing the offending user’s account.

We appreciate you bringing this to our attention and helping us maintain a safe and respectful community. Should you encounter any further issues or have additional concerns, please don’t hesitate to reach out.

Thank you for being an active part of our platform.

Warm regards,
Wiingr Support Team`;
			} else {
				subject = "Wiingr: Resolution of Your Recent Complaint";
				message = `Hello,

Thank you for your patience as we reviewed your complaint regarding ${selectedData.title}.

After carefully investigating the matter, we were unable to confirm a violation of our platform's guidelines based on the information provided. While no immediate action has been taken, we will continue to monitor activities to ensure compliance with our community standards.

We value your efforts in helping us maintain a positive and respectful community. If you have additional information related to this case or encounter any new concerns, please feel free to contact us.

Thank you for being an essential part of our platform.

Warm regards,
Wiingr Support Team`;
			}
		}

		const emailData = {
			to: selectedData.reporteremail,
			subject: subject,
			message: message,
		};

		try {
			const response = await fetch("/.netlify/functions/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(emailData),
			});

			const result = await response.json();
			if (result.success) {
				updateUserValueField(
					"reports",
					selectedData.id,
					"status",
					`${updateText} - ${decision}`,
					setShouldRefetch
				);
				closeModal();

				return result.message;
			} else {
				console.error("Error sending email:", result.error);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

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
										alertResolve={alertResolve}
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
					<SelectedReportComponent data={selectedData} siteTheme={siteTheme} />
					<div
						className={[
							"sticky bottom-[-20px] px-3 pt-3 pb-5 left-0 right-0 flex flex-row justify-between w-full md:px-5 border-t-[1px]",
							siteTheme.background,
							siteTheme.headerBorder,
						].join(" ")}>
						<div className="flex flex-col gap-3 md:flex-row">
							<div
								onClick={() => sendEmail("in review")}
								className={[
									"border-[1px] px-3 py-[2px] max-h-5 rounded-full",
									siteTheme.headerBorder,
									siteTheme.textColor,
								].join(" ")}>
								<span>Set progress</span>
							</div>
							<div
								onClick={() => sendEmail("resolved", true)}
								className={[
									"border-[1px] px-3 py-[2px] max-h-5 rounded-full",
									siteTheme.headerBorder,
									siteTheme.textColor,
								].join(" ")}>
								<span>Action taken</span>
							</div>
							<div
								onClick={() => sendEmail("resolved", false)}
								className={[
									"border-[1px] px-3 py-[2px] max-h-5 rounded-full",
									siteTheme.headerBorder,
									siteTheme.textColor,
								].join(" ")}>
								<span>No action taken</span>
							</div>
						</div>
						<div
							onClick={closeModal}
							className={[
								"border-[1px] px-3 py-[2px] max-h-5 rounded-full",
								siteTheme.headerBorder,
								siteTheme.textColor,
							].join(" ")}>
							<span>Close</span>
						</div>
					</div>
				</Modal>
			</Layout>
		</>
	);
}

export default AdminPage;
