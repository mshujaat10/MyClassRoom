import React, { useEffect } from 'react'
import Offcanvas from './Offcanvas'
import UserDetail from './UserDetail'
import { Link, useLocation } from 'react-router-dom';

const Navbar2 = (props) => {
    const location = useLocation()
    // useEffect(()=>{
    //   console.log(location)
    // },[])


    let { classname, section } = props;

    if (classname.length > 30) {
        // Truncate the string and add three dots
        classname = `${classname.substring(0, 30)}...`;
    }
    return (
        <>
            <Offcanvas />
            <nav className="navbar navbar-expand-md border-bottom bg-white z-3 sticky-top">
                <div className="container-fluid">
                    <span title='Main menu' className="material-symbols-outlined menu-icon mx-2 p-2 rounded-5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        menu
                    </span>
                    <Link to={`/myclass/${classname}/${section}`} className="d-flex flex-column links text-decoration-none">
                        <span className="text-decoration-none text-dark fw-semibold">{classname}</span>
                        <span className="text-decoration-none text-dark a-font">{section}</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="pt-1 navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-center">
                            <li className="nav-item px-2 me-3">
                                <Link className={`nav-link ${location.pathname===`/myclass/${classname}/${section}`?"active-link":""}`} to={`/myclass/${classname}/${section}`}>Stream</Link>
                            </li>
                            <li className="nav-item px-2 me-3">
                                <Link className={`nav-link ${location.pathname===`/classwork/${classname}/${section}`?"active-link":""}`} to={`/classwork/${classname}/${section}`}>Classwork</Link>
                            </li>
                            <li className="nav-item px-2 me-3">
                                <a className="nav-link" href="#">People</a>
                            </li>
                            <li className="nav-item px-2 me-3">
                                <a className="nav-link" href="#">Marks</a>
                            </li>

                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 me-4">
                            <li title='Class settings' className="material-symbols-outlined nav-item p-2 rounded-5">
                                settings
                            </li>
                            <li title='Google apps' className="material-symbols-outlined nav-item p-2 rounded-5 mx-2">
                                apps
                            </li>
                            <UserDetail />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar2
