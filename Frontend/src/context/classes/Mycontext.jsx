import { useState } from 'react'
import Context from './Context'

const MyContext = (props) => {
  const host = "http://localhost:5000"
  const classData = [];
  const [MyClass, setMyClass] = useState(classData);
  const [UserRes, setUserRes] = useState([]);
  const [EnrolledClass, setEnrolledClass] = useState([]);


  const fetchClass = async () => {
    const response = await fetch(`${host}/classes/fetchclass`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token")
      }
    });
    const json = await response.json();
    setMyClass(json)
  }

  const fetchEnrolledClass = async () => {
    const response = await fetch(`${host}/classes/fetchstudentclass`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token")
      }
    });
    const json = await response.json();
    setEnrolledClass(json)
  }

  const joinClass = async (room) => {
    const response = await fetch(`${host}/classes/joinclass`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token")
      },
      body: JSON.stringify({room })
    });

    const json = await response.json();
    setEnrolledClass(EnrolledClass.concat(json));
  };

  const deleteStudentClass = async (id) => {
    const response = await fetch(`${host}/classes/unenrollclass/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token")
      }
    })
    const deletedclass = EnrolledClass.filter((deleclass) => {
      return deleclass._id !== id
    })
    setEnrolledClass(deletedclass)
  }


  const addClass = async (classname, section, subject, room) => {
    const response = await fetch(`${host}/classes/createclass`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token")
      },
      body: JSON.stringify({ classname, section, subject, room })
    });
    const note = await response.json();
    setMyClass(MyClass.concat(note))
  }

  const deleteClass = async (id) => {
    const response = await fetch(`${host}/classes/deleteclass/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token")
      }
    })
    const deletedclass = MyClass.filter((deleclass) => {
      return deleclass._id !== id
    })
    setMyClass(deletedclass)
  }

  const editClass = async (id, classname, section, subject, room) => {
    const response = await fetch(`${host}/classes/updateclass/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token")
      },
      body: JSON.stringify({ classname, section, subject, room })
    });

    const newClass = JSON.parse(JSON.stringify(MyClass));

    for (let index = 0; index < newClass.length; index++) {
      const element = newClass[index];
      if (element._id === id) {
        newClass[index].classname = classname,
          newClass[index].section = section,
          newClass[index].subject = subject,
          newClass[index].room = room
        break;
      }

    }
    setMyClass(newClass)
  }

  const getUsers = async () => {
    const response = await fetch(`${host}/auth/getuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token")
      }
    });
    const json = await response.json();
    setUserRes(json)
  }

  return (
    <Context.Provider value={{
      MyClass,
      addClass,
      deleteClass,
      fetchClass,
      editClass,
      UserRes,
      getUsers,
      joinClass,
      fetchEnrolledClass,
      EnrolledClass,
      deleteStudentClass
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default MyContext