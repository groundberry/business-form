import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      business: {
        business_name: '',
        street: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        phone_number: '',
      },
    };

    this.handleChangeBusinessData = this.handleChangeBusinessData.bind(this);
    this.handleSubmitBusinessData = this.handleSubmitBusinessData.bind(this);
  }

  handleChangeBusinessData(label, value) {
    this.setState(prevState => ({
      business: {
        ...prevState.business,
        [label]: value,
      },
    }));
  }

  handleSubmitBusinessData() {
    // TODO
  }

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h2>Business Form</h2>
        </div>
        <div className="App__body">
          <Form
            business={this.state.business}
            onChange={this.handleChangeBusinessData}
            onSubmit={this.handleSubmitBusinessData}
          />
        </div>
      </div>
    );
  }
}

export default App;
