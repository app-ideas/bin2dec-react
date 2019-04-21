import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col,Form,Button } from 'react-bootstrap'
import BinaryTextBox from './Components/BinaryTextBox'
import Header from './Components/Header'
class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }
  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    console.log(this.state.name);
    event.preventDefault();
  }
  render() {
    const { validated } = this.state;
    return (
      <div className="App">
        <Header></Header>
        <Container>
          <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}>
            <Form.Row>
                <Form.Group as={Col} md="3" controlId="formBinary">
                  <Form.Label>Binary</Form.Label>
                  <BinaryTextBox className="form-control" required={true} maxlength={8} ></BinaryTextBox>
                </Form.Group>          
            </Form.Row>
            <Button type="submit" size="sm">Convert</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
