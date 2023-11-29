import React from 'react'
import Assignment from "./Assignment";
import AssignmentBar from "./AssignmentBar";
import { useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";


const Classwork = () => {
  let { classname, section } = useParams()
  return (
    <>
    <Navbar2 classname={classname} section={section} />
      <Assignment />

      <div className="container d-flex align-items-center justify-content-around my-3">
        <button
          className="btn btn-primary rounded-pill font create-btn"
          data-bs-toggle="modal" data-bs-target="#assignmentModal"
        >
          <span className="material-symbols-outlined create-plus-btn">add</span>
          Create
        </button>
        <div className="d-flex align-items-center blue-text">
          <div className="d-flex align-items-center calender-drive p-2">
            <div className="material-symbols-outlined fs-5">calendar_today</div>
            <span className="font ms-2">Google Calender</span>
          </div>
          <div className="d-flex align-items-center calender-drive p-2">
            <div className="material-symbols-outlined fs-5 ms-2">
              add_to_drive
            </div>
            <span className="font ms-2">Class Drive folder</span>
          </div>
        </div>
      </div>

      <AssignmentBar id={"Barone"} />
      <AssignmentBar id={"Bartwo"} />
      <AssignmentBar id={"Barthree"} />
      <AssignmentBar id={"Bar"} />
    </>
  );
};

export default Classwork;
