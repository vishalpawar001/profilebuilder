import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import classnames from 'classnames'
import HomeHelper from '../Components/HomeHelper'
// import { studentUpdatePassword } from '../redux/action/studentAction'
import { studentAddSkill } from '../redux/action/studentAction'




const StudentAddSkill = () => {
  const store = useSelector((store) => store)
  const history = useHistory()
  const dispatch = useDispatch()
  const [avatar, setAvatar] = useState("");
  const [skill, setSkill] = useState("");
  const [error, setError] = useState("");
  const [file, setfile] = useState({});

  const imagehandler = async(e) => {
    // const img = e.target.files[0];
    let value = URL.createObjectURL(e.target.files[0]);
    // setImageUrl(value]);
   
    setAvatar(value);
    // console.log(file);

     
  };

  useEffect(() => {
    if (store.errorHelper) {
      setError(store.errorHelper)
      console.log(store.errorHelper)
    }
  }, [store.errorHelper])
  const formHandler = (e) => {
    e.preventDefault()
  

    dispatch(studentAddSkill({ registrationNumber: store.student.student.student.registrationNumber, skill, avatar,department: store.student.student.student.department}))
  }
  return (
    <div>
      {store.student.isAuthenticated ? <>
        <HomeHelper />
        <div className="container m-5">
          <div className="row m-5">
            <div className="col-md-5 m-auto">
              <form noValidate onSubmit={formHandler}>
               
                <div className="form-group">
                  <label htmlFor="Skill">Skill</label>
                  <select
                    onChange={(e) => setSkill(e.target.value)}
                    className="form-control"
                    id="genderId"
                  >
                    <option>Select</option>
                    <option value="C++">C++</option>
                    <option value="Python">Python</option>
                    <option value="ReactJs">ReactJs</option>
                    <option value="NodeJs">NodeJs</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="inputId">Certificate</label>
                  <input
                    required
                    className="form-control"
                    type="file"
                    accept=".jpg,.png,.jpeg"
                    id="inputId"
                    onChange={imagehandler}
                  ></input>
                </div>
                <button type="submit" class="btn btn-info btn-block ">Add Skill</button>
              </form>
            </div>
          </div>
        </div></> : (history.push('/'))}



    </div>
  )
}

export default StudentAddSkill
