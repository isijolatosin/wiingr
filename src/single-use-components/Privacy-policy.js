import React from "react";
import HeadParagraph from "../reusable-components/HeadParagraph";

const tableOfContentArray = [
	"Who We Are",
	"Where This Privacy Policy Applies",
	"Information We Collect",
	"How We Use Information",
	"How We Share Information",
	"Cross-Border Data Transfers",
	"Your Rights",
	"How long We Retain Your Information",
	"Children Policy",
	"Privacy Policy",
	"How To Contact Us",
];

function PrivacyPolicy() {
	return (
		<main className="mx-auto max-w-max-content-width">
			<h1 className="pt-4 text-3xl font-bold font-arima">Privacy Policy</h1>
			<section className="pb-5 ">
				<HeadParagraph
					HeadComponent={() => (
						<h2 className="pt-2 text-xl font-bold font-arima">
							Our Commitment To You
						</h2>
					)}
					ParagraphComponent={() => (
						<>
							<p className="pt-4 text-base font-thin ">
								At Wiingr, we prioritize your privacy above all else. It forms
								the foundation of our service and product development, ensuring
								that you can trust our offerings completely and concentrate on
								forging meaningful connections.
							</p>
							<p className="pt-4 text-base font-thin ">
								We value the trust you place in us when sharing your
								information, and we take this responsibility seriously.
							</p>
							<p className="pt-4 text-base font-thin ">
								<strong>Our dedication to safeguarding your privacy. </strong>
								Our approach to product and service design is centered around
								your privacy. We engage experts from diverse fields such as
								legal, security, engineering, and product design to ensure that
								every decision we make is grounded in the highest regard for
								your privacy.
							</p>
							<p className="pt-4 text-base font-thin ">
								<strong>Our pledge to transparency. </strong>
								We understand the frustrations commonly associated with privacy
								policies, often filled with insufficient information and overly
								complex language. In contrast, we are committed to transparency
								and clarity. Our Privacy Policy and related documents are
								written in plain language, aiming for simplicity and
								comprehension. We genuinely encourage you to read and understand
								our privacy practices.
							</p>
							<p className="pt-4 text-base font-thin ">
								<strong>Our dedication to ensuring security. </strong>
								Dedicated teams are committed to safeguarding your data,
								continuously updating our security protocols and investing in
								ongoing efforts to fortify the protection of your information.
							</p>
						</>
					)}
				/>
			</section>
			<hr />
			<section className="pt-3">
				<HeadParagraph
					HeadComponent={() => <></>}
					ParagraphComponent={() => (
						<>
							<p className="pt-4 text-base font-thin ">
								Welcome to our Privacy Policy. Thank you for taking the time to
								read it.
							</p>
							<p className="pt-4 text-base">
								<strong>
									If you reside in California, please refer to our{" "}
									<a href="/" className="underline text-brand">
										California Privacy Statement
									</a>
									, which complements this Privacy Policy.
								</strong>
							</p>
							<p className="pt-4 text-base font-thin">
								We value the trust you place in us by sharing your information,
								and we are committed to maintaining that trust. Our commitment
								begins with ensuring that you comprehend the information we
								collect, the reasons behind its collection, how it's utilized,
								and your options regarding your information. This Policy
								articulates our privacy practices using clear and
								straightforward language, minimizing legal and technical
								terminology.
							</p>
							<p className="pt-4 text-base font-thin">
								This Privacy Policy takes effect on April 1, 2024.
							</p>
							<ul className="pt-4 text-base font-thin list-inside">
								{tableOfContentArray.map((content, idx) => (
									<li key={idx} className="list-[disc] text-brand">
										<a
											href={`#${content.replace(/\s/g, "").toLowerCase()}`}
											className="underline ">
											{content}
										</a>
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
								<a href="/" className="underline text-brand">
									California Privacy Statement
								</a>
								.
							</p>
						</>
					)}
				/>
				<HeadParagraph
					HeadComponent={() => (
						<h2 id="whoweare" className="pt-4 text-xl font-bold font-arima">
							1. Who We Are
						</h2>
					)}
					ParagraphComponent={() => (
						<>
							<p className="pt-1 text-base font-thin ">
								If you reside in the European Economic Area (“EEA”), the United
								Kingdom, or Switzerland, the entity accountable for your
								information in accordance with this Privacy Policy (referred to
								as the “data controller”) is:
							</p>
						</>
					)}
				/>
				<HeadParagraph
					HeadComponent={() => (
						<h2
							id="wherethisprivacypolicyapplies"
							className="pt-4 text-xl font-bold font-arima">
							2. Where This Privacy Policy Applies
						</h2>
					)}
					ParagraphComponent={() => (
						<>
							<p className="pt-1 text-base font-thin ">
								This Privacy Policy pertains to the websites, applications,
								events, and other services operated under the Tinder brand. For
								simplicity, we collectively refer to these as our "services" in
								this Privacy Policy. To ensure clarity, we have included links
								to this Privacy Policy on all applicable services.
								<br />
								<br />
								Certain services may necessitate their own distinct privacy
								policy. If a service has its own privacy policy, the terms
								outlined in that policy—rather than this Privacy Policy—will
								govern its use.
							</p>
						</>
					)}
				/>
				<HeadParagraph
					HeadComponent={() => (
						<h2
							id="informationwecollect"
							className="pt-4 text-xl font-bold font-arima">
							3. Information We Collect
						</h2>
					)}
					ParagraphComponent={() => (
						<>
							<p className="pt-1 text-base font-thin ">
								It's evident that in order to facilitate meaningful connections,
								we require certain information about you, including basic
								profile details and your preferences regarding the types of
								individuals you'd like to meet. Additionally, we gather data
								about your usage of our services, including access logs. We may
								also obtain information from third-party sources, such as when
								you access our services through your social media account or
								upload information from your social media account to complete
								your profile. For further elaboration, we provide more detailed
								information below.
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
												provide us with specific information. This may include:
											</p>
											<ul className="pt-4 text-base font-thin list-inside">
												<li className="list-[disc]">
													Upon creating an account, you furnish us with at least
													your phone number and email address, along with
													essential details required for the service's
													functionality. These include your gender, date of
													birth, and preferences regarding the individuals you
													wish to connect with.
												</li>
												<br />
												<li className="list-[disc]">
													When you finalize your profile, you're presented with
													the choice to disclose your sexual orientation. By
													providing such details, you consent to our utilization
													of this information for the specified purposes
													outlined in this Privacy Policy. Additionally, you
													have the option to furnish us with additional
													information, including details about your bio,
													interests, as well as content such as photos and
													videos. For certain content types, such as pictures or
													videos, you may grant us access to your camera or
													photo album.
												</li>
												<br />
												<li className="list-[disc]">
													Participation in surveys, focus groups, or market
													studies involves providing insights into our products
													and services, responding to our inquiries, and
													offering testimonials.
												</li>
												<br />
												<li className="list-[disc]">
													When you subscribe to a paid service or make a direct
													purchase from us (excluding transactions through
													platforms like iOS or Android), you provide us with
													information related to your purchases. This may
													include your debit or credit card number and other
													financial details, which are processed by our payment
													processors.
												</li>
												<br />
												<li className="list-[disc]">
													When you opt to engage in our promotions, events, or
													contests, we collect registration or entry information
													provided by you.
												</li>
												<br />
												<li className="list-[disc]">
													If you share information about other individuals with
													us (e.g., using a friend's contact details for a
													specific feature), we process this data on your behalf
													to fulfill your request.
												</li>
												<br />
												<li className="list-[disc]">
													Interactions with our customer care team result in the
													collection of information disclosed during the
													exchange.
												</li>
												<br />
												<li className="list-[disc]">
													Furthermore, we process your conversations with other
													members and the content you publish to facilitate the
													operation and security of our services, ensuring the
													safety of our community.
												</li>
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
												In addition to the information you may provide us
												directly, we receive information about you from others,
												including:
											</p>
											<ul className="pt-4 text-base font-thin list-inside">
												<li className="list-[disc]">
													<strong>Members:</strong> Members may provide
													information about you as they use our services, for
													instance as they interact with you or if they submit a
													report involving you.
												</li>
												<br />
												<li className="list-[disc]">
													<strong>Social Media:</strong> You may decide to share
													information with us through your social media account,
													for instance if you decide to create and log into your
													account via your social media or other account (e.g.,
													Facebook, Google or Apple) or to upload onto our
													services information such as photos from one of your
													social media accounts (e.g., Instagram or Spotify).
												</li>
												<br />
											</ul>
										</>
									)}
								/>
								<HeadParagraph
									HeadComponent={() => (
										<h2 className="pt-2 text-lg font-bold font-arima">
											Information generated or automatically collected when you
											use our services
										</h2>
									)}
									ParagraphComponent={() => (
										<>
											<p className="pt-1 text-base font-thin ">
												When you use our services, this generates technical data
												about which features you’ve used, how you’ve used them
												and the devices you use to access our services. See
												below for more details.
											</p>
											<ul className="pt-4 text-base font-thin list-inside">
												<li className="list-[disc]">
													<strong>Usage Information:</strong> Using the services
													generates data about your activity on our services,
													for instance how you use them (e.g., when you logged
													in, features you’ve been using, actions taken,
													information shown to you, referring webpages address
													and ads that you interacted with) and your
													interactions with other members (e.g., members you
													connect and interact with, and when you matched and
													exchanged messages with them).
												</li>
												<br />
												<li className="list-[disc]">
													<strong>Device information:</strong> We collect
													information from and about the device(s) you use to
													access our services, including hardware and software
													information such as IP address, device ID and type,
													apps settings and characteristics, app crashes,
													advertising IDs (which are randomly generated numbers
													that you can reset by going into your device’ settings
													and, in some cases, disable entirely), and identifiers
													associated with cookies or other technologies that may
													uniquely identify a device or browser.
												</li>
												<br />
												<li className="list-[disc] ">
													<strong>Other information with your consent: </strong>{" "}
													<li className="list-[circle] ml-4 mt-1">
														<strong>Precise geolocation data: </strong> If you
														give us your consent, we can collect your precise
														geolocation (latitude and longitude) from your
														device. The collection of your geolocation may occur
														in the background even when you aren’t using the
														services if the permission you gave us expressly
														permits such collection. If you decline permission
														for us to collect your precise geolocation, we will
														not collect it, and our services that rely on
														precise geolocation may not be available to you.
													</li>
													<br />
													<li className="list-[circle] ml-4">
														<strong>Other information: </strong> We may collect
														other information with your permission, such as
														photos and videos (for instance, if you want to
														publish a photo or video or participate in streaming
														features on our services).
													</li>
													<br />
												</li>
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
								The main reason we use your information is to deliver and
								improve our services. Additionally, we use your info to help
								keep you and our community safe, and to provide you with
								advertising that may be of interest to you. Read on for a more
								detailed explanation of the various reasons for which we use
								your information, together with practical examples.
							</p>
							<div className="ml-5">
								<HeadParagraph
									HeadComponent={() => (
										<h2 className="pt-2 text-lg font-bold font-arima">
											To administer your account and provide our services to you
										</h2>
									)}
									ParagraphComponent={() => (
										<ul className="text-base font-thin list-inside">
											<li className="list-[disc]">
												Create and manage your account
											</li>
											<li className="list-[disc]">
												Provide you with customer support and respond to your
												requests
											</li>
											<li className="list-[disc]">
												Communicate with you about our services
											</li>
											<li className="list-[disc]">
												Personalize pricing, offer discounts and other
												promotions, and complete your transactions
											</li>
											<li className="list-[disc]">
												Administer sweepstakes and contests
											</li>
										</ul>
									)}
								/>
								<HeadParagraph
									HeadComponent={() => (
										<h2 className="pt-2 text-lg font-bold font-arima">
											To help you connect with other users
										</h2>
									)}
									ParagraphComponent={() => (
										<ul className="text-base font-thin list-inside">
											<li className="list-[disc]">
												Recommend you to other members and recommend other
												members to you
											</li>
											<li className="list-[disc]">
												Show members’ profiles to one another
											</li>
											<li className="list-[disc]">
												Enable members to search for and connect with members
											</li>
										</ul>
									)}
								/>
								<HeadParagraph
									HeadComponent={() => (
										<h2 className="pt-2 text-lg font-bold font-arima">
											To provide new Tinder services to you
										</h2>
									)}
									ParagraphComponent={() => (
										<ul className="text-base font-thin list-inside">
											<li className="list-[disc]">
												Register you and display your profile on new Tinder
												features and apps
											</li>
											<li className="list-[disc]">
												Administer your account on these new features and apps
											</li>
										</ul>
									)}
								/>
								<HeadParagraph
									HeadComponent={() => (
										<h2 className="pt-2 text-lg font-bold font-arima">
											To improve our services and develop new ones
										</h2>
									)}
									ParagraphComponent={() => (
										<ul className="text-base font-thin list-inside">
											<li className="list-[disc]">
												Administer focus groups, market studies and surveys
											</li>
											<li className="list-[disc]">
												Review interactions with customer care teams to improve
												our quality of service
											</li>
											<li className="list-[disc]">
												Understand how members typically use the services to
												improve them (for instance, we may decide to change the
												look and feel or even substantially modify a given
												feature based on how members react to it)
											</li>
											<li className="list-[disc]">
												Develop new features and services (for example, we may
												decide to build a new interests-based feature further to
												requests received from members)
											</li>
										</ul>
									)}
								/>
								<HeadParagraph
									HeadComponent={() => (
										<h2 className="pt-2 text-lg font-bold font-arima">
											To provide offers and operate advertising and marketing
											campaigns
										</h2>
									)}
									ParagraphComponent={() => (
										<ul className="text-base font-thin list-inside">
											<li className="list-[disc]">
												Perform and measure the effectiveness of advertising
												campaigns on our services and marketing our services off
												our platform
											</li>
											<li className="list-[disc]">
												Communicate with you about products or services that we
												believe may interest you
											</li>
										</ul>
									)}
								/>
								<HeadParagraph
									HeadComponent={() => (
										<h2 className="pt-2 text-lg font-bold font-arima">
											To prevent, detect and fight fraud and other illegal or
											unauthorized activities
										</h2>
									)}
									ParagraphComponent={() => (
										<ul className="text-base font-thin list-inside">
											<li className="list-[disc]">
												Find and address ongoing, suspected or alleged
												violations of our{" "}
												<a href="/" className="underline text-brand">
													Terms of Use
												</a>
												, notably through the review of reports and interactions
												between members
											</li>
											<li className="list-[disc]">
												Better understand and design countermeasures against
												violations of our{" "}
												<a href="/" className="underline text-brand">
													Terms of Use
												</a>
											</li>
											<li className="list-[disc]">
												Retain data related to violations of our{" "}
												<a href="/" className="underline text-brand">
													Terms of Use
												</a>{" "}
												to address the violation and prevent against recurrences
											</li>
											<li className="list-[disc]">
												Enforce or exercise our rights, for example our rights
												set out in our{" "}
												<a href="/" className="underline text-brand">
													Terms of Use
												</a>
											</li>
											<li className="list-[disc]">
												Communicate to individuals who submit a report,
												including what we’ve done as a result of their
												submission
											</li>
										</ul>
									)}
								/>
								<HeadParagraph
									HeadComponent={() => (
										<h2 className="pt-2 text-lg font-bold font-arima">
											To ensure legal compliance
										</h2>
									)}
									ParagraphComponent={() => (
										<ul className="text-base font-thin list-inside">
											<li className="list-[disc]">
												Comply with legal requirements
											</li>
											<li className="list-[disc]">Assist law enforcement</li>
											<br />
											<p>
												For information on how we process personal information
												through profiling and automated decision-making, please
												see our{" "}
												<a href="/" className="underline text-brand">
													FAQ
												</a>
												. <br /> To process your information as described in
												this Privacy Policy, we rely on the following legal
												bases:
											</p>
											<br />
											<li className="list-[disc]">
												Provide our service to you: The reason we process your
												information for purposes A, B and C above is to perform
												the contract that you have with us. For instance, as you
												go about using our service to build meaningful
												connections, we use your information to maintain your
												account and your profile, make it viewable to other
												members and recommend other members to you and to
												otherwise provide our free and paid features to you and
												other members.
											</li>
											<li className="list-[disc]">
												Legitimate interests: We process your information for
												purposes D, E and F above, based on our legitimate
												interest. For instance, we analyze users’ behavior on
												our services to continuously improve our offerings, we
												suggest offers we think might interest you and promote
												our own services, we process information to help keep
												our members safe and we process data where necessary to
												enforce our rights, assist law enforcement and enable us
												to defend ourselves in the event of a legal action.
											</li>
											<li className="list-[disc]">
												Comply with applicable laws and regulations: We process
												your information for purpose G above where it is
												necessary for us to comply with applicable laws and
												regulations and evidence our compliance with applicable
												laws and regulations. For example, we retain traffic
												data and data about transactions in line with our
												accounting, tax and other statutory data retention
												obligations and to be able to respond to valid access
												requests from law enforcement. We also keep data
												evidencing consents members give us and decisions they
												may have taken to opt-out of a given feature or
												processing.
											</li>
											<li className="list-[disc]">
												Consent: If you choose to provide us with information
												that may be considered “special” or “sensitive” in
												certain jurisdictions, such as your sexual orientation,
												you’re consenting to our processing of that information
												in accordance with this Privacy Policy. From time to
												time, we may ask for your consent to collect specific
												information such as your precise geolocation or use your
												information for certain specific reasons. In some cases,
												you may withdraw your consent by adapting your settings
												(for instance in relation to the collection of our
												precise geolocation) or by deleting your content (for
												instance where you entered information in your profile
												that may be considered “special” or “sensitive”). In any
												case, you may withdraw your consent at any time by
												contacting us at the address provided at the end of this
												Privacy Policy.
											</li>
										</ul>
									)}
								/>
							</div>
						</>
					)}
				/>
				<HeadParagraph
					HeadComponent={() => (
						<h2
							id="howweshareinformation"
							className="pt-4 text-lg font-bold font-arima">
							5. How We Share Information
						</h2>
					)}
					ParagraphComponent={() => (
						<p className="pt-1 text-base font-thin">
							Since our goal is to help you make meaningful connections, the
							main sharing of members’ information is, of course, with other
							members. We also share some types of members’ information with
							service providers and partners who assist us in operating the
							services, with other Match Group companies for specified reasons
							as laid out below and, in some cases, legal authorities. Read on
							for more details about how your information is shared with others.
						</p>
					)}
				/>
			</section>
		</main>
	);
}

export default PrivacyPolicy;
