import React, { Component } from 'react'
import './App.css'
import ErrorPopup from './components/error-popup'
import List from './components/list'

class App extends Component {
  state = {
    inputValue: '',
    inputDate: '',
    list: [
      {task: 'car wash', date: '2021-05-30'},
    ],
    isError: false
  }

  updateInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  updateDate = (event) => {
    this.setState({ inputDate: event.target.value })
  }

  hasObject = (arr, obj) => {
    for( let i=0; i<arr.length; i++ ) {
      if(arr[i].task === obj.task && arr[i].date === obj.date) {
        return true
      }
      return false
    }
  }

  handleAdd = () => {
    const { inputDate, inputValue } = this.state
    const tempList = [...this.state.list] // copy of list in state
    const tempObj = {  //create a an object containing both task and date which is similar to elements in list array
      task: inputValue,
      date: inputDate
    }

    if(inputValue && inputDate){ // check whether input is empty and date is empty
      console.log(tempObj, tempList[0])
      if(this.hasObject(tempList, tempObj)){
        this.setState({ isError: true })
      }
      else {
        tempList.push(tempObj) // pushing tempObj to tempList
        this.setState({ list: tempList }) // update list in state with new values in tempList
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
        <div className='task'>
          <label>Task</label>
          <input className="in" type="text" onChange={this.updateInput}/>
        </div>
        <div className='date'>
          <label>Date</label>
          <input className="date-input" type='date' onChange={this.updateDate} />
        </div>
        <button className="btn" onClick={this.handleAdd}> Add </button>
        <List list={this.state.list} delete={this.handleDelete} />
        { isError && <ErrorPopup closePopup = {this.closePopup} />}
      </div>
    )
  }
}

export default App