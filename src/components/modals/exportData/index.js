import React from "react";

export default function ExportDataModal(){
    return(
        <div className="modal" id="ExportModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Export all Cases as JSON</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <div className="d-flex align-items-center">
                  <div className="redText">
                    This functionality is not available at the moment
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Export All
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