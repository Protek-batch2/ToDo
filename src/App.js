import React, { Component } from 'react'
import './App.css'
import ErrorPopup from './components/error-popup'
import List from './components/list'

class App extends Component {
  state = {
    inputValue: '',
    list: ['car wash'],
    isError: false
  }

  updateInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  handleAdd = () => {
    const tempList = [...this.state.list] // copy of list in state
    if(this.state.inputValue){ // check whether input is empty
      if(!tempList.includes(this.state.inputValue)) {
        tempList.push(this.state.inputValue) // pushing inputValue to tempList
        this.setState({ list: tempList }) // update list in state with new values in tempList
      }
      else {
        this.setState({ isError: true })
      }
    }
  }

  handleDelete = (index) => {
    const tempList = [...this.state.list] // copy of list in state
    tempList.splice(index, 1);
    this.setState({ list: tempList })
  }

  closePopup = () => {
    this.setState({ isError: false })
  }

  render() {
    const { isError } = this.state //destructing
    return (
      <div className='app'>
        <h1>Todo App</h1>
        <p>Enter to the List:</p>
        <input className="in" type="text" onChange={this.updateInput}/>
        <button className="btn" onClick={this.handleAdd}> Add </button>
        <List list={this.state.list} delete={this.handleDelete} />
        { isError && <ErrorPopup closePopup = {this.closePopup} />}
      </div>
    )
  }
}

export default App