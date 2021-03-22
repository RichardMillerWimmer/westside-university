import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => {
        this.setState({ students: res.data });
      });
  }

  render() {
    const studentList = this.state.students.map((elem, i) => (<h3 key={i}>{elem.first_name} {elem.last_name}</h3>))
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {studentList}
      </div>
    )
  }
}