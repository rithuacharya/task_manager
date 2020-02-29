import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import Header from "../Header/Header";
import AllTasks from "../AllTasks/AllTasks";
import PendingTasks from "../PendingTasks/PendingTasks";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import CreateTask from "../CreateTask/CreateTask";
import {connect} from "react-redux";
import history from "../../history";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import {
  getTasks
} from "../../actions";
import "./App.css";

class App extends React.Component {

  componentDidMount = () => {
    this.props.getTasks();
  }

  render() {
    return (
      <div className="container-lg mb-3">
        <Header />
        <Modal />
        <Loader />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={AllTasks} />
            <Route path="/pending" component={PendingTasks} />
            <Route path="/completed" component={CompletedTasks} />
            <Route path="/create" component={CreateTask} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, {getTasks})(App);