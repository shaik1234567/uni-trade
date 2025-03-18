import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem('token');

  // Check if the token exists
  if (!token) {
    // Redirect to login page if the token is not present
    return <Navigate to="/login" />;
  }

  // If token exists, render the children (protected component)
  return children;
};

export default AuthGuard;
