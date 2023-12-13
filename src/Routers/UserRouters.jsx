import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/User/LoginPage'
import RegisterPage from '../Pages/User/RegisterPage'
import HomePage from '../Pages/User/HomePage'

function UserRouters() {
  return (
    <div>
      
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
       
    </div>
  )
}

export default UserRouters