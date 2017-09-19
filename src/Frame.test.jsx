import React from 'react';
import { shallow } from 'enzyme';
import Frame from './Frame';

describe('<Frame />', () => {
  it('renders a modal when isModalVisible is true', () => {
    const src = 'http://samplesrc.net';
    const wrapper = shallow(<Frame
      src={src}
    />);
    expect(wrapper.find('iframe')).toHaveLength(1);
  });
});
