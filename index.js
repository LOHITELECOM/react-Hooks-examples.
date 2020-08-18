import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Table } from "react-bootstrap";
import AlertDismissable from "./AlertDismissable";
import ClassCounter from './classCounter';
import HooksCount from './HooksCount';
import HooksCounter from './Components/HooksCounter';
import HooksInput from './Components/HooksInput';
import HooksArrays from './HooksArrays';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
<HooksInput/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
