import React from 'react'
// import ReactDOM from 'react-dom'
// import axios from 'axios'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
    }

    componentDidMount() {
        //const url = "https://jsonplaceholder.typicode.com/posts";
        //const url = "https://gist.githubusercontent.com/rominirani/8235702/raw/a50f7c449c41b6dc8eb87d8d393eeff62121b392/employees.json"
        const url = "https://raw.githubusercontent.com/ianedwards-jpg/Homework-19/master/user_directory_app/public/employees.json"
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(lists => {
            this.setState({ lists: lists.Employees })
            console.log(lists.Employees)
        })

    }

    render() {
        return (
            <div>
                {this.state.lists.map((lists) => {
          return(
            <div key={lists.userId}>
              <h3>{JSON.stringify(lists)}</h3>
            </div>
          )
        })}

                <div>
                    <h1>Hello World!</h1>
                </div>
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

//   componentDidMount() {
//     axios.get('http://localhost:3001/api/v1/lists.json')
//     .then(response => {
//       console.log(response.data);
//       this.setState({lists: response.data})
//     })
//   }