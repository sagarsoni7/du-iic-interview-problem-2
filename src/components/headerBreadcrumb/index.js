import React from "react";

export default function HeaderBreadcrumb(props) {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Employee</a>
      </li>
      
        <li className="breadcrumb-item" aria-current="page">
        <a href="#"> Manage Employees </a>
        </li>
     
      <li className="breadcrumb-item" aria-current="page">
        <a href="#">Sanjeev Singh</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
  <a href="#">{props.currentActiveForm === "PersonalDetails"
                              ? "Personal Details"
                              : "Academic Details"}</a>
      </li>
    </ol>
  );
}
