import React from "react";
import {Modal} from "react-bootstrap";

export default function EditCase(props){
    return(
        <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton closeLabel="close window">
            <h4 className="modal-title">Edit Case </h4>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Case No.: &nbsp;
              </label>
              <input
                type="text"
                onChange={props.handleEditCaseInputChange}
                value={props.CaseNumber}
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
                name="court"
                onChange={props.handleEditCaseInputChange}
                value={props.CaseCourt}
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
                onChange={props.handleEditCaseInputChange}
                value={props.CaseTitle}
                placeholder="Enter Case Title"
                className="form-control width80"
                name="title"
              />
            </div>
            <div className="form-group">
              <label className="form-control-label text-uppercase">
                Assigned:&nbsp;
              </label>
              <input
                onChange={props.handleEditCaseInputChange}
                value={props.CaseAssignedTo}
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
                onChange={props.handleEditCaseInputChange}
                value={props.CaseStatus}
                name="status"
                className="form-control width50"
              >
                <option>In Favour</option>
                <option>Against</option>
              </select>
            </div>
            This form dynamically updates the case.
            <br /> Click outside to close window
          </Modal.Body>
        </Modal>
    );
}