import React, {Component, Fragment} from 'react';
import NavBar from "../NavBar/NavBar";
import {connect} from "react-redux";
import Task from "../Task/Task";

class CompletedTasks extends Component {
  displayCompletedTasks = () => {
    let {tasks, error, loading} = this.props;
    if(tasks.length) {
      let data = tasks.map(task => {
        return (
          <Task key={task.id} taskInfo={task}/>
        );
      });
      return (
        <div className="task-wrapper">
          {data}
        </div>
      )
    } else if(!loading && !error && !tasks.length) {
      return <h4 className="text-center">None of the tasks are completed</h4>;
    } else if(error) {
      return <div>Error: couldn't load data</div>;
    } else {
      return null;
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
    tasks: state.tasks.filter(task => task.completed),
    error: state.modal.info.title === "Error",
    loading: state.loading
  };
};

export default connect(mapStateToProps)(CompletedTasks);