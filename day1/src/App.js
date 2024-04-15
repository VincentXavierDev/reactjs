// Get data from API
import React, { Component } from 'react'
import Loading from './Loading'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      loading: true
    }
  }

  async getUser() {
    const res = await axios('https://api.randomuser.me/?nat=US&result=5')
    this.setState({
      user: res.data.results,
      loading: false
    })
  }

  // Chạy sau khi component được mounted -- tương tự với hook mounted trong vuejs
  async componentDidMount() {
    await this.getUser()
  }

  clickHandle() {
    console.log("helooooooooooooooooooooo");
  }

  render() {
    return <div className='App'>
      {this.state.loading ? <Loading mess={"hehehehehehe"} /> : this.state.user.map(u => <div key={u}>{u.cell}</div>)}
      <button style={{ color: "red" }} onClick={this.clickHandle}>
        Click here!
      </button>
    </div>
  }
}

export default App;
