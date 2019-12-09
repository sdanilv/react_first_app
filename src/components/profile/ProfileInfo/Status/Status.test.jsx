// import {act, create} from "react-test-renderer"
// import ReactDOM from 'react-dom';
// import toJson from 'enzyme-to-json';
import Status from "./Status";
import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe(`Status component`, () => {
    let wrapper;
    let span;
    let setMyStatus;
    beforeEach(() => {
        setMyStatus = jest.fn((status) => {
            return status
        });
        wrapper = mount(<Status status="Hello world" setMyStatus={setMyStatus}/>);
        span = wrapper.find("span");
    });

    describe(`status span test`, () => {
        test(`if edit mode false, should see span`, () => {
            expect(span).not.toBeNull();
        });
        test(`span should contain "Hello world"`, () => {
            expect(span.text()).toBe("Hello world");
        });
    });

    describe(`after double click for span`, () => {
        let input;
        beforeEach(() => {
            span.simulate("doubleClick");
            input = wrapper.find("input")
        });
        test(`should be input`, () => {

            expect(input.length).not.toBeNull();
        });
        test(`input should have value "Hello world"`, () => {
            expect(input.props().value).toBe("Hello world");
        });

        describe(`after blur`, () => {
            beforeEach(() => {
                input.simulate("blur");
            });

            test(` input mus be null`, () => {
                input = wrapper.find("input");
                expect(input.length).toBe(0)
            });

            test(`should calling setMyStatus one times`, () => {
                expect(setMyStatus.mock.calls.length).toBe(1)
            });

            test(`setMyStatus should return "Hello world"`, () => {
                expect(setMyStatus.mock.results[0].value).toBe("Hello world")
            });
        });

        describe(`after change input`, () => {
            beforeEach(() => {
                input.simulate("change", {target: {value: "Change"}});
                input = wrapper.find("input");
            });
            test(`value of input should be change`, () => {
                expect(input.props().value).toBe("Change");
            });
            test(`after blur setState should return changed status`, () => {
                input.simulate("blur");
                expect(setMyStatus.mock.results[0].value).toBe("Change");
            })
        });

    });
});