import React from 'react';

class Button extends React.Component {
  render() {
    let {type, clickFunctionality, value} = this.props,
        btnClass = "";
    btnClass = type === "submit"? "btn-success": "btn-dark";
    return(
      <div className="form-group">
        <button className={`form-control btn ${btnClass}`} type={type} onClick={clickFunctionality || null}>{value}</button>
      </div>
    );
  }
}

export default Button;