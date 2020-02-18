import React, {Component, Fragment} from 'react';
import NavBar from "../NavBar/NavBar";
import {connect} from "react-redux";
import Task from "../Task/Task";

class PendingTasks extends Component {

  displayPendingTasks = () => {
    if(this.props.tasks.length) {
      let data = this.props.tasks.map(task => {
        return (
          <Task key={task.id} taskInfo={task} />
        )
      });
      return (
        <div className="task-wrapper">
          {data}
        </div>
      )
    } else {
      return <h4 className="text-center">No Pending Tasks</h4>;
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Fragment>
          {this.displayPendingTasks()}
        </Fragment>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks.filter(task => !task.completed)
  };
};

export default connect(mapStateToProps)(PendingTasks);