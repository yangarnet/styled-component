import React from "react";
import PropTypes from "prop-types";
import { AppContainer, AppContent } from "./AppStyled";
import { StyledImage, StyledHeader } from "./component/ImageStyled";

const App = ({ hero, logo }) => {
    return (
        <AppContainer>
            <StyledImage src={hero} primary alt="hero image" />
            <AppContent>
                <StyledImage src={logo} alt="logo" />
                <StyledHeader>Home And Away</StyledHeader>
            </AppContent>
        </AppContainer>
    );
};

App.propTypes = {
    hero: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
};

App.defaultProps = {
    hero: "",
    logo: ""
};

export default App;
