import React, {Component, Fragment} from 'react';
import NavBar from "../NavBar/NavBar";
import {connect} from "react-redux";
import Task from "../Task/Task";

class AllTasks extends Component {

  displayTasks = () => {
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
      );
      
    } else {
      return <h4 className="text-center">No Tasks Added</h4>
    }
  };

  render() {
    return(
      <div>
        <NavBar />
        <Fragment>
          {this.displayTasks()}
        </Fragment>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(AllTasks);