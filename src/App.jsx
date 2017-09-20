import React, { Component } from 'react';
import Form from './Form';
import Modal from './Modal';
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
      isModalVisible: false,
    };

    this.handleChangeBusinessData = this.handleChangeBusinessData.bind(this);
    this.handleSubmitBusinessData = this.handleSubmitBusinessData.bind(this);
    this.handleExportBusinessData = this.handleExportBusinessData.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
    this.toggleModal();
  }

  handleExportBusinessData() {
    console.log(this.state.business);
  }

  toggleModal() {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  }

  render() {
    return (
      <div className="App">
        <h2 className="App__header">
          Business Form
        </h2>
        <div className="App__body">
          {this.state.isModalVisible
            ? <Modal
              business={this.state.business}
              onClose={this.toggleModal}
              onExport={this.handleExportBusinessData}
            />
            : <Form
              business={this.state.business}
              onChange={this.handleChangeBusinessData}
              onSubmit={this.handleSubmitBusinessData}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
