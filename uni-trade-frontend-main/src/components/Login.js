import React, { useState, useEffect } from 'react';
import '../App.css'; // Your main CSS file
import '../AnimatedBackground.css'; // Import CSS for balls
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
  const [userdata, setuserdata] = useState({ rollno: '', password: '' });
  let navigate = useNavigate();

  useEffect(() => {
    // Animation logic inside Login page only
    const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36'];
    const numBalls = 50;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement('div');
      ball.classList.add('ball');
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      document.body.append(ball);
    }

    balls.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      el.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    });

    // Cleanup function to remove balls when the component unmounts
    return () => {
      balls.forEach((ball) => ball.remove());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5005/api/login', userdata);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        Swal.fire({
          icon: 'success',
          title: 'Signed in successfully',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        navigate('/main');
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: e.response?.status === 401 ? 'Invalid credentials!' : 'An error occurred.',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

  const handleSignup = () => navigate('/register');

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Buy. Sell. Simplify.</h1>
          <p className="col-lg-10 fs-4">
            Connecting students through sustainable trading—your marketplace for pre-loved items.
          </p>
         
        </div>
       
       
        
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={HandleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Roll number"
                value={userdata.rollno}
                onChange={handleChange}
                required
                name="rollno"
              />
              <label htmlFor="floatingInput">Student ID</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                value={userdata.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <hr className="my-4" />
            <small>
              Don't have an account?{' '}
              <button className="btn" onClick={handleSignup}>
                Register
              </button>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
