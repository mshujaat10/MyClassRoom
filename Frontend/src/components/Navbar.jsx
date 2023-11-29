import React from 'react'
import image from '../assets/google.png'
import Modal from './Modal'
import Joinclass from './Joinclass'
import Offcanvas from './Offcanvas'
import { Link } from 'react-router-dom'
import UserDetail from './UserDetail'

const Navbar = () => {

  return (
    <>
      <Modal />
      <Offcanvas />
      <Joinclass />

      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <span title='Main menu' className="material-symbols-outlined menu-icon mx-2 p-2 rounded-5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            menu
          </span>
          <Link to={'/'} className='d-flex text-decoration-none'>
            <img className='me-1' src={image} width={'70px'} height={'50px'} />
            <span className="navbar-brand mt-1">Classroom</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav pe-3 w-100 d-flex justify-content-end mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="dropdown dropstart">
                  <span title='Create or join a class' className="material-symbols-outlined p-2 rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    add
                  </span>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item pointer-class" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Create class</a></li>
                    <li><a className="dropdown-item pointer-class" data-bs-toggle="modal" data-bs-target="#joinClassModal">Join class</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <span title='Google apps' className="material-symbols-outlined p-2 rounded-5 mx-2">
                  apps
                </span>
              </li>
              <UserDetail />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar