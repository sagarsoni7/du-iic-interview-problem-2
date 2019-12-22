import React, { Component } from "react";
import NavBar from "./components/navbar";
import HeaderBreadcrumb from "./components/headerBreadcrumb";
import AddCaseModal from "./components/modals/addCase";
import SearchModal from "./components/modals/search";
import NotifyModal from "./components/modals/notify";
import LoginModal from "./components/modals/login";
import DeleteCase from "./components/modals/deleteCase";
import ViewCase from "./components/modals/viewCase";
import EditCase from "./components/modals/editCase";
import ExportDataModal from "./components/modals/exportData";
import FeatureNotAvailModal from "./components/modals/featureNotAvail";
import { ProgressBar } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleSingleCaseDelete = this.handleSingleCaseDelete.bind(this);

    this.handleAddNewCase = this.handleAddNewCase.bind(this);
    this.handleFilterByCaseNumberChange = this.handleFilterByCaseNumberChange.bind(
      this
    );
    this.hanldeNewCaseInputChange = this.hanldeNewCaseInputChange.bind(this);
    this.handleEditCaseInputChange = this.handleEditCaseInputChange.bind(this);
    this.state = {
      newCase: {
        number: "",
        court: "District Court",
        title: "",
        assignedTo: "",
        status: "In Favour"
      },
      cases: [
        {
          number: "CWP No. 1160/2010",
          court: "High Court",
          title: "Demo Case title",
          assignedTo: "XYZ",
          status: "In Favour"
        },
        {
          number: "HR24K5626",
          court: "Supreme Court",
          title: "Nirbhya Rape Case",
          assignedTo: "Bhavya Jain",
          status: "Against"
        },
        {
          number: "HJFD5125",
          court: "High Court",
          title: "Delhi Rape Case",
          assignedTo: "Pankaj Goenka",
          status: "In Favour"
        },
        {
          number: "PNBHD5232",
          court: "Supreme Court",
          title: "CAB Petition",
          assignedTo: "Sagar Soni",
          status: "In Favour"
        },
        {
          number: "HFJFKD32365",
          court: "District Court",
          title: "NRC Petition",
          assignedTo: "Gaurav Ranka",
          status: "Against"
        },
        {
          number: "YUFBDJ235",
          court: "High Court",
          title: "Haryana Recruitment",
          assignedTo: "Shukla Kumar",
          status: "In Favour"
        },
        {
          number: "HDNFN3216",
          court: "Supreme Court",
          title: "India Against Corruption",
          assignedTo: "Rohit Kumar",
          status: "Against"
        },
        {
          number: "QYEBEJN32",
          court: "District Court",
          title: "House Rental",
          assignedTo: "Ayushi Pandey",
          status: "Against"
        },
        {
          number: "JFJHJF6256",
          court: "High Court",
          title: "Old Credit",
          assignedTo: "Saumya Agarwal",
          status: "In Favour"
        }
      ],
      currentlySelected: 0,
      toDelete: 0,
      show: null,
      filterByCaseNumber: "",
      filterFailMsg: ""
    };
  }

  setCurrentView(index) {
    this.setState({
      currentView: index
    });
  }
  setCurrentEdit(index) {
    this.setState({
      currentEdit: index
    });
  }
  setCurrentDelete(index) {
    this.setState({
      currentDelete: index
    });
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

  handleEditCaseInputChange(event) {
    //check if we are getting values from input field
    if (event.target.name && event.target.value) {
      //create copy of state, update it and set state
      var stateCopy = Object.assign({}, this.state);
      stateCopy.cases[this.state.currentlySelected] = {
        ...stateCopy.cases[this.state.currentlySelected],
        [event.target.name]: event.target.value
      };
      this.setState(stateCopy);
    }
  }

  hanldeNewCaseInputChange(event) {
    //check if we are getting values from input field
    if (event.target.name && event.target.value) {
      //create copy of state, update it and set state
      var stateCopy = Object.assign({}, this.state);
      stateCopy.newCase = {
        ...stateCopy.newCase,
        [event.target.name]: event.target.value
      };
      this.setState(stateCopy);
    }
  }

  handleAddNewCase() {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cases.push({
      number: this.state.newCase.number,
      court: this.state.newCase.court,
      title: this.state.newCase.title,
      assignedTo: this.state.newCase.assignedTo,
      status: this.state.newCase.status
    });
    this.setState(stateCopy);
    this.handleClose();
  }
  handleSingleCaseDelete() {
    if (this.state.cases.length === 1) {
      alert("You cannot delete all cases");
      this.handleClose();
      return null;
    }
    var tempState = [...this.state.cases];
    tempState.splice(this.state.toDelete, 1);
    this.setState({
      cases: tempState,
      toDelete: 0,
      currentlySelected: 0
    });
    this.handleClose();
  }
  handleFilterByCaseNumberChange(event) {
    var filteredArray = this.state.cases.filter(
      e => e.number === event.target.value
    );
    if (event.target.value === "") {
      window.location.reload();
      return;
    }
    if (filteredArray.length > 0) {
      this.setState({
        cases: filteredArray,
        filterFailMsg: ""
      });
    } else {
      this.setState({
        filterFailMsg:
          "Could not find anything with this filter. Please enter exact Case No."
      });
    }
  }
  handleTabsScroll() {
    // console.log(document.getElementById("scroll-tabs").scrollLeft - document.getElementById("scroll-tabs").clientWidth)
    if (document.getElementById("scroll-tabs").scrollLeft < 700) {
      document.getElementById("scroll-tabs").scrollLeft += 300;
    } else {
      document.getElementById("scroll-tabs").scrollLeft -= 1364;
    }
    // console.log(document.getElementById("scroll-tabs"));
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
              <div className="row" style={{fontSize:"0.8rem"}}>
                  <div className="col-xl-12 col-lg-12 mb-3 mb-xl-0">
                    <div className="bg-white p-1 h-100 d-flex align-items-center justify-content-between shadow-sm">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <p className="mb-0 d-flex align-items-center p-4" style={{color:"grey"}}>
                          Viewing -<b>&nbsp;Faculty Proforma Details of Sanjeev Singh</b>
                        </p>                     
                        <div className="mb-0 d-flex align-items-center p-4 headingNavigator ml-auto" style={{width:"50%"}}>
                          {/* Button to Open the AddCaseModal */}
                          <b>Sanjeev Singh`s Profile Status</b>
                          &nbsp;
                          &nbsp;
                         60% completed
                         &nbsp;
                         <ProgressBar
                              
                              style={{
                                borderRadius: "15px",
                                borderColor: "unset",
                                height:"6px",
                                width:"30%"
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
                    <div className="col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold active-tab">
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
                    <div className="col-md-auto bg-white p-3 m-3 align-items-center justify-content-between shadow-sm rounded font-weight-bold">
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
                    className="fas fa-arrow-alt-circle-left fa-2x scroll-tabs-btn"
                  ></i>
                </div>
              </section>

              <section className="py-3">
                <div class="container bg-white shadow">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 mb-3 mb-xl-0">
                    <div className="bg-white p-1 h-100 d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <h3 className="mb-0 d-flex align-items-center p-4">
                          Personal Details
                        </h3>
                       
                        <div className="mb-0 d-flex align-items-center p-4 headingNavigator ml-auto">
                        
                        
                          <button
                            type="button"
                            className="btn  btn-primary text-uppercase"
                            onClick={() => this.handleShow("add", 0)}
                          >
                            <i className="fas fa-envelope-open mr-2"></i> Request Modification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="row">
                     <div class="col">
                      <div class="row border-top border-bottom">
                        <div class="col mini-box p-3 formHeader">Title</div>
                        <div class="col mini-box p-3"><input className="border-0 blueText" type="text" value="Dr"/></div>
                        <div class="col mini-box p-3 formHeader">First Name</div>
                        <div class="col mini-box p-3"><input className="border-0 blueText" type="text" value="Sanjeev"/></div>
                        <div class="col mini-box p-3 formHeader">Last Name</div>
                        <div class="col mini-box p-3"><input className="border-0 blueText" type="text" value="Singh"/></div>
                      </div>
                      <div class="row border-top border-bottom">
                        <div class="col mini-box p-3 formHeader">Status</div>
                        <div class="col mini-box p-3"><input className="border-0 blueText" type="text" value="Permanent"/></div>
                        <div class="col mini-box p-3 formHeader">Designation</div>
                        <div class="col mini-box p-3"><input className="border-0 blueText" type="text" value="Associate Professor"/></div>
                     </div>
                     <div class="row border-top border-bottom">
                        <div class="col mini-box p-3 formHeader">Status</div>
                        <div class="col mini-box p-3"><input className="border-0 blueText" type="text" value="Permanent"/></div>
                        <div class="col mini-box p-3 formHeader">Designation</div>
                        <div class="col mini-box p-3"><input className="border-0 blueText" type="text" value="Associate Professor"/></div>
                     </div>
                     <div class="row border-top ">
                        <div class="col mini-box p-3 formHeader">Status</div>
                        <div class="col mini-box p-3"><input className="border-0 blueText" type="text" value="Permanent"/></div>
                        <div class="col mini-box p-3 formHeader">Designation</div>
                        <div class="col mini-box p-3"><input className="border-0 blueText" type="text" value="Associate Professor"/></div>
                     </div>
                     
                    </div>
                  </div>
                </div>
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
        {/* Modal For Add Hearing Details/Add Case */}
        <AddCaseModal
          show={this.state.show === "add"}
          onHide={this.handleClose}
          hanldeNewCaseInputChange={this.hanldeNewCaseInputChange}
          handleAddNewCase={this.handleAddNewCase}
        />

        {/* Modal For Search */}
        <SearchModal />

        {/* Modal For Notify */}
        <NotifyModal />
        {/* Modal For Login */}
        <LoginModal />

        {/* Modal for deleting single case - DeleteModal */}
        <DeleteCase
          show={this.state.show === "delete"}
          onHide={this.handleClose}
          handleSingleCaseDelete={this.handleSingleCaseDelete}
        />

        {/* Modal for viewing single case - ViewModal */}
        <ViewCase
          show={this.state.show === "view"}
          onHide={this.handleClose}
          CaseNumber={this.state.cases[this.state.currentlySelected].number}
          CaseCourt={this.state.cases[this.state.currentlySelected].court}
          CaseTitle={this.state.cases[this.state.currentlySelected].title}
          CaseAssignedTo={
            this.state.cases[this.state.currentlySelected].assignedTo
          }
          CaseStatus={this.state.cases[this.state.currentlySelected].status}
        />

        {/* Modal for editing single case - EditModal */}
        <EditCase
          show={this.state.show === "edit"}
          onHide={this.handleClose}
          handleEditCaseInputChange={this.handleEditCaseInputChange}
          CaseNumber={this.state.cases[this.state.currentlySelected].number}
          CaseCourt={this.state.cases[this.state.currentlySelected].court}
          CaseTitle={this.state.cases[this.state.currentlySelected].title}
          CaseAssignedTo={
            this.state.cases[this.state.currentlySelected].assignedTo
          }
          CaseStatus={this.state.cases[this.state.currentlySelected].status}
        />

        {/* Modal For Export */}
        <ExportDataModal />

        {/* Modal For Feature Not Available */}
        <FeatureNotAvailModal />
      </div>
    );
  }
}

export default App;
