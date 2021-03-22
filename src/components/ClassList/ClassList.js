import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

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
    const studentList = this.state.students.map((elem, i) => (<Link to={`/student/${elem.id}`} key={i} > <h3 >{elem.first_name} {elem.last_name}</h3></Link >))
    return (
      <div>
        <div className="box">
          <h1>{this.props.match.params.class}</h1>
          <h2>ClassList:</h2>
          {studentList}
        </div>
        <div>
          <Link to='/'><button>Back</button></Link>
        </div>
        <div>
          <Switch>
            <Route to='/' />
          </Switch>
        </div>
      </div>
    )
  }
}