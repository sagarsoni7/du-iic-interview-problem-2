import React from "react";

export default function FeatureNotAvailModal(){
    return(
        <div className="modal" id="NotAvailableModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Sagar Soni IIC Task 2</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                <div className="d-flex align-items-center">
                  <div className="redText">
                    Sorry,This functionality is not available at the moment
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
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