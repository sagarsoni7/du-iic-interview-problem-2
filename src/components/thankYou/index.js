import React from "react";

export default function ThankYou(props){
    return(
        <div
        
        className="row bg-white shadow-sm p-3"
        style={{ fontSize: "0.8rem", visibility:props.show?"visible":"hidden" }}
      >
        <div className="col-md-12 col-lg-12 mb-3 mb-xl-0">
         <center> <h2>Thank You!! &#128525; I`m excited to join!</h2></center>
        </div>
      </div>
    )
}