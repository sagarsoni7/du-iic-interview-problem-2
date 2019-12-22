import React from "react";
import {Modal} from "react-bootstrap";

export default function ViewCase(props){
    return(
        <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton closeLabel="close window">
            <h4 className="modal-title">View Case </h4>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Case No.:{" "}
                </label>
                <span className="width80">
                  &nbsp;{props.CaseNumber}
                </span>
              </div>
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Court:
                </label>
                <span className="width80">
                  &nbsp;{props.CaseCourt}
                </span>
              </div>{" "}
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Case Title:
                </label>
                <span className="width80">
                  &nbsp;{props.CaseTitle}
                </span>
              </div>
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Assigned To:
                </label>
                <span className="width80">
                  &nbsp;
                  {props.CaseAssignedTo}
                </span>
              </div>
              <div className="form-group">
                <label className="form-control-label text-uppercase">
                  Case Status:
                </label>
                <span className="width80">
                  &nbsp;{props.CaseStatus}
                </span>
              </div>
            </form>
          </Modal.Body>
        </Modal>
    );
}