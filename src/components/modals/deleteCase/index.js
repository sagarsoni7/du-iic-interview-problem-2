import React from "react";
import {Modal} from "react-bootstrap";

export default function DeleteCase(props){
    return(
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton closeLabel="close window">
          <h4 className="modal-title">Delete Case </h4>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <p>Are you sure you want to delete this case?</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={props.handleSingleCaseDelete}
            type="submit"
            className="btn btn-primary m-3"
          >
            Delete Case
          </button>
        </Modal.Footer>
      </Modal>
    );
}