import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
class Header extends React.Component {
    render() {
      return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Bin 2 Dec React</Navbar.Brand>
        </Navbar>
      )
    }
}
export default Header;