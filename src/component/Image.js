import React from "react";
import PropTypes from "prop-types";

const Image = ({ className, src, alt }) => (
    <img className={className} src={src} alt={alt} />
);

Image.propTypes = {
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

Image.defaultProps = {
    className: "",
    src: "",
    alt: ""
};
export default Image;
