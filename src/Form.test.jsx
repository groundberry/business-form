import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import Field from './Field';

describe('<Form />', () => {
  let business;
  let onChangeSpy;
  let onSubmitSpy;
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
    onChangeSpy = jest.fn();
    onSubmitSpy = jest.fn();
    wrapper = shallow(<Form
      business={business}
      onChange={onChangeSpy}
      onSubmit={onSubmitSpy}
    />);
  });

  it('renders seven form fields', () => {
    expect(wrapper.find(Field)).toHaveLength(7);
  });

  it('renders a submit button', () => {
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
  });

  it('calls the onChange callback when the user enters information in the field', () => {
    wrapper.find(Field).first().prop('onChange')({
      target: {
        value: 'Foo',
      },
    });
    expect(onChangeSpy).toHaveBeenCalledWith('business_name', 'Foo');
  });

  it('calls the onSubmit callback when the user submits the form', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
