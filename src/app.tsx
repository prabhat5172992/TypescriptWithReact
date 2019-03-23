import React, { Component } from 'react'
import Sample from './sample';
// @flow
/* Flow is a static type checker that helps you write code with fewer bugs */

export default class App extends Component {

  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      age: ""
    }
  }


  returnBio = (name: string, age: string) => {
    return `My name is ${name} and my age is ${age}`;
  }
  render() {
    return (
      <div>
        <h2>{this.returnBio("Prabhat", "24")}</h2>
        <hr />
        <Sample />
      </div>
    )
  }
}
