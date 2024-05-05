import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
		<>
			<Helmet>
				<title>Wiingr | Terms</title>
			</Helmet>
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
						Terms and Conditions
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
										Welcome to the Wiingr Terms and Conditions of Use ("Terms").
										These Terms constitute a legally binding contract between
										you and Wiingr (as defined further below). It is important
										for both parties to understand their respective rights and
										obligations before using the Wiingr application. We kindly
										ask that you take a few moments to carefully review these
										Terms prior to accessing or using the App. By accessing,
										viewing, or using the App, you acknowledge and agree to be
										legally bound by these Terms. Additionally, we encourage you
										to review our Community Guidelines and Privacy Policy for
										further information regarding your use of the App.
										<br />
										<strong>
											Kindly note that if you choose to subscribe to our
											services for an initial term (referred to as the "Initial
											Term"), your subscription will automatically renew for
											additional periods of the same duration as the Initial
											Term. This renewal will occur at Wiingr's then-current fee
											for such services unless you opt to cancel your
											subscription in accordance with the process outlined in
											Section 5 below.
										</strong>
										<br />
										Please take note that Section 13 of these Terms includes
										provisions outlining the resolution of claims between you
										and Wiingr Group. This section specifically contains an
										arbitration agreement, which, with limited exceptions,
										mandates that disputes between us be resolved through
										binding arbitration. You have the option to opt out of this
										arbitration agreement as outlined in Section 13 below. If
										you choose not to opt out of the arbitration agreement in
										accordance with Section 13: (1) you will only be able to
										pursue claims and seek relief against us on an individual
										basis; and (2) you are forfeiting your right to seek relief
										in a court of law and to have a jury trial for your claims.
										<br />
										Attention California subscribers: You have the option to
										cancel your subscription and request a refund at any time
										before midnight of the third business day following the date
										of your subscription. If you subscribed using your Apple ID,
										please note that refunds are managed by Apple, not Wiingr.
										To request a refund, please visit Apple Support. For
										subscribers who used their Google Play Store account or
										subscribed directly through Wiingr, please reach out to our
										customer support team for assistance with refund requests.
									</p>
									<p className="pt-5 text-base font-thin ">
										<strong> 1. RULES </strong>
										<br />
										Prior to accessing the App, you are required to register for
										an account ("Account"). To create an Account, you must:
										<br />
										<ul className="pt-2 text-base font-thin list-inside">
											<li className="list-[disc]">
												be at least 18 years old, or meet the age of majority
												required by the laws of your home country, if that age
												exceeds 18, in order to legally enter into a contract.
											</li>
											<li className="list-[disc]">
												{" "}
												be legally permitted to use the App according to the
												laws of your home country.
											</li>
										</ul>
										Please be advised that we actively monitor for underage use,
										and we reserve the right to terminate, suspend, or request
										verification of your Account if we suspect you may be
										underage. Account creation is possible through manual
										registration. For further details regarding the information
										we collect and how it is utilized, please refer to our
										Privacy Policy. Unfortunately, sharing your Account with
										others without permission or using another person's Account
										is strictly prohibited. You retain the option to delete your
										Account at any time by accessing the 'Settings' page while
										logged in and selecting the 'Delete account' link. While
										your Account will be promptly deleted, it may take some time
										for Your Content to be completely removed from the App. Rest
										assured, your profile information will be handled in
										accordance with our Privacy Policy. We maintain the right,
										at our sole discretion, to terminate or suspend any Account,
										restrict access to the App, or utilize various means to
										enforce the Terms, including blocking specific IP addresses.
										For EU residents, we will notify you when action is taken
										against your Account or Your Content, unless such
										notification is prohibited by law enforcement agencies. For
										all other users, we reserve the right to take such action
										without prior notice. Additionally, unless otherwise
										prohibited by mandatory laws in your country of residence,
										we reserve the right to terminate or suspend your Account
										without notice for various reasons, including but not
										limited to violations of these Terms, inappropriate conduct
										on the App, inappropriate conduct with other users
										(including offline conduct), or improper conduct on apps
										operated by our affiliates. If your Account is terminated or
										suspended, you acknowledge that you will not receive a
										refund for any paid services or features for which you have
										already been charged. Should you believe that a mistake has
										been made regarding action taken on your Account or Your
										Content, you may appeal using the processes outlined within
										the app or by contacting us through our contact form. EU
										residents have additional rights under the Digital Services
										Act, including access to third-party out-of-court dispute
										settlement processes, remedies from EU member state courts,
										and the ability to lodge complaints with local EU regulatory
										authorities. Lastly, please refrain from accessing,
										tampering with, or utilizing non-public areas of the App or
										our systems. Certain portions of the App may only be
										accessible after registering for an Account.
									</p>
									<p className="pt-5 text-base font-thin ">
										<strong>2. CONTENT </strong>
										Prohibited Content on Wiingr: Our Community Guidelines are
										an integral part of these Terms and serve to define the
										acceptable content and conduct on our platform. By using
										Wiingr, you agree to adhere to our Community Guidelines,
										which may be updated periodically. While we encourage users
										to express themselves freely on Wiingr, certain restrictions
										are necessary to maintain a positive and safe environment.
										Prohibited content includes, but is not limited to, the
										following:{" "}
										<ul className="pt-3 text-base font-thin list-inside">
											<li className="list-[disc]">
												Content that promotes or incites illegal activity.
											</li>
											<li className="list-[disc]">
												Defamatory or libelous material.
											</li>
											<li className="list-[disc]">
												Content that infringes upon third-party rights,
												including intellectual property and privacy rights.
											</li>
											<li className="list-[disc]">
												Unauthorized sharing of another person's image or
												likeness.
											</li>
											<li className="list-[disc]">
												Content containing offensive language or imagery likely
												to cause harm or discomfort to others.
											</li>
											<li className="list-[disc]">
												Obscene, pornographic, or violent material that
												undermines human dignity.
											</li>
											<li className="list-[disc]">
												Abusive, discriminatory, or hateful content promoting
												racism, sexism, or bigotry.
											</li>
											<li className="list-[disc]">
												Commercial activities such as sales, competitions,
												advertising, or links to external websites.
											</li>
											<li className="list-[disc]">
												Unsolicited or spam-like content.
											</li>
											<li className="list-[disc]">
												Impersonation or deceptive behavior, including scams or
												fraudulent activity.
											</li>
											<li className="list-[disc]">
												Content containing malicious code designed to disrupt or
												damage software, hardware, or networks, or any other
												material that violates our Community Guidelines in any
												way.
											</li>
										</ul>
									</p>
									<p className="pt-5 text-base font-thin ">
										<strong>Your Content: </strong>
										You acknowledge that Your Content must adhere to our
										Community Guidelines, which are subject to periodic updates.
										As the creator of Your Content, you are solely responsible
										and liable for its compliance. You agree to indemnify,
										defend, release, and hold us harmless from any claims
										arising in connection with Your Content. Your Content is a
										reflection of you, and therefore, you are advised to
										exercise caution in its creation and dissemination. Personal
										contact or banking information, such as names, addresses,
										phone numbers, email addresses, URLs, or financial details,
										should not be displayed on your profile page or shared with
										other users. Any disclosure of personal information is at
										your own risk, and we encourage you to exercise the same
										discretion online as you would offline. By uploading Your
										Content on Wiingr, you affirm that you possess all necessary
										rights and licenses to do so. You grant us a non-exclusive,
										royalty-free, perpetual, worldwide license to use Your
										Content in various ways, including editing, copying,
										modifying, distributing, and making it available to the
										public. This license may be assigned or sub-licensed to our
										affiliates and successors without further approval from you.
										We are not obligated to store Your Content indefinitely, so
										it is advisable to keep backups if it holds significance to
										you. To prevent unauthorized use of Your Content by third
										parties, you authorize us to take action on your behalf,
										including sending takedown notices under applicable laws,
										such as the DMCA, if Your Content is used without consent
										outside of Wiingr.
									</p>
									<p className="pt-5 text-base font-thin ">
										<strong>Member Content: </strong>
										Member Content shared on Wiingr belongs to the users who
										posted it and is stored on our servers. It is displayed via
										the App at the direction of the user providing the Member
										Content. You do not possess any rights regarding other
										users' Member Content, and you may only use their personal
										information to the extent that it aligns with Wiingr's
										purpose of facilitating social connections. Utilizing other
										users' information for commercial purposes, spamming,
										harassment, stalking, or making unlawful threats is strictly
										prohibited. We retain the right to terminate your Account if
										you misuse other users' information. Member Content is
										subject to the terms and conditions outlined in Sections
										512(c) and/or 512(d) of the Digital Millennium Copyright Act
										1998. If you have a complaint regarding Member Content,
										please refer to the Digital Millennium Copyright Act section
										below for further guidance.
									</p>
									<p className="pt-5 text-base font-thin ">
										<strong>Our Content: </strong>
										You might be curious about the ownership of the remaining
										Content on Wiingr. Well, it belongs to us! This includes any
										text, content, graphics, user interfaces, trademarks, logos,
										sounds, artwork, and other intellectual property featured on
										Wiingr, as well as the Wiingr software and database(s).
										These assets are either owned, controlled, or licensed by us
										and are safeguarded by copyright, trademark, data, database
										rights, and/or other intellectual property laws. The rights,
										title, and interest in and to Our Content remain with us at
										all times. However, we grant you a non-exclusive, limited,
										personal, non-transferable, and revocable license to access
										and utilize Our Content. This license is granted without the
										right to sublicense and is subject to the following
										conditions: <br />
										<ul className="pt-2 text-base font-thin list-inside">
											<li className="list-[disc]">
												You are prohibited from utilizing, selling, modifying,
												or distributing Our Content except as allowed by the
												functionality of the App.
											</li>
											<li className="list-[disc]">
												Our name shall not be used in metatags, keywords, and/or
												hidden text.{" "}
											</li>
											<li className="list-[disc]">
												Derivative works shall not be created from Our Content,
												nor shall Our Content be scraped, disabled, decompiled,
												analyzed, or commercially exploited, whether in whole or
												in part.
											</li>{" "}
											<li className="list-[disc]">
												{" "}
												Our Content must be used for lawful purposes only.
												<br />
											</li>
										</ul>{" "}
										We retain all other rights. While we are not obligated to
										pre-screen Your Content or any Member Content, there may be
										occasions where intervention is necessary to ensure the
										safety of our members. Therefore, we reserve the right to
										review, pre-screen, refuse, and/or remove any Member Content
										and Your Content, including content exchanged between users
										in direct messages, as outlined in these Terms. We employ
										matching algorithms to predict your compatibility with other
										users and recommend potential matches. Further details
										regarding our use of recommender systems and the primary
										parameters utilized are available in our Privacy Policy.
									</p>
									<p className="pt-5 text-base font-thin ">
										<strong>3. RESTRICTIONS </strong>
										<br />
										<strong>You agree to:</strong>
										<ul className="pt-3 text-base font-thin list-inside">
											<li className="list-[disc]">
												Adhere to all relevant laws, encompassing privacy laws,
												intellectual property laws, anti-spam laws, equal
												opportunity laws, and regulatory obligations.
											</li>
											<li className="list-[disc]">
												Provide your authentic name and accurate age when
												setting up your Wiingr account and on your profile.
											</li>
											<li className="list-[disc]">
												Utilize the services in a safe, inclusive, and
												respectful manner, consistently abiding by our Community
												Guidelines.
											</li>
										</ul>
										<strong>You agree not to:</strong>
										<ul className="pt-3 text-base font-thin list-inside">
											<li className="list-[disc]">
												Behave unlawfully or disrespectfully, including acts of
												dishonesty, abuse, or discrimination.
											</li>
											<li className="list-[disc]">
												Falsify your identity, age, current or past positions,
												qualifications, or affiliations with any individual or
												entity.
											</li>
											<li className="list-[disc]">
												Disclose information without proper consent.
											</li>
											<li className="list-[disc]">
												Engage in stalking or harassment of any App user.
											</li>
											<li className="list-[disc]">
												Utilize the App in a deceptive, inauthentic, or
												manipulative manner, such as participating in scams,
												spamming, creating inauthentic profiles, or conducting
												commercial/promotional activities.
											</li>
											<li className="list-[disc]">
												Submit appeals, reports, notices, or complaints that are
												clearly baseless.
											</li>
											<li className="list-[disc]">
												Develop, support, or use software, scripts, robots, or
												other means to scrape data from Wiingr or its services,
												or to copy profiles and other data from the services.
											</li>{" "}
										</ul>
										We take user behavior seriously within the Wiingr community.
										Should you encounter any abuse or wish to raise a complaint
										regarding Member Content, please contact us with details of
										the incident. Alternatively, you can report a user directly
										from their profile or chat by selecting the 'Block & Report'
										option. We retain the right to investigate any potential
										violations of these Terms, user rights, or third-party
										rights. In our sole discretion, we may immediately revoke a
										user's access to the App without prior notice, as outlined
										in Section 1 above, and/or remove any improper, infringing,
										or unauthorized Member Content submitted to the App. It's
										important to note that we do not monitor or control user
										actions, therefore, you are solely responsible for your
										interactions with other App users.
										<br />
										<br />
										<strong>
											YOU UNDERSTAND THAT WIINGR GROUP DOES NOT CURRENTLY
											CONDUCT CRIMINAL BACKGROUND CHECKS ON ITS USERS. WIINGR
											GROUP ALSO DOES NOT INQUIRE INTO THE BACKGROUNDS OF ITS
											USERS OR ATTEMPT TO VERIFY THE STATEMENTS OF ITS USERS.
											WIINGR GROUP MAKES NO REPRESENTATIONS OR WARRANTIES AS TO
											THE CONDUCT OF ANY USERS OR THEIR COMPATIBILITY WITH ANY
											CURRENT OR FUTURE USERS. WIINGR GROUP RESERVES THE RIGHT
											TO CONDUCT ANY CRIMINAL BACKGROUND CHECK OR OTHER
											SCREENINGS (SUCH AS SEX OFFENDER REGISTRATION SEARCHES) AT
											ANY TIME AND TO USE AVAILABLE PUBLIC RECORDS FOR ANY
											PURPOSE.
										</strong>
										<br />
										<br />
										You agree to release Wiingr Group and its successors from
										any claims, demands, losses, damages, rights, and actions
										arising from your interactions with other users of the App.
										This includes personal injuries, death, and property damage,
										whether directly or indirectly caused. If you are a
										California resident, you waive California Civil Code Section
										1542, which states that a general release does not extend to
										unknown claims. However, this release does not apply to
										claims arising from unconscionable commercial practices,
										fraud, deception, or misrepresentation by Wiingr Group.
										Scraping or replicating any part of the App without prior
										consent is expressly prohibited, except through our
										published interfaces or a separate agreement.
									</p>
									<p className="pt-5 text-base font-thin ">
										<strong>4. PRIVACY</strong>
										<br />
										To learn about how Wiingr Group collects, uses, and shares
										your personal data, please refer to our Privacy Policy. By
										using Wiingr, you agree that we may use your data as
										outlined in our Privacy Policy.
									</p>
									<p className="pt-5 text-base font-thin ">
										<strong>5. PAYMENT TERMS</strong>
										<br />
										In general, Wiingr may provide products and services for
										purchase within the app ("In-App Purchase"). If you decide
										to make an In-App Purchase, you acknowledge and accept that
										additional terms, presented to you during the purchase
										process, may apply, and these additional terms are
										considered part of this agreement.
										<br />
										<br />
										Subscriptions and Automatic Renewal: Wiingr may provide
										certain services as automatically renewing subscriptions,
										such as a one-week, one-month, or three-month subscription
										("Premium Services"). IF YOU SUBSCRIBE TO AN AUTOMATICALLY
										RENEWING SUBSCRIPTION, YOUR SUBSCRIPTION WILL AUTOMATICALLY
										RENEW AT THE END OF EACH PERIOD UNLESS YOU CANCEL IT. YOU
										WILL BE CHARGED AT WIINGR'S CURRENT PRICE FOR SUCH
										SUBSCRIPTION UNLESS YOU CANCEL. To avoid being charged for a
										new subscription period, you must cancel before the current
										subscription period ends. Deleting your account or removing
										the app from your device does not cancel your subscription.
										If there are changes in the pricing of the Premium Services
										you've subscribed to, you'll be notified and given an
										opportunity to cancel. If you don't cancel your subscription
										after Wiingr changes the prices, you agree to be charged at
										the updated pricing.
										<br />
										<br />
										Canceling Subscriptions: If you subscribed directly through
										Wiingr, you can cancel or modify your payment method in the
										payment settings section of your profile. If you subscribed
										through a third-party store like the Apple App Store or
										Google Play Store, you'll need to access your account with
										that store and follow their instructions to cancel or change
										your subscription. Upon cancellation, you can continue to
										use your subscription until the end of the current billing
										period. However, please note that (i) you won't be eligible
										for a prorated refund unless specified in the "Refunds"
										section below, (ii) your subscription won't renew after the
										current period ends, and (iii) you'll lose access to Premium
										Services or In-App Purchases associated with your
										subscription.
										<br />
										<br />
										As our services can be accessed without a subscription,
										canceling your subscription won't delete your profile from
										our platform. If you want to completely close your account,
										you need to follow the termination process outlined in
										Section 15.
										<br />
										<br />
										Wiingr Group operates globally, and our pricing is
										influenced by various factors. We often provide promotional
										rates, which may differ based on factors like region,
										subscription duration, bundle size, and more. Additionally,
										we regularly experiment with new features and payment
										methods. Wiingr Group reserves the right, without prior
										notice, to limit the availability of any product, feature,
										or service, to impose conditions on promotions, to restrict
										transactions, and to refuse service to any user. <br />
										<br />
										Free Trials: If you enroll in a free trial and do not
										cancel, your trial may transition into a paid subscription,
										with your Payment Method charged at the current subscription
										price. Once your trial becomes a paid subscription, it will
										automatically renew at the end of each period, with your
										Payment Method charged, until cancellation. To avoid charges
										for a new subscription period, you must cancel before the
										current period ends. Deleting your account or app does not
										cancel your free trial. If you've previously signed up for a
										free trial through the Apple Store or Google Play Store, you
										won't qualify for another free trial and will be
										automatically enrolled in a subscription as outlined here.
										<br />
										<br />
										<strong>
											Refunds: In general, all purchase charges are
											nonrefundable, and there are no refunds or credits for
											partially used periods.
										</strong>
										<br />
										<br />
										For subscribers residing in Arizona, California, Colorado,
										Connecticut, Illinois, Iowa, Minnesota, New York, North
										Carolina, Ohio, Rhode Island, and Wisconsin, the following
										terms apply:
										<br />
										<br />
										YOU, THE BUYER, MAY CANCEL YOUR SUBSCRIPTION, WITHOUT
										PENALTY OR OBLIGATION, AT ANY TIME PRIOR TO MIDNIGHT OF THE
										THIRD BUSINESS DAY FOLLOWING THE DATE YOU SUBSCRIBED
										(EXCLUDING SUNDAYS AND HOLIDAYS). IN THE EVENT THAT YOU DIE
										BEFORE THE END OF YOUR SUBSCRIPTION PERIOD, YOUR ESTATE
										SHALL BE ENTITLED TO A REFUND OF THAT PORTION OF ANY PAYMENT
										YOU HAD MADE FOR YOUR SUBSCRIPTION WHICH IS ALLOCABLE TO THE
										PERIOD AFTER YOUR DEATH. IN THE EVENT THAT YOU BECOME
										DISABLED (SUCH THAT YOU ARE UNABLE TO USE WIINGR) BEFORE THE
										END OF YOUR SUBSCRIPTION PERIOD, YOU SHALL BE ENTITLED TO A
										REFUND OF THAT PORTION OF ANY PAYMENT YOU HAD MADE FOR YOUR
										SUBSCRIPTION WHICH IS ALLOCABLE TO THE PERIOD AFTER YOUR
										DISABILITY BY PROVIDING THE COMPANY NOTICE IN THE SAME
										MANNER AS YOU REQUEST A REFUND AS DESCRIBED BELOW.
										<br />
										<br />
										To request a refund: Eligible subscribers must also submit a
										refund request. If you subscribed using your Apple ID,
										refunds are managed by Apple, not Wiingr. To request a
										refund, go to iTunes, click on your Apple ID, select
										“Purchase history,” locate the transaction, and click
										“Report Problem”. Alternatively, you can submit a request
										through Apple Support.
										<br />
										<br />
										For all other purchases: Reach out to customer support with
										your order number. You can locate the order number in the
										order confirmation email. If you purchased from the Google
										Play Store, you can find it by logging in to Google Wallet.
										<br />
										<br />
										<strong>Taxes:</strong>
										The payments outlined in this Section 5 do not cover any
										Sales Tax that might be applicable to the Premium Services
										provided under these Terms. If Wiingr determines that it's
										legally obligated to collect Sales Tax from you for these
										Terms, it will do so in addition to the payments specified
										in this Section 5. If any Premium Services or payments for
										such services under these Terms are subject to Sales Tax in
										any jurisdiction, and you haven't submitted the required
										Sales Tax to Wiingr, you'll be responsible for paying that
										Sales Tax along with any associated penalties or interest to
										the relevant tax authority. In this context, "Sales Tax"
										refers to any sales or use tax and any other tax assessed
										based on sales proceeds, equivalent to a sales tax where the
										applicable taxing jurisdiction doesn't otherwise impose a
										sales or use tax.
										<p className="pt-5 text-base font-thin ">
											<strong>
												6. PUSH NOTIFICATIONS; LOCATION-BASED FEATURES
											</strong>
											<br />
											We may send you emails, text messages, push notifications,
											alerts, and other messages related to the App and Wiingr
											services, such as updates, offers, products, events, and
											promotions. Upon downloading the App, you'll be prompted
											to accept or deny push notifications/alerts. If you
											decline, you won't receive any. If you accept, they'll be
											sent automatically. To stop receiving push
											notifications/alerts, adjust your notification settings on
											your mobile device. For other types of messaging, like
											emails or texts, you can unsubscribe by following the
											instructions in those communications or by emailing us at
											info.wiingr@gmail.com. <br />
											The App may offer location-based content, products,
											services, and materials. To provide these, it uses your
											device's GPS, Bluetooth, or other location-tracking
											software. If you disable these features, you won't access
											location-specific content. For details on how the App
											handles your information, please review the Privacy
											Policy.
										</p>
										<p className="pt-5 text-base font-thin ">
											<strong>7. DISCLAIMER</strong>
											<br />
											THE APP, SITE, OUR CONTENT, AND MEMBER CONTENT ARE ALL
											PROVIDED TO YOU "AS IS" AND "AS AVAILABLE" WITHOUT
											WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
											BUT NOT LIMITED TO, FITNESS FOR A PARTICULAR PURPOSE,
											TITLE, OR NON-INFRINGEMENT. WITHOUT LIMITING THE
											FOREGOING, WE DO NOT GUARANTEE THE COMPATIBILITY OF ANY
											MATCHES.
											<br />
											IF APPLICABLE LAW DOES NOT ALLOW THE EXCLUSION OF CERTAIN
											WARRANTIES, WE PROVIDE THE MINIMUM WARRANTY REQUIRED BY
											THAT LAW. NO ADVICE OR INFORMATION, WHETHER ORAL OR
											WRITTEN, SHALL CREATE ANY WARRANTY, REPRESENTATION, OR
											GUARANTEE NOT EXPRESSLY STATED IN THIS SECTION.
											<br />
											IN ADDITION, WE DO NOT WARRANT THAT THE APP OR SITE WILL
											BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT YOUR USE
											OF THEM WILL MEET YOUR EXPECTATIONS. WE DO NOT GUARANTEE
											THAT THE APP, SITE, OUR CONTENT, ANY MEMBER CONTENT, OR
											ANY PART THEREOF, IS CORRECT, ACCURATE, OR RELIABLE. YOUR
											USE OF THE APP OR SITE IS AT YOUR OWN RISK. YOU ARE SOLELY
											RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS.
											WIINGR GROUP DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS
											ON ITS MEMBERS, AND THUS, WE CANNOT BE HELD RESPONSIBLE
											FOR THEIR CONDUCT.
										</p>
										<p className="pt-5 text-base font-thin ">
											<strong>8. LMITATION OF LIABILITY</strong>
											<br />
											NEITHER WE NOR ANY OWNER WILL BE LIABLE FOR ANY DAMAGES,
											DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR
											PUNITIVE, INCLUDING, WITHOUT LIMITATION, LOSS OF DATA,
											INCOME, PROFIT, OR GOODWILL, LOSS OF OR DAMAGE TO
											PROPERTY, AND CLAIMS OF THIRD PARTIES ARISING OUT OF YOUR
											ACCESS TO OR USE OF THE APP, SITE, OUR CONTENT, OR ANY
											MEMBER CONTENT, HOWEVER CAUSED, WHETHER BASED ON BREACH OF
											CONTRACT, TORT (INCLUDING NEGLIGENCE), PROPRIETARY RIGHTS
											INFRINGEMENT, PRODUCT LIABILITY, OR OTHERWISE.
											<br />
											THE FOREGOING SHALL APPLY EVEN IF WE WERE ADVISED OF THE
											POSSIBILITY OF SUCH DAMAGES. IF YOU BECOME DISSATISFIED IN
											ANY WAY WITH THE APP OR SITE, YOUR SOLE AND EXCLUSIVE
											REMEDY IS TO STOP YOUR USE OF THE APP AND SITE. YOU HEREBY
											WAIVE ANY AND ALL CLAIMS ARISING OUT OF YOUR USE OF THE
											APP OR SITE. BECAUSE SOME STATES DO NOT ALLOW THE
											DISCLAIMER OF IMPLIED WARRANTIES OR THE EXCLUSION OR
											LIMITATION OF CERTAIN TYPES OF DAMAGES, THESE PROVISIONS
											MAY NOT APPLY TO YOU. IF ANY PORTION OF THIS LIMITATION ON
											LIABILITY IS FOUND TO BE INVALID OR UNENFORCEABLE FOR ANY
											REASON, THEN OUR AGGREGATE LIABILITY SHALL NOT EXCEED ONE
											HUNDRED DOLLARS ($100).
											<br />
											THE LIMITATION OF LIABILITY HEREIN IS A FUNDAMENTAL
											ELEMENT OF THE BASIS OF THE BARGAIN AND REFLECTS A FAIR
											ALLOCATION OF RISK. THE APP AND SITE WOULD NOT BE PROVIDED
											WITHOUT SUCH LIMITATIONS AND YOU AGREE THAT THE
											LIMITATIONS AND EXCLUSIONS OF LIABILITY, DISCLAIMERS, AND
											EXCLUSIVE REMEDIES SPECIFIED HEREIN WILL SURVIVE EVEN IF
											FOUND TO HAVE FAILED IN THEIR ESSENTIAL PURPOSE. THE
											FOREGOING DOES NOT APPLY TO LIABILITY ARISING FROM ANY
											FRAUD OR FRAUDULENT MISREPRESENTATIONS, OR ANY OTHER
											LIABILITY THAT CANNOT BE LIMITED BY APPLICABLE LAW.
										</p>
										<p className="pt-5 text-base font-thin ">
											<strong>9. INDEMNITY</strong>
											<br />
											All actions and information you contribute on Wiingr are
											your responsibility. Therefore, you agree to indemnify,
											defend, release, and hold us, along with our partners,
											licensors, affiliates, contractors, officers, directors,
											employees, representatives, and agents, harmless from and
											against any claims, damages (actual and/or consequential),
											actions, proceedings, demands, losses, liabilities, costs,
											and expenses (including reasonable legal fees) incurred by
											us due to:
											<br />
											<ul className="pt-2 text-base font-thin list-inside">
												<li className="list-[disc]">
													Negligence, omissions, or wilful misconduct on your
													part
												</li>
												<li className="list-[disc]">Your use of the app</li>
												<li className="list-[disc]">
													Content uploaded or submitted by you
												</li>
												<li className="list-[disc]">Breach of these terms</li>
												<li className="list-[disc]">
													Violation of any law or rights of any third party
												</li>
											</ul>
											We reserve the sole right to settle, compromise, and pay
											any claims or causes of action brought against us without
											seeking your prior consent. If requested, you agree to
											cooperate fully and reasonably with us in the defense of
											any such claim.
											<br />
											You are not obligated to indemnify Wiingr Group for any
											unconscionable commercial practice, fraud, deception,
											false promise, misrepresentation, or concealment of
											material facts related to the App.
										</p>
										<p className="pt-5 text-base font-thin ">
											<strong>10. THIRD PARTY APP STORE</strong>
											<br />
											If you download the App from a Third Party Store, the
											following additional terms and conditions apply to you. If
											there's a conflict between the terms and conditions in
											this section and the rest of these Terms, the stricter or
											conflicting terms in this section apply, but only
											regarding the App and the Third Party Store. You
											acknowledge and agree that:
											<br />
											<ul className="pt-2 text-base font-thin list-inside">
												<li className="list-[disc]">
													These Terms are between you and the Wiingr Group, not
													the providers of the Third Party Store. The Wiingr
													Group is solely responsible for the App and its
													content, not the Third Party Store providers. If these
													Terms have usage rules for the App that conflict with
													or are less restrictive than the applicable terms of
													service of the Third Party Store where you got the
													App, the stricter or conflicting term of the Third
													Party Store will prevail and apply.
												</li>
												<li className="list-[disc]">
													The Third Party Store provider is not obligated to
													offer any maintenance or support services for the App.
													Any product warranties, whether express or implied by
													law, are solely the responsibility of the Wiingr Group
													unless effectively disclaimed. The Third Party Store
													provider bears no warranty obligations for the App,
													and any claims, losses, liabilities, damages, costs,
													or expenses due to any failure to meet a warranty are
													the sole responsibility of the Wiingr Group.
												</li>
												<li className="list-[disc]">
													The Wiingr Group, rather than the Third Party Store
													provider, is accountable for handling any claims that
													you or a third party may have concerning the App or
													your ownership and/or usage of the App. These claims
													include, but are not limited to: (i) product liability
													claims; (ii) assertions that the App does not adhere
													to any relevant legal or regulatory standards; (iii)
													complaints arising from consumer protection or similar
													laws; and/or (iv) allegations of intellectual property
													infringement.
												</li>
												<li className="list-[disc]">
													The Third Party Store provider and its subsidiaries
													are acknowledged as third-party beneficiaries of these
													Terms. Upon your acceptance of these Terms, the Third
													Party Store provider, from whom you acquired the App,
													will possess the right (and will be deemed to have
													accepted the right) to enforce these Terms against you
													as a third-party beneficiary.
												</li>
											</ul>
											If there's a conflict between the terms and conditions of
											a Third Party Store or mobile carrier and these Terms, the
											Third Party Store's or mobile carrier's terms and
											conditions will take precedence. We bear no responsibility
											and hold no liability for any goods or services obtained
											through a Third Party Store or mobile carrier. We
											recommend conducting any necessary investigation before
											engaging in any online transactions with these third
											parties.
										</p>
										<p className="pt-5 text-base font-thin ">
											<strong>
												11. DISPUTE RESOLUTION <br />
												Please carefully review the following arbitration
												agreement in this section ("Arbitration Agreement").
												Unless you choose to opt out as described in Section
												13(10) below, this Arbitration Agreement mandates that
												you and Wiingr Group resolve disputes through binding
												arbitration instead of in court, and it restricts how we
												can seek remedies from each other.
											</strong>
											<br />
											<br />
											<strong>1.</strong> WHEN DOES THIS ARBITRATION AGREEMENT
											APPLY? This Arbitration Agreement covers any disputes or
											claims of any nature whatsoever (whether based on
											contract, tort, statute, regulation, ordinance, fraud,
											misrepresentation, or any other legal or equitable theory)
											between you and the Wiingr Group arising from or related
											to the Terms, previous versions of the Terms, your use of
											our App, or any other aspect of your association with
											Wiingr. This includes claims or disputes that arise (but
											are not actually submitted for arbitration) before the
											effective date of these Terms. By entering into these
											Terms, you and Wiingr Group agree that such disputes or
											claims will be resolved through binding arbitration
											instead of in court, except that (i) you or Wiingr may
											pursue individual claims in small claims court if they
											qualify; and (ii) you or Wiingr may seek equitable relief
											in court for the infringement or misuse of intellectual
											property rights.
											<br />
											<br />
											<strong>2. </strong>NOTICE OF DISPUTE AND INFORMAL
											RESOLUTION: Before initiating arbitration, you and Wiingr
											Group must first notify each other in writing of the
											dispute at least 60 days beforehand. The notice to Wiingr
											Group must be sent by letter to our registered agent: CT
											Corporation, 1209 Orange Street, City of Wilmington,
											County of New Castle, Delaware 19801. It should include
											your name, current email address, mailing address, and
											telephone number, as well as the name, email address, and
											telephone number associated with your Wiingr account (if
											different from your current information). Additionally,
											describe the nature of the claim and the specific relief
											sought. You and Wiingr agree to engage in good faith
											discussions, via teleconference or videoconference, to
											attempt to informally resolve any covered claim or
											dispute. If either party is represented by counsel, they
											may participate in this process. Offers of judgment may be
											provided during this phase. All communications and offers
											made during the informal resolution process are
											confidential and not admissible in any subsequent
											proceeding, except for evidence that is otherwise
											admissible or discoverable. The informal dispute
											resolution conference must occur within 60 days of
											receiving the written notice, unless both parties agree to
											an extension. If the dispute remains unresolved after this
											conference, the claimant may then commence arbitration as
											per this Agreement. Completion of this informal resolution
											process is a prerequisite for filing any arbitration
											demand. Failure to comply constitutes a breach of this
											Agreement, and no arbitration demand shall be valid unless
											the written notice is provided, and good faith discussions
											are conducted. Any statute of limitations will be paused
											while the parties engage in the informal dispute
											resolution process outlined in this section.
											<br />
											<br />
											<strong>3. </strong>HOW DO YOU START THE ARBITRATION
											PROCESS? If the dispute remains unresolved after the
											60-day informal resolution period, either party may
											proceed to initiate arbitration. To begin the arbitration
											process, you or Wiingr Group must send a notice of the
											claim by certified mail, along with an individualized
											arbitration demand. The demand must include the name of
											the claiming party (either you or Wiingr Group), the
											mailing address, the email address or phone number
											associated with your Wiingr account (if applicable), and a
											detailed description of the dispute and the relief sought.
											Notice to Wiingr Group should be sent to our registered
											agent: CT Corporation, 1209 Orange Street, City of
											Wilmington, County of New Castle, Delaware 19801.
											<br />
											<br />
											<strong>4. </strong> WHAT ARE THE RULES OF ARBITRATION?
											The Federal Arbitration Act ("FAA") governs this
											Arbitration Agreement and applies to its interpretation
											and enforcement. In the event that the FAA does not apply
											to any issue regarding the interpretation or enforcement
											of this Arbitration Agreement, Texas law will apply, as
											outlined in Section 17 of the Terms. The applicable
											arbitration provider depends on your place of residence.
											If you reside in California, arbitration will be
											administered by ADR Services, Inc. under its most current
											arbitration rules and procedures, available at [link]. If
											you reside outside of California, arbitration will be
											administered by National Arbitration and Mediation under
											its most current Comprehensive Dispute Resolution Rules
											and Procedures, available at [link], or under its most
											current Supplemental Rules for Mass Arbitrations, as
											applicable, available at [link]. If the designated
											arbitration provider is unable to arbitrate due to an
											inability to administer the arbitration(s) consistent with
											the terms of this Arbitration Agreement, including those
											described in Section 13(8) (Mass Filings), the parties
											will select an alternative arbitral forum. If the parties
											cannot agree on an appropriate alternative arbitration
											provider, they will request a court of competent
											jurisdiction to appoint an arbitrator pursuant to 9 U.S.C.
											§ 5, who can administer the arbitration(s) consistent with
											the terms of this Arbitration Agreement. This Arbitration
											Agreement supersedes conflicting rules of the arbitration
											provider. The party initiating arbitration must pay all
											filing fees. Each party's responsibility for other
											administrative and arbitrator costs will be determined
											according to the applicable arbitration provider's rules,
											unless the arbitrator deems the claims frivolous. If a
											claim is deemed frivolous, the claimant must reimburse the
											respondent for its portion of the administrative, hearing,
											and/or other fees incurred due to the frivolous claim. You
											may be eligible for a waiver of certain arbitration costs
											under the applicable arbitration provider's rules or other
											applicable law. If you qualify for proceeding in forma
											pauperis in federal court, Texas state court, or the
											courts of your state of residence, are unable to obtain a
											waiver from the arbitration provider of any required
											filing fees, and the arbitration provider refuses to
											administer the arbitration without your payment of said
											fees, Wiingr Group will cover the filing fees on your
											behalf.
											<br />
											<br />
											<strong>5. </strong> WHAT CAN THE ARBITRATOR DECIDE? The
											arbitrator holds exclusive authority to resolve any and
											all threshold arbitrability issues, including the
											applicability, enforceability, or unconscionability of
											this Arbitration Agreement. However, courts retain
											exclusive authority to determine (i) the severance of any
											provision of this Arbitration Agreement and the
											consequences thereof, (ii) the enforceability of any or
											all mass arbitration procedures outlined in Section 13(8),
											(iii) compliance with conditions precedent to arbitration,
											and (iv) the availability of an arbitration provider to
											hear the arbitration(s) under Section 13(4). The
											arbitrator may grant motions dispositive of all or part of
											any claim. They are also empowered to award monetary
											damages and provide any non-monetary remedy or relief
											available under applicable law, the rules of the arbitral
											forum, and the Terms (including the Arbitration
											Agreement). The arbitrator will issue a written award and
											statement of decision outlining the essential findings and
											conclusions on which the award is based, including any
											awarded damages calculation. The arbitrator possesses the
											same authority to grant relief as a judge in a court of
											law. Their award is final and binding on both you and us.
											Pursuant to Section 17 of the Terms, any original action
											to compel arbitration under Section 4 of the FAA (or
											analogous state law) must be filed in a State or Federal
											Court located in Travis County, Texas.
											<br />
											<br />
											<strong>6.</strong> NO JURY TRIALS. By opting for
											arbitration, YOU AND WIINGR BOTH AGREE TO FORGO YOUR
											RIGHTS TO A JURY TRIAL. Instead, you and Wiingr Group are
											choosing to settle all claims and disputes through
											arbitration as outlined in this Arbitration Agreement,
											except as noted in Section 13(1) above. An arbitrator has
											the authority to grant the same damages and relief as a
											court and is bound by this Agreement as a court would be.
											However, arbitration does not involve a judge or jury, and
											judicial review of an arbitration award is severely
											limited.
											<br />
											<br />
											<strong>7.</strong> ONE AT A TIME. All disputes covered by
											this Arbitration Agreement MUST BE HANDLED INDIVIDUALLY
											AND NOT AS PART OF A CLASS ACTION OR COLLECTIVE
											PROCEEDING, AND BOTH YOU AND WIINGR GROUP RENOUNCE YOUR
											RIGHTS TO PARTICIPATE IN CLASS ACTIONS OR ANY OTHER FORM
											OF GROUP LITIGATION. However, this does not prohibit the
											use of bellwether arbitrations, global mediation, or batch
											arbitrations as outlined in Section 13(8) below, nor does
											it prevent the application of the arbitration provider’s
											fee schedules for mass arbitrations, if applicable. Only
											remedies available in an individual lawsuit are permitted,
											and claims from multiple customers or users cannot be
											arbitrated or combined with those of others, except as
											detailed in Section 13(8) below, nor does it prevent the
											application of the arbitration provider’s fee schedules
											for mass arbitrations, if applicable. The arbitration
											proceedings cannot be combined with other cases or
											parties, except as specified in Section 13(8) below, nor
											does it prevent the application of the arbitration
											provider’s fee schedules for mass arbitrations, if
											applicable. For mass arbitrations with ADR Services, Inc.,
											both you and Wiingr Group agree to adhere to its mass
											arbitration fee schedule, available at [link]. For mass
											arbitrations with National Arbitration and Mediation, both
											you and Wiingr Group agree to abide by its mass
											arbitration fee schedule, available at [link]. For mass
											arbitrations with any other arbitration provider, you
											agree to adhere to its mass arbitration fee schedule. If
											the arbitrator does not have a fee schedule for mass
											filings, then the claims must proceed in court. If a
											decision is made that applicable law prohibits enforcement
											of any of the limitations in this subsection regarding a
											specific claim, then that claim must be separated from the
											arbitration and brought to the State or Federal Courts
											located in Travis County, Texas. All other claims will be
											arbitrated. This subsection does not prevent you or Wiingr
											from participating in a settlement of claims on a
											class-wide basis.
											<br />
											<br />
											<strong>8.</strong> Mass Filings. If, at any time, 30 or
											more similar arbitration demands are brought against
											Wiingr or related parties by the same or coordinated legal
											representatives or entities, or if Wiingr Group brings 30
											or more similar arbitration demands or counterclaims
											against similarly-situated parties, within a 60-day period
											or in close proximity ("Mass Filing"), the following
											additional procedures shall apply:
											<br />
											<ul className="pt-3 text-base font-thin list-inside">
												<li className="list-[disc]">
													Acknowledgment of Mass Filing protocols. If you or
													Wiingr Group, or your or our legal representatives,
													file an arbitration demand that falls within the
													definition of Mass Filing mentioned above, both
													parties agree that the arbitration demand shall be
													subject to the additional protocols outlined in this
													Mass Filings subsection. In case of disagreement
													regarding whether a series of filings constitutes a
													Mass Filing, the arbitration provider shall resolve
													the dispute. Both parties also recognize that the
													resolution of the dispute may be delayed, and any
													relevant statute of limitations shall be paused from
													the time of the arbitration demand filing until the
													conclusion of the bellwether proceedings.
												</li>
												<li className="list-[disc]">
													Bellwether Arbitrations. Bellwether proceedings, where
													multiple disputes with similar claims against the same
													or related parties are involved, are encouraged by
													courts and arbitration administrators. The parties
													shall select ten individual arbitration claims (five
													per side), known as the "Initial Test Cases," to
													proceed to arbitration. Only the Initial Test Cases
													shall be submitted to the arbitrator, while all other
													claims shall be put on hold. This implies that filing
													fees will be paid only for the Initial Test Cases; for
													all other arbitration demands in a Mass Filing, the
													filing fees will be deferred, and neither You nor
													Wiingr will be obligated to pay such fees. If, as per
													this subsection, a party files non-Bellwether
													Arbitrations with the arbitration provider, those
													demands shall be put on hold by the arbitration
													provider until the Initial Test Cases are resolved.
													Unless the claims are settled in advance or the
													schedule is extended, the arbitrators will issue a
													final award for the Initial Test Cases within 120 days
													of the initial pre-hearing conference.
												</li>
												<li className="list-[disc]">
													Global Mediation. After the resolution of the Initial
													Test Cases, the parties agree to participate in a
													global mediation of all the remaining individual
													arbitration claims constituting the Mass Filing
													("Global Mediation"). Any filing costs associated with
													the non-Initial Test Cases will be deferred until the
													conclusion of the Initial Test Cases and subsequent
													Global Mediation. If the Parties fail to resolve the
													outstanding claims during the Global Mediation, they
													may choose to opt out of the arbitration process and
													proceed in court with the remaining claims.
													Notification of the opt-out must be provided in
													writing within 60 days of the conclusion of the Global
													Mediation. In the absence of an opt-out notice, the
													arbitrations may proceed and be administered by the
													arbitration provider as per the Batch Arbitration
													provision below and the arbitrator's fee schedule for
													mass filings, unless the parties agree otherwise in
													writing. Both parties also acknowledge that any
													relevant statute of limitations shall be paused during
													the global mediation process.
												</li>
												<li className="list-[disc]">
													Batch Arbitration. If a Mass Filing is not resolved by
													the Bellwether Arbitration and Global Mediation
													processes, the arbitration provider will (1)
													administer the remaining arbitration demands in
													batches of 100 demands per batch; (2) appoint one
													arbitrator for each batch; and (3) conduct each batch
													as a single consolidated arbitration with one set of
													filing and administrative fees per side per batch, one
													procedural calendar, one hearing (if any) in a
													location determined by the arbitrator, and one final
													award ("Batch Arbitration"). If the arbitration
													provider does not administer the Batch Arbitration
													with one set of filing and administrative fees per
													side per batch, then the arbitration provider's mass
													arbitration fee schedule shall apply.
												</li>
												<li className="list-[disc]">
													Enforcement of Subsection. A Court of competent
													jurisdiction in a venue permitted under Section 17 of
													the Terms and Conditions shall have the authority to
													enforce this subsection.
													<br />
												</li>
											</ul>
											<br />
											<strong>9. </strong> Offer of Judgment. At least 14 days
											prior to the arbitration hearing date, either party may
											present a written offer to the other party, proposing
											judgment on specific terms. If the offer made by one party
											is rejected by the other party and the rejecting party
											fails to obtain a more favorable award, they shall not be
											entitled to recover any post-offer costs they would
											otherwise be eligible for and must cover the offering
											party's costs from the time of the offer.
											<br />
											<strong>10. </strong> Opt-Out. Updates to Wiingr’s Terms
											do not offer a new chance for opting out of arbitration if
											you previously agreed to an earlier version of Wiingr’s
											Terms containing an arbitration clause and didn't properly
											opt out of arbitration at that time.
											<br />
											<ul className="pt-3 text-base font-thin list-inside">
												<li className="list-[disc]">
													Previous or existing users who previously agreed to
													arbitration can reject this updated Arbitration
													Agreement by following the opt-out method below.
													However, such users will still be bound by the most
													recent prior version of the Arbitration Agreement and
													will otherwise be bound by these Terms. Users who do
													not opt out of this updated Arbitration Agreement will
													be bound by it, applying to all disputes between such
													users and Wiingr, including those arising before the
													effective date of these Terms (but not yet filed in
													arbitration). Arbitration demands already filed with
													an arbitration provider before the effective date of
													this Arbitration Agreement and in compliance with a
													prior version are subject to the terms of the prior
													version.
												</li>
												<li className="list-[disc]">
													New users who create a Wiingr account for the first
													time on or after July 24, 2023, have the option to opt
													out of this Arbitration Agreement.
												</li>
												<li className="list-[disc]">
													To opt out of this Arbitration Agreement, you can send
													a written notice of your decision to opt out to:
													info.wiingr@gmail.com, within 31 days after first
													becoming subject to this Arbitration Agreement. Your
													notice must include your name, your Wiingr username
													(if any), the email address and/or phone number you
													used to set up your Wiingr account (if you have one),
													and an unequivocal statement that you want to opt out
													of this Arbitration Agreement. If you choose to opt
													out, all other parts of the Terms and any other
													agreements between you and Wiingr will still apply to
													you. Opting out of this Arbitration Agreement will not
													affect any other arbitration agreements you currently
													have, or may enter into in the future, with us.
													<br />
												</li>
											</ul>
											<strong>11. </strong>
											Severability. Unless otherwise stated in subsection 13(7),
											if any part or parts of this Arbitration Agreement are
											deemed invalid or unenforceable under the law, such
											specific part or parts shall be deemed null and void, and
											shall be severed from the agreement. The remainder of the
											Arbitration Agreement shall remain in full force and
											effect. If a court determines that any provision in the
											above Arbitration Agreement is invalid or unenforceable
											because it would impede the exercise of a non-waivable
											right to pursue public injunctive relief, then any dispute
											regarding the entitlement to such relief (and only that
											relief) must be separated from arbitration and may be
											adjudicated in court. All other disputes subject to
											arbitration according to the terms of the Arbitration
											Agreement shall be resolved through arbitration as
											outlined in the agreement.
											<br />
											<strong>12. </strong> Survival of Agreement. The
											provisions outlined in this Arbitration Agreement will
											persist even after the termination of your association
											with Wiingr.
										</p>
										<p className="pt-5 text-base font-thin ">
											<strong>12. USE OF THIRD PARTY INTEGRATIONS</strong>
											<br />
											By utilizing the Snap Lenses feature or any other AR
											capabilities offered by Snap akin to Snap Lenses, you
											agree to abide by the Snap Inc. Terms of Service, which
											encompass an arbitration clause along with a waiver of the
											right to engage in class-action lawsuits or class-wide
											arbitration. If you disagree with being bound by the Snap
											Inc. Terms of Service, it is advisable not to utilize the
											AR camera features provided by Snap within our App.
										</p>
										<p className="pt-5 text-base font-thin ">
											<strong>13. TERMINATION AND REMEDIES</strong>
											<br />
											These Terms become effective upon your acceptance (as
											detailed in the preamble) and remain in effect until
											terminated in accordance with the provisions herein. You
											have the option to delete your Account at any time by
											accessing the App, navigating to the "Settings" tab
											(identified by the gear icon), and following the provided
											instructions to terminate your account. It's important to
											note that upon deleting your Account, any active
											subscription will persist until the conclusion of the
											current subscription period for which applicable fees have
											been settled, and you will not be eligible for a refund
											unless otherwise stipulated in Section 5. Furthermore,
											besides deleting your account, you must also manage or
											cancel any recurring subscriptions procured via a Third
											Party Store (such as iTunes or Google Play) to prevent
											further charges.
											<br />
											<br />
											In the event that Wiingr Group, at its sole discretion,
											determines that you have violated any aspect of these
											Terms, engaged in misuse of the App, or demonstrated
											behavior that Wiingr Group deems inappropriate or unlawful
											(whether within or outside the App), Wiingr Group reserves
											the right to take the following actions: (a) issue a
											warning via email (sent to any email addresses you have
											provided to Wiingr Group) notifying you of the violation
											of the Terms; (b) remove your User Content; (c) suspend or
											terminate your Account; (d) cancel your subscription(s)
											without providing a refund; (e) notify and/or cooperate
											fully with law enforcement authorities for further action
											regarding your User Content; and/or (f) pursue any other
											actions deemed appropriate by Wiingr Group. You
											acknowledge that all terminations for cause will be at the
											sole discretion of Wiingr Group, and Wiingr Group shall
											not be held liable to you or any third party for the
											termination of your Account.
											<br />
											<br />
											Termination of these Terms or your Account entails the
											revocation of access to your Account, along with all
											associated information and content contained within it.
											Should your account be terminated, whether by you or by
											Wiingr Group, for any reason, certain provisions of these
											Terms will continue to remain in effect even after
											termination. These include, but are not limited to, the
											Arbitration Agreement, ownership provisions, warranty
											disclaimers, and limitation of liability. The handling and
											deletion of your information will be carried out in
											accordance with our Privacy Policy.
										</p>
										<p className="pt-5 text-base font-thin ">
											<strong>14. MISCELLANEOUS</strong>
											<br />
											Before you start using Wiingr, there are a few additional
											points we need to cover.
											<br />
											<br />
											These Terms, subject to occasional updates, represent the
											complete agreement between you and the Wiingr Group. They
											override any prior agreements, whether written or verbal,
											between us, except for the Privacy Policy. This provision
											does not affect liability in cases of fraudulent
											misrepresentation.
											<br />
											<br />
											The Wiingr Group has taken reasonable measures to ensure
											the accuracy, availability, and currency of the
											information on Wiingr, presenting it "as is" and "as
											available." However, the Wiingr Group does not provide any
											express or implied warranty or representation regarding
											the information on Wiingr. Your use of Wiingr and its
											materials is at your own risk. The Wiingr Group shall not
											be held liable for any loss resulting from data
											transmission, usage, or inaccurate Member Content.
											<br />
											<br />
											You are responsible for ensuring that any material
											obtained from Wiingr is free of viruses or other harmful
											components. Wiingr may not be uninterrupted or error-free,
											and defects may not always be corrected. The Wiingr Group
											does not guarantee that Wiingr or its server are free from
											viruses, bugs, spyware, Trojan horses, or similar
											malicious software. The Wiingr Group is not liable for any
											damage to your computer hardware, software, or other
											equipment, including damage resulting from security
											breaches, viruses, bugs, tampering, fraud, errors,
											interruptions, defects, delays, or other technical
											malfunctions. Communications between you and Wiingr Group
											may occur electronically, whether through the App, email,
											or posted notices within the App. For contractual
											purposes, you consent to receive communications from
											Wiingr Group electronically and agree that all terms,
											agreements, notices, disclosures, and other communications
											provided by Wiingr Group electronically satisfy any legal
											requirement that such communications be in writing. This
											consent does not affect your statutory rights, including
											those under the Electronic Signatures in Global and
											National Commerce Act at 15 U.S.C. Sec. 7001 et. seq.
											<br />
											<br />
											As Wiingr evolves, we may need to update these Terms, so
											we reserve the right to modify, amend, or change them at
											any time ("Change"). If we make any Changes, we will post
											them on this page and indicate the Effective Date of the
											updates at the bottom of the Terms. In some cases, we may
											also notify you of Changes via email. Occasionally, we may
											ask for your agreement to the Changes, but we will inform
											you accordingly. It's important to check this page
											regularly for any updates—we aim to keep our users well
											informed. Your continued use of Wiingr after any Change
											constitutes your acceptance of the Change, and you will be
											legally bound by the new updated Terms. If you do not
											agree with any Changes to the Terms, please discontinue
											your use of Wiingr immediately.
											<br />
											<br />
											If, for any reason, any provision of the Terms is declared
											illegal, invalid, or otherwise unenforceable by a court of
											competent jurisdiction, that specific provision shall be
											severed and deleted from the Terms. The remainder of the
											Terms shall remain in full force and effect, continuing to
											be binding and enforceable. No failure or delay in
											exercising any right, power, or privilege under the Terms
											shall constitute a waiver of such right or acceptance of
											any variation of the Terms. Additionally, any single or
											partial exercise of a right, power, or privilege by either
											party shall not preclude any further exercise of that
											right or the exercise of any other right, power, or
											privilege.
											<br />
											You confirm and assure that:
											<br />
											<ul className="pt-2 text-base font-thin list-inside">
												<li className="list-[disc]">
													You are not situated in a country subject to a U.S.
													Government embargo or labeled by the U.S. Government
													as a "terrorist supporting" nation.
												</li>
												<li className="list-[disc]">
													You are not included on any U.S. Government roster of
													banned or restricted entities.
													<br />
												</li>
											</ul>
											By using the App, you acknowledge and agree that Wiingr
											operates as a global service with servers located in
											various countries, including the United States. If you
											reside in a jurisdiction with data protection regulations,
											the protection of your personal data may not meet the
											standards of your home country. By providing your personal
											information, upgrading services, or using Wiingr's
											applications, you consent to the transfer, storage, and
											processing of your data in these locations. Furthermore,
											the App may contain links to third-party websites or
											resources, for which you understand and accept that we
											assume no responsibility or liability.
											<br />
											<ul className="pt-2 text-base font-thin list-inside">
												<li className="list-[disc]">
													the availability or accuracy of such websites or
													resources
												</li>
												<li className="list-[disc]">
													the content, products, or services on or available
													from such websites or resources
													<br />
												</li>
											</ul>
											Links to such websites or resources do not imply
											endorsement. You accept full responsibility for and assume
											all risks associated with your use of any such websites or
											resources. Framing, in-line linking, or any other methods
											of association with the App are strictly prohibited
											without obtaining our prior written approval. These Terms,
											along with any rights and licenses granted herein, cannot
											be transferred or assigned by you, but may be assigned by
											us without any limitations. In the event of any
											inconsistency between this English language version and
											any translated copies of the Terms, the English version
											shall prevail. If you have any inquiries, complaints, or
											claims regarding the App, please contact us at
											info.wiingr@gmail.com.
										</p>
									</p>
								</>
							)}
						/>
					</section>
				</main>
			</Layout>
		</>
	);
}

export default TermsOfService;
