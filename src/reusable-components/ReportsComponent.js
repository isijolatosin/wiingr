import React from "react";
import { getDate, getTime } from "../utilities/formatTimestamp";
import truncateSentence from "../utilities/truncateSentences";

function ReportsComponent({ index, data, siteTheme, functionCall }) {
	let even = false;
	if (index % 2 === 0) {
		even = true;
	}

	return (
		<div
			onClick={() => functionCall(data.id)}
			className={[
				"flex flex-col mb-10 border-[1px] p-3",
				siteTheme.borderColor,
				even ? "md:mr-5" : "",
			].join(" ")}>
			<div
				className={[
					"flex flex-row gap-3 mt-2 mb-5 md:mb-2 text-[14px] w-full",
				].join(" ")}>
				<div
					className={[
						"w-[200px] h-full border-r-[1px] pr-3",
						siteTheme.borderColor,
					].join(" ")}>
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
			<div className={["flex flex-col items-start mt-5"].join(" ")}>
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

export default ReportsComponent;
