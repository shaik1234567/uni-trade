import React, { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
  let navigate = useNavigate();
  const [userData, setuserData] = useState(null);
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;

      }
      try {
        const response = await axios.get('http://localhost:5005/api/userinfo', {
          headers: {
            'x-access-token': token
          }
        });
        setuserData(response.data);
        setLoading(false);
        // console.log(token)
        

      } catch (e) {
        console.error('Error fetching user data:', e);
        if (e.response && e.response.status === 401) {
          
          navigate('/login');
        }
      }

    }
    fetchUserData();
  }, [navigate]);
  console.log(userData);






  if (loading) {
    navigate('/login');
    return (
      <div className="text-center">
        {<h2>Loading...</h2>}
        
      </div>
    );
  }



  return (
    <div className='bg-body-tertiary d-flex ' style={{ height: '100vh', overflow: 'hidden' }}>
      <div className='row' style={{ height: '100vh', overflowY: 'auto' }}>
        <div className='col-4'>
          <SideBar />
        </div>

        <div className='col-7'>
          <div className="p-5 text-center bg-body-tertiary">
            <div className="container py-5">
              <h1 className="text-body-emphasis">Hi ! {userData.username}</h1>
              <p className="col-lg-8 mx-auto lead">
              Welcome to Uni-Trade – A marketplace by students, for students. Buy, sell, and give your pre-loved items a second life. Discover great deals and make sustainable choices within your campus!
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main
