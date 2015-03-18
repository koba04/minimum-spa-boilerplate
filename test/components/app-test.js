import assert from 'power-assert';
import React from 'react/addons';
import App from '../../lib/components/app';

const {TestUtils} = React.addons;

describe("App", () => {
  let component;
  
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<App />);
  });
  
  it("returns Hello World in div", () => {
    const div = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
    assert(
      React.findDOMNode(div).textContent
      ===
      'Hello World'
    );
  });
});
