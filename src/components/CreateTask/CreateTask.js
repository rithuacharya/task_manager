import React from 'react';
import Button from "../Button/Button";
import Input from "../Input/Input";
import {createTask} from  "../../actions";
import { connect } from 'react-redux';

class CreateTask extends React.Component {
  state = {
    title: "",
    description: ""
  };
  
  changeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  changeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  sendData = e => {
    e.preventDefault();
    let {title, description} = this.state;
    var obj = {
      title,
      description,
      completed: false
    };
    this.props.createTask(obj);
  }

  cancel = () => {
    this.props.history.replace("/");
  }

  render() {
    return (
      <div className="mt-5" style={{maxWidth: "768px", margin: "auto"}}>
        <form onSubmit={this.sendData}>
          <Input text="Title" val={this.state.title} inputFunctionality={this.changeTitle} />
          <Input text="Description" val={this.state.description} inputFunctionality={this.changeDescription} />
          <div className="d-flex justify-content-between">
            <Button type="submit" value="Save" clickFunctionality={null} />
            <Button type="button" value="Cancel" clickFunctionality={this.cancel} />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {createTask})(CreateTask);