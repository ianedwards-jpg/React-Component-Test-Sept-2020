import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists.json')
    .then(response => {
      console.log(response.data);
      this.setState({lists: response.data})
    })
  }

  render() {
    return(
      <div>
        {this.state.lists.map((list) => {
          return(
            <div key={list.id}>
              <h1>{list}</h1>
            </div>
          )
        })}
      </div>
    )
  }
} 
export default App;


// import React, { Component } from 'react';
// import Example1 from './Example1';
// import Example2 from './Example2';
// import Example3 from './Example3';
 
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
// 				<Example1></Example1>
// 				<Example2></Example2>
// 				<Example3></Example3>
//             </div>
//         );
//     }
// }