import React from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate()
  const handleAdminLogout=()=>{
   localStorage.removeItem("adminJWT")
   navigate("/admin/")
  }
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary adminHeader">
    <div class="container-fluid">
      <Link to={"/admin/home"} class="navbar-brand"><b>DMYTHRA</b><span className='adminlabel'> Admin</span></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      </div>
    </div>
    <div className='LogoutBtn' ><button onClick={handleAdminLogout}>Logout</button></div>
  </nav>
  
  </div>
  )
}

export default Header