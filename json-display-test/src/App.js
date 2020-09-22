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
        const url = "https://raw.githubusercontent.com/ianedwards-jpg/Homework-19/master/user_directory_app/public/employees.json"
        // const url = "./"
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(lists => {
            this.setState({ lists: lists.Employees })
            console.log(lists.Employees)
        })

    }

    render() {
        return (
            // <div>
            //     {this.state.lists.map((lists) => {
            //         return (
            //             <div key={lists.userId}>
            //                 <h3>{JSON.stringify(lists)}</h3>
            //             </div>
            //         )
            //     })}

            //     <div>
            //         <h1>Hello World!</h1>
            //     </div>
            // </div>

            <div>
                {this.state.lists.map((lists) => {
                    return (
                        <div key={lists.userId} style={{fontFamily: "Arial"}}>
                            <li>{JSON.stringify(lists)}</li>
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

//   componentDidMount() {
//     axios.get('http://localhost:3001/api/v1/lists.json')
//     .then(response => {
//       console.log(response.data);
//       this.setState({lists: response.data})
//     })
//   }