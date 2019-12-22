import React from "react";

class NavBar extends React.Component{
  constructor(){
    super();
    this.state={
      sidebarWidth:"280px",
      largePartsVisible:true
    }
    this.toggleSidebarWidth=this.toggleSidebarWidth.bind(this);
  }
  toggleSidebarWidth(){
    if(this.state.sidebarWidth==="280px"){
      this.setState({
        sidebarWidth:"70px",
        largePartsVisible:false
      });  } else{
        this.setState({sidebarWidth:"280px", largePartsVisible:true})
      }
    }
  
    render(){
      return(
        <div id="sidebar" className="sidebar py-3 shadow-sm"
       style={{
         width: this.state.sidebarWidth
       }}
        >
        <a
          href="#"
          className="navbar-brand font-weight-bold  text-base sidebar-toggler mr-4 mr-lg-5 lead to-right"
          onClick={this.toggleSidebarWidth}
        >
          <span className="">
            {this.state.largePartsVisible? "UIMS Portal ":""}            
          </span>
          <i className={this.state.largePartsVisible?"fas fa-angle-left":"fas fa-angle-right"}></i>
        </a>
        <br />
        <br />
        <ul className="sidebar-menu list-unstyled">
          <li className="sidebar-list-item">
            <a
              href="#"
              className=" sidebar-link text-muted"
             
            >
              <i className="fas fa-chart-pie mr-3"></i>
              <span style={{
                visibility: this.state.largePartsVisible?"visible":"hidden"
              }}>
                Portal Dashboard
              </span>
            </a>
          </li>
          <li></li>
          <li className="sidebar-list-item">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#pages"
              aria-expanded="false"
              aria-controls="pages"
              className="sidebar-link text-muted active"
            >
              <i className="fas fa-user mr-3"></i>
              <span style={{
                visibility: this.state.largePartsVisible?"visible":"hidden"
              }}>Employee</span>
            </a>
            <div id="pages" className="collapse show" style={{
                visibility: this.state.largePartsVisible?"visible":"hidden"
              }}>
              <ul className="sidebar-menu list-unstyled border-left border-primary">
                <li className="sidebar-list-item">
                  <a href="#" className="sidebar-link text-muted pl-lg-5">
                    Dashboard
                  </a>
                </li>
                <li className="sidebar-list-item">
                  <a
                    href="#"
                    className="sidebar-link text-muted pl-lg-5 active sublink"
                  >
                    Manage Employees
                  </a>
                </li>
                <li className="sidebar-list-item">
                  <a
                    href="#"
                    className="sidebar-link text-muted pl-lg-5"
                  >
                    Manage Administration
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
    }
}

export default NavBar;