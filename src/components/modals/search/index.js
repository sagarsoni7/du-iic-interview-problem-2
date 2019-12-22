import React from "react";
import { Modal } from "react-bootstrap";

export default function SearchModal() {
  return (
    <div className="modal" id="SearchModal">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Search Case</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          {/* Modal body */}
          <div className="modal-body">
            <form className="form-inline">
              <div className="form-group">
                {/* <label for="inlineFormInputGroup" className="sr-only">Enter Case to search for</label> */}
                <input
                  type="text"
                  placeholder="Enter Case to search for"
                  className="inlineFormInputGroup mr-3 form-control width80"
                />
              </div>
            </form>
            <div className="d-flex align-items-center">
              <div className="redText">
                This functionality is not available at the moment
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="redText">
                Please use search filter inside table
              </div>
            </div>
          </div>

          {/* Modal footer */}
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
