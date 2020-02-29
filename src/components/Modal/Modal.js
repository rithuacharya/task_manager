import React from "react";
import {connect} from "react-redux";
import {
  hideModal
} from "../../actions";
import "./Modal.css";

class Modal extends React.Component {

  render() {
    let {isOpen, info: {title, message}} = this.props.modal,
        showModal = isOpen ? "show-modal": "";
    return (
      <div className={`modal custom-modal ${showModal}`} tabIndex="-1" role="dialog" style={{display:"block"}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <button type="button" className="close" aria-label="Close" onClick={this.props.hideModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
};

export default connect(mapStateToProps, {hideModal})(Modal);