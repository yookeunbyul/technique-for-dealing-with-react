import React from 'react';
import { Navigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;

  if (isLoggedIn === false) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이 페이지</div>;
};

export default MyPage;
