import React, {Component, Fragment} from 'react';
import NavBar from "../NavBar/NavBar";
import {connect} from "react-redux";
import Task from "../Task/Task";

class CompletedTasks extends Component {
  displayCompletedTasks = () => {
    if(this.props.tasks.length) {
      let data = this.props.tasks.map(task => {
        return (
          <Task key={task.id} taskInfo={task}/>
        );
      });
      return (
        <div className="task-wrapper">
          {data}
        </div>
      )
    } else {
      return <h4 className="text-center">None of the tasks are completed</h4>;
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <Fragment>
          {this.displayCompletedTasks()}
        </Fragment>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks.filter(task => task.completed)
  };
};

export default connect(mapStateToProps)(CompletedTasks);