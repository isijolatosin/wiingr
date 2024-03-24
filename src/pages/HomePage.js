import React from "react";
import Layout from "../reusable-components/Layout";

function HomePage() {
	return (
		<Layout>
			<div className="mx-auto max-w-max-content-width h-[85vh] flex justify-center items-center px-4 text-center leading-5 font-thin">
				<div>
					<h1 className="text-2xl font-normal border-b-[1px] pb-3 mb-5">
						Disclaimer: Website Under Review
					</h1>
					<p className="pt-1 text-base font-thin text-left">
						We regret to inform you that the website you are attempting to
						access has not yet launched and is currently under review. As a
						result, it is not open to the public at this time. We are diligently
						working to finalize the necessary preparations to ensure a smooth
						and successful launch.
						<br />
						<br />
						Please bear with us as we complete this process. We are committed to
						providing you with an exceptional experience once the website is
						ready for public access. In the meantime, we appreciate your
						patience and understanding.
						<br />
						<br />
						Thank you for your interest in our website. Stay tuned for updates
						on our progress and the official launch date.
					</p>
				</div>
			</div>
		</Layout>
	);
}

export default HomePage;
