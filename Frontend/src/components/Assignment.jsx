import React, { useState } from 'react'

const Assignment = () => {

    const [input, setInput] = useState()

    return (
        <>
            <div className="modal fade" id="assignmentModal" tabIndex="-1" aria-labelledby="assignmentModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                            <span className="material-symbols-outlined mx-2 p-2 rounded-5 text-primary bg-info-subtle assign-icon">assignment</span>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Assignment</h1>
                            <button className='btn rounded-0 px-4 ms-auto assign-btn'>Assign</button>
                            <div className="dropdown">
                                <button className="btn btn-secondary rounded-0 dropdown-toggle assign-drop" type="button"></button>
                            </div>
                        </div>
                        <div className="modal-body p-0 d-flex">

                            <div className='bg-light h-100 p-4 assign-div'>
                                <div className='bg-white p-4 mb-4 rounded-3 border'>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control rounded-0 bg-light floting-inp" id="floatingInput" placeholder="Title" />
                                        <label htmlFor="floatingInput">Title</label>
                                    </div>
                                    <div className="form-floating">
                                        <textarea className="form-control rounded-0 bg-light floting-text" placeholder="Instructions (optional)" id="floatingTextarea"></textarea>
                                        <label htmlFor="floatingTextarea">Instructions (optional)</label>
                                    </div>
                                </div>
                                <div className='bg-white p-4 rounded-3 border'>
                                    <p className="font">Attach</p>
                                    <div className='d-flex align-items-center justify-content-center pb-1'>

                                        <div className='d-flex flex-column align-items-center me-2'>
                                            <span className="material-symbols-outlined p-2 rounded-5 border g-add fs-2">add_to_drive</span>
                                            <span className="font">Drive</span>
                                        </div>

                                        <div className='d-flex flex-column align-items-center mx-4'>
                                            <span className="material-symbols-outlined p-2 rounded-5 border y-icon fs-2">youtube_activity</span>
                                            <span className="font">YouTube</span>
                                        </div>

                                        <div className='d-flex flex-column align-items-center mx-2'>
                                            <span className="material-symbols-outlined p-1 fs-1 rounded-5 border g-add">add</span>
                                            <span className="font">Create</span>
                                        </div>

                                        <div className='d-flex flex-column align-items-center mx-4'>
                                            <span className="material-symbols-outlined text-primary p-2 rounded-5 border fs-2">upload</span>
                                            <span className="font">Upload</span>
                                        </div>

                                        <div className='d-flex flex-column align-items-center ms-2'>
                                            <span className="material-symbols-outlined text-primary p-2 rounded-5 border fs-2">link</span>
                                            <span className="font">Link</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='assign-div-2 p-4'>
                                <h1 className="font">For</h1>
                                <div className="d-flex my-3">
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle bg-light disabled font" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            OOP sec C ROBO C
                                        </button>
                                    </div>

                                    <div className="dropdown">
                                        <button className="ms-3 dropdown-toggle bg-light font hover" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            All students
                                        </button>
                                        <ul className="dropdown-menu hidden-drop-menu">
                                            <li className='d-flex align-items-center'>
                                                <input className='ms-2' type="checkbox" checked />
                                                <span className="material-symbols-outlined p-1 rounded-5 bg-primary text-white ms-2">
                                                    group
                                                </span>
                                                <a className="dropdown-item" href="#">All students</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <div className='inp-div'>
                                    <h1 className="font">Points</h1>
                                    <input type="text" className='points-input bg-light hover my-2' value={100} />
                                </div>

                                <div>
                                    <h1 className="font mt-2">Due</h1>
                                    <div className="dropdown my-3">
                                        <button className="btn dropdown-toggle font bg-light w-100 text-start hover d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            No due date
                                        </button>
                                        <ul className="dropdown-menu w-75">
                                            <li><a className="dropdown-item font" href="#">Due date & time</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li className="px-3 py-4"><input type="text" className='bg-light border-0 border-bottom border-primary border-2 due-input font p-3' placeholder='No due date' /></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h1 className="font">Topic</h1>
                                    <div className="dropdown my-3">
                                        <button className="btn dropdown-toggle font bg-light w-100 text-start hover d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            No topic
                                        </button>
                                        <ul className="dropdown-menu w-100">
                                            <li><a className="dropdown-item" href="#">No topic</a></li>
                                            <li><a className="dropdown-item" href="#">Create topic</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h1 className="font">Rubric</h1>
                                    <button className='btn d-flex align-items-center font border border-dark-subtle disabled opacity-50'><span className="material-symbols-outlined">add</span>Rubric</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Assignment
