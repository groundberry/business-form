import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import App from './App';

describe('<App />', () => {
  it('renders a form', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
