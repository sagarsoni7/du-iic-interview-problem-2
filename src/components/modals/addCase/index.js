import React from "react";
import { Modal} from "react-bootstrap";

export default function AddCase(props){
    return(
        <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton closeLabel="close window">
            <h4 className="modal-title">Add Case </h4>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case No.: &nbsp;
              </label>
              <input
                type="text"
                onChange={props.hanldeNewCaseInputChange}
                placeholder="Enter Case No."
                className="form-control width80"
                name="number"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Select Court:&nbsp;
              </label>
              <select
                name="case"
                onChange={props.hanldeNewCaseInputChange}
                className="form-control width50"
              >
                <option>District Court</option>
                <option>High Court</option>
                <option>Supreme Court</option>
              </select>
            </div>{" "}
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case Title:&nbsp;
              </label>
              <input
                type="text"
                onChange={props.hanldeNewCaseInputChange}
                placeholder="Enter Case Title"
                name="title"
                className="form-control width80"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Assigned:&nbsp;
              </label>
              <input
                onChange={props.hanldeNewCaseInputChange}
                type="text"
                placeholder="Enter Assignee"
                className="form-control width80"
                name="assignedTo"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case Status:&nbsp;
              </label>
              <select
                onChange={props.hanldeNewCaseInputChange}
                name="status"
                className="form-control width50"
              >
                <option>In Favour</option>
                <option>Against</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={props.handleAddNewCase}
              type="submit"
              className="btn btn-primary m-3"
            >
              Add Case
            </button>
          </Modal.Footer>
        </Modal>
    );
}