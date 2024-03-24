import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { debounce } from "throttle-debounce";

import Layout from "../reusable-components/Layout";
import HeadParagraph from "../reusable-components/HeadParagraph";
import { useAppContext } from "../context/ThemeContext";
import { mobileMaxWidth } from "../constants";

const tableOfContentArray = [
	"Who We Are",
	"Where This Privacy Policy Applies",
	"Information We Collect",
	"How We Use Information",
	"How We Share Information",
	"Your Rights",
	"How long We Retain Your Information",
	"Children Policy",
	"Your California Privacy Rights",
	"Privacy Policy",
	"How To Contact Us",
];

function TermsOfService() {
	const { siteTheme, state } = useAppContext();
	const [showIcon, setShowIcon] = useState(false);

	useEffect(() => {
		const handleScroll = debounce(200, () => {
			const windowWidth = window.innerWidth;
			let cap = 5000;
			if (windowWidth <= mobileMaxWidth) cap = 9000;
			const scrollOffset = window.scrollY || window.pageYOffset;
			if (scrollOffset < cap) setShowIcon(false);
			if (scrollOffset > cap) setShowIcon(true);
		});

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<Layout>
			<main
				id="main"
				className="relative px-4 pt-16 pb-10 mx-auto sm:pt-24 max-w-max-content-width">
				{showIcon && (
					<ScrollLink
						to="main"
						smooth={true}
						duration={500}
						offset={-100}
						className="cursor-pointer">
						<div
							className={[
								"fixed right-4 bottom-20 sm:right-12 sm:bottom-28 rounded-full w-6 h-6 p-1",
								siteTheme.headingBackground,
							].join(" ")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className={[
									"w-full h-full",
									state.isDay ? "text-brandwhite" : "text-deepGrey",
								].join(" ")}>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m4.5 15.75 7.5-7.5 7.5 7.5"
								/>
							</svg>
						</div>
					</ScrollLink>
				)}

				<h1 className="pt-5 text-3xl font-bold font-arima">
					Terms & Conditions
				</h1>
				<section className="pb-5 ">
					<HeadParagraph
						HeadComponent={() => (
							<h2 className="pt-2 text-xl font-bold font-arima">
								Terms and Condition of Use Agreement
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-5 text-base font-thin ">
									At Wiingr, we prioritize your privacy above all else. It forms
									the foundation of our service and product development,
									ensuring that you can trust our offerings completely and
									concentrate on forging meaningful connections.
								</p>
								<p className="pt-5 text-base font-thin ">
									We value the trust you place in us when sharing your
									information, and we take this responsibility seriously.
								</p>
								<p className="pt-5 text-base font-thin ">
									<strong>Our dedication to safeguarding your privacy. </strong>
									Our approach to product and service design is centered around
									your privacy. We engage experts from diverse fields such as
									legal, security, engineering, and product design to ensure
									that every decision we make is grounded in the highest regard
									for your privacy.
								</p>
								<p className="pt-5 text-base font-thin ">
									<strong>Our pledge to transparency. </strong>
									We understand the frustrations commonly associated with
									privacy policies, often filled with insufficient information
									and overly complex language. In contrast, we are committed to
									transparency and clarity. Our Privacy Policy and related
									documents are written in plain language, aiming for simplicity
									and comprehension. We genuinely encourage you to read and
									understand our privacy practices.
								</p>
								<p className="pt-5 text-base font-thin ">
									<strong>Our dedication to ensuring security. </strong>
									Dedicated teams are committed to safeguarding your data,
									continuously updating our security protocols and investing in
									ongoing efforts to fortify the protection of your information.
								</p>
							</>
						)}
					/>
				</section>
				<hr className={[state.isDay ? "" : "border-linesLighter"]} />
				<section className="pt-3">
					<HeadParagraph
						HeadComponent={() => <></>}
						ParagraphComponent={() => (
							<>
								<p className="pt-5 text-base font-thin ">
									Welcome to our Privacy Policy. Thank you for taking the time
									to read it.
								</p>
								<p className="pt-5 text-base">
									<strong>
										If you reside in California, please refer to our{" "}
										<a
											href="/"
											className={["underline", siteTheme.linkColor].join(" ")}>
											California Privacy Statement
										</a>
										, which complements this Privacy Policy.
									</strong>
								</p>
								<p className="pt-5 text-base font-thin">
									We value the trust you place in us by sharing your
									information, and we are committed to maintaining that trust.
									Our commitment begins with ensuring that you comprehend the
									information we collect, the reasons behind its collection, how
									it's utilized, and your options regarding your information.
									This Policy articulates our privacy practices using clear and
									straightforward language, minimizing legal and technical
									terminology.
								</p>
								<p className="pt-5 text-base font-thin">
									This Privacy Policy takes effect on April 1, 2024.
								</p>
								<ul className="pt-5 text-base font-thin list-inside">
									{tableOfContentArray.map((content, idx) => (
										<li
											key={idx}
											className={["list-[disc]", siteTheme.linkColor].join(
												" "
											)}>
											<ScrollLink
												to={`${content.replace(/\s/g, "").toLowerCase()}`}
												smooth={true}
												duration={500}
												offset={-100}
												className="underline cursor-pointer">
												{content}
											</ScrollLink>
										</li>
									))}
								</ul>
							</>
						)}
					/>
				</section>
				<section className="pt-5">
					<HeadParagraph
						HeadComponent={() => (
							<h2 className="pt-2 text-xl font-bold font-arima">
								California Consumers
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-1 text-base font-thin ">
									To understand your California privacy rights, please refer to
									our{" "}
									<a
										href="/"
										className={["underline", siteTheme.linkColor].join(" ")}>
										California Privacy Statement
									</a>
									.
								</p>
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h1
								id="whoweare"
								className="pt-5 text-xl font-bold font-arima scroll-smooth">
								1. Who We Are
							</h1>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-1 text-base font-thin ">
									If you reside in the European Economic Area (“EEA”), the
									United Kingdom, or Switzerland, the entity accountable for
									your information in accordance with this Privacy Policy
									(referred to as the “data controller”) is:
								</p>
								<br />
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h2
								id="wherethisprivacypolicyapplies"
								className="pt-5 text-xl font-bold font-arima">
								2. Where This Privacy Policy Applies
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-1 text-base font-thin ">
									This Privacy Policy pertains to the websites, applications,
									events, and other services operated under the Tinder brand.
									For simplicity, we collectively refer to these as our
									"services" in this Privacy Policy. To ensure clarity, we have
									included links to this Privacy Policy on all applicable
									services.
									<br />
									<br />
									Certain services may necessitate their own distinct privacy
									policy. If a service has its own privacy policy, the terms
									outlined in that policy—rather than this Privacy Policy—will
									govern its use.
								</p>
								<br />
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h2
								id="informationwecollect"
								className="pt-5 text-xl font-bold font-arima">
								3. Information We Collect
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-1 text-base font-thin ">
									It's evident that in order to facilitate meaningful
									connections, we require certain information about you,
									including basic profile details and your preferences regarding
									the types of individuals you'd like to meet. Please note that
									some of the information you provided can be updated at any
									time through the app settings. The more comprehensive your
									profile, the better our system can generate accurate matches
									and connections for you. To maintain authenticity and ensure
									user safety, we require your name and date of birth during
									onboarding and cannot be updated later. We appreciate your
									cooperation as we work towards creating a trusted and
									enjoyable experience for all users. For further elaboration,
									we provide more detailed information below.
								</p>
								<div className="ml-5">
									<HeadParagraph
										HeadComponent={() => (
											<h2 className="pt-2 text-lg font-bold font-arima">
												Information you give us
											</h2>
										)}
										ParagraphComponent={() => (
											<>
												<p className="pt-1 text-base font-thin ">
													When utilizing our services, you have the option to
													provide us with specific information. This may
													include:
												</p>
												<ul className="pt-5 text-base font-thin list-inside">
													<li className="list-[disc]">
														Upon creating an account, you furnish us with at
														least your phone number and email address, along
														with essential details required for the service's
														functionality. These include your gender, date of
														birth, and preferences regarding the individuals you
														wish to connect with.
													</li>
													<br />
													<li className="list-[disc]">
														When you finalize your profile, you're presented
														with the choice to disclose your sexual orientation.
														By providing such details, you consent to our
														utilization of this information for the specified
														purposes outlined in this Privacy Policy.
														Additionally, you have the option to furnish us with
														additional information, including details about your
														bio, interests, as well as content such as photos
														and videos. For certain content types, such as
														pictures, you may grant us access to your camera or
														photo album.
													</li>
													<br />
													<li className="list-[disc]">
														Participation in surveys, focus groups, or market
														studies involves providing insights into our
														products and services, responding to our inquiries,
														and offering testimonials.
													</li>
													<br />
													<li className="list-[disc]">
														When you subscribe to a paid service or make a
														direct purchase from us (excluding transactions
														through platforms like iOS or Android), you provide
														us with information related to your purchases. This
														may include your debit or credit card number and
														other financial details, which are processed by our
														payment processors.
													</li>
													<br />
													<li className="list-[disc]">
														If you share information about other individuals
														with us (e.g., using a friend's contact details for
														a specific feature), we process this data on your
														behalf to fulfill your request.
													</li>
													<br />
													<li className="list-[disc]">
														Interactions with our customer care team result in
														the collection of information disclosed during the
														exchange.
													</li>
													<br />
													<li className="list-[disc]">
														Furthermore, we process your conversations with
														other members and the content you publish to
														facilitate the operation and security of our
														services, ensuring the safety of our community.
													</li>
													<br />
													<p className="list-[disc]">
														We highly recommend and encourage you, as well as
														all our members, to thoughtfully consider the
														information you choose to share about yourself. We
														advise against including email addresses, URLs,
														instant messaging details, phone numbers, full names
														or addresses, credit card details, national identity
														numbers, driver's license details, or any other
														sensitive information that could be subject to abuse
														or misuse on your profile.
														<br />
														<br />
														When you post information about yourself or utilize
														the messaging function to interact with other users,
														the extent of personal information you choose to
														share is at your own discretion and risk. For more
														details regarding who can access the content you
														post on Wiingr, please refer to Section 5 below.
													</p>
													<br />
												</ul>
											</>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2 className="pt-2 text-lg font-bold font-arima">
												Information we receive from others
											</h2>
										)}
										ParagraphComponent={() => (
											<>
												<p className="pt-1 text-base font-thin ">
													In addition to the information you directly provide to
													us, we may also receive information about you from
													other sources, including:
												</p>
												<ul className="pt-5 text-base font-thin list-inside">
													<li className="list-[disc]">
														<strong>Members:</strong> Members may provide
														information about you as they utilize our services,
														such as through interactions with you or by
														submitting reports involving you.
													</li>
													<br />
													<li className="list-[disc]">
														<strong>Social Media:</strong> You may choose to
														share information with us by providing your social
														media account link, such as updating your social tab
														in the app settings (Facebook, Instagram, Snapchat,
														or TikTok), or by adding your playlist link from
														audio streaming apps (e.g., Apple Music or Spotify).
													</li>
													<br />
												</ul>
											</>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2 className="pt-2 text-lg font-bold font-arima">
												Information generated or automatically collected when
												you use our services
											</h2>
										)}
										ParagraphComponent={() => (
											<>
												<p className="pt-1 text-base font-thin ">
													When you utilize our services, it generates technical
													data regarding the features you've accessed, how
													you've interacted with them, and the devices you've
													used to access our services. Please refer below for
													more detailed information.
												</p>
												<ul className="pt-5 text-base font-thin list-inside">
													<li className="list-[disc]">
														<strong>Usage Information:</strong> Using the
														services generates data about your activity,
														including how you utilize them (such as when you log
														in, the actions you take, and the information
														displayed to you) and your interactions with other
														members (such as members you connect and interact
														with, and when you match and exchange messages with
														them).
													</li>
													<br />
													<li className="list-[disc]">
														<strong>Device information:</strong> We collect
														information from and about the device(s) you use to
														access our services, including hardware and software
														information such as IP address, device type or other
														technologies that may uniquely identify a device or
														browser.
													</li>
													<br />
													<strong>
														<span className="mr-1 text-xl">&bull; </span>Other
														information with your consent:{" "}
													</strong>{" "}
													<li className="list-[circle] ml-4 mt-1">
														<strong>Precise geolocation data: </strong> If you
														give us your consent, we can collect your precise
														geolocation (latitude and longitude) from your
														device. The collection of your geolocation occurs
														when you enable it during onboarding or reset it in
														the app settings. This information helps us identify
														your physical location and personalize the app,
														making it easier for you to interact with other
														users. By enabling the display of general locality
														information to users viewing your profile and
														showing you profiles of other users who are near
														you. If you decline permission for us to collect
														your precise geolocation, we will not collect it,
														and certain services that rely on precise
														geolocation may not be available to you.
													</li>
													<br />
													<li className="list-[circle] ml-4">
														<strong>Other information: </strong> We may collect
														additional information with your permission,
														including photos, especially if you choose to share
														media content.
													</li>
													<br />
													<br />
												</ul>
											</>
										)}
									/>
								</div>
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h2
								id="howweuseinformation"
								className="pt-2 text-xl font-bold font-arima">
								4. How We Use Information
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-1 text-base font-thin ">
									The primary purpose of utilizing your information is to
									deliver and enhance our services. Furthermore, we employ your
									data to ensure the safety of both you and our community.
									Below, you'll find a more detailed explanation of the various
									reasons for which we utilize your information, accompanied by
									practical examples.
								</p>
								<div className="ml-5">
									<HeadParagraph
										HeadComponent={() => (
											<h2 className="pt-2 text-lg font-bold font-arima">
												To manage your account and deliver our services to you
											</h2>
										)}
										ParagraphComponent={() => (
											<ul className="text-base font-thin list-inside">
												<li className="list-[disc]">
													Establish and oversee your account.
												</li>
												<li className="list-[disc]">
													Offer customer support and address your inquiries.
												</li>
												<li className="list-[disc]">
													Keep you informed about our services.
												</li>
												<li className="list-[disc]">
													Tailor pricing, extend discounts and promotions, and
													finalize your transactions.
												</li>
											</ul>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2 className="pt-2 text-lg font-bold font-arima">
												Facilitate connections with other users
											</h2>
										)}
										ParagraphComponent={() => (
											<ul className="text-base font-thin list-inside">
												<li className="list-[disc]">
													Suggest you to other members and suggest other members
													to you.
												</li>
												<li className="list-[disc]">
													Display profiles of members to each other
												</li>
												<li className="list-[disc]">
													Facilitate member searches and connections
												</li>
											</ul>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2 className="pt-2 text-lg font-bold font-arima">
												Enhance our services and innovate new offerings.
											</h2>
										)}
										ParagraphComponent={() => (
											<ul className="text-base font-thin list-inside">
												<li className="list-[disc]">
													Conduct focus groups, market studies, and surveys
												</li>
												<li className="list-[disc]">
													Analyze interactions with customer care teams to
													enhance our service quality
												</li>
												<li className="list-[disc]">
													Gain insights into members' typical usage patterns to
													enhance services. This may involve modifying the look,
													feel, or features based on member feedback and
													reactions.
												</li>
												<li className="list-[disc]">
													Innovate new features and services, such as expanding
													an interests-based feature based on member requests
												</li>
											</ul>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2 className="pt-2 text-lg font-bold font-arima">
												To safeguard against, identify, and combat fraud as well
												as other illegal or unauthorized activities
											</h2>
										)}
										ParagraphComponent={() => (
											<ul className="text-base font-thin list-inside">
												<li className="list-[disc]">
													Identify and resolve ongoing, suspected, or alleged
													violations of our{" "}
													<a
														href="/"
														className={["underline", siteTheme.linkColor].join(
															" "
														)}>
														Terms of Use
													</a>
													, particularly by reviewing reports and member
													interactions
												</li>
												<li className="list-[disc]">
													Enhance comprehension and formulate strategies to
													counter violations of our{" "}
													<a
														href="/"
														className={["underline", siteTheme.linkColor].join(
															" "
														)}>
														Terms of Use
													</a>
												</li>
												<li className="list-[disc]">
													Maintain data concerning violations of our{" "}
													<a
														href="/"
														className={["underline", siteTheme.linkColor].join(
															" "
														)}>
														Terms of Use
													</a>{" "}
													to address the infraction and mitigate against future
													occurrences
												</li>
												<li className="list-[disc]">
													Implement or assert our rights, such as those outlined
													in our{" "}
													<a
														href="/"
														className={["underline", siteTheme.linkColor].join(
															" "
														)}>
														Terms of Use
													</a>
												</li>
												<li className="list-[disc]">
													Provide communication to individuals who submit a
													report, detailing the actions taken in response to
													their submission
												</li>
											</ul>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2 className="pt-2 text-lg font-bold font-arima">
												Guarantee adherence to legal requirements
											</h2>
										)}
										ParagraphComponent={() => (
											<ul className="text-base font-thin list-inside">
												<li className="list-[disc]">
													Adhere to legal obligations
												</li>
												<li className="list-[disc]">
													Provide assistance to law enforcement authorities
												</li>
												<br />
												<p>
													To learn more about how we handle personal information
													through profiling and automated decision-making,
													please refer to our [privacy policy/terms of
													service/other relevant document].{" "}
													<a
														href="/"
														className={["underline", siteTheme.linkColor].join(
															" "
														)}>
														FAQ
													</a>
													. <br /> To handle your information as outlined in
													this Privacy Policy, we depend on the following legal
													bases:
												</p>
												<br />
												<li className="list-[disc]">
													<strong>To deliver our service to you:</strong> We
													process your information for purposes 1, 2, and 3
													mentioned above to fulfill the contract you have with
													us. For example, as you utilize our service to
													establish meaningful connections, we utilize your
													information to manage your account and profile,
													display it to other members, suggest other members to
													you, and provide our free and paid features to you and
													other members
												</li>
												<li className="list-[disc]">
													<strong>Legitimate interests:</strong> We process your
													information for purposes 4 and 5 above, relying on our
													legitimate interest. For example, we process
													information to ensure the safety of our members and to
													enforce our rights, provide assistance to law
													enforcement, and enable us to defend ourselves in
													legal proceedings when necessary
												</li>
												<li className="list-[disc]">
													<strong>
														To comply with applicable laws and regulations:
													</strong>{" "}
													We process your information for purpose 5 above when
													it is necessary for us to adhere to relevant laws and
													regulations and to demonstrate our compliance with
													them. For instance, we retain transactional data to
													fulfill our accounting, tax, and other legal data
													retention obligations, and to respond to lawful
													requests from law enforcement. Additionally, we
													maintain records of consents provided by members and
													decisions they have made to opt-out of certain
													features or processing
												</li>
												<li className="list-[disc]">
													<strong>Consent:</strong> If you decide to provide us
													with information that may be classified as "special"
													or "sensitive" in certain jurisdictions, such as your
													sexual orientation, you are giving your consent to our
													processing of that information in accordance with this
													Privacy Policy. Occasionally, we may request your
													consent to collect specific information, like your
													precise geolocation or to use your information for
													particular reasons. In some instances, you can
													withdraw your consent by adjusting your settings (for
													example, concerning the collection of precise
													geolocation) or by deleting your content (for
													instance, if you provided sensitive information in
													your profile). However, regardless, you have the right
													to withdraw your consent at any time by contacting us
													at the address provided at the end of this Privacy
													Policy
												</li>
											</ul>
										)}
									/>
									<br />
								</div>
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h2
								id="howweshareinformation"
								className="pt-5 text-lg font-bold font-arima">
								5. How We Share Information
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-1 text-base font-thin">
									As our aim is to facilitate meaningful connections for you,
									the primary sharing of members' information is naturally with
									other members. Additionally, in some instances, with legal
									authorities. Continue reading for further insights into how
									your information is shared with others
								</p>
								<div className="ml-5">
									<HeadParagraph
										HeadComponent={() => (
											<h2
												id="howweshareinformation"
												className="pt-5 text-lg font-bold font-arima">
												With other members
											</h2>
										)}
										ParagraphComponent={() => (
											<>
												<p className="pt-1 text-base font-thin">
													You share information with other members when you
													willingly disclose information on the service,
													including your public profile. It's important to be
													cautious with your information and ensure that the
													content you share is something you're comfortable
													being visible to others
													<br />
													<br />
													f you decide to restrict the audience for all or
													specific parts of your profile, as well as certain
													content or information about you, it will only be
													visible in accordance with your chosen settings
													<br />
													<br />
													If someone submits a report involving you, such as a
													claim that you violated our
													<a
														href="/"
														className={["underline", siteTheme.linkColor].join(
															" "
														)}>
														Terms of Use
													</a>
													), we may communicate to the reporter any actions we
													have taken, if applicable, as a result of their report
												</p>
											</>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2
												id="howweshareinformation"
												className="pt-5 text-lg font-bold font-arima">
												With our service providers
											</h2>
										)}
										ParagraphComponent={() => (
											<>
												<p className="pt-1 text-base font-thin">
													We utilize vendors to aid in operating and enhancing
													our services, including tasks such as data hosting and
													maintenance, customer care, payment processing, and
													security operations
													<br />
													<br />
													Before engaging any vendor or partnering with any
													entity, we adhere to a rigorous vetting process. Our
													vendors and partners are required to agree to
													stringent confidentiality obligations
												</p>
											</>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2
												id="howweshareinformation"
												className="pt-5 text-lg font-bold font-arima">
												For corporate transactions
											</h2>
										)}
										ParagraphComponent={() => (
											<>
												<p className="pt-1 text-base font-thin">
													We may transfer your information in the event of our
													involvement, whether wholly or partially, in a merger,
													sale, acquisition, divestiture, restructuring,
													reorganization, dissolution, bankruptcy, or any other
													change of ownership or control
												</p>
											</>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2
												id="howweshareinformation"
												className="pt-5 text-lg font-bold font-arima">
												With law enforcement / when required by law
											</h2>
										)}
										ParagraphComponent={() => (
											<>
												<p className="pt-1 text-base font-thin">
													We may disclose your information if reasonably
													necessary: (i) to comply with a legal process, such as
													a court order, subpoena, or search warrant,
													government/law enforcement investigation, or other
													legal requirements; (ii) to aid in the prevention or
													detection of crime (subject to applicable law in each
													case); or (iii) to safeguard the safety of any person.
												</p>
											</>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2
												id="howweshareinformation"
												className="pt-5 text-lg font-bold font-arima">
												To enforce legal rights
											</h2>
										)}
										ParagraphComponent={() => (
											<>
												<p className="pt-1 text-base font-thin">
													We may also share information: (i) if disclosure would
													help reduce our liability in an actual or potential
													lawsuit; (ii) as necessary to safeguard our legal
													rights and the legal rights of our members, business
													partners, or other relevant parties; (iii) to enforce
													our agreements with you; and (iv) to investigate,
													prevent, or address illegal activity, suspected fraud,
													or other wrongdoing
												</p>
											</>
										)}
									/>
									<HeadParagraph
										HeadComponent={() => (
											<h2
												id="howweshareinformation"
												className="pt-5 text-lg font-bold font-arima">
												With your consent or at your request
											</h2>
										)}
										ParagraphComponent={() => (
											<>
												<p className="pt-1 text-base font-thin">
													We may request your consent to share your information
													with third parties. If we do so, we will clearly
													explain the reasons why we wish to share the
													information
												</p>
											</>
										)}
									/>
								</div>
								<p className="pt-1 text-base font-thin">
									We may utilize and disclose non-personal information (defined
									as information that does not personally identify you, such as
									device information, general demographics, general behavioral
									data, and de-identified location), as well as personal
									information in hashed, non-human readable form, in any of the
									situations mentioned above
								</p>
								<br />
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h2 id="yourrights" className="pt-5 text-xl font-bold font-arima">
								6. Your Rights and Choices
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<div className="pt-1 text-base font-thin ">
									We aim for you to have control over your information, and
									thus, we'd like to remind you of the following options and
									tools at your disposal:
									<br />
									<ul className="pt-5 text-base font-thin list-inside">
										<div className="ml-5">
											<li className="list-[disc]">
												<strong>Access / Update tools in the service. </strong>
												Tools and account settings are available to help you
												access, correct, or delete information you provided to
												us that's linked to your account directly within the
												service. Should you have any inquiries about these tools
												and settings, please reach out to us via the help tab in
												your account settings.
											</li>
											<br />
											<li className="list-[disc]">
												<strong>Device permissions. </strong>
												Mobile platforms often feature permission systems for
												various types of device data and notifications,
												including phone contacts, pictures, location services,
												push notifications, and advertising identifiers. You
												have the option to adjust your device settings to either
												consent to or decline the collection or processing of
												the relevant information or the display of
												notifications. However, please be aware that modifying
												these settings may result in certain services losing
												functionality
											</li>
											<br />
											<li className="list-[disc]">
												<strong>Uninstall </strong>
												You can cease all information collection by an app by
												uninstalling it through the standard uninstall process
												for your device. It's important to note that
												uninstalling an app does not deactivate your account. To
												close your account, please utilize the corresponding
												functionality provided within the service
											</li>
											<br />
											<li className="list-[disc]">
												<strong>Account closure. </strong>
												You can close your account by using the appropriate
												functionality directly within the service
											</li>
											<br />
											<p>
												We also want you to be informed about your privacy
												rights. Depending on your location, you may have the
												right to:
											</p>
											<br />
											<li className="list-[disc]">
												<strong>Access/know. </strong>
												You may have the right to request a copy of the
												information we retain about you, and under certain
												circumstances, to receive it in a portable format. You
												can exercise your right to access this information
												directly within the service by submitting a request
											</li>
											<br />
											<li className="list-[disc]">
												<strong>Delete/erase. </strong>
												You have the right to request that we delete the
												personal information we hold about you. You can exercise
												your right to deletion by submitting a request
											</li>
											<br />
											<li className="list-[disc]">
												<strong>Correct/rectify/update. </strong>
												You can update most of the information you provided to
												us by editing your profile directly within the service.
												If you believe that the information we have about you is
												inaccurate, you may contact us to correct it
											</li>
											<br />
											<li className="list-[disc]">
												<strong>Object/restrict. </strong>
												You may also have the right to object to or request that
												we restrict certain processing of your personal
												information. To exercise this right, please contact us
											</li>
										</div>
										<br />
										<p>
											For your security and that of all our members, we may
											require you to provide proof of identity before we can
											fulfill the above requests. Please note that we may reject
											requests if we are unable to verify your identity, if the
											request is unlawful or invalid, or if it might violate
											trade secrets, intellectual property, or the privacy or
											rights of others. If you seek information regarding
											another member, such as copies of messages received from
											them through our service, that member must contact us to
											provide written consent before the information is
											released. We may also request proof of identity from them
											before processing the request. Additionally, there may be
											certain requests to object to or restrict the processing
											of personal information that we cannot accommodate,
											particularly if fulfilling them would prevent us from
											providing our service to you. For example, we cannot
											provide our service without your date of birth, as we
											cannot ensure that you are 18 years of age or older
											<br />
											<br />
											If you reside in Virginia, Colorado, or Connecticut, USA,
											and your privacy request is denied, you have the option to
											appeal by contacting us and explicitly mentioning "Privacy
											Request Appeal." If you are dissatisfied with the outcome
											of your appeal, you can reach out to the attorney general
											in your state. Additionally, it's important to note that
											we do not engage in the "selling" of your personal data or
											utilize it for "targeted advertising" or "profiling" that
											could significantly impact legal matters, as defined by
											relevant state laws. Therefore, no opt-out choice is
											required
											<br />
											<br />
											In specific countries, such as those within the European
											Economic Area and the United Kingdom, you possess the
											right to file a complaint with the relevant data
											protection authority if you have apprehensions regarding
											the manner in which we handle your personal data.
											Information regarding your data protection regulator
											within the European Economic Area can be found here, and
											within the United Kingdom here. The data protection
											authority to which you can submit a complaint may
											correspond to your usual place of residence, your
											workplace, or where an alleged violation occurred
										</p>
									</ul>
									<br />
								</div>
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h2
								id="howlongweretainyourinformation"
								className="pt-5 text-xl font-bold font-arima">
								7. How Long We Retain Your Information
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<div className="pt-1 text-base font-thin ">
									We keep your personal information only as long as we need it
									for legitimate business purposes (as laid out in Section 4)
									and as permitted by applicable law. If you decide to stop
									using our services, you can close your account and your
									profile will stop being visible to other members. Note that we
									will close your account automatically if you are inactive for
									a period of two years. After your account is closed, we will
									delete your personal information, as laid out below:
									<br />
									<div className="ml-5">
										<ul className="pt-5 text-base font-thin list-inside">
											<li className="list-[disc]">
												In order to safeguard the safety and security of our
												members, we institute a safety retention period lasting
												three months after an account closure, or one year
												following an account ban. Throughout this duration, we
												retain your information in case it becomes essential for
												investigating unlawful or harmful behaviors. The
												decision to retain information during this safety
												retention period is founded on our legitimate interest
												as well as that of potential third-party victims
											</li>
											<br />
											<li className="list-[disc]">
												After the safety retention window expires, we proceed to
												delete your data entirely, retaining only minimal
												information for specific purposes as outlined below:
											</li>
											<br />
											<div className="ml-5">
												<li className="list-[circle]">
													We retain a limited amount of data to fulfill legal
													data retention obligations. Specifically, transaction
													data is kept for a period of 10 years to adhere to tax
													and accounting legal requirements. Credit card
													information remains stored for the duration in which a
													user may contest a transaction
												</li>
												<br />
												<li className="list-[circle]">
													We maintain limited information based on our
													legitimate interests. Customer care records and
													associated data, as well as imprecise location details
													of downloads/purchases, are retained for five years to
													support our customer care decisions, protect our
													rights, and enable defense against potential claims.
													Information regarding past accounts and subscriptions
													is kept for three years after the closure of your last
													account to ensure accurate financial forecasting and
													reporting. Profile data is retained for one year in
													anticipation of potential litigation, for the
													establishment, exercise, or defense of legal claims.
													Additionally, data necessary to prevent banned members
													from opening new accounts is maintained for as long as
													necessary to ensure the safety and vital interests of
													our members.
												</li>
												<br />
												<li className="list-[circle]">
													Lastly, we retain information based on our legitimate
													interest in situations where there is an ongoing or
													potential issue, claim, or dispute that necessitates
													the retention of information. This includes instances
													where we receive a valid legal subpoena or request to
													preserve data, in which case we are obligated to
													retain the data to comply with legal requirements.
													Additionally, data may be kept if it is deemed
													necessary for legal proceedings or would otherwise
													serve a legal purpose
												</li>
												<br />
											</div>
										</ul>
									</div>
								</div>
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h2
								id="childrenpolicy"
								className="pt-5 text-xl font-bold font-arima">
								8. No Children Allowed
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-1 text-base font-thin ">
									Our services are exclusively available to individuals who are
									18 years of age or older. We strictly prohibit individuals
									under the age of 18 from accessing our platform. If you
									suspect that a member is under the age of 18, we encourage you
									to utilize the reporting mechanism provided on the service
								</p>
								<br />
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h2
								id="privacypolicy"
								className="pt-5 text-xl font-bold font-arima">
								10. Privacy Policy Changes
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-1 text-base font-thin ">
									As we continually seek new and innovative methods to assist
									you in forming meaningful connections and ensure that our
									explanations regarding data practices remain current, this
									policy may undergo changes over time. Prior to the
									implementation of any significant changes, we will notify you
									to allow ample time for review
								</p>
								<br />
							</>
						)}
					/>
					<HeadParagraph
						HeadComponent={() => (
							<h2
								id="howtocontactus"
								className="pt-5 text-xl font-bold font-arima">
								11. How to Contact Us
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="pt-1 text-base font-thin ">
									If you have questions about this Privacy Policy, you can send
									us a request{" "}
									<a href="mailto:info.wiingr@gmail.com" className="text-brand">
										here
									</a>
								</p>
								<br />
							</>
						)}
					/>

					<HeadParagraph
						HeadComponent={() => (
							<h2
								id="howtocontactus"
								className="pt-5 font-bold text-md font-arima">
								Effective Date
							</h2>
						)}
						ParagraphComponent={() => (
							<>
								<p className="text-sm font-thin ">
									This Privacy Policy was last updated on: TBD
								</p>
							</>
						)}
					/>
				</section>
			</main>
		</Layout>
	);
}

export default TermsOfService;
