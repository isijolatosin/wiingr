import React from "react";
import { getDate, getTime } from "../utilities/formatTimestamp";
import truncateSentence from "../utilities/truncateSentences";

function SelectedReportComponent({ data, siteTheme }) {
	return (
		<div className="flex flex-col p-3 mb-10">
			<div
				className={[
					"flex flex-col md:flex-row gap-3 mt-20 mb-5 md:mb-2 text-[14px] w-full",
				].join(" ")}>
				<div className="w-full h-[700px] md:h-[400px] md:pr-3">
					<img
						src={data.image}
						loading="lazy"
						alt=".."
						className={["object-cover w-full h-full rounded-lg"].join(" ")}
					/>
				</div>

				<div
					className={["flex flex-col items-start", siteTheme.textColor].join(
						" "
					)}>
					<span className="text-start">
						<span className="font-semibold">Report ID: </span> {data.reportid}
					</span>
					<span className="text-start">
						<span className="font-semibold">Time reported: </span>
						{getTime(data.timestamp)}, {getDate(data.timestamp)}
					</span>
					<span
						className={[
							"text-start w-full border-b-[1px] mb-3 pb-3",
							siteTheme.borderColor,
						].join(" ")}>
						<span className="font-semibold">Status: </span> {data.status}
					</span>
					<span className="text-start">
						<span className="font-semibold">Reporter ID: </span>{" "}
						{data.reporterid}
					</span>
					<span className="text-start">
						<span className="font-semibold">Reporter email: </span>
						{data.reporteremail}
					</span>
					<span className="text-start">
						<span className="font-semibold">Reporter phone no: </span>
						{data.reporterphonenumber}
					</span>
					<span
						className={[
							"text-start w-full border-t-[1px] mt-3 pt-3",
							siteTheme.borderColor,
						].join(" ")}>
						<span className="font-semibold">Offender ID: </span>
						{data.offenderid}
					</span>
					<span className="text-start">
						<span className="font-semibold">Offender phone no: </span>
						{data.offenderphonenumber}
					</span>
				</div>
			</div>
			<div
				className={[
					"flex flex-col items-start mt-5 mb-10",
					siteTheme.textColor,
				].join(" ")}>
				<span
					className={[
						"border-b-[1px] w-full pb-2 capitalize",
						siteTheme.borderColor,
					].join(" ")}>
					{data.title}
				</span>
				<span className="mt-3 text-start">
					{truncateSentence(data.reason, 20)}
				</span>
			</div>
		</div>
	);
}

export default SelectedReportComponent;
