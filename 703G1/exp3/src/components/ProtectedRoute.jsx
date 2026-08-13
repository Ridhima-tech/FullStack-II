import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = Navigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {   
    <navigate to="/login" replace />;
  }
  else{
    return children;
  }
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute