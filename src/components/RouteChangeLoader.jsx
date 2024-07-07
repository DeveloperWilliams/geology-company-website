// src/components/RouteChangeLoader.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader/Loader';

const RouteChangeLoader = ({ children, beforeLoad, afterLoad }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Display loader for at least 1 second

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading ? <Loader /> : (
        <>
          {beforeLoad}
          {children}
          {afterLoad}
        </>
      )}
    </>
  );
};

export default RouteChangeLoader;
