import React from "react";

// Renders content text where words wrapped in *asterisks* become the
// italic serif accent, e.g. "Websites that look *world-class*".
const AccentText = ({ text }: { text?: string }) => {
	if (!text) return null;

	return (
		<>
			{text.split(/(\*[^*]+\*)/g).map((part, index) =>
				part.startsWith("*") && part.endsWith("*") ? (
					<span
						key={index}
						className="accent">
						{part.slice(1, -1)}
					</span>
				) : (
					<React.Fragment key={index}>{part}</React.Fragment>
				)
			)}
		</>
	);
};

export default AccentText;
