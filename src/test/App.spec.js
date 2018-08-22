import React from "react";
import { shallow, mount } from "enzyme";
import { assert, expect } from "chai";
import sinon from "sinon";
import App from "../App";
import { AppContainer, AppContent } from "../AppStyled";
import { StyledImage, StyledHeader } from "../component/ImageStyled";

describe("The App", () => {
    it("should render the app properly without crash", () => {
        const props = {
            hero: "/your/image.png",
            logo: "/your/logo.png"
        };
        let wrapper = shallow(<App {...props} />);
        const appContainer = wrapper.find(AppContainer);

        assert(appContainer !== null && appContainer !== undefined);

        expect(appContainer).to.have.lengthOf(1);
        expect(appContainer.find(AppContent)).to.have.lengthOf(
            1,
            "only one AppContent will get rendered"
        );

        expect(
            appContainer
                .find(AppContent)
                .children()
                .find(StyledImage)
        ).to.have.lengthOf(
            1,
            "AppContent has only one child element as StyledImage"
        );

        expect(
            appContainer
                .find(AppContent)
                .children()
                .find(StyledHeader)
        ).to.have.lengthOf(
            1,
            "AppContent has only one child element as StyledHeader"
        );

        expect(appContainer.find(StyledImage)).to.have.lengthOf(
            2,
            "two StyledImage will be rendered"
        );
        expect(
            appContainer
                .find(StyledImage)
                .at(0)
                .props().primary
        ).to.be.exist;

        expect(appContainer.find(StyledHeader)).to.have.lengthOf(
            1,
            "only one StyledHeader will be rendered"
        );
        expect(appContainer.find(StyledHeader).html()).to.contains(
            "Home And Away"
        );
    });

    it("should render the app properly with given properties", () => {
        const props = {
            hero: "/your/image.png",
            logo: "/your/logo.png"
        };

        let wrapper = mount(<App {...props} />);
        const appContainer = wrapper.find(AppContainer);

        assert(appContainer !== null && appContainer !== undefined);

        expect(appContainer).to.have.lengthOf(1);
        expect(appContainer.find(AppContent)).to.have.lengthOf(
            1,
            "only one AppContent will get rendered"
        );

        expect(appContainer.find(StyledImage)).to.have.lengthOf(
            2,
            "it should render two image components"
        );

        expect(
            appContainer
                .find(StyledImage)
                .at(0)
                .props().src
        ).to.be.equal("/your/image.png");

        expect(
            appContainer
                .find(StyledImage)
                .at(1)
                .props().src
        ).to.be.equal("/your/logo.png");

        expect(appContainer.find(StyledHeader)).to.have.lengthOf(1);
        expect(appContainer.find(StyledHeader).text()).to.be.equal(
            "Home And Away"
        );

        expect(appContainer.find("img")).to.have.length(2);
        expect(appContainer.find("h1")).to.have.length(1);
    });
});
