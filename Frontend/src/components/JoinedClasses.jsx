import { useEffect } from 'react';
import userimg from '../assets/user2.png'
import { Link } from 'react-router-dom';

const JoinedClasses = (props) => {
    const { data } = props;

    let classname = data.classname;
    // let origina = classname.replace(/\s/g, '')
    let section = data.section;
    // Check if classname length is greater than 20 characters
    if (classname.length > 20) {
        // Truncate the string and add three dots
        classname = `${classname.substring(0, 20)}...`;
    }

    useEffect(() => {
        console.log("ye data hai", data)
    }, [data])

    return (
        <>
            <div className="card-parent mb-3 d-flex flex-wrap">
                <div className="card new-card me-4">
                    <div className='image-div'></div>
                    <div className="card-img-overlay overlay-img-1 d-flex justify-content-between">
                        <Link to={`/myclass/${classname}/${section}`} className='text-light text-decoration-none links'>
                            <div className='fs-4'>{classname}</div>
                            <div className='overlay-div'>{section}</div>
                        </Link>
                        <div className="dropdown">
                            <span className="material-symbols-outlined text-white h-25 p-2 rounded-5 class-icons-menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                more_vert
                            </span>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item edit-dele-btn">Unroll Class</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='overlay-img-2 card-img-overlay d-flex justify-content-between'>
                        <a className='text-light teacher-name-div' href="#">{data.user.firstname} {data.user.lastname}</a>
                        <img src={userimg} className="teacher-image rounded-circle" />
                    </div>
                    <div className="card-body">
                        <p className='card-body-hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum perferendis et dolorem natus quidem cupiditate </p>
                    </div>
                    <div className="card-footer bg-white">
                        <div className='d-flex align-items-center justify-content-end'>
                            <span title='Open student record cards for "OOP sec C"' className="material-symbols-outlined me-2 p-2 rounded-5 class-icons">
                                assignment_ind
                            </span>
                            <span title='Open folder for "OOP sec C ROBO C" in Google Drive' className="material-symbols-outlined p-2 rounded-5 class-icons">
                                folder
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinedClasses