import React from 'react';
import {connect} from "react-redux";
import {deleteTask, updateTask} from "../../actions";
import "./Task.css";
import history from "../../history";

class Task extends React.Component {

  delete = id => {
    this.props.deleteTask(id);
  };

  update = (id, completed) => {
    this.props.updateTask(id, {completed: !completed});
  }

  isCompletedSection = () => {
    // used to prevent showing completed task in greyed color in completed section
    return history.location.pathname !== "/completed"
  }

  render() {
    let {id, title, description, completed} = this.props.taskInfo,
        bgClass = completed && this.isCompletedSection() ?"bg-secondary text-white": "";
    return(
      <div className={`card ${bgClass}`}>
        <div className="card-body d-flex justify-content-between">
          <div>
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
          </div>
          <div className="d-flex align-items-center">
            <button type="button" className="check-mark mr-3" onClick={() => this.update(id, completed)}>
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#16a085" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
              </svg>
            </button>
            <button type="button" className="x-mark" onClick={() => this.delete(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#e74c3c" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(null, {deleteTask, updateTask})(Task);