import React, { Component } from "react";
import NavBar from "./components/navbar";
import HeaderBreadcrumb from "./components/headerBreadcrumb";
import SearchModal from "./components/modals/search";
import NotifyModal from "./components/modals/notify";
import LoginModal from "./components/modals/login";
import FeatureNotAvailModal from "./components/modals/featureNotAvail";
import { ProgressBar } from "react-bootstrap";
import sign from "./assets/images/sign.png";
import PersonalDetails from "./components/forms/personalDetails";
import AcademicDetails from "./components/forms/academicDetails";
import ThankYou from "./components/thankYou";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTabsScroll = this.handleTabsScroll.bind(this);
    this.sagarSoniProgressHandler = this.sagarSoniProgressHandler.bind(this);
    this.state = {
      currentlySelected: 0,
      show: null,
      scrollLeftValue: 0,
      currentActiveForm: "PersonalDetails",
      sagarSoniProgress: "50"
    };
  }

  handleClose() {
    this.setState({ show: null });
  }

  handleShow(id, index) {
    this.setState({ show: id, currentlySelected: index });
  }
  handleShowForDelete(id, index) {
    this.setState({ show: id, toDelete: index });
  }

  handleTabsScroll() {
    // console.log(document.getElementById("scroll-tabs").scrollLeft - document.getElementById("scroll-tabs").clientWidth)
    if (this.state.scrollLeftValue < 700) {
      document.getElementById("scroll-tabs").scrollLeft += 300;
    } else {
      document.getElementById("scroll-tabs").scrollLeft -= 1364;
    }
    this.setState({
      scrollLeftValue: document.getElementById("scroll-tabs").scrollLeft
    });
    // console.log(document.getElementById("scroll-tabs"));
  }

  sagarSoniProgressHandler(event) {
    if (event.target.value === "YES") {
      this.setState({ sagarSoniProgress: 100 });
    }
  }

  componentDidMount() {
    this.setState({
      scrollLeftValue: document.getElementById("scroll-tabs").scrollLeft
    });
  }
  render() {
    return (
      <div>
        <div className="d-flex align-items-stretch ">
          <NavBar />
          <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
              <section className="py-3">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 mb-3 mb-xl-0">
                    <div className="bg-white p-1 h-70 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <HeaderBreadcrumb />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-5 mb-4 mb-xl-0">
                    <div className="bg-white  p-3 h-100 d-flex align-items-center justify-content-between shadow-sm ">
                      <div className="flex-grow-1 d-flex align-items-center ">
                        <div
                          className="icon"
                          data-toggle="modal"
                          data-target="#SearchModal"
                        >
                          <i className="fas fa-search fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-5 mb-4 mb-xl-0">
                    <div className="bg-white  p-3 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <div
                          className="icon "
                          data-toggle="modal"
                          data-target="#NotifyModal"
                        >
                          <i className="fas fa-bell fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-5 mb-4 mb-xl-0">
                    <div className="bg-white  p-3 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <div
                          className="icon "
                          data-toggle="modal"
                          data-target="#LoginModal"
                        >
                          <i className="fas fa-user-circle fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-3">
                <div className="row" style={{ fontSize: "0.8rem" }}>
                  <div className="col-xl-12 col-lg-12 mb-3 mb-xl-0">
                    <div className="bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <p
                          className="mb-0 d-flex align-items-center p-4"
                          style={{ color: "grey" }}
                        >
                          Viewing -
                          <b>&nbsp;Faculty Proforma Details of Sanjeev Singh</b>
                        </p>
                        <div
                          className="mb-0 d-flex align-items-center p-4 headingNavigator ml-auto"
                          style={{ width: "50%" }}
                        >
                          {/* Button to Open the AddCaseModal */}
                          <b>Sanjeev Singh`s Profile Status</b>
                          &nbsp; &nbsp; 60% completed &nbsp;
                          <ProgressBar
                            style={{
                              borderRadius: "15px",
                              borderColor: "unset",
                              height: "6px",
                              width: "30%"
                            }}
                            variant="info"
                            now={60}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-3">
                <div className="container testimonial-group">
                  <div
                    className="row text-center disable-scrollbars w-99"
                    id="scroll-tabs"
                  >
                    <div
                      onClick={() =>
                        this.setState({ currentActiveForm: "PersonalDetails" })
                      }
                      style={{ cursor: "pointer" }}
                      className={
                        this.state.currentActiveForm === "PersonalDetails"
                          ? "col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold active-tab"
                          : "col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold"
                      }
                    >
                      <div>Personal Details</div>

                      <ProgressBar
                        style={{
                          borderRadius: "15px",
                          borderColor: "unset",
                          height: "5px",
                          marginTop: "10px",
                          backgroundColor: "#E9ECEF"
                        }}
                        variant="info"
                        now={60}
                      />
                    </div>
                    <div
                      onClick={() =>
                        this.setState({ currentActiveForm: "AcademicDetails" })
                      }
                      style={{ cursor: "pointer" }}
                      className={
                        this.state.currentActiveForm === "AcademicDetails"
                          ? "col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold active-tab"
                          : "col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold"
                      }
                    >
                      <div>Academic Details</div>

                      <ProgressBar
                        style={{
                          borderRadius: "15px",
                          borderColor: "unset",
                          height: "5px",
                          marginTop: "10px",
                          backgroundColor: "#E9ECEF"
                        }}
                        variant="info"
                        now={60}
                      />
                    </div>
                    <div className="col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold">
                      <div>Career Profile</div>

                      <ProgressBar
                        style={{
                          borderRadius: "15px",
                          borderColor: "unset",
                          height: "5px",
                          marginTop: "10px",
                          backgroundColor: "#E9ECEF"
                        }}
                        variant="info"
                        now={60}
                      />
                    </div>
                    <div className="col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold">
                      <div>Research Supervision</div>

                      <ProgressBar
                        style={{
                          borderRadius: "15px",
                          borderColor: "unset",
                          height: "5px",
                          marginTop: "10px",
                          backgroundColor: "#E9ECEF"
                        }}
                        variant="info"
                        now={60}
                      />
                    </div>
                    <div className="col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold">
                      <div>Research Publication Profile-1</div>

                      <ProgressBar
                        style={{
                          borderRadius: "15px",
                          borderColor: "unset",
                          height: "5px",
                          marginTop: "10px",
                          backgroundColor: "#E9ECEF"
                        }}
                        variant="danger"
                        now={20}
                      />
                    </div>
                    <div className="col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold">
                      <div>Research Publication Profile-2</div>

                      <ProgressBar
                        style={{
                          borderRadius: "15px",
                          borderColor: "unset",
                          height: "5px",
                          marginTop: "10px",
                          backgroundColor: "#E9ECEF"
                        }}
                        variant="danger"
                        now={10}
                      />
                    </div>
                    <div className="col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold">
                      <div>Patents & Consultancy</div>

                      <ProgressBar
                        style={{
                          borderRadius: "15px",
                          borderColor: "unset",
                          height: "5px",
                          marginTop: "10px",
                          backgroundColor: "#E9ECEF"
                        }}
                        variant="info"
                        now={60}
                      />
                    </div>
                    <div className="col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold">
                      <div>Membership & Association</div>

                      <ProgressBar
                        style={{
                          borderRadius: "15px",
                          borderColor: "unset",
                          height: "5px",
                          marginTop: "10px",
                          backgroundColor: "#E9ECEF"
                        }}
                        variant="info"
                        now={60}
                      />
                    </div>
                    <div className="col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold">
                      <div>Upload</div>

                      <ProgressBar
                        style={{
                          borderRadius: "15px",
                          borderColor: "unset",
                          height: "5px",
                          marginTop: "10px",
                          backgroundColor: "#E9ECEF"
                        }}
                        variant="info"
                        now={60}
                      />
                    </div>
                  </div>
                  <i
                    onClick={this.handleTabsScroll}
                    className={
                      this.state.scrollLeftValue < 700
                        ? "fas fa-arrow-alt-circle-right fa-2x scroll-tabs-btn"
                        : "fas fa-arrow-alt-circle-left fa-2x scroll-tabs-btn"
                    }
                  ></i>
                </div>
              </section>

              <section className="py-3">
                <div className="container bg-white shadow">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 mb-3 mb-xl-0">
                      <div className="bg-white p-1 h-100 d-flex align-items-center justify-content-between">
                        <div className="flex-grow-1 d-flex align-items-center">
                          <h3 className="mb-0 d-flex align-items-center p-4">
                            {this.state.currentActiveForm === "PersonalDetails"
                              ? "Personal Details"
                              : "Academic Details"}
                          </h3>

                          <div className="mb-0 d-flex align-items-center p-4 headingNavigator ml-auto">
                            <button
                              type="button"
                              className="btn  btn-primary text-uppercase"
                              onClick={() => this.handleShow("add", 0)}
                              data-toggle="modal"
                              data-target="#NotAvailableModal"
                            >
                              <i className="fas fa-envelope-open mr-2"></i>{" "}
                              Request Modification
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.state.currentActiveForm === "PersonalDetails" ? (
                    <PersonalDetails />
                  ) : (
                    <AcademicDetails />
                  )}
                </div>
              </section>
              <section className="py-3">
                <div
                  className="row bg-white shadow-sm p-3"
                  style={{ fontSize: "0.8rem" }}
                >
                  <div className="col-md-6 col-lg-6 mb-3 mb-xl-0">
                    NOTE: The information is to be provided for the bracket
                    period starting from 1 April of the year to 31 March of the
                    next year. (For example for the year 2013-2014, the
                    information is to be provided from 1 April 2013 to 31 March
                    2014)
                  </div>
                  <div class="col-md-3 col-lg-3 mb-3 mb-xl-0 none">
                    <div class="well none">
                      <div style={{ display: "inline-block" }}>
                        <p>
                          <i
                            class="fa fa-check-square fa-1x m-1"
                            style={{ color: "#3B9BFC" }}
                          ></i>
                          &nbsp;DELARATION: I do hereby solemnly declare that
                          the information given above is correct.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-lg-3 mb-3 mb-xl-0 none">
                    <div class="well none">
                      <div style={{ display: "inline-block" }}>
                        <p>
                          <img src={sign} />
                        </p>
                        <p>Dr Sanjeev Sharma</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-3">
              <div className="row bg-white p-3">
              <h3>Dynamic Progress Bar</h3>
              </div>
                <div
                  className="row bg-white shadow-sm p-3"
                  style={{ fontSize: "0.8rem" }}
                >
                  
                  <div className="col-md-6 col-lg-6 mb-3 mb-xl-0">
                    <div>Sagar Soni`s progress</div>

                    <ProgressBar
                      style={{
                        borderRadius: "15px",
                        borderColor: "unset",
                        height: "5px",
                        marginTop: "10px",
                        backgroundColor: "#E9ECEF"
                      }}
                      variant="info"
                      now={this.state.sagarSoniProgress}
                    />
                  </div>
                  <div class="col-md-3 col-lg-3 mb-3 mb-xl-0">
                    <div className="form-group">
                      <label>Am I selected for the internship?</label>
                      <br />
                      <select
                        class="form-control"
                        onClick={this.sagarSoniProgressHandler}
                      >
                        <option selected disabled hidden>
                          Please select an option
                        </option>
                        <option>YES</option>
                        <option disabled>NO</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-lg-3 mb-3 mb-xl-0 none"></div>
                </div>
               
                <ThankYou show={this.state.sagarSoniProgress===100}/>
              </section>

              <section className="py-3">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 mb-3 mb-xl-0">
                    <div className="bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center p-2">
                        <span>
                          Built with &#10084;&#65039; by{" "}
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/mesagarsoni/"
                          >
                            Sagar Soni
                          </a>{" "}
                          as a part of IIC, DU interview process.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Modal For Search */}
        <SearchModal />

        {/* Modal For Notify */}
        <NotifyModal />
        {/* Modal For Login */}
        <LoginModal />

        {/* Modal For Feature Not Available */}
        <FeatureNotAvailModal />
      </div>
    );
  }
}

export default App;
