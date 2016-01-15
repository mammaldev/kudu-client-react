import chai from 'chai';
import jsx from 'chai-jsx';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Kudu from '../src/kudu';

chai.use(jsx);
let expect = chai.expect;

describe('Kudu component', () => {

  let renderer;

  beforeEach(() => {
    renderer = createRenderer();
  });

  it('should render its children', () => {
    renderer.render(
      <Kudu app={{ a: 1 }}>
        <div id="child"></div>
      </Kudu>
    );
    let result = renderer.getRenderOutput();
    expect(result).jsx.to.equal(<div id="child"></div>);
  });
});
