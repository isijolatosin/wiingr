import React, { useState } from "react";

function Recaptcha() {
	const [code, setCode] = useState("");
	const [number, setNumber] = useState("");
	return (
		<div className="mx-auto max-w-max-content-width h-[85vh] flex flex-col items-start py-10 pt-20 px-4 text-center leading-5 font-thin">
			<h1 className="text-5xl font-arima font-normal leading-9 border-b-[1px] pb-1">
				What's
			</h1>
			<h1 className="text-5xl font-arima font-normal leading-9 border-b-[1px]">
				your number?
			</h1>
			<div className="flex flex-row w-full gap-2 mt-10 ">
				<input
					type="number"
					className="text-xl text-center border-0 w-[25%] h-16 rounded-md bg-highlight "
					placeholder="123"
					value={code}
					onChange={(e) => setCode(e.target.value)}
				/>
				<div className="w-[75%] h-16 rounded-md bg-highlight ">
					<input
						autofocus
						type="number"
						className="w-full h-full text-2xl bg-transparent border-0 focus:border-0 focus:outline-0"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
					/>
				</div>
			</div>
			<p className="inline mt-2 text-sm font-normal text-left leading-[15px]">
				We never share your details with anyone else. It's our little secret.
				<span className="text-sm font-normal text-brand">
					{" "}
					What happens if my number changes?
				</span>
			</p>
		</div>
	);
}

export default Recaptcha;
