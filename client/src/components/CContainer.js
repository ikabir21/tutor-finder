import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const CContainer = ({ children, ...rest }) => (
	<Box
		maxWidth={{ sm: 720, md: 1236 }}
		width={"100%"}
		margin={"0 auto"}
		paddingX={2}
		paddingY={{ xs: 4, sm: 6, md: 12 }}
		{...rest}>
		{children}
	</Box>
);

CContainer.propTypes = {
	children: PropTypes.node.isRequired
};

export default CContainer;
