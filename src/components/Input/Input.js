import React from 'react';
import "./Input.css";

class Input extends React.Component {

  onValChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    let {text, value, inputFunctionality} = this.props;
    return (
      <div className="form-group input-wrapper">
        <input required className="form-control" type="text" value={value} onChange={inputFunctionality} />
        <label className="text-secondary">{text}</label>
      </div>
    );
  }
}

export default Input;