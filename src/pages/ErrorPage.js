import React from "react";
import { Helmet } from "react-helmet";

import { useNavigate } from "react-router-dom";

import Layout from "../reusable-components/Layout";

function ErrorPage() {
	const navigate = useNavigate();
	return (
		<>
			<Helmet>
				<title>Wiingr | Not Found</title>
			</Helmet>
			<Layout>
				<div className="mx-auto max-w-max-content-width h-[85vh] flex justify-center items-center px-4 text-center leading-5 font-thin">
					<div>
						<h1 className="text-2xl font-normal border-b-[1px] pb-3 mb-5">
							Oops!
						</h1>
						<p className="pt-1 text-base font-thin">
							It seems that we are unable to locate the page you are searching
							for.
						</p>
						<div className="w-full mx-auto mt-20 text-brandwhite">
							<button
								className="px-4 py-1 text-xs rounded-full w-fit bg-deepGrey"
								type="button"
								onClick={() => {
									navigate("/");
								}}>
								Back to Wiingr
							</button>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default ErrorPage;
