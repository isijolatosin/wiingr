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
          className="relative px-4 pt-16 pb-10 mx-auto sm:pt-24 max-w-max-content-width"
        >
          {showIcon && (
            <ScrollLink
              to="main"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
            >
              <div
                className={[
                  "fixed right-4 bottom-20 sm:right-12 sm:bottom-28 rounded-full w-6 h-6 p-1",
                  siteTheme.headingBackground,
                ].join(" ")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={[
                    "w-full h-full",
                    state.isDay ? "text-brandwhite" : "text-deepGrey",
                  ].join(" ")}
                >
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
                    Welcome to Wiingr's Terms and Conditions of Use (these
                    “Terms”). This is a contract between you and the Wiingr (as
                    defined further below) and we want you to know yours and our
                    rights before you use the Wiingr application. Please take a
                    few moments to read these Terms before enjoying the App,
                    because once you access, view or use the App, you are going
                    to be legally bound by these Terms. Please also read our
                    Community Guidelines and our Privacy Policy.
                    <br />
                    <strong>
                      Please be aware that if you subscribe to services for a
                      term (the “Initial Term”), then the terms of your
                      subscription will be automatically renewed for additional
                      periods of the same duration as the Initial Term at
                      Wiingr’s then-current fee for such services, unless you
                      cancel your subscription in accordance with Section 5
                      below.
                    </strong>
                    <br />
                    You should also note that Section 13 of these Terms contains
                    provisions governing how claims that you and Wiingr Group
                    have against each other are resolved. In particular, it
                    contains an arbitration agreement that will, with limited
                    exceptions, require disputes between us to be submitted to
                    binding and final arbitration. You have a right to opt out
                    of the arbitration agreement pursuant to Section 13 below.
                    If you do not opt out of the arbitration agreement in
                    accordance with Section 13, (1) you will only be permitted
                    to pursue claims and seek relief against us on an individual
                    basis only; and (2) you are waiving your right to seek
                    relief in a court of law and to have a jury trial on your
                    claims.
                    <br />
                    And a notice to California subscribers: You may cancel your
                    subscription and request a refund at any time prior to
                    midnight of the third business day following the date you
                    subscribed. If you subscribed using your Apple ID, refunds
                    are handled by Apple, not Wiingr. If you wish to request a
                    refund, please visit Apple Support. If you subscribed using
                    your Google Play Store account or through Wiingr, please
                    contact customer support.
                  </p>
                  <p className="pt-5 text-base font-thin ">
                    <strong> 1. RULES</strong>
                    Before you can use the App, you will need to register for an
                    account (“Account”). In order to create an Account you must:
                    <br />
                    <ol>
                      <li>
                        be at least 18 years old or the age of majority to
                        legally enter into a contract under the laws of your
                        home country if that happens to be greater than 18;
                      </li>
                      <li>
                        {" "}
                        be legally permitted to use the App by the laws of your
                        home country.
                      </li>
                    </ol>
                    Please note that we monitor for underage use and we will
                    terminate, suspend or ask you to verify your Account if we
                    have reason to believe that you may be underage. You can
                    create an Account via manual registration, or by using your
                    Facebook login details. For more information about what
                    information we use and how we use it, please check out our
                    Privacy Policy. Unfortunately, we cannot allow you to use
                    another person’s Account or to share your Account with any
                    other person without permission. You can delete your Account
                    at any time by going to the ‘Settings’ page when you are
                    logged in and clicking on the ‘Delete account’ link. Your
                    Account will be deleted immediately but it may take a little
                    while for Your Content to be completely removed from the
                    App. Your profile information will be treated in accordance
                    with our Privacy Policy. We use a combination of automated
                    systems, user reports and a team of moderators to monitor
                    and review accounts and content to identify breaches of
                    these Terms. We reserve the right at our sole discretion to
                    terminate or suspend any Account, restrict access to the
                    App, or make use of any operational, technological, legal or
                    other means available to enforce the Terms (including
                    without limitation blocking specific IP addresses). For
                    users residing in the European Union (“EU”), we will notify
                    you when we take action against your Account or Your Content
                    unless it is not appropriate for us to do so (for example,
                    we are not permitted by law enforcement agencies). For all
                    other users, we may take such action, at any time without
                    liability and without the need to give you prior notice.
                    Without limiting the foregoing in any way and unless
                    otherwise prohibited by mandatory laws in the country in
                    which you reside, we expressly reserve the right to
                    terminate or suspend your Account without notice (1) for
                    violating these Terms, (2) due to your conduct on the App,
                    or your conduct with other users of the App (including your
                    “offline” conduct), if we, in our sole discretion, determine
                    your conduct was inappropriate or improper, (3) if we or our
                    affiliates, in our or their sole discretion, determine your
                    conduct on other apps operated by our affiliates was
                    inappropriate or improper, or (4) for any reasons whatsoever
                    that we deem, in our sole discretion, justifies termination.
                    If your Account is terminated or suspended, you agree you
                    will not receive a refund for any paid service or features
                    you have already been charged for. If you believe that we’ve
                    made a mistake in taking action on your Account or Your
                    Content (defined below), you can appeal using the processes
                    outlined within the app or by getting in touch using our
                    contact us form. For users residing in the EU, you have
                    additional rights under the Digital Services Act to: (i)
                    access third party out-of-court dispute settlement
                    processes; (ii) seek remedies from the courts in the EU
                    member state in which you live; and (iii) lodge a complaint
                    with your local EU regulatory authority. You may not access,
                    tamper with, or use non-public areas of the App or our
                    systems. Certain portions of the App may not be accessible
                    if you have not registered for an Account.
                  </p>
                  <p className="pt-5 text-base font-thin ">
                    <strong>2. CONTENT </strong>
                    Content we do not allow on Wiingr Our Community Guidelines
                    form part of these Terms and outline what content and
                    conduct is accepted on and off our App. You agree to comply
                    with our Community Guidelines as may be updated every so
                    often. We want our users to be able express themselves as
                    much as possible on Wiingr, but we have to impose
                    restrictions on certain content which:{" "}
                    <ul>
                      <li>
                        is illegal or encourages, promotes or incites any
                        illegal activity;
                      </li>
                      Is harmful to minors;<li>Is defamatory or libellous;</li>
                      <li>
                        Itself, or the posting of which, infringes any third
                        party’s rights (including, without limitation,
                        intellectual property rights and privacy rights);
                      </li>
                      <li>
                        Shows another person which was created or distributed
                        without that person’s consent;
                      </li>
                      <li>
                        Contains language or imagery which could be deemed
                        offensive or is likely to harass, upset, embarrass,
                        alarm or annoy any other person;
                      </li>
                      <li>
                        Is obscene, pornographic, violent or otherwise May
                        offend human dignity;
                      </li>
                      <li>
                        Is abusive, insulting or threatening, discriminatory or
                        which promotes or encourages Racism, sexism, hatred or
                        bigotry;
                      </li>
                      <li>
                        Relates to commercial activities (including, without
                        limitation, sales, competitions and advertising, links
                        to other websites or premium line telephone numbers);
                      </li>
                      <li>
                        Involves the transmission of “junk” mail or “spam”;
                      </li>
                      <li>
                        Impersonates or intends to deceive or manipulate a
                        person (including, without limitation, scams and
                        inauthentic behaviour);
                      </li>
                      <li>
                        Contains any spyware, adware, viruses, corrupt files,
                        worm programs or other malicious code designed to
                        interrupt, damage or limit the functionality of or
                        disrupt any software, hardware, telecommunications,
                        networks, servers or other equipment, Trojan horse or
                        any other material designed to damage, interfere with,
                        wrongly intercept or expropriate any data or personal
                        information whether from Wiingr or otherwise; or in any
                        other way violates our Community Guidelines.
                      </li>
                    </ul>
                  </p>
                  <p className="pt-5 text-base font-thin ">
                    <strong>Your Content </strong>
                    You agree that Your Content must comply with our Community
                    Guidelines as updated from time to time. As Your Content is
                    unique, you are responsible and liable for Your Content. You
                    will indemnify, defend, release, and hold us harmless from
                    any claims made in connection with Your Content. Sorry that
                    was a bit of a mouthful, but you are what you post! You may
                    not display any personal contact or banking information on
                    your individual profile page whether in relation to you or
                    any other person (for example, names, home addresses or
                    postcodes, telephone numbers, email addresses, URLs,
                    credit/debit card or other banking details). If you do
                    choose to reveal any personal information about yourself to
                    other users, whether via email or otherwise, it is at your
                    own risk. We encourage you to use the same caution in
                    disclosing details about yourself to third parties online as
                    you would under any other circumstances. As Wiingr is a
                    public community, Your Content will be visible to other
                    users of the App all around the world - so make sure you are
                    comfortable sharing Your Content before you post. As such,
                    you agree that Your Content may be viewed by other users and
                    any person visiting, participating in or who is sent a link
                    to the App (e.g. individuals who receive a link to a user’s
                    profile or shared content from other Wiingr Users). By
                    uploading Your Content on Wiingr, you represent and warrant
                    to us that you have all necessary rights and licences to do
                    so, and automatically grant us a non-exclusive, royalty
                    free, perpetual, worldwide licence to use Your Content in
                    any way (including, without limitation, editing, copying,
                    modifying, adapting, translating, reformatting, creating
                    derivative works from, incorporating into other works,
                    advertising, distributing and otherwise making available to
                    the general public such Content, whether in whole or in part
                    and in any format or medium currently known or developed in
                    the future). We may assign and/or sub-license the above
                    licence to our affiliates and successors without any further
                    approval by you. We do not have any obligation to store Your
                    Content - if it’s important, you should make a copy. So that
                    we can prevent the unconsented use of Your Content by other
                    members or third parties outside of Wiingr, you authorise us
                    to act on your behalf with respect to such infringing and/or
                    unauthorised uses. This expressly includes the authority,
                    but not the obligation, for us to send takedown notices
                    (including, without limitation, pursuant to 17 U.S.C. §
                    512(c)(3) (i.e., DMCA Takedown Notices)) on your behalf if
                    Your Content is taken and used by third parties outside of
                    Wiingr.
                  </p>
                  <p className="pt-5 text-base font-thin ">
                    <strong>Member Content</strong>
                    Other members of Wiingr will also share content via the App.
                    Member Content belongs to the user who posted the content
                    and is stored on our servers and displayed via the App at
                    the direction of the user providing the Member Content. You
                    do not have any rights in relation to other users’ Member
                    Content, and you may only use other Wiingr users’ personal
                    information to the extent that your use of it matches
                    Wiingr’s purpose of allowing people to meet one another. You
                    may not use other users’ information for commercial
                    purposes, to spam, to harass, stalk or to make unlawful
                    threats. We reserve the right to terminate your Account if
                    you misuse other users’ information. Member Content is
                    subject to the terms and conditions of Sections 512(c)
                    and/or 512(d) of the Digital Millennium Copyright Act 1998.
                    If you have a complaint about Member Content, please see the
                    Digital Millennium Copyright Act section below for more
                    information
                  </p>
                  <p className="pt-5 text-base font-thin ">
                    <strong>Our Content</strong>
                    You may be wondering what happens to the rest of the Content
                    on Wiingr. Well, it belongs to us! Any other text, content,
                    graphics, user interfaces, trademarks, logos, sounds,
                    artwork, and other intellectual property appearing on
                    Wiingr, as well as the Wiingr software and database(s), are
                    owned, controlled or licensed by us and are protected by
                    copyright, trademark, data, database rights and/or other
                    intellectual property law rights. All right, title and
                    interest in and to Our Content remains with us at all times.
                    We grant you a non-exclusive, limited, personal,
                    non-transferable, revocable, licence to access and use Our
                    Content, without the right to sublicense, under the
                    following conditions: <br />
                    <ol>
                      <li>
                        you shall not use, sell, modify, or distribute Our
                        Content except as permitted by the functionality of the
                        App;
                      </li>
                      you
                      <li>
                        shall not use our name in metatags, keywords and/or
                        hidden text;{" "}
                      </li>
                      <li>
                        you shall not create derivative works from Our Content
                        or scrape, disable, decompile, analyse or in any way
                        commercially exploit Our Content, in whole or in part,
                        in any way; and
                      </li>{" "}
                      <li>
                        {" "}
                        you shall use Our Content for lawful purposes only.
                        <br />
                      </li>
                    </ol>{" "}
                    We reserve all other rights. No Obligation to Pre-Screen
                    Content. While we don’t assume any obligation to pre-screen
                    any of Your Content or any Member Content, there may be
                    times where we need to step in to help keep our members
                    safe, and we reserve the right to review, pre-screen, refuse
                    and/or remove any Member Content and Your Content, including
                    content exchanged between users in direct messages as set
                    out in these Terms. Use of Recommender Systems. We have
                    developed matching algorithms to predict your compatibility
                    with other users and so we can show you people we think are
                    a good match for you. You can learn more about our use of
                    recommender systems and the main parameters we use in our
                    Privacy Policy.
                  </p>
                  <p className="pt-5 text-base font-thin ">
                    <strong>4. RESTRICTIONS</strong>
                    You agree to:
                    <ul>
                      <li>
                        comply with all applicable laws, including without
                        limitation, privacy laws, intellectual property laws,
                        anti-spam laws, equal opportunity laws and regulatory
                        requirements
                      </li>
                      <li>
                        use your real name and real age in creating your Wiingr
                        account and on your profile
                      </li>
                      <li>
                        use the services in a safe, inclusive and respectful
                        manner and adhere to our Community Guidelines at all
                        times.
                      </li>
                    </ul>
                    You agree that you will not:
                    <ul>
                      <li>
                        act in an unlawful or disrespectful manner including
                        being dishonest, abusive or discriminatory
                      </li>
                      <li>
                        misrepresent your identity, your age, your current or
                        previous positions, qualifications or affiliations with
                        a person or entity
                      </li>
                      <li>
                        disclose information that you do not have the consent to
                        disclose
                      </li>
                      <li>stalk or harass any other user of the App</li>
                      <li>
                        use the App in any deceptive, inauthentic or
                        manipulative way, including engaging in conduct or
                        distributing content relating to scams, spam,
                        inauthentic profiles or commercial and promotional
                        activity
                      </li>
                      <li>
                        submit appeals, reports, notices or complaints that are
                        manifestly unfounded
                      </li>
                      <li>
                        develop, support or use software, devices, scripts,
                        robots, other types of mobile code or any other means or
                        processes (including crawlers, browser plugins and
                        add-on or other technology) to scrape or otherwise
                        exfiltrate from Wiingr or its services, or otherwise
                        copy profiles and other data from the services.
                      </li>{" "}
                    </ul>
                    We don’t like users misbehaving in the Wiingr community. You
                    can report any abuse or complain about Member Content by
                    contacting us, outlining the abuse and/or complaint. You can
                    also report a user directly from a profile or in chat by
                    clicking the ‘Block & Report’ link. We reserve the right to
                    investigate any possible violations of these Terms, any
                    Wiingr user’s rights, or any third party rights and we may,
                    in our sole discretion, immediately terminate any user’s
                    right to use of the App without prior notice, as set out
                    further in Section 1 above, and/or remove any improper,
                    infringing or otherwise unauthorised Member Content
                    submitted to the App.We don’t control any of the things our
                    users say or do, so you are solely responsible for your
                    interactions with other users of the App. <br />
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
                      PURPOSE. <br />
                    </strong>
                    You agree to, and hereby do, release Wiingr Group and its
                    successors from any claims, demands, losses, damages,
                    rights, and actions of any kind, including personal
                    injuries, death and property damage, that either directly or
                    indirectly arises from your interactions with or conduct of
                    other users of the App. If you are a California resident,
                    you hereby waive California Civil Code Section 1542, which
                    states, “A general release does not extend to claims that
                    the creditor or releasing party does not know or suspect to
                    exist in his or her favor at the time of executing the
                    release and that, if known by him or her, would have
                    materially affected his or her settlement with the debtor or
                    released party.” The foregoing release does not apply to any
                    claims, demands, or any losses, damages, rights and actions
                    of any kind, including personal injuries, death or property
                    damage for any unconscionable commercial practice by Wiingr
                    Group or for such party’s fraud, deception, false, promise,
                    misrepresentation or concealment, suppression or omission of
                    any material fact in connection with the App. <br />
                    Scraping or replicating any part of the App without our
                    prior consent is expressly prohibited. This includes by any
                    means (automated or otherwise) other than through our
                    currently available, published interfaces - unless you have
                    been specifically allowed to do so in a separate agreement
                    with us.
                  </p>
                  <p className="pt-5 text-base font-thin ">
                    <strong>5. PRIVACY</strong>
                    For information about how the Wiingr Group collects, uses,
                    and shares your personal data, please check out our Privacy
                    Policy. By using Wiingr, you acknowledge that we may use
                    such data in accordance with our Privacy Policy.
                  </p>
                  <p className="pt-5 text-base font-thin ">
                    <strong>6. PAYMENT TERMS</strong>
                    Generally. <br />
                    Wiingr may offer products and services for purchase on the
                    App (“In-App Purchase”). If you choose to make an In-App
                    Purchase, you acknowledge and agree that additional terms,
                    disclosed to you at the point of purchase, may apply, and
                    that such additional terms are incorporated herein by
                    reference. <br />
                    Subscriptions and Auto-Renewal: Wiingr may offer some
                    services as automatically-renewing subscriptions, e.g., a
                    one-week subscription, one-month subscription, or
                    three-month subscription (“Premium Services”). IF YOU
                    PURCHASE AN AUTOMATICALLY RENEWING SUBSCRIPTION, YOUR
                    SUBSCRIPTION WILL RENEW AT THE END OF THE PERIOD, UNLESS YOU
                    CANCEL, AT WIINGR’S THEN-CURRENT PRICE FOR SUCH
                    SUBSCRIPTIONS. To avoid charges for a new subscription
                    period, you must cancel, as described below, before the end
                    of the then-current subscription period. Deleting your
                    account or deleting the application from your device does
                    not cancel your subscription. You will be given notice of
                    changes in the pricing of the Premium Services to which you
                    have subscribed and an opportunity to cancel. If Wiingr
                    changes these prices and you do not cancel your
                    subscription, you agree that you will be charged at Wiingr’s
                    then-current pricing for subscription.
                    <br />
                    Cancelling Subscriptions. If you purchased a subscription
                    directly from Wiingr, you may cancel or change your Payment
                    Method via the payment settings option under your profile.
                    If you purchased a subscription through a Third Party Store,
                    such as the Apple App Store or the Google Play Store, you
                    will need to access your account with that Third Party Store
                    and follow instructions to change or cancel your
                    subscription. If you cancel your subscription, you may use
                    your subscription until the end of the period you last paid
                    for, but (i) you will not (except as set forth in the
                    subsection entitled “Refunds” below) be eligible for a
                    prorated refund, (ii) your subscription will not be renewed
                    when that period expires and (iii) you will then no longer
                    be able to use the Premium Services or In-App Purchases
                    enabled by your subscription.
                    <br />
                    Because our Services may be utilised without a subscription,
                    canceling your subscription does not remove your profile
                    from our Services. If you wish to fully terminate your
                    account, you must terminate your account as set forth in
                    Section 15. <br />
                    The Wiingr Group operates a global business, and our pricing
                    varies by a number of factors. We frequently offer
                    promotional rates - which can vary based on region, length
                    of subscription, bundle size and more. We also regularly
                    test new features and payment options. The Wiingr Group
                    reserves the right, including without prior notice, to limit
                    the available quantity of or discontinue making available
                    any product, feature, service or other offering; to impose
                    conditions on the honouring of any coupon, discount, offer
                    or other promotion; to bar any user from making any
                    transaction; and to refuse to provide any user with any
                    product, service or other offering or to honour any offer.{" "}
                    <br />
                    Free Trials. If you sign up for a free trial and do not
                    cancel, your trial may convert into a paid subscription and
                    your Payment Method will be charged at the then-current
                    price for such subscription. Once your free trial converts
                    to a paid subscription, your paid subscription will continue
                    to automatically renew at the end of each period, and your
                    Payment Method will be charged, until you cancel. To avoid
                    charges for a new subscription period, you must cancel
                    before the end of the then-current subscription period or
                    free trial period as described above. Deleting your account
                    or deleting the application from your device does not cancel
                    your free trial. If you have signed up for a free trial on
                    Wiingr through the Apple Store or Google Play Store
                    previously, you will not be eligible for another free trial
                    and you will then be automatically signed up to a
                    subscription and charged as described in this paragraph.
                    <br />
                    <strong>
                      Refunds. Generally, all charges for purchases are
                      nonrefundable, and there are no refunds or credits for
                      partially used periods
                      <br />
                    </strong>
                    For subscribers residing in Arizona, California, Colorado,
                    Connecticut, Illinois, Iowa, Minnesota, New York, North
                    Carolina, Ohio, Rhode Island, and Wisconsin, the terms below
                    apply:
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
                    MANNER AS YOU REQUEST A REFUND AS DESCRIBED BELOW. <br />
                    To request a refund: In addition to cancelling, eligible
                    subscribers must request a refund to receive one. If you
                    subscribed using your Apple ID, refunds are handled by
                    Apple, not Wiingr. To request a refund, go to iTunes, click
                    on your Apple ID, select “Purchase history,” find the
                    transaction and hit “Report Problem”. You can also submit a
                    request at Apple Support.
                    <br />
                    For all other purchases: please contact customer support
                    with your order number (you can find the order number in the
                    order confirmation email, or if you purchased from the
                    Google Play Store by logging in to Google Wallet). You may
                    also mail or deliver a signed and dated notice which states
                    that you, the buyer, are cancelling this agreement, or words
                    of similar effect. Please also include the email address or
                    mobile number associated with your account along with your
                    order number. This notice shall be sent to: Wiingr, Attn.:
                    Cancellations, P.O. Box 300940, Austin, Texas, 78703. <br />
                    <strong>Taxes:</strong>The payments required under this
                    Section 5 do not include any Sales Tax that may be due in
                    connection with the Premium Services provided under these
                    Terms. If Wiingr determines it has a legal obligation to
                    collect a Sales Tax from you in connection with these Terms,
                    Wiingr will collect such Sales Tax in addition to the
                    payments required under this Section 5. If any Premium
                    Services, or payments for any Premium Services, under these
                    Terms are subject to any Sales Tax in any jurisdiction and
                    you have not remitted the applicable Sales Tax to Wiingr,
                    you will be responsible for the payment of such Sales Tax
                    and any related penalties or interest to the relevant tax
                    authority. As used herein, “Sales Tax” means any sales or
                    use tax and any other tax measured by sales proceeds that is
                    the functional equivalent of a sales tax where the
                    applicable taxing jurisdiction does not otherwise impose a
                    sales or use tax.
                    <p className="pt-5 text-base font-thin ">
                      <strong>7. VIRTUAL ITEMS</strong>
                      At times, you may be able to purchase a limited, personal,
                      non-transferable, non-sublicensable, revocable licence to
                      access special limited-use features from Wiingr, referred
                      to here as “Virtual Items.” You can only purchase Virtual
                      Items through Wiingr or Wiingr’s partners. Virtual Items
                      represent a limited license right governed by this
                      Agreement, and, except as otherwise prohibited by
                      applicable law, no title or ownership in or to Virtual
                      Items is being transferred or assigned to you. This
                      Agreement, and your purchase of Virtual Items, does not
                      constitute the sale of any rights in Virtual Items
                      <br />
                      Any Virtual Item balance shown in your account does not
                      constitute a real-world balance or reflect any stored
                      value, but instead shows the extent of your licence to
                      access Virtual Items. Virtual Items do not incur fees for
                      non-use. Your licence in Virtual Items will terminate on
                      the earlier of Wiingr ceasing provision of services or
                      your account closing or terminating. Wiingr may also at
                      times provide Virtual Items as bonuses to, or parts of,
                      paid subscriptions for its services. Your ability to use
                      Virtual Items you have access to in this manner may
                      terminate at the end of each of your subscription periods
                      and your access to Virtual Items may not “roll over” or
                      accumulate through additional subscription periods. Your
                      access to Virtual Items gained through subscriptions may
                      also end if you cancel your subscription.
                      <br />
                      Wiingr, in its sole discretion, reserves the right to
                      charge fees for the right to access or use Virtual Items
                      and/or may distribute Virtual Items with or without
                      charge. Wiingr may manage, regulate, control, modify, or
                      eliminate Virtual Items at any time, including taking
                      actions that may impact the perceived value or purchase
                      price, if applicable, of any Virtual Items and Wiingr
                      shall have no liability to you for doing so. You shall not
                      sell, redeem, or otherwise transfer Virtual Items to any
                      person or entity. Virtual Items may only be redeemed
                      through our Services. <br />
                      ALL PURCHASES AND REDEMPTIONS OF VIRTUAL ITEMS MADE
                      THROUGH OUR SERVICES ARE FINAL AND NON-REFUNDABLE. YOU
                      ACKNOWLEDGE THAT Wiingr IS NOT REQUIRED TO PROVIDE A
                      REFUND FOR ANY REASON, AND THAT YOU WILL NOT RECEIVE MONEY
                      OR OTHER COMPENSATION FOR UNUSED VIRTUAL ITEMS WHEN AN
                      ACCOUNT IS CLOSED, WHETHER SUCH CLOSURE WAS VOLUNTARY OR
                      INVOLUNTARY.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>
                        7. PUSH NOTIFICATIONS; LOCATION-BASED FEATURES
                      </strong>
                      We may provide you with emails, text messages, push
                      notifications, alerts and other messages related to the
                      App and/or the Wiingr services, such as enhancements,
                      offers, products, events, and other promotions. After
                      downloading the App, you will be asked to accept or deny
                      push notifications/alerts. If you deny, you will not
                      receive any push notifications/alerts. If you accept, push
                      notifications/alerts will be automatically sent to you. If
                      you no longer wish to receive push notifications/alerts
                      from the App, you may opt out by changing your
                      notification settings on your mobile device. With respect
                      to other types of messaging or communications, such as
                      emails, text messages, etc., you can unsubscribe or opt
                      out by either following the specific instructions included
                      in such communications, or by emailing us with your
                      request at info.wiingr@gmail.com. <br />
                      The App may allow access to or make available
                      opportunities for you to view certain content and receive
                      other products, services and/or other materials based on
                      your location. To make these opportunities available to
                      you, the App will determine your location using one or
                      more reference points, such as GPS, Bluetooth and/or
                      software within your mobile device. If you have set your
                      mobile device to disable GPS, Bluetooth or other location
                      determining software or do not authorise the App to access
                      your location data, you will not be able to access such
                      location-specific content, products, services and
                      materials. For more about how the App uses and retains
                      your information, please read the Privacy Policy.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>8. DISCLAIMER</strong>
                      THE APP, SITE, OUR CONTENT, AND MEMBER CONTENT ARE ALL
                      PROVIDED TO YOU “AS IS” AND “AS AVAILABLE” WITHOUT
                      WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
                      BUT NOT LIMITED TO, FITNESS FOR A PARTICULAR PURPOSE,
                      TITLE, OR NON-INFRINGEMENT. WITHOUT LIMITING THE
                      FOREGOING, WE DO NOT GUARANTEE THE COMPATIBILITY OF ANY
                      MATCHES.
                      <br />
                      SHOULD APPLICABLE LAW NOT PERMIT THE FOREGOING EXCLUSION
                      OF EXPRESS OR IMPLIED WARRANTIES, THEN WE GRANT THE
                      MINIMUM EXPRESS OR IMPLIED WARRANTY REQUIRED BY APPLICABLE
                      LAW. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
                      SHALL CREATE ANY WARRANTY, REPRESENTATION OR GUARANTEE NOT
                      EXPRESSLY STATED IN THIS SECTION.
                      <br />
                      ADDITIONALLY, WE DO NOT MAKE ANY WARRANTIES THAT THE APP
                      OR SITE WILL BE UNINTERRUPTED, SECURE OR ERROR FREE OR
                      THAT YOUR USE OF THE APP OR SITE WILL MEET YOUR
                      EXPECTATIONS, OR THAT THE APP, SITE, OUR CONTENT, ANY
                      MEMBER CONTENT, OR ANY PORTION THEREOF, IS CORRECT,
                      ACCURATE, OR RELIABLE. YOUR USE OF THE APP OR SITE IS AT
                      YOUR OWN RISK. YOU ARE SOLELY RESPONSIBLE FOR YOUR
                      INTERACTIONS WITH OTHER MEMBERS. THE WIINGR GROUP IS NOT
                      RESPONSIBLE FOR THE CONDUCT OF ANY USER. WIINGR GROUP DOES
                      NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON ITS MEMBERS.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>9. LMITATION OF LIABILITY</strong>
                      NEITHER US NOR ANY OWNER WILL BE LIABLE FOR ANY DAMAGES,
                      DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR
                      PUNITIVE, INCLUDING, WITHOUT LIMITATION, LOSS OF DATA,
                      INCOME, PROFIT OR GOODWILL, LOSS OF OR DAMAGE TO PROPERTY
                      AND CLAIMS OF THIRD PARTIES ARISING OUT OF YOUR ACCESS TO
                      OR USE OF THE APP, SITE, OUR CONTENT, OR ANY MEMBER
                      CONTENT, HOWEVER CAUSED, WHETHER BASED ON BREACH OF
                      CONTRACT, TORT (INCLUDING NEGLIGENCE), PROPRIETARY RIGHTS
                      INFRINGEMENT, PRODUCT LIABILITY OR OTHERWISE.
                      <br />
                      THE FOREGOING SHALL APPLY EVEN IF WE WERE ADVISED OF THE
                      POSSIBILITY OF SUCH DAMAGES. IF YOU BECOME DISSATISFIED IN
                      ANY WAY WITH THE APP OR SITE, YOUR SOLE AND EXCLUSIVE
                      REMEDY IS TO STOP YOUR USE OF THE APP AND SITE. <br />
                      YOU HEREBY WAIVE ANY AND ALL CLAIMS ARISING OUT OF YOUR
                      USE OF THE APP OR SITE. BECAUSE SOME STATES DO NOT ALLOW
                      THE DISCLAIMER OF IMPLIED WARRANTIES OR THE EXCLUSION OR
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
                      LIMITATIONS AND EXCLUSIONS OF LIABILITY, DISCLAIMERS AND
                      EXCLUSIVE REMEDIES SPECIFIED HEREIN WILL SURVIVE EVEN IF
                      FOUND TO HAVE FAILED IN THEIR ESSENTIAL PURPOSE. THE
                      FOREGOING DOES NOT APPLY TO LIABILITY ARISING FROM ANY
                      FRAUD OR FRAUDULENT MISREPRESENTATIONS, OR ANY OTHER
                      LIABILITY THAT CANNOT BE LIMITED BY APPLICABLE LAW.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>10. INDEMNITY</strong>
                      All the actions you make and information you post on
                      Wiingr remain your responsibility. Therefore, you agree to
                      indemnify, defend, release, and hold us, and our partners,
                      licensors, affiliates, contractors, officers, directors,
                      employees, representatives and agents, harmless, from and
                      against any third party claims, damages (actual and/or
                      consequential), actions, proceedings, demands, losses,
                      liabilities, costs and expenses (including reasonable
                      legal fees) suffered or reasonably incurred by us arising
                      as a result of, or in connection with:
                      <br />
                      <ol>
                        <li>
                          any negligent acts, omissions or wilful misconduct by
                          you
                        </li>
                        <li>your access to and use of the App</li>
                        <li>
                          the uploading or submission of Content to the App by
                          you
                        </li>
                        <li>any breach of these Terms by you; and/or</li>
                        <li>
                          your violation of any law or any rights of any third
                          party
                        </li>
                      </ol>
                      We retain the exclusive right to settle, compromise and
                      pay any and all claims or causes of action which are
                      brought against us without your prior consent. If we ask,
                      you will co-operate fully and reasonably as required by us
                      in the defence of any relevant claim.
                      <br />
                      The foregoing provision does not require you to indemnify
                      Wiingr Group for any unconscionable commercial practice or
                      any fraud, deception, false promise, misrepresentation or
                      concealment, suppression or omission of any material fact
                      in connection with the App.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>
                        11. PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT
                        INFRINGEMENT
                      </strong>
                      If you believe any content on Wiingr infringes the
                      copyright in a work that you own, please submit a
                      notification alleging such infringement (“DMCA Takedown
                      Notice”) to Wiingr Group’s Copyright Agent. The Takedown
                      Notice must include the following:
                      <br />
                      <ol>
                        <li>
                          A physical or electronic signature of a person
                          authorised to act on behalf of the owner of an
                          exclusive right that is allegedly infringed;
                        </li>
                        <li>
                          Identification of the copyrighted work claimed to have
                          been infringed, or, if multiple copyrighted works at a
                          single online site are covered by a single
                          notification, a representative list of such works;
                        </li>
                        <li>
                          Identification of the material claimed to be
                          infringing or to be the subject of infringing activity
                          and that is to be removed or access disabled and
                          information reasonably sufficient to permit the
                          service provider to locate the material;
                        </li>
                        <li>
                          Information reasonably sufficient to permit the
                          service provider to contact you, such as an address,
                          telephone number, and, if available, an electronic
                          mail;
                        </li>
                        <li>
                          A statement that you have a good faith belief that use
                          of the material in the manner complained of is not
                          authorised by the copyright owner, its agent, or the
                          law;
                        </li>
                        <li>
                          A statement that, under penalty of perjury, the
                          information in the notification is accurate and you
                          are authorised to act on behalf of the owner of the
                          exclusive right that is allegedly infringed.
                        </li>
                      </ol>
                      Takedown Notices should be sent to Wiingr Group’s
                      Copyright Agent at ----@-------. If you wish to reach out
                      to Wiingr Group’s Copyright Agent via other methods, you
                      can write to: Wiingr, Attn: Wiingr Group’s Copyright
                      Agent,-------------@--------------------
                      ---------------@-----------.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>12. THIRD PARTY APP STORE</strong>
                      The following additional terms and conditions apply to you
                      if you download the App from a Third Party Store. To the
                      extent that the other terms and conditions of these Terms
                      are less restrictive than, or otherwise conflict with, the
                      terms and conditions of this Section, the more restrictive
                      or conflicting terms and conditions in this Section will
                      apply, but solely with respect to the App and the Third
                      Party Store. You acknowledge and agree that:
                      <br />
                      <ol>
                        <li>
                          These Terms are concluded solely between you and the
                          Wiingr Group and not with the providers of the Third
                          Party Store, and the Wiingr Group (and not the Third
                          Party Store providers) is solely responsible for the
                          App and the content thereof. To the extent that these
                          Terms provide for usage rules for the App which are
                          less restrictive or in conflict with the applicable
                          terms of service of the Third Party Store from which
                          you obtain the App, the more restrictive or
                          conflicting term of the Third Party Store will take
                          precedence and will apply.
                        </li>
                        <li>
                          The Third Party Store provider has no obligation
                          whatsoever to provide any maintenance and support
                          services with respect to the App. The Wiingr Group is
                          solely responsible for any product warranties, whether
                          express or implied by law, to the extent not
                          effectively disclaimed. The Third Party Store provider
                          will have no warranty obligation whatsoever with
                          respect to the App, and any other claims, losses,
                          liabilities, damages, costs or expenses attributable
                          to any failure to conform to any warranty will be the
                          sole responsibility of the Wiingr Group.
                        </li>
                        <li>
                          The Wiingr Group, not the Third Party Store provider,
                          is responsible for addressing any claims you or any
                          third party may have relating to the App or your
                          possession and/or use of the App, including, but not
                          limited to: (i) product liability claims; (ii) any
                          claim that the App fails to conform to any applicable
                          legal or regulatory requirement; (iii) claims arising
                          under consumer protection or similar legislation;
                          and/or (iv) intellectual property infringement claims.
                        </li>
                        <li>
                          The Third Party Store provider and its subsidiaries
                          are third party beneficiaries of these Terms, and,
                          upon your acceptance of these Terms, the Third Party
                          Store provider from whom you obtained the App will
                          have the right (and will be deemed to have accepted
                          the right) to enforce these Terms against you as a
                          third party beneficiary thereof.
                        </li>
                      </ol>
                      In the event of a conflict between a Third Party Store’s
                      or mobile carrier’s applicable terms and conditions and
                      these Terms, the terms and conditions of the Third Party
                      Store or mobile carrier shall govern and control. We are
                      not responsible and have no liability whatsoever for
                      third-party goods or services you obtain through a Third
                      Party Store or mobile carrier. We encourage you to make
                      whatever investigation you feel necessary or appropriate
                      before proceeding with any online transaction with any of
                      these third parties.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>
                        13. DISPUTE RESOLUTION <br />
                        Please read the following arbitration agreement in this
                        Section (“Arbitration Agreement”) carefully. Unless you
                        opt out in the manner described in Section 13(10) below,
                        this Arbitration Agreement requires you and Wiingr Group
                        to resolve disputes by binding arbitration instead of in
                        court, and limits the manner in which we may seek relief
                        from each other.
                      </strong>
                      1. When Does This Arbitration Agreement Apply? This
                      Arbitration Agreement applies to any disputes or claims of
                      any kind whatsoever (whether based in contract, tort,
                      statute, regulation, ordinance, fraud, misrepresentation
                      or any other legal or equitable theory) between you and
                      the Wiingr Group arising out of or relating to the Terms,
                      prior versions of the Terms, your use of our App, or any
                      other aspect of your relationship with Wiingr, including
                      claims or disputes arising (but not actually filed in
                      arbitration) before the effective date of these Terms. It
                      requires that, and by entering into these Terms you and
                      Wiingr Group agree, that such disputes or claims will be
                      resolved by binding arbitration, rather than in court,
                      except that (i) you or Wiingr may assert individual claims
                      in small claims court if your claims qualify; and (ii) you
                      or Wiingr may seek equitable relief in court for
                      infringement or misuse of intellectual property rights.
                      <br />
                      2.Notice of Dispute and Informal Resolution. Before
                      beginning the arbitration process, you and Wiingr Group
                      agree to first notify one another of the dispute in
                      writing at least 60 days in advance of initiating an
                      arbitration. Notice to Wiingr Group must be sent by letter
                      to our registered agent: CT Corporation, 1209 Orange
                      Street, City of Wilmington, County of New Castle, Delaware
                      19801, and must provide your name, current email address,
                      mailing address, and telephone number, as well as the
                      name, email address, and telephone number associated with
                      your Wiingr account (if different from your current
                      information); and describe the nature of the claim and the
                      specific relief being sought. You and Wiingr agree to meet
                      and confer, via teleconference or videoconference, in a
                      good faith effort to informally resolve any claim or
                      dispute covered by this Arbitration Agreement. If either
                      party is represented by counsel, that counsel may
                      participate in the informal dispute resolution conference.
                      During this process, you may be provided with an offer of
                      judgment. A party defending against a claim may serve on
                      an opposing party an offer to allow judgment on specified
                      terms, with the costs then accrued. If the judgment that
                      the offeree finally obtains is not more favourable than
                      the unaccepted offer, the offeree must pay the costs
                      incurred after the offer was made. All offers, promises,
                      conduct, and statements made in the course of the informal
                      dispute resolution process by any party, its agents,
                      employees, and attorneys are confidential and not
                      admissible for any purpose in any subsequent proceeding,
                      provided that evidence that is otherwise admissible or
                      discoverable shall not be rendered inadmissible or
                      non-discoverable as a result of its use in the informal
                      dispute resolution process. The informal dispute
                      resolution conference shall occur within 60 days of
                      receipt of the written notice described above, unless an
                      extension is mutually agreed upon. If, after participating
                      in that conference, the parties are unable to resolve the
                      dispute, the claimant may commence an arbitration in
                      accordance with this Agreement. Completion of this
                      informal dispute resolution is a condition precedent to
                      filing any demand for arbitration. Failure to do so is a
                      breach of this Agreement, and no demand for arbitration
                      shall be valid unless such written notice is provided and
                      good faith discussions have been conducted. Any statute of
                      limitations will be tolled while the parties engage in the
                      informal dispute resolution process described in this
                      section. <br />
                      3. How Do You Start The Arbitration Process? If you and
                      Wiingr Group are unable to resolve the dispute within 60
                      days, either party may proceed to file a claim for
                      arbitration. To begin the arbitration process, you or
                      Wiingr Group must submit notice by certified mail of the
                      claim with an individualised arbitration demand. To be
                      valid, the demand must contain the name of the claiming
                      party (you or Wiingr Group), your or Wiingr Group’s
                      mailing address, the email address or phone number
                      associated with your Wiingr account (if applicable), and a
                      detailed description of the dispute and the relief sought.
                      Notice to Wiingr Group must be submitted to our registered
                      agent: CT Corporation, 1209 Orange Street, City of
                      Wilmington, County of New Castle, Delaware 19801. 4. What
                      Are The Rules Of Arbitration? The Federal Arbitration Act
                      (“FAA”) governs this Arbitration Agreement and applies to
                      the interpretation and enforcement of this Arbitration
                      Agreement. If the FAA is found to not apply to any issue
                      regarding the interpretation or enforcement of this
                      Arbitration Agreement, that that issue shall be determined
                      by Texas law, notwithstanding choice-of-law principles,
                      pursuant to Section 17 of the Terms. The applicable
                      arbitration provider depends on where you live. If you
                      live in California, the arbitration will be administered
                      by ADR Services, Inc. under its most current arbitration
                      rules and procedures, available at
                      https://www.adrservices.com/services-2/arbitration-rules/.
                      If you live outside of California, the arbitration will be
                      administered by National Arbitration and Mediation under
                      its most current Comprehensive Dispute Resolution Rules
                      and Procedures, available at
                      https://www.namadr.com/resources/rules-fees-forms, or
                      under its most current Supplemental Rules for Mass
                      Arbitrations, as applicable, available at
                      https://www.namadr.com/content/uploads/2021/12/SupplementalRules12.22.21.pdf.
                      If the applicable arbitration provider is not available to
                      arbitrate, including because it is not able to administer
                      the arbitration(s) consistent with the rules, procedures,
                      and terms of this Arbitration Agreement, including those
                      described in Section 13(8) (Mass Filings), the parties
                      will select an alternative arbitral forum. If the parties
                      cannot agree on an appropriate alternative arbitration
                      provider, then the parties will ask a court of competent
                      jurisdiction to appoint an arbitrator pursuant to 9 U.S.C.
                      § 5 that is able to administer the arbitration(s)
                      consistent with the rules, procedures, and terms of this
                      Arbitration Agreement. This Arbitration Agreement will
                      govern to the extent it conflicts with the arbitration
                      provider’s rules. The initiating party must pay all filing
                      fees for the arbitration. Your and Wiingr Group’s
                      responsibility to pay other administrative and arbitrator
                      costs will be as set forth in the applicable arbitration
                      provider’s rules, unless the arbitrator determines the
                      claims are frivolous. If a claim is determined to be
                      frivolous, the claimant is responsible for reimbursing the
                      respondent for its portion of all such administrative,
                      hearing, and/or other fees incurred as a result of the
                      frivolous claim. You may qualify for a waiver of certain
                      arbitration costs under the applicable arbitration
                      provider’s rules or other applicable law. If you meet the
                      standard for proceeding in forma pauperis in federal
                      court, Texas state court, or the courts of your state of
                      residence, cannot obtain a waiver from the arbitration
                      provider of any filing fees you are required to pay, and
                      the arbitration provider refuses to administer the
                      arbitration without your payment of said fees, Wiingr
                      Group will pay the filing fees for you. <br />
                      5. What Can The Arbitrator Decide? The arbitrator has the
                      exclusive authority to resolve any and all threshold
                      arbitrability issues, including whether this Arbitration
                      Agreement is applicable, enforceable, or unconscionable.
                      Courts, however, shall have the exclusive authority to
                      determine (i) whether any provision of this Arbitration
                      Agreement should be severed and the consequences of said
                      severance, (ii) enforceability of any or all of the mass
                      arbitration procedures set forth in Section 13(8), (iii)
                      whether you have complied with conditions precedent to
                      arbitration, and (iv) whether an arbitration provider is
                      available to hear the arbitration(s) under Section 13(4).
                      The arbitrator will have the authority to grant motions
                      dispositive of all or part of any claim. The arbitrator
                      will have the authority to award monetary damages and to
                      grant any non-monetary remedy or relief available in an
                      individual under applicable law, the arbitral forum’s
                      rules, and the Terms (including the Arbitration
                      Agreement). The arbitrator will issue a written award and
                      statement of decision describing the essential findings
                      and conclusions on which the award is based, including the
                      calculation of any damages awarded. The arbitrator has the
                      same authority to award relief that a judge in a court of
                      law would have. The award of the arbitrator is final and
                      binding upon you and us. Pursuant to and in conformance
                      with Section 17 of the Terms, any original action to
                      compel arbitration under Section 4 of the FAA (or
                      analogous state law) must be brought in a State or Federal
                      Court located in Travis County, Texas. <br />
                      6. No Jury Trials. By agreeing to arbitration, YOU AND
                      WIINGR ARE EACH AGREEING TO WAIVE THEIR RIGHTS TO A JURY
                      TRIAL. Instead, you and Wiingr Group are electing that all
                      claims and disputes will be resolved by arbitration under
                      this Arbitration Agreement, except as described in Section
                      13(1) above. An arbitrator can award the same damages and
                      relief as a court and must follow this Agreement as a
                      court would. However, there is no judge or jury in
                      arbitration, and court review of an arbitration award is
                      subject to very limited review. <br />
                      7. One At A Time. All claims and disputes within the scope
                      of this Arbitration Agreement MUST BE ARBITRATED ON AN
                      INDIVIDUAL BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS,
                      AND YOU AND WIINGR GROUP GIVE UP YOUR RIGHTS TO
                      PARTICIPATE IN A CLASS ACTION OR ANY OTHER CLASS
                      PROCEEDING. However, this shall not preclude the use of
                      bellwether arbitrations, global mediation, or batch
                      arbitrations as described in Section 13(8) below, nor
                      preclude the application of the arbitration provider’s fee
                      schedules for mass arbitrations, as applicable. Only
                      relief that would be permitted in an individual lawsuit is
                      available, and claims of more than one customer or user
                      cannot be arbitrated or consolidated with those of any
                      other customer or user, except as provided in Section
                      13(8) below, nor shall this preclude application of the
                      arbitration provider’s fee schedules for mass
                      arbitrations, as applicable. The arbitration proceeding
                      will not be consolidated with any other matters or joined
                      with any other cases or parties , except as provided in
                      Section 13(8) below, nor shall this preclude application
                      of the arbitration provider’s fee schedules for mass
                      arbitrations, as applicable. For mass arbitrations before
                      ADR Services, Inc., you and Wiingr Group agree that its
                      mass arbitration fee schedule shall apply, available at
                      https://www.adrservices.com/wp-content/uploads/2022/10/ADR-Mass-Consumer-Non-Employment-Fee-Schedule-Eff-11-5-21.pdf.
                      For mass arbitrations before National Arbitration and
                      Mediation, you and Wiingr Group agree that its mass
                      arbitration fee schedule shall apply, available at
                      https://www.namadr.com/content/uploads/2023/07/Consumer-Fees-as-of-7.1.2023-updated-as-of-7.1.2023.pdf.
                      For mass arbitrations before any other arbitration
                      provider, you agree that its mass arbitration fee schedule
                      shall apply. If the arbitrator does not have a fee
                      schedule for mass filings, then the claims must proceed in
                      court. If a decision is issued stating that applicable law
                      precludes enforcement of any of this subsection’s
                      limitations as to a given claim for relief, then the claim
                      must be severed from the arbitration and brought into the
                      State or Federal Courts located in Travis County, Texas.
                      All other claims shall be arbitrated. This subsection does
                      not prevent you or Wiingr from participating in a
                      class-wide settlement of claims. <br />
                      8. Mass Filings. If, at any time, 30 or more similar
                      demands for arbitration are asserted against Wiingr or
                      related parties by the same or coordinated counsel or
                      entities, or if Wiingr Group asserts 30 or more similar
                      demands for arbitration or counterclaims against
                      similarly-situated parties, within a period of 60 days or
                      otherwise close in proximity (“Mass Filing”), the
                      additional protocols set forth below shall apply:
                      <br />
                      <ul>
                        <li>
                          Acknowledgment of Mass Filing protocols. If you or
                          Wiingr Group, or your or our counsel, files a demand
                          for arbitration that fits within the definition of
                          Mass Filing referred to above, then you and we agree
                          that the demand for arbitration shall be subject to
                          the additional protocols set forth in this Mass
                          Filings subsection. If the parties disagree as to
                          whether a series of filings fits within the definition
                          of Mass Filing above, the arbitration provider shall
                          resolve the disagreement. You and we also acknowledge
                          that the adjudication of the dispute may be delayed
                          and that any applicable statute of limitations shall
                          be tolled from the time of filing of the demand for
                          arbitration, and pending resolution of the bellwether
                          proceedings.
                        </li>
                        <li>
                          Bellwether Arbitrations. Bellwether proceedings are
                          encouraged by courts and arbitration administrators
                          where there are multiple disputes involving similar
                          claims against the same or related parties. The
                          parties shall select ten individual arbitration claims
                          (five per side), designated the “Initial Test Cases,”
                          to proceed to arbitration. Only the Initial Test Cases
                          shall be filed with the arbitrator. All other claims
                          shall be held in abeyance. This means that the filing
                          fees will be paid only for the Initial Test Cases; for
                          all other demands for arbitration in a Mass Filing,
                          the filing fees (together with any arbitrator
                          consideration of the other demands) will be in
                          abeyance, and neither You nor Wiingr will be required
                          to pay any such filing fees. You and Wiingr Group also
                          agree that neither you nor we shall be deemed to be in
                          breach of this Arbitration Agreement for failure to
                          pay any such filing fees, and that neither you nor we
                          shall be entitled to any contractual, statutory, or
                          other remedies, damages, or sanctions of any kind for
                          failure to pay any such filing fees. If, pursuant to
                          this subsection, a party files non-Bellwether
                          Arbitrations with the arbitration provider, the
                          parties agree that the arbitration provider shall hold
                          those demands in abeyance and not refer them to the
                          arbitrator pending resolution of the Initial Test
                          Cases. Unless the claims are resolved in advance or
                          the schedule is extended, the arbitrators will render
                          a final award for the Initial Test Cases within 120
                          days of the initial pre-hearing conference.
                        </li>
                        <li>
                          Global Mediation. Following the resolution of the
                          Initial Test Cases, the parties agree to engage in a
                          global mediation of all the remaining individual
                          arbitration claims comprising the Mass Filing (“Global
                          Mediation”), deferring any filing costs associated
                          with the non-Initial Test Cases until the Initial Test
                          Cases and subsequent Global Mediation have concluded.
                          After the final awards are provided to the mediator in
                          the Initial Test Cases, the mediator and the parties
                          shall have 90 days to agree upon a substantive
                          methodology and make an offer to resolve the
                          outstanding cases. If the Parties are unable to
                          resolve the outstanding claims during the Global
                          Mediation, the Parties may choose to opt out of the
                          arbitration process and proceed in court with the
                          remaining claims. Notice of the opt-out shall be
                          provided in writing within 60 days of the close of the
                          Global Mediation. Absent notice of an opt-out, the
                          arbitrations may then be filed and administered by the
                          arbitration provider pursuant to this Agreement’s
                          Batch Arbitration provision below and the arbitrator’s
                          fee schedule for mass filings as described in
                          Subsection 13(7) above, unless the parties mutually
                          agree otherwise in writing. You and we also
                          acknowledge that any applicable statute of limitations
                          shall be tolled pending resolution of the global
                          mediation process.
                        </li>
                        <li>
                          Batch Arbitration. To increase the efficiency of
                          administration and resolution of arbitrations, you and
                          Wiingr Group agree that in the event a Mass Filing is
                          not resolved by the Bellwether Arbitration and Global
                          Mediation processes described above, the arbitration
                          provider will (1) administer the remaining arbitration
                          demands in batches of 100 demands per batch; (2)
                          appoint one arbitrator for each batch; and (3) provide
                          for the resolution of each batch as a single
                          consolidated arbitration with one set of filing and
                          administrative fees due per side per batch, one
                          procedural calendar, one hearing (if any) in a place
                          to be determined by the arbitrator, and one final
                          award (“Batch Arbitration”). If the arbitration
                          provider will not administer the Batch Arbitration
                          with one set of filing and administrative fees due per
                          side per batch, then the arbitration provider’s mass
                          arbitration fee schedule shall apply.
                        </li>
                        <li>
                          Enforcement of Subsection. A Court of competent
                          jurisdiction located in a venue allowed under Section
                          17 of the Terms and Conditions shall have the power to
                          enforce this subsection.
                          <br />
                        </li>
                      </ul>
                      9. Offer of Judgment. At least 14 days before the date set
                      for the arbitration hearing, any party may serve an offer
                      in writing upon the other party to allow judgment on
                      specified terms. If the offer made by one party is not
                      accepted by the other party, and the other party fails to
                      obtain a favorable award, the other party shall not
                      recover any post-offer costs to which they otherwise would
                      be entitled and shall pay the offering party’s costs from
                      the time of the offer. <br />
                      10. Opt-Out. Updates to Wiingr’s Terms do not provide a
                      new opportunity for you to opt out of arbitration if you
                      previously agreed to a prior version of Wiingr’s Terms
                      containing an arbitration provision and did not validly
                      opt out of arbitration.
                      <br />
                      <ul>
                        <li>
                          Previous or existing users. Users who previously
                          agreed to arbitrate may reject this updated
                          Arbitration Agreement by following the opt-out method
                          below, but such users will still be bound by the most
                          recent prior version of the Arbitration Agreement and
                          will otherwise be bound by these Terms. Previous or
                          existing users who do not opt out of this updated
                          Arbitration Agreement will be bound by this
                          Arbitration Agreement and it shall apply to all
                          disputes between such users and Wiingr, including
                          those arising (but not actually filed in arbitration)
                          before the effective date of these Terms. Arbitration
                          demands that have already been actually filed with an
                          arbitration provider before the effective date of this
                          Arbitration Agreement and in compliance with a prior
                          version of this Arbitration Agreement are subject to
                          the prior version’s terms.
                        </li>
                        <li>
                          New users. Users who create a Wiingr account for the
                          first time on or after July 24, 2023 may opt out of
                          this Arbitration Agreement.
                        </li>
                        <li>
                          Method and impact of opting out. Subject to the above,
                          you may opt out of this Arbitration Agreement by
                          sending written notice of your decision to opt out to:
                          -----------@------.com, within 31 days after first
                          becoming subject to this Arbitration Agreement. Your
                          notice must include your name, your Wiingr username
                          (if any), the email address and/or phone number you
                          used to set up your Wiingr account (if you have one),
                          and an unequivocal statement that you want to opt out
                          of this Arbitration Agreement. If you opt out of this
                          Arbitration Agreement, all other parts of the Terms
                          and any other agreements between you and Wiingr will
                          continue to apply to you. Opting out of this
                          Arbitration Agreement has no effect on any other
                          arbitration agreements that you may currently have, or
                          may enter in the future, with us.
                          <br />
                        </li>
                      </ul>
                      11. Severability. Except as provided in subsection 13(7),
                      if any part or parts of this Arbitration Agreement are
                      found under the law to be invalid or unenforceable, then
                      such specific part or parts shall be of no force and
                      effect and shall be severed and the remainder of the
                      Arbitration Agreement shall continue in full force and
                      effect. If a court decides that any of the provisions in
                      the Arbitration Agreement above is invalid or
                      unenforceable because it would prevent the exercise of a
                      non-waivable right to pursue public injunctive relief,
                      then any dispute regarding the entitlement to such relief
                      (and only that relief) must be severed from arbitration
                      and may be litigated in court. All other disputes subject
                      to arbitration under the terms of the Arbitration
                      Agreement shall be arbitrated under its terms. <br />
                      12. Survival of Agreement. The terms of this Arbitration
                      Agreement will continue, even after your relationship with
                      Wiingr has ended.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>14. USE OF THIRD PARTY INTEGRATIONS</strong>
                      If you use the Snap Lenses feature offered in our App or
                      any other AR features provided by Snap similar to Snap
                      Lenses, you will be subject to the Snap Inc. Terms of
                      Service, which contain an arbitration clause including a
                      waiver of any right to participate in a class-action
                      lawsuit or class-wide arbitration. If you do not agree to
                      be subject to the Snap Inc. Terms of Service, you should
                      not use the Snap-provided AR camera features within our
                      App.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>15. TERMINATION AND REMEDIES</strong>
                      These Terms commence on the date you accept them (as
                      described in the preamble) and continue until terminated
                      in accordance with the terms herein. You can delete your
                      Account at any time by logging into the App, going to the
                      “Settings” tab (the gear icon), and following the
                      instructions to terminate your account. Please note that
                      if you delete your Account, your subscription will
                      continue until the end of the subscription period for
                      which applicable fees have been paid, and you will not be
                      entitled to a refund except as stated in Section 5. In
                      addition to deleting your account, you will also need to
                      cancel/manage any recurring subscriptions purchased via a
                      Third Party Store (e.g., iTunes, Google Play) to avoid
                      additional billing.
                      <br />
                      In the event that Wiingr Group determines, in its sole
                      discretion, that you have breached any portion of these
                      Terms, have misused the App, or have otherwise
                      demonstrated conduct which the Wiingr Group regards as
                      inappropriate or unlawful (whether on or off the App),
                      Wiingr Group reserves the right to: (a) warn you via email
                      (to any email addresses you have provided to Wiingr Group)
                      that you have violated the Terms; (b) delete your User
                      Content; (c) discontinue your Account; (d) discontinue
                      your subscription(s) without refund; (e) notify and/or
                      send your User Content to and/or fully cooperate with the
                      proper law enforcement authorities for further action;
                      and/or (f) pursue to any other action which Wiingr Group
                      deems to be appropriate. You agree that all terminations
                      for cause shall be made in Wiingr Group’s sole discretion
                      and that Wiingr Group shall not be liable to you or any
                      third party for any termination of your Account.
                      <br />
                      Termination of these Terms or your Account includes the
                      removal of access to your Account, and all related
                      information and content associated with or inside your
                      Account. If your account is terminated by you or by the
                      Wiingr Group for any reason, all provisions of these Terms
                      which by their nature should survive, shall survive
                      termination of these Terms, including, without limitation,
                      the Arbitration Agreement, ownership provisions, warranty
                      disclaimers and limitation of liability. Your information
                      will be maintained and deleted in accordance with our
                      Privacy Policy.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>16. MISCELLANEOUS</strong>
                      There are a few more things we need to mention before you
                      can use Wiingr.
                      <br />
                      These Terms, which we may amend from time to time,
                      constitute the entire agreement between you and the Wiingr
                      Group. The Terms supersede all previous agreements,
                      representations and arrangements between us (written or
                      oral), excluding the Privacy Policy. Nothing in this
                      clause shall limit or exclude any liability for fraudulent
                      misrepresentation.
                      <br />
                      The Wiingr Group has taken reasonable steps to ensure the
                      currency, availability, correctness and completeness of
                      the information contained on Wiingr and provides that
                      information on an "as is", "as available" basis. The
                      Wiingr Group does not give or make any warranty or
                      representation of any kind about the information contained
                      on Wiingr, whether express or implied. Use of Wiingr and
                      the materials available on it is at your sole risk. The
                      Wiingr Group is not responsible for any loss arising from
                      the transmission, use of data, or inaccurate Member
                      Content.
                      <br />
                      You are responsible for taking all necessary precautions
                      to ensure that any material you may obtain from Wiingr is
                      free of viruses or other harmful components. You accept
                      that Wiingr will not be provided uninterrupted or error
                      free, that defects may not be corrected or that The Wiingr
                      Group, or the server that makes it available, are free of
                      viruses or bugs, spyware, Trojan horse or any similar
                      malicious software. The Wiingr Group is not responsible
                      for any damage to your computer hardware, computer
                      software, or other equipment or technology including, but
                      without limitation damage from any security breach or from
                      any virus, bugs, tampering, fraud, error, omission,
                      interruption, defect, delay in operation or transmission,
                      computer line or network failure or any other technical or
                      other malfunction. The communications between you and
                      Wiingr Group may take place via electronic means, whether
                      you use the App or send Wiingr Group emails, or whether
                      Wiingr Group posts notices in the App or communicates with
                      you via email. For contractual purposes, you (a) consent
                      to receive communications from Wiingr Group in electronic
                      form; and (b) agree that all terms and conditions,
                      agreements, notices, disclosures, and other communications
                      that Wiingr Group provides to you electronically satisfy
                      if it were to be in writing. The foregoing does not affect
                      your statutory rights, including but not limited to the
                      Electronic Signatures in Global and National Commerce Act
                      at 15 U.S.C. Sec. 7001 et. seq.
                      <br />
                      As Wiingr grows, we might have to make changes to these
                      Terms so we reserve the right to modify, amend or change
                      the Terms at any time (a “Change”). If we do this then the
                      Changes will be posted on this page and we will indicate
                      the Effective Date of the updates at the bottom of the
                      Terms. In certain circumstances, we may send an email to
                      you notifying you of a Change. It’s also possible that we
                      might ask you to agree to our Changes, but we’ll let you
                      know. You should regularly check this page for notice of
                      any Changes – we want our users to be as informed as
                      possible. Your continued use of Wiingr following any
                      Change constitutes your acceptance of the Change and you
                      will be legally bound by the new updated Terms. If you do
                      not accept any Changes to the Terms, you should stop using
                      Wiingr immediately.
                      <br />
                      If, for any reason, any of the Terms are declared illegal,
                      invalid or otherwise unenforceable by a court of a
                      competent jurisdiction, then to the extent that term is
                      illegal, invalid or unenforceable, it shall be severed and
                      deleted from the Terms and the remainder of the Terms
                      shall survive, remain in full force and effect and
                      continue to be binding and enforceable. No failure or
                      delay in exercising any right, power or privilege under
                      the Terms shall operate as a waiver of such right or
                      acceptance of any variation of the Terms and nor shall any
                      single or partial exercise by either party of any right,
                      power or privilege preclude any further exercise of the
                      right or the exercise of any other right, power or
                      privilege.
                      <br />
                      You represent and warrant that:
                      <br />
                      <ol>
                        <li>
                          you are not located in a country that is subject to a
                          U.S. Government embargo, or that has been designated
                          by the U.S. Government as a "terrorist supporting"
                          country.
                        </li>
                        <li>
                          you are not listed on any U.S. Government list of
                          prohibited or restricted parties
                          <br />
                        </li>
                      </ol>
                      By utilizing the App, you acknowledge and consent to
                      Wiingr being a global service that operates via servers
                      situated across various countries, including the United
                      States. If you reside in a jurisdiction with data
                      protection regulations, the safeguarding of your personal
                      data may not match the standards of your home country. By
                      providing your personal information, opting to upgrade
                      services, or utilizing Wiingr's applications, you consent
                      to the transfer, storage, and processing of your data in
                      these locations. Additionally, the App might feature links
                      to third-party websites or resources, for which you
                      recognize and accept that we bear no responsibility or
                      liability.
                      <br />
                      <ol>
                        <li>
                          the availability or accuract of such websites or
                          resources
                        </li>
                        <li>
                          the content, products, or services on or available
                          from such websites or resources
                          <br />
                        </li>
                      </ol>
                      Links to such websites or resources do not signify any
                      endorsement. You acknowledge full responsibility for and
                      assume all risks associated with your use of any such
                      websites or resources. Framing, in-line linking, or any
                      other methods of association with the App are strictly
                      prohibited without obtaining our prior written approval.
                      These Terms, along with any rights and licenses granted
                      herein, cannot be transferred or assigned by you, but may
                      be assigned by us without any limitations. In the event of
                      any inconsistency between this English language version
                      and any translated copies of the Terms, the English
                      version shall take precedence. Should you have any
                      inquiries, complaints, or claims regarding the App, please
                      reach out to us at ---------@---------.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>GOVERNING LAW AND FORUM</strong>
                      Subject to Section 13(3) and any mandatory laws applicable
                      in your country of residence, your access to the App, Our
                      Content, and any Member Content, as well as any claims
                      arising from or connected to your association with the
                      Wiingr Group and these Terms, are regulated and construed
                      in accordance with the laws of the State of Texas. Any
                      claims related to these Terms or your affiliation with the
                      Wiingr Group that are not submitted to arbitration for any
                      reason, and any challenges to the enforceability or
                      applicability of the arbitration provisions herein, will
                      be exclusively litigated in the federal or state courts of
                      Travis County, Texas. By agreeing to these terms, you
                      consent to the personal jurisdiction and venue of such
                      courts and waive any objections based on inconvenient
                      forum. Additionally, you agree not to initiate or
                      participate in any class action lawsuit against us.
                    </p>
                    <p className="pt-5 text-base font-thin ">
                      <strong>THE WIINGR GROUP</strong>
                      The Terms establish a legally binding agreement between
                      you as the user ("you") and the Wiingr Group ("we" or
                      "us"). The Wiingr Group encompasses various entities,
                      including but not limited to Wiingr Holding Limited (an
                      English company), Wiingr Trading LLC (a -------- limited
                      liability company), Wiingr Inc. (a -------- corporation),
                      Social Online Payments Limited (a company incorporated in
                      Ireland), and Social Online Payments L.L.C. (a --------
                      limited liability company).
                    </p>
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
                        className={["underline", siteTheme.linkColor].join(" ")}
                      >
                        California Privacy Statement
                      </a>
                      , which complements this Privacy Policy.
                    </strong>
                  </p>
                  <p className="pt-5 text-base font-thin">
                    We value the trust you place in us by sharing your
                    information, and we are committed to maintaining that trust.
                    Our commitment begins with ensuring that you comprehend the
                    information we collect, the reasons behind its collection,
                    how it's utilized, and your options regarding your
                    information. This Policy articulates our privacy practices
                    using clear and straightforward language, minimizing legal
                    and technical terminology.
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
                        )}
                      >
                        <ScrollLink
                          to={`${content.replace(/\s/g, "").toLowerCase()}`}
                          smooth={true}
                          duration={500}
                          offset={-100}
                          className="underline cursor-pointer"
                        >
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
                    To understand your California privacy rights, please refer
                    to our{" "}
                    <a
                      href="/"
                      className={["underline", siteTheme.linkColor].join(" ")}
                    >
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
                  className="pt-5 text-xl font-bold font-arima scroll-smooth"
                >
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
                  className="pt-5 text-xl font-bold font-arima"
                >
                  2. Where This Privacy Policy Applies
                </h2>
              )}
              ParagraphComponent={() => (
                <>
                  <p className="pt-1 text-base font-thin ">
                    This Privacy Policy pertains to the websites, applications,
                    events, and other services operated under the Wiingr brand.
                    For simplicity, we collectively refer to these as our
                    "services" in this Privacy Policy. To ensure clarity, we
                    have included links to this Privacy Policy on all applicable
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
                  className="pt-5 text-xl font-bold font-arima"
                >
                  3. Information We Collect
                </h2>
              )}
              ParagraphComponent={() => (
                <>
                  <p className="pt-1 text-base font-thin ">
                    It's evident that in order to facilitate meaningful
                    connections, we require certain information about you,
                    including basic profile details and your preferences
                    regarding the types of individuals you'd like to meet.
                    Please note that some of the information you provided can be
                    updated at any time through the app settings. The more
                    comprehensive your profile, the better our system can
                    generate accurate matches and connections for you. To
                    maintain authenticity and ensure user safety, we require
                    your name and date of birth during onboarding and cannot be
                    updated later. We appreciate your cooperation as we work
                    towards creating a trusted and enjoyable experience for all
                    users. For further elaboration, we provide more detailed
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
                            provide us with specific information. This may
                            include:
                          </p>
                          <ul className="pt-5 text-base font-thin list-inside">
                            <li className="list-[disc]">
                              Upon creating an account, you furnish us with at
                              least your phone number and email address, along
                              with essential details required for the service's
                              functionality. These include your gender, date of
                              birth, and preferences regarding the individuals
                              you wish to connect with.
                            </li>
                            <br />
                            <li className="list-[disc]">
                              When you finalize your profile, you're presented
                              with the choice to disclose your sexual
                              orientation. By providing such details, you
                              consent to our utilization of this information for
                              the specified purposes outlined in this Privacy
                              Policy. Additionally, you have the option to
                              furnish us with additional information, including
                              details about your bio, interests, as well as
                              content such as photos and videos. For certain
                              content types, such as pictures, you may grant us
                              access to your camera or photo album.
                            </li>
                            <br />
                            <li className="list-[disc]">
                              Participation in surveys, focus groups, or market
                              studies involves providing insights into our
                              products and services, responding to our
                              inquiries, and offering testimonials.
                            </li>
                            <br />
                            <li className="list-[disc]">
                              When you subscribe to a paid service or make a
                              direct purchase from us (excluding transactions
                              through platforms like iOS or Android), you
                              provide us with information related to your
                              purchases. This may include your debit or credit
                              card number and other financial details, which are
                              processed by our payment processors.
                            </li>
                            <br />
                            <li className="list-[disc]">
                              If you share information about other individuals
                              with us (e.g., using a friend's contact details
                              for a specific feature), we process this data on
                              your behalf to fulfill your request.
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
                              instant messaging details, phone numbers, full
                              names or addresses, credit card details, national
                              identity numbers, driver's license details, or any
                              other sensitive information that could be subject
                              to abuse or misuse on your profile.
                              <br />
                              <br />
                              When you post information about yourself or
                              utilize the messaging function to interact with
                              other users, the extent of personal information
                              you choose to share is at your own discretion and
                              risk. For more details regarding who can access
                              the content you post on Wiingr, please refer to
                              Section 5 below.
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
                            In addition to the information you directly provide
                            to us, we may also receive information about you
                            from other sources, including:
                          </p>
                          <ul className="pt-5 text-base font-thin list-inside">
                            <li className="list-[disc]">
                              <strong>Members:</strong> Members may provide
                              information about you as they utilize our
                              services, such as through interactions with you or
                              by submitting reports involving you.
                            </li>
                            <br />
                            <li className="list-[disc]">
                              <strong>Social Media:</strong> You may choose to
                              share information with us by providing your social
                              media account link, such as updating your social
                              tab in the app settings (Facebook, Instagram,
                              Snapchat, or TikTok), or by adding your playlist
                              link from audio streaming apps (e.g., Apple Music
                              or Spotify).
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
                            When you utilize our services, it generates
                            technical data regarding the features you've
                            accessed, how you've interacted with them, and the
                            devices you've used to access our services. Please
                            refer below for more detailed information.
                          </p>
                          <ul className="pt-5 text-base font-thin list-inside">
                            <li className="list-[disc]">
                              <strong>Usage Information:</strong> Using the
                              services generates data about your activity,
                              including how you utilize them (such as when you
                              log in, the actions you take, and the information
                              displayed to you) and your interactions with other
                              members (such as members you connect and interact
                              with, and when you match and exchange messages
                              with them).
                            </li>
                            <br />
                            <li className="list-[disc]">
                              <strong>Device information:</strong> We collect
                              information from and about the device(s) you use
                              to access our services, including hardware and
                              software information such as IP address, device
                              type or other technologies that may uniquely
                              identify a device or browser.
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
                              when you enable it during onboarding or reset it
                              in the app settings. This information helps us
                              identify your physical location and personalize
                              the app, making it easier for you to interact with
                              other users. By enabling the display of general
                              locality information to users viewing your profile
                              and showing you profiles of other users who are
                              near you. If you decline permission for us to
                              collect your precise geolocation, we will not
                              collect it, and certain services that rely on
                              precise geolocation may not be available to you.
                            </li>
                            <br />
                            <li className="list-[circle] ml-4">
                              <strong>Other information: </strong> We may
                              collect additional information with your
                              permission, including photos, especially if you
                              choose to share media content.
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
                  className="pt-2 text-xl font-bold font-arima"
                >
                  4. How We Use Information
                </h2>
              )}
              ParagraphComponent={() => (
                <>
                  <p className="pt-1 text-base font-thin ">
                    The primary purpose of utilizing your information is to
                    deliver and enhance our services. Furthermore, we employ
                    your data to ensure the safety of both you and our
                    community. Below, you'll find a more detailed explanation of
                    the various reasons for which we utilize your information,
                    accompanied by practical examples.
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
                            Suggest you to other members and suggest other
                            members to you.
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
                            Gain insights into members' typical usage patterns
                            to enhance services. This may involve modifying the
                            look, feel, or features based on member feedback and
                            reactions.
                          </li>
                          <li className="list-[disc]">
                            Innovate new features and services, such as
                            expanding an interests-based feature based on member
                            requests
                          </li>
                        </ul>
                      )}
                    />
                    <HeadParagraph
                      HeadComponent={() => (
                        <h2 className="pt-2 text-lg font-bold font-arima">
                          To safeguard against, identify, and combat fraud as
                          well as other illegal or unauthorized activities
                        </h2>
                      )}
                      ParagraphComponent={() => (
                        <ul className="text-base font-thin list-inside">
                          <li className="list-[disc]">
                            Identify and resolve ongoing, suspected, or alleged
                            violations of our{" "}
                            <a
                              href="/"
                              className={[
                                "underline",
                                siteTheme.linkColor,
                              ].join(" ")}
                            >
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
                              className={[
                                "underline",
                                siteTheme.linkColor,
                              ].join(" ")}
                            >
                              Terms of Use
                            </a>
                          </li>
                          <li className="list-[disc]">
                            Maintain data concerning violations of our{" "}
                            <a
                              href="/"
                              className={[
                                "underline",
                                siteTheme.linkColor,
                              ].join(" ")}
                            >
                              Terms of Use
                            </a>{" "}
                            to address the infraction and mitigate against
                            future occurrences
                          </li>
                          <li className="list-[disc]">
                            Implement or assert our rights, such as those
                            outlined in our{" "}
                            <a
                              href="/"
                              className={[
                                "underline",
                                siteTheme.linkColor,
                              ].join(" ")}
                            >
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
                            To learn more about how we handle personal
                            information through profiling and automated
                            decision-making, please refer to our [privacy
                            policy/terms of service/other relevant document].{" "}
                            <a
                              href="/"
                              className={[
                                "underline",
                                siteTheme.linkColor,
                              ].join(" ")}
                            >
                              FAQ
                            </a>
                            . <br /> To handle your information as outlined in
                            this Privacy Policy, we depend on the following
                            legal bases:
                          </p>
                          <br />
                          <li className="list-[disc]">
                            <strong>To deliver our service to you:</strong> We
                            process your information for purposes 1, 2, and 3
                            mentioned above to fulfill the contract you have
                            with us. For example, as you utilize our service to
                            establish meaningful connections, we utilize your
                            information to manage your account and profile,
                            display it to other members, suggest other members
                            to you, and provide our free and paid features to
                            you and other members
                          </li>
                          <li className="list-[disc]">
                            <strong>Legitimate interests:</strong> We process
                            your information for purposes 4 and 5 above, relying
                            on our legitimate interest. For example, we process
                            information to ensure the safety of our members and
                            to enforce our rights, provide assistance to law
                            enforcement, and enable us to defend ourselves in
                            legal proceedings when necessary
                          </li>
                          <li className="list-[disc]">
                            <strong>
                              To comply with applicable laws and regulations:
                            </strong>{" "}
                            We process your information for purpose 5 above when
                            it is necessary for us to adhere to relevant laws
                            and regulations and to demonstrate our compliance
                            with them. For instance, we retain transactional
                            data to fulfill our accounting, tax, and other legal
                            data retention obligations, and to respond to lawful
                            requests from law enforcement. Additionally, we
                            maintain records of consents provided by members and
                            decisions they have made to opt-out of certain
                            features or processing
                          </li>
                          <li className="list-[disc]">
                            <strong>Consent:</strong> If you decide to provide
                            us with information that may be classified as
                            "special" or "sensitive" in certain jurisdictions,
                            such as your sexual orientation, you are giving your
                            consent to our processing of that information in
                            accordance with this Privacy Policy. Occasionally,
                            we may request your consent to collect specific
                            information, like your precise geolocation or to use
                            your information for particular reasons. In some
                            instances, you can withdraw your consent by
                            adjusting your settings (for example, concerning the
                            collection of precise geolocation) or by deleting
                            your content (for instance, if you provided
                            sensitive information in your profile). However,
                            regardless, you have the right to withdraw your
                            consent at any time by contacting us at the address
                            provided at the end of this Privacy Policy
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
                  className="pt-5 text-lg font-bold font-arima"
                >
                  5. How We Share Information
                </h2>
              )}
              ParagraphComponent={() => (
                <>
                  <p className="pt-1 text-base font-thin">
                    As our aim is to facilitate meaningful connections for you,
                    the primary sharing of members' information is naturally
                    with other members. Additionally, in some instances, with
                    legal authorities. Continue reading for further insights
                    into how your information is shared with others
                  </p>
                  <div className="ml-5">
                    <HeadParagraph
                      HeadComponent={() => (
                        <h2
                          id="howweshareinformation"
                          className="pt-5 text-lg font-bold font-arima"
                        >
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
                              className={[
                                "underline",
                                siteTheme.linkColor,
                              ].join(" ")}
                            >
                              Terms of Use
                            </a>
                            ), we may communicate to the reporter any actions we
                            have taken, if applicable, as a result of their
                            report
                          </p>
                        </>
                      )}
                    />
                    <HeadParagraph
                      HeadComponent={() => (
                        <h2
                          id="howweshareinformation"
                          className="pt-5 text-lg font-bold font-arima"
                        >
                          With our service providers
                        </h2>
                      )}
                      ParagraphComponent={() => (
                        <>
                          <p className="pt-1 text-base font-thin">
                            We utilize vendors to aid in operating and enhancing
                            our services, including tasks such as data hosting
                            and maintenance, customer care, payment processing,
                            and security operations
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
                          className="pt-5 text-lg font-bold font-arima"
                        >
                          For corporate transactions
                        </h2>
                      )}
                      ParagraphComponent={() => (
                        <>
                          <p className="pt-1 text-base font-thin">
                            We may transfer your information in the event of our
                            involvement, whether wholly or partially, in a
                            merger, sale, acquisition, divestiture,
                            restructuring, reorganization, dissolution,
                            bankruptcy, or any other change of ownership or
                            control
                          </p>
                        </>
                      )}
                    />
                    <HeadParagraph
                      HeadComponent={() => (
                        <h2
                          id="howweshareinformation"
                          className="pt-5 text-lg font-bold font-arima"
                        >
                          With law enforcement / when required by law
                        </h2>
                      )}
                      ParagraphComponent={() => (
                        <>
                          <p className="pt-1 text-base font-thin">
                            We may disclose your information if reasonably
                            necessary: (i) to comply with a legal process, such
                            as a court order, subpoena, or search warrant,
                            government/law enforcement investigation, or other
                            legal requirements; (ii) to aid in the prevention or
                            detection of crime (subject to applicable law in
                            each case); or (iii) to safeguard the safety of any
                            person.
                          </p>
                        </>
                      )}
                    />
                    <HeadParagraph
                      HeadComponent={() => (
                        <h2
                          id="howweshareinformation"
                          className="pt-5 text-lg font-bold font-arima"
                        >
                          To enforce legal rights
                        </h2>
                      )}
                      ParagraphComponent={() => (
                        <>
                          <p className="pt-1 text-base font-thin">
                            We may also share information: (i) if disclosure
                            would help reduce our liability in an actual or
                            potential lawsuit; (ii) as necessary to safeguard
                            our legal rights and the legal rights of our
                            members, business partners, or other relevant
                            parties; (iii) to enforce our agreements with you;
                            and (iv) to investigate, prevent, or address illegal
                            activity, suspected fraud, or other wrongdoing
                          </p>
                        </>
                      )}
                    />
                    <HeadParagraph
                      HeadComponent={() => (
                        <h2
                          id="howweshareinformation"
                          className="pt-5 text-lg font-bold font-arima"
                        >
                          With your consent or at your request
                        </h2>
                      )}
                      ParagraphComponent={() => (
                        <>
                          <p className="pt-1 text-base font-thin">
                            We may request your consent to share your
                            information with third parties. If we do so, we will
                            clearly explain the reasons why we wish to share the
                            information
                          </p>
                        </>
                      )}
                    />
                  </div>
                  <p className="pt-1 text-base font-thin">
                    We may utilize and disclose non-personal information
                    (defined as information that does not personally identify
                    you, such as device information, general demographics,
                    general behavioral data, and de-identified location), as
                    well as personal information in hashed, non-human readable
                    form, in any of the situations mentioned above
                  </p>
                  <br />
                </>
              )}
            />
            <HeadParagraph
              HeadComponent={() => (
                <h2
                  id="yourrights"
                  className="pt-5 text-xl font-bold font-arima"
                >
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
                          <strong>
                            Access / Update tools in the service.{" "}
                          </strong>
                          Tools and account settings are available to help you
                          access, correct, or delete information you provided to
                          us that's linked to your account directly within the
                          service. Should you have any inquiries about these
                          tools and settings, please reach out to us via the
                          help tab in your account settings.
                        </li>
                        <br />
                        <li className="list-[disc]">
                          <strong>Device permissions. </strong>
                          Mobile platforms often feature permission systems for
                          various types of device data and notifications,
                          including phone contacts, pictures, location services,
                          push notifications, and advertising identifiers. You
                          have the option to adjust your device settings to
                          either consent to or decline the collection or
                          processing of the relevant information or the display
                          of notifications. However, please be aware that
                          modifying these settings may result in certain
                          services losing functionality
                        </li>
                        <br />
                        <li className="list-[disc]">
                          <strong>Uninstall </strong>
                          You can cease all information collection by an app by
                          uninstalling it through the standard uninstall process
                          for your device. It's important to note that
                          uninstalling an app does not deactivate your account.
                          To close your account, please utilize the
                          corresponding functionality provided within the
                          service
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
                          personal information we hold about you. You can
                          exercise your right to deletion by submitting a
                          request
                        </li>
                        <br />
                        <li className="list-[disc]">
                          <strong>Correct/rectify/update. </strong>
                          You can update most of the information you provided to
                          us by editing your profile directly within the
                          service. If you believe that the information we have
                          about you is inaccurate, you may contact us to correct
                          it
                        </li>
                        <br />
                        <li className="list-[disc]">
                          <strong>Object/restrict. </strong>
                          You may also have the right to object to or request
                          that we restrict certain processing of your personal
                          information. To exercise this right, please contact us
                        </li>
                      </div>
                      <br />
                      <p>
                        For your security and that of all our members, we may
                        require you to provide proof of identity before we can
                        fulfill the above requests. Please note that we may
                        reject requests if we are unable to verify your
                        identity, if the request is unlawful or invalid, or if
                        it might violate trade secrets, intellectual property,
                        or the privacy or rights of others. If you seek
                        information regarding another member, such as copies of
                        messages received from them through our service, that
                        member must contact us to provide written consent before
                        the information is released. We may also request proof
                        of identity from them before processing the request.
                        Additionally, there may be certain requests to object to
                        or restrict the processing of personal information that
                        we cannot accommodate, particularly if fulfilling them
                        would prevent us from providing our service to you. For
                        example, we cannot provide our service without your date
                        of birth, as we cannot ensure that you are 18 years of
                        age or older
                        <br />
                        <br />
                        If you reside in Virginia, Colorado, or Connecticut,
                        USA, and your privacy request is denied, you have the
                        option to appeal by contacting us and explicitly
                        mentioning "Privacy Request Appeal." If you are
                        dissatisfied with the outcome of your appeal, you can
                        reach out to the attorney general in your state.
                        Additionally, it's important to note that we do not
                        engage in the "selling" of your personal data or utilize
                        it for "targeted advertising" or "profiling" that could
                        significantly impact legal matters, as defined by
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
                  className="pt-5 text-xl font-bold font-arima"
                >
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
                    profile will stop being visible to other members. Note that
                    we will close your account automatically if you are inactive
                    for a period of two years. After your account is closed, we
                    will delete your personal information, as laid out below:
                    <br />
                    <div className="ml-5">
                      <ul className="pt-5 text-base font-thin list-inside">
                        <li className="list-[disc]">
                          In order to safeguard the safety and security of our
                          members, we institute a safety retention period
                          lasting three months after an account closure, or one
                          year following an account ban. Throughout this
                          duration, we retain your information in case it
                          becomes essential for investigating unlawful or
                          harmful behaviors. The decision to retain information
                          during this safety retention period is founded on our
                          legitimate interest as well as that of potential
                          third-party victims
                        </li>
                        <br />
                        <li className="list-[disc]">
                          After the safety retention window expires, we proceed
                          to delete your data entirely, retaining only minimal
                          information for specific purposes as outlined below:
                        </li>
                        <br />
                        <div className="ml-5">
                          <li className="list-[circle]">
                            We retain a limited amount of data to fulfill legal
                            data retention obligations. Specifically,
                            transaction data is kept for a period of 10 years to
                            adhere to tax and accounting legal requirements.
                            Credit card information remains stored for the
                            duration in which a user may contest a transaction
                          </li>
                          <br />
                          <li className="list-[circle]">
                            We maintain limited information based on our
                            legitimate interests. Customer care records and
                            associated data, as well as imprecise location
                            details of downloads/purchases, are retained for
                            five years to support our customer care decisions,
                            protect our rights, and enable defense against
                            potential claims. Information regarding past
                            accounts and subscriptions is kept for three years
                            after the closure of your last account to ensure
                            accurate financial forecasting and reporting.
                            Profile data is retained for one year in
                            anticipation of potential litigation, for the
                            establishment, exercise, or defense of legal claims.
                            Additionally, data necessary to prevent banned
                            members from opening new accounts is maintained for
                            as long as necessary to ensure the safety and vital
                            interests of our members.
                          </li>
                          <br />
                          <li className="list-[circle]">
                            Lastly, we retain information based on our
                            legitimate interest in situations where there is an
                            ongoing or potential issue, claim, or dispute that
                            necessitates the retention of information. This
                            includes instances where we receive a valid legal
                            subpoena or request to preserve data, in which case
                            we are obligated to retain the data to comply with
                            legal requirements. Additionally, data may be kept
                            if it is deemed necessary for legal proceedings or
                            would otherwise serve a legal purpose
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
                  className="pt-5 text-xl font-bold font-arima"
                >
                  8. No Children Allowed
                </h2>
              )}
              ParagraphComponent={() => (
                <>
                  <p className="pt-1 text-base font-thin ">
                    Our services are exclusively available to individuals who
                    are 18 years of age or older. We strictly prohibit
                    individuals under the age of 18 from accessing our platform.
                    If you suspect that a member is under the age of 18, we
                    encourage you to utilize the reporting mechanism provided on
                    the service
                  </p>
                  <br />
                </>
              )}
            />
            <HeadParagraph
              HeadComponent={() => (
                <h2
                  id="privacypolicy"
                  className="pt-5 text-xl font-bold font-arima"
                >
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
                    implementation of any significant changes, we will notify
                    you to allow ample time for review
                  </p>
                  <br />
                </>
              )}
            />
            <HeadParagraph
              HeadComponent={() => (
                <h2
                  id="howtocontactus"
                  className="pt-5 text-xl font-bold font-arima"
                >
                  11. How to Contact Us
                </h2>
              )}
              ParagraphComponent={() => (
                <>
                  <p className="pt-1 text-base font-thin ">
                    If you have questions about this Privacy Policy, you can
                    send us a request{" "}
                    <a
                      href="mailto:info.wiingr@gmail.com"
                      className="text-brand"
                    >
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
                  className="pt-5 font-bold text-md font-arima"
                >
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
    </>
  );
}

export default TermsOfService;
