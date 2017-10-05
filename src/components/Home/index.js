import React from 'react';
import ReactDOM from 'react-dom'

class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      register: []
    }
  }

  onComponentDidLoad() {
    this.getRegister();
  }

  insertOneRegister (data) {
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .catch(err => console.log(err))
    .then((response) => {
     console.log(response)
    })
  }

  getRegister () {
    fetch('/api/register', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .catch((err) => {console.log(err)})
    .then((data) => {
      this.setState({
        register: data
      })
    })
  }

  render () {
    if (this.state.register.length != 0) {
      return (
        <h1>{this.state.register}</h1>
      )
    } else {
      return (
        <h1>Nothing loaded yet...</h1>
      )
    }
  }
}

export default Home
