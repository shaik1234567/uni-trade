import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';


const CustomersM = () => {
  let navigate = useNavigate();
  const [customersList, setcustomersList] = useState([]);

  const fetchusers = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      let response = await axios.get('http://localhost:5005/api/getusers');
      setcustomersList(response.data);

    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    fetchusers();
  }, [])
  console.log(customersList)


  return (
    <div style={{ height: '100vh', overflowY: 'auto', overflow: 'hidden'  }}>
      <div className='row' style={{ height: '100vh', overflowY: 'auto' }}>
        <div className='col-4'>
          <SideBar />
        </div>
        <div className='col-6'>
          <main className="container">
            <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
              {/* <img
                className="me-3"
                src="/docs/5.3/assets/brand/bootstrap-logo-white.svg"
                alt=""
                width="48"
                height="38"
              /> */}
              <div className="lh-1">
                <h1 className="h5 mb-0 text-dark lh-1">Uni-Trade</h1>
                <small className='text-dark'>Since 2024</small>
              </div>
            </div>

            <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>

              {customersList.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="d-flex text-body-secondary pt-3">
                      <svg
                        className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                        width="32"
                        height="32"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: 32x32"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#007bff"></rect> {/* You can set this to a specific color */}
                        <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                      </svg>
                      <p className="pb-3 mb-0 small lh-sm border-bottom">
                        <strong className="d-block text-gray-dark">@{item.username}</strong>
                        email: { item.email},rollno : {item.rollno}. userid : {item._id}
                      </p>
                    </div>
                  </div>
                );
              })}



              {/* Uncomment if needed */}
              {/* <small className="d-block text-end mt-3">
    <NavLink href="#">All updates</NavLink>
  </small> */}
            </div>


            {/* <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
              {[
                {
                  fullName: 'Full Name',
                  username: '@username',
                },
                {
                  fullName: 'Full Name',
                  username: '@username',
                },
                {
                  fullName: 'Full Name',
                  username: '@username',
                },
              ].map((suggestion, index) => (
                <div className="d-flex text-body-secondary pt-3" key={index}>
                  <svg
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff"></rect>
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark">{suggestion.fullName}</strong>
                      <NavLink href="#">Follow</NavLink>
                    </div>
                    <span className="d-block">{suggestion.username}</span>
                  </div>
                </div>
              ))}
              <small className="d-block text-end mt-3">
                <NavLink href="#">All suggestions</NavLink>
              </small>
            </div> */}
          </main>
        </div>

      </div>


    </div>
  )
}

export default CustomersM
