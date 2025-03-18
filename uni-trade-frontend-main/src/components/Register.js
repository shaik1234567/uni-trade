import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Main = () => {
  const [userRegdetails, setuserRegdetails] = useState({
    username: '',
    email: '',
    rollno: '',
    password: '',
    cpassword: ''

  })
  
  let navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();  // Prevent page refresh
    if (userRegdetails.password !== userRegdetails.cpassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
      return;
    }
    try {
      let response = await axios.post('http://localhost:5005/api/register', userRegdetails)
      if (response.status === 200) {
        // Configure and display the success toast
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });

        setuserRegdetails({
          username: '',
          email: '',
          rollno: '',
          password: '',
          cpassword: ''

        })
        navigate('/login');

      }

    } catch (e) {
      console.log(e)
      if (e.response && e.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e.response.data.message, // Display backend error message
        });
      }
      
    }



  }
  let handleSignIn = () => {
    navigate('/login')
  }
  const handlechange = (e) => {
    let { name, value } = e.target
    setuserRegdetails({ ...userRegdetails, [name]: value })
    console.log(name, value)

  }
  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Join Uni-Trade, Shop Smart!</h1>
            <p className="col-lg-10 fs-4">
              Join the Uni-Trade community and turn your unused items into opportunities! Register now to buy and sell with fellow students and make a difference on campus.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={HandleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Rollo"
                  value={userRegdetails.username}
                  onChange={handlechange}
                  required
                  name='username'
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Rollo"
                  value={userRegdetails.rollno}
                  onChange={handlechange}
                  required
                  name='rollno'
                />
                <label htmlFor="floatingInput">Student id</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Rollo"
                  value={userRegdetails.email}
                  onChange={handlechange}
                  required
                  name='email'
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name='password'
                  value={userRegdetails.password}
                  onChange={handlechange}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="cPassword"
                  name='cpassword'
                  value={userRegdetails.cpassword}
                  onChange={handlechange}
                  required
                />
                <label htmlFor="floatingPassword">confirm Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input
                    type="checkbox"
                    value="remember-me"
                    onChange={handlechange}
                  />{' '}
                  Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                Have an Account ?<button className='btn' onClick={handleSignIn}> login</button>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
