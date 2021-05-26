import { Component } from 'react'
import './style.css'

class List extends Component {
  render() {
    return(
      <div className="list-container">
        <h2>Todo list:</h2>
        <table className="table">
          <tr className="row">
            <th className="task-col">Task</th>
            <th className="btn-col">Date</th>
            <th className="btn-col">Button</th>
          </tr>
          {this.props.list.map((ele, index) => {
            return (
              <tr className="row" key={index}>
                <td className="task-col">{ele.task}</td>
                <td className="date-col">{ele.date}</td>
                <td className="btn-col">
                  <button onClick={() => this.props.delete(index)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

export default List