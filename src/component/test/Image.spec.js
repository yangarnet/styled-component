import React from "react";
import { shallow } from "enzyme";
import { assert, expect } from "chai";
import Image from "../Image";

describe("Image component", () => {
    let wrapper;

    beforeEach(() => {
        const props = {
            className: "my-class-name",
            src: "http://www.youimagelinks.com.au"
        };

        wrapper = shallow(<Image {...props} />);
    });

    it("should render the Image compoent with given props", () => {
        const img = wrapper.find("img");
        assert(img !== null && img !== undefined);
        expect(img).to.have.lengthOf(1);
        expect(img.props().className).to.equal("my-class-name");
        expect(img.props().src).to.equal("http://www.youimagelinks.com.au");
    });

    it("should allow setting props for the compoent and render properly", () => {
        wrapper.setProps({
            className: "my-new-class-name",
            src: "http://www.your-new-image-links.com.au"
        });

        const img = wrapper.find("img");
        assert(img !== null && img !== undefined);
        expect(img).to.have.lengthOf(1);
        expect(img.props().className).to.equal("my-new-class-name");
        expect(img.props().src).to.equal(
            "http://www.your-new-image-links.com.au"
        );
    });
});
