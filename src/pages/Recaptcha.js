import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		width: "100%",
		border: "none",
		transform: "translate(-50%, -50%)",
	},
};
const customStylesOtp = {
	content: {
		top: "25%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		width: "100%",
		border: "none",
		transform: "translate(-50%, -50%)",
	},
};

function RecaptchaCompoent() {
	const navigate = useNavigate();
	const [code, setCode] = useState("");
	const [number, setNumber] = useState("");
	const [isModal, setModal] = useState(false);
	const [showOtp, setOtpScreen] = useState(false);
	const [otp, setOtp] = useState("");
	const [error, setError] = useState({
		message: "",
		code: "",
	});

	useEffect(() => {
		const windowWidth = window.innerWidth;
		if (windowWidth > 480) navigate("/*");
	}, [navigate]);

	function createMeta(val) {
		// Create a new meta element
		const metaTag = document.querySelector('meta[name="description"]');
		if (metaTag) {
			metaTag.setAttribute("content", val);
		}
	}

	function onCaptchVerify() {
		if (!window.recaptchaVerifier) {
			window.recaptchaVerifier = new RecaptchaVerifier(
				"recaptcha-container",
				{
					size: "invisible",
					callback: (response) => {
						onSubmit();
					},
					"expired-callback": () => {},
				},
				auth
			);
		}
	}

	function onSubmit() {
		onCaptchVerify();
		const appVerifier = window.recaptchaVerifier;
		if (!number || !code) return;
		setError({
			message: "",
			code: "",
		});

		const formatNumber = `+${code}${number}`;
		signInWithPhoneNumber(auth, formatNumber, appVerifier)
			.then(async (confirmResult) => {
				window.confirmationResult = confirmResult;

				// const docRef = collection(database, "verifications");
				// await addDoc(docRef, {
				// 	verificationId: confirmResult?.verificationId,
				// 	phonenumber: `+${code}${number}`,
				// });

				toast.success("OTP sent successfully!");
				setOtpScreen(true);
			})
			.catch((error) => {
				toast.error("OTP Failed!");
				setError({
					message:
						"OTP not successful. Please check your number and try again.",
					code: "error",
				});
				console.log("ERROR:" + error);
			});
	}

	function onOTPVerify() {
		window.confirmationResult
			.confirm(otp)
			.then(async (res) => {
				console.log(res);
				window.postMessage({ type: "otp", payload: "successfull" }, "*");
				toast.success("Phone numner verified!");

				createMeta(JSON.stringify(res.user));
			})
			.catch((err) => {
				toast.error("Phone numner verification failed!");
				setError({
					message:
						"Phone number verification failed. Please check your otp code and try again.",
					code: "error",
				});
				console.log(err);
			});
	}

	if (otp.length > 5) {
		onOTPVerify();
	}

	let cellNumber = "";
	if (code && number) {
		cellNumber = `${code}${number}`;
	}

	createMeta("testing user otp verification");

	return (
		<>
			<div className="relative mx-auto max-w-max-content-width h-[85vh] flex flex-col items-start py-10 pt-20 px-4 text-center leading-5 font-thin">
				<Toaster toastOptions={{ duration: 4000 }} />
				{!showOtp ? (
					<>
						<div id="recaptcha-container"></div>
						<h1 className="text-3xl font-arima font-semibold leading-9 border-b-[1px] pb-1 border-none">
							What's
						</h1>
						<h1 className="text-3xl font-arima font-semibold leading-9 border-b-[1px] border-none -mt-2">
							your number?
						</h1>
						<div className="flex flex-row w-full gap-2 mt-10 ">
							<div className="w-[25%] h-16 rounded-md bg-highlight flex flex-row items-center px-3">
								<span className="text-xl">+</span>
								<input
									autoFocus
									type="number"
									className="w-full h-full p-0 text-lg text-center bg-transparent border-0 focus:border-0 focus:outline-0 ring-0 focus:ring-0"
									placeholder="123"
									value={code}
									onChange={(e) => setCode(e.target.value)}
								/>
							</div>

							<div className="w-[75%] h-16 rounded-md bg-highlight flex items-center flex-row">
								<input
									type="number"
									className="w-full h-full text-lg bg-transparent border-0 focus:border-0 focus:outline-0 ring-0 focus:ring-0 "
									value={number}
									onChange={(e) => setNumber(e.target.value)}
								/>
								{cellNumber.length > 10 && (
									<svg
										onClick={onSubmit}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6 mr-1 text-brandFadeLighter ">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
									</svg>
								)}
							</div>
						</div>
						<p className="inline mt-2 text-sm font-normal text-left leading-[15px]">
							We never share your details with anyone else. It's our little
							secret.
							<span
								onClick={() => setModal(true)}
								className="text-sm font-normal cursor-pointer text-brand">
								{" "}
								What happens if my number changes?
							</span>
						</p>
						{error.message && (
							<p
								className={`mt-5 text-xs text-left ${
									error.code === "error" ? "text-error" : "text-teal"
								}`}>
								{error.message}
							</p>
						)}
					</>
				) : (
					<></>
				)}
				<Modal
					isOpen={showOtp}
					onAfterOpen={() => {}}
					onRequestClose={() => setOtpScreen(false)}
					style={customStylesOtp}
					contentLabel="Example Modal">
					<h1 className="text-3xl font-arima font-semibold leading-9 border-b-[1px] pb-1 border-none">
						Enter your
					</h1>
					<h1 className="text-3xl font-arima font-semibold leading-9 border-b-[1px] border-none -mt-1">
						verification code
					</h1>
					<p className="text-sm font-normal text-brand">
						Sent to {code}
						{number}
					</p>
					<OtpInput
						value={otp}
						onChange={setOtp}
						otpType="number"
						disabled={false}
						numInputs={6}
						// renderSeparator={<span>-</span>}
						renderInput={(props) => <input {...props} />}
						containerStyle="otpcontainer"
						inputStyle="border-t-0 border-l-0 focus:ring-0 focus:border-black font-thin px-1 text-4xl border-r-0 border-black"
						shouldAutoFocus={true}
					/>
					<p
						onClick={() => !otp && onSubmit()}
						className="mt-10 text-sm font-normal text-brand">
						Didn't get code?
					</p>
				</Modal>
				<Modal
					isOpen={isModal}
					onAfterOpen={() => {}}
					onRequestClose={() => setModal(false)}
					style={customStyles}
					contentLabel="Example Modal">
					<div className="p-10 text-sm font-thin leading-4 text-center shadow-lg w-fit bg-brandwhite">
						<p>
							Please note that your phone number is linked to your account for
							security and communication purposes. If you change your phone
							number, you would need to create a new account.
						</p>
					</div>
				</Modal>
			</div>
		</>
	);
}

export default RecaptchaCompoent;
