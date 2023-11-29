import React, { useContext, useEffect, useRef, useState } from 'react'
import ClassItems from './ClassItems'
import Context from '../context/classes/Context'
import Home from './Home';
import Navbar from "./Navbar"
import { useNavigate } from 'react-router-dom'
import JoinedClasses from './JoinedClasses';

const Classes = () => {
    const context = useContext(Context);
    const [EditClass, setEditClass] = useState({ id: "", eclassname: "", esection: "", esubject: "", eroom: "" })
    const { MyClass, fetchClass, editClass, EnrolledClass, fetchEnrolledClass } = context;
    const [StudentClass, setStudentClass] = useState([])
    const ref = useRef(null);
    const refClose = useRef(null);
    const Navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem("Token")) {
            fetchClass()
            fetchEnrolledClass()
        } else {
            Navigate("/login")
        }
    }, [])

    useEffect(() => {
        setStudentClass(EnrolledClass)
        console.log("StudentClass", StudentClass)
    }, [EnrolledClass])

    const OnChange = (e) => {
        setEditClass({ ...EditClass, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        editClass(EditClass.id, EditClass.eclassname, EditClass.esection, EditClass.esubject, EditClass.eroom)
        refClose.current.click()
    }

    const updateClass = (currentClass) => {
        ref.current.click()
        setEditClass({
            id: currentClass._id,
            eclassname: currentClass.classname,
            esection: currentClass.section,
            esubject: currentClass.subject,
            eroom: currentClass.room
        })
    }
    useEffect(() => {
        console.log("ye wala dekh ab", StudentClass);
    }, [StudentClass])
    return (
        <>
            <Navbar />
            <button
                type="button"
                className="d-none btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                ref={ref}
            >
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="ps-3 pt-3">
                            <h3 className="modal-title fs-6" id="exampleModalLabel">Edit class</h3>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control border-0 float-inpt rounded-0" id="floatingInput" placeholder="Class name (required)" name='eclassname' value={EditClass.eclassname} onChange={OnChange} />
                                <label htmlFor="floatingInput">Class name (required)</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control border-0 float-inpt rounded-0" id="floatingInput" placeholder="Section" name='esection' value={EditClass.esection} onChange={OnChange} />
                                <label htmlFor="floatingInput">Section</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control border-0 float-inpt rounded-0" id="floatingInput" placeholder="Subject" name='esubject' value={EditClass.esubject} onChange={OnChange} />
                                <label htmlFor="floatingInput">Subject</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control border-0 float-inpt rounded-0" id="floatingInput" placeholder="Room" name='eroom' value={EditClass.eroom} onChange={OnChange} />
                                <label htmlFor="floatingInput">Room</label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end p-3">
                            <a type="button" className="text-decoration-none text-dark" data-bs-dismiss="modal">Cancel</a>
                            <button type="button" className={`border-0 text-decoration-none ms-3 text-primary btn btn-white p-0 dis-btn`} data-bs-dismiss="modal" onClick={handleClick} ref={refClose}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            {
                // MyClass.length === 0 ? <Home /> :

                <div className='ps-4'>
                    <div className='d-flex align-items-center text-primary ps-2 py-4'>
                        <div className='d-flex align-items-center me-4'>
                            <span className="material-symbols-outlined fs-5 me-2">topic</span><span className='font'>To review</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span className="material-symbols-outlined fs-5 me-2">calendar_today</span> <span className='font'>Calender</span>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap">

                        {MyClass.map((data) => {
                            console.log(">>", data);
                            return <ClassItems key={data._id} updateClass={updateClass} data={data} />
                        })}

                        {StudentClass.map((data) => {
                            console.log(">>....", data);
                            console.log("ye wala", data.students)
                            return <JoinedClasses key={data._id} data={data} />
                        })}

                    </div>
                </div>}

        </>
    )
}

export default Classes
