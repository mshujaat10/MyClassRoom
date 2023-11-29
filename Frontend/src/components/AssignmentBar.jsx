import React from "react";

const AssignmentBar = ({ id }) => {
  return (
    <div className="container d-flex align-items-center flex-column">
      <div className="accordian-p rounded-3">
        <div
          className="work-lists rounded-3 accordion accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={`#${id}`}
        >
          <div className="d-flex align-items-center">
            <span className="material-symbols-outlined p-2 rounded-5 bg-primary text-white me-3">
              assignment
            </span>
            <span className="font">Assignment 1</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="font opacity-50 me-3">Due 20 Jul</span>
            <span className="material-symbols-outlined p-2 rounded-5">
              more_vert
            </span>
          </div>
        </div>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item border-top-0 rounded-top-0">
            <div
              id={id}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="accordian-font">Posted Yesterday</p>
                <div className="d-flex justify-content-between">
                  <span className="font">Do All the given Questions</span>
                  <div className="d-flex">
                    <div className="border-start px-3">
                      <h1 className="fw-normal">0</h1>
                      <span className="font">Turned in</span>
                    </div>
                    <div className="border-start px-3">
                      <h1 className="fw-normal">0</h1>
                      <span className="font">Assigned</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 p-3">
                <span className="font text-primary">View instructions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentBar;
