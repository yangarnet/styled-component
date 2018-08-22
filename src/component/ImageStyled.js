import styled from "styled-components";
import Image from "./Image";

export const StyledImage = styled(Image)`
    ${props =>
        props.primary
            ? "width: 100%;"
            : `
    max-width: 100px;
    max-height: 100px;
    width: auto;
    height: auto;
    float: left;
    display: block;
    `};
`;

export const StyledHeader = styled.h1`
    float: left;
    padding-top: 0.2pc;
    padding-left: 1pc;
`;
