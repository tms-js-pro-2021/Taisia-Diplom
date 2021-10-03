import React from "react";

export default ({ onClick, title, className }) => {
	return (
		<button onClick={onClick} className={className}>
			{title}
		</button>
	);
};
