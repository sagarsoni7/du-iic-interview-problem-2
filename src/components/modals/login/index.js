import React from "react";

export default function LoginModal(){
    return(
        <div className="modal" id="LoginModal">
<div className="modal-dialog">
  <div className="modal-content">
    {/* Modal Header */}
    <div className="modal-header">
      <h4 className="modal-title">Login/SignUp</h4>
      <button type="button" className="close" data-dismiss="modal">
        &times;
      </button>
    </div>

    {/* Modal body */}
    <div className="modal-body">
      <p>Login to manage your cases.</p>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email Address"
            className="form-control width50"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="form-control width50"
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
      <input
        type="submit"
        value="Sign in"
        className="btn btn-primary"
      />
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