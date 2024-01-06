import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ErrorPage.css';
import image from '../images/Error.png';

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the error page when the component mounts
    navigate('/error', { replace: true });
  }, [navigate]);

  return (
    <div className="error-container">
      <h1>Oops! Something went wrong.</h1>
      <img src={image} alt="Error" className="centered-image" />
      <p>Sorry, we couldn't find the page you were looking for.</p>
    </div>
  );
};

export default Error;
