// Get data from API
import React, { useState } from 'react'
// import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button style={{ color: "red" }} onClick={increment}>
        Click {count} times!
      </button>
    </div>
  )
}

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       user: [],
//       loading: true
//     }
//   }

//   async getUser() {
//     const res = await axios('https://api.randomuser.me/?nat=US&result=5')
//     this.setState({
//       user: res.data.results,
//       loading: false
//     })
//   }

//   // Chạy sau khi component được mounted -- tương tự với hook mounted trong vuejs
//   async componentDidMount() {
//     await this.getUser()
//   }

//   clickHandle() {
//     console.log("helooooooooooooooooooooo");
//   }

//   render() {
//     return <div className='App'>
//       {this.state.loading ? <Loading mess={"hehehehehehe"} /> : this.state.user.map(u => <div key={u}>{u.cell}</div>)}
//       <button style={{ color: "red" }} onClick={this.clickHandle}>
//         Click here!
//       </button>
//     </div>
//   }
// }

export default App;
