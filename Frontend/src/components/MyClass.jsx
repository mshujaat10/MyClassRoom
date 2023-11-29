import React, { useEffect, useState } from "react";
import headerImg from "../assets/header.png";
import userImg from "../assets/user2.png";
import streamImg from "../assets/classstream.png";
import TeacherAnnounce from "./TeacherAnnounce";
import { useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Announcement from "./Announcement";

const MyClass = () => {
  const [announce, setAnnounce] = useState(false);
  let { classname, section } = useParams()
  // let origina = classname.replace(/\s/g, ' ')

  useEffect(() => {
    document.title = `${classname} ${section}`
  }, [])

  return (
    <>
      <Navbar2 classname={classname} section={section} />
      <div className="container p-div mt-4 px-5">
        <div className="container myclass-header px-2">
          <img src={headerImg} className="w-100 rounded-3" />
          <div className="myclass-classDetail text-white">
            <div className="myclass-cred">{classname}</div>
            <div className="fs-5">{section}</div>
          </div>
        </div>
        <div className="d-flex class-code-p px-2 justify-content-between">
          <div className="d-flex flex-column">
            <div className="class-code-h py-2 my-4 border border-2 rounded px-3">
              <div className="d-flex align-items-center justify-content-between">
                Class code
                <span className="material-symbols-outlined p-2 rounded-5">
                  more_vert
                </span>
              </div>
              <div className="class-code d-flex align-items-center">
                7c5cx71
                <span
                  title="Display"
                  className="material-symbols-outlined p-2 rounded-5"
                >
                  fullscreen
                </span>
              </div>
            </div>
            <div className="class-code-h pt-3 py-2 border border-2 rounded px-3">
              <p>Upcoming</p>
              <p className="opacity-50">No work due in soon</p>
              <div className="d-flex justify-content-end">
                <button className="view-button fw-semibold">View all</button>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column announce-class-p justify-content-evenly">
            {announce === true ? (
              <TeacherAnnounce cancelAnnounce={setAnnounce} />
            ) : (
              <div className="d-flex align-items-center announce-child rounded my-4">
                <img src={userImg} className="rounded-5 mx-3" />
                <a
                  className="text-decoration-none me-auto"
                  onClick={() => setAnnounce(true)}
                >
                  Announce something to your class
                </a>
                <span
                  title="Reuse post"
                  className="material-symbols-outlined p-2 rounded-5 me-3"
                >
                  repeat
                </span>
              </div>
            )}

            <div className="d-flex align-items-center announce-child2 rounded">
              <img src={streamImg} className="rounded-5 mx-3" />
              <div className="px-3">
                <h5 className="text-primary">
                  This is where you can talk to your class
                </h5>
                <p>
                  Use the stream to share announcements, post assignments and
                  respond to student questions
                </p>
                <button className="d-flex setting-button border ms-auto">
                  <span className="material-symbols-outlined me-1">settings</span>
                  Stream settings
                </button>
              </div>
            </div>
            {/* <Announcement/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClass;
