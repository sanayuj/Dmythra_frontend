import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function UserUrlAuth() {
    const user = useSelector((state) => state.user.value);

    if (user) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
}

export default UserUrlAuth