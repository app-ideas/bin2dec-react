import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col,Form,Button } from 'react-bootstrap'
import BinaryTextBox from './Components/BinaryTextBox'
import Header from './Components/Header'
class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false,
                   binarytext: '' ,
                   decimalval : ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlebinaryinputchange = this.handlebinaryinputchange.bind(this);
  }
  handlebinaryinputchange(binaryval)
  {
    this.setState({binarytext: binaryval});
  }
  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });

    const reversedBinaryText = Array.from(this.state.binarytext)
      .map(Number) // Convert to a number from string
      .reverse()
      var dec = reversedBinaryText.reduce( function(accumulator, currentValue,idx){
        return accumulator + (currentValue * Math.pow(2,idx))
      });
    
    this.setState({decimalval : dec});
    console.log(this.state.binarytext);
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
                  <BinaryTextBox className="form-control" required={true} onTextChange={this.handlebinaryinputchange} value={this.state.binarytext} maxlength={8} ></BinaryTextBox>
                </Form.Group>          
            </Form.Row>
            <Form.Row>
            <Button type="submit" size="sm">Convert</Button>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="3" controlId="formBinary">
                  <Form.Label>Decimal</Form.Label>
                  <Form.Control type="text" placeholder="Decimal Value" readOnly value={this.state.decimalval}></Form.Control>
                </Form.Group>   
            </Form.Row>
            
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
