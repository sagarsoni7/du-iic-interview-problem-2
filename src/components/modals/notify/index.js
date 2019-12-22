import React from "react";

export default function NotifyModal(){
    return(
        <div className="modal" id="NotifyModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Get Notifications</h4>
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
                    id="inlineFormInputGroup"
                    type="text"
                    placeholder="Email Address"
                    className="mr-3 form-control width80"
                  />
                </div>
              </form>
              <div className="d-flex align-items-center">
                <div className="p-2 redText">
                  This functionality is not available at the moment
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Notify Me
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
    )
}