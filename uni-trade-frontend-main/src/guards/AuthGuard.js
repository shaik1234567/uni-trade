import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const AuthGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/'); // No token, redirect to home
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds

      if (decoded.exp < currentTime) {
        // Token expired, redirect to home
        localStorage.removeItem('token'); // Clear token from storage
        navigate('/');
      }
    } catch (error) {
      console.error('Invalid token', error);
      localStorage.removeItem('token'); // Remove invalid token
      navigate('/');
    }
  }, [navigate]);

  return children; // Render the protected component
};

export default AuthGuard;
