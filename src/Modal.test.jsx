import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';
import Frame from './Frame';
import { getBusinessURL } from './utils';

describe('<Modal />', () => {
  let business;
  let onCloseSpy;
  let onExportSpy;
  let wrapper;

  beforeEach(() => {
    business = {
      business_name: 'Foo',
      street: 'Bar',
      city: 'Baz',
      state: 'WA',
      postal_code: '00000',
      country: 'US',
      phone_number: '0000000000',
    };
    onCloseSpy = jest.fn();
    onExportSpy = jest.fn();
    wrapper = shallow(<Modal
      business={business}
      onClose={onCloseSpy}
      onExport={onExportSpy}
    />);
  });

  it('renders a modal when isModalVisible is true', () => {
    expect(wrapper.find('.Modal__body')).toHaveLength(1);
  });

  it('renders a frame', () => {
    expect(wrapper.find(Frame)).toHaveLength(1);
  });

  it('renders a close button', () => {
    expect(wrapper.find('.Modal__close_button')).toHaveLength(1);
  });

  it('renders an export button', () => {
    expect(wrapper.find('.Modal__export_button')).toHaveLength(1);
  });

  it('sends the correct src to the frame', () => {
    const src = getBusinessURL(business);
    expect(wrapper.find(Frame).first().prop('src')).toBe(src);
  });

  it('calls the onClose callback when the user clicks the Close button', () => {
    wrapper.find('.Modal__close_button').simulate('click');
    expect(onCloseSpy).toHaveBeenCalled();
  });

  it('calls the onExport callback when the user clicks the Export button', () => {
    wrapper.find('.Modal__export_button').simulate('click');
    expect(onExportSpy).toHaveBeenCalled();
  });
});
