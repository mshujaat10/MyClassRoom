import React, { useContext, useEffect } from 'react'
import userimg from '../assets/user.png'
import Context from '../context/classes/Context'
import { useNavigate, Link } from 'react-router-dom';

const UserDetail = () => {
    const context = useContext(Context);
    const { getUsers, UserRes } = context;
    const Navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("Token")
        Navigate("/login")
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
            <div className="dropdown">
                <li className="nav-item user-image rounded-5" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={userimg} width={'30px'} />
                </li>
                <ul className="dropdown-menu dropdown-menu-end drop-ul rounded-5 px-3">
                    <div className='d-flex align-items-center'>
                        <div className='text-center w-100'>
                            <span>{UserRes.email}</span>
                        </div>
                        <div>
                            <span aria-expanded="false" className="material-symbols-outlined p-2 rounded-circle">
                                close
                            </span>
                        </div>
                    </div>
                    <div className='d-flex align-items-center flex-column mt-3'>
                        <img src={userimg} width={"80px"} />
                        <h4 className='fw-normal'>Hi, {UserRes.firstname} {UserRes.lastname}!</h4>
                        <button type='button' className="btn acc-manage-btn text-primary p-2 px-4 rounded-pill font">Manage your Google Account</button>
                    </div>
                    <div className='mt-5 d-flex flex-column'>
                        <Link to={"/login"} target="_blank" className='bg-white btn py-3 add-remove-btn d-flex align-items-center rounded-top-4'><span className="material-symbols-outlined mx-2 bg-light text-primary rounded-circle">add</span>Add another account</Link>
                        <button className='bg-white mt-1 py-3 add-remove-btn d-flex align-items-center rounded-bottom-4' onClick={handleLogout}><span className="material-symbols-outlined mx-2">logout</span>Log out</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-center mt-5 pt-3'>
                        <a className='text-decoration-none text-black-50 fw-semibold terms-privacy-links me-3' href="#">Privacy policy</a>
                        <a className='text-decoration-none text-black-50 fw-semibold terms-privacy-links' href="#">Terms of services</a>
                    </div>
                </ul>
            </div>
        </>
    )

}


export default UserDetail