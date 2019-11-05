import {act, create} from "react-test-renderer"
import Status from "./Status";
import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe(`status span test`, ()=>{
  test(`if edit mode false, should see span`,()=>{
    const component = create(<Status status="Hello world" />);
    const root = component.root;
    const span = root.findByType("span");
    const innerHTML = span.children;
    expect(innerHTML.length).toBe(1);
  });

  test(`span should contain "Hello world"`,()=>{
    const component = create(<Status status="Hello world" />);
    const root = component.root;
    const span = root.findByType("span");
    const innerHTML = span.children;
    expect(innerHTML[0]).toBe("Hello world");
  });
});

describe(`status span test`, ()=>{
  test(`if editmode come true, should be input`, ()=>{
    const component = create(<Status status="Hello world" />);
    const root = component.root;
    const instance = component.getInstance();
    const span = root.findByType("span");
    act(()=>    span.props.onDoubleClick());
    const input = root.findByType("input");
    expect(input.props.value).toBe("Hello world");
  });

  test(`if editmode come true, should be input`, ()=>{
    const mockCallback = jest.fn();
    const component = create(<Status status="Hello world" setMyStatus={mockCallback} />);
    const instance = component.getInstance();
    const root = component.root;
    root.editModeToggle(false);

    expect(mockCallback.mock.calls).toBe("1");
  });

})