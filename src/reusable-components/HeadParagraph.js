import React from "react";

function HeadParagraph({ HeadComponent, ParagraphComponent }) {
	return (
		<>
			<HeadComponent />
			<ParagraphComponent />
		</>
	);
}

export default HeadParagraph;
