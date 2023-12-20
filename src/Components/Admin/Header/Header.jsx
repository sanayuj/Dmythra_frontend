import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><b>DMYTHRA</b><span className='adminlabel'>Admin</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        {/* <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          
         
        </ul> */}
      </div>
    </div>
    <div className='LogoutBtn'>Logout</div>
  </nav>
  
  </div>
  )
}

export default Header