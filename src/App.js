import React, { Component } from 'react'
import './App.css'
import List from './components/list'

class App extends Component {
  state = {
    inputValue: '',
    list: []
  }

  updateInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  handleAdd = () => {
    const tempList = [...this.state.list] // copy of list in state
    if(this.state.inputValue){ // check whether input is empty
      tempList.push(this.state.inputValue) // pushing inputValue to tempList
      this.setState({ list: tempList }) // update list in state with new values in tempList
    }
  }

  handleDelete = (index) => {
    const tempList = [...this.state.list] // copy of list in state
    tempList.splice(index, 1);
    this.setState({ list: tempList })
  }

  render() {
    return (
      <div className='app'>
        <h1>Todo App</h1>
        <p>Enter to the List:</p>
        <input className="in" type="text" onChange={this.updateInput}/>
        <button className="btn" onClick={this.handleAdd}> Add </button>
        <List list={this.state.list} delete={this.handleDelete} />
      </div>
    )
  }
}

export default App