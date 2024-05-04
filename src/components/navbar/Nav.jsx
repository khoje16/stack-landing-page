import React from 'react'

const Nav = () => {
  return (
<>
  <nav class="navbar navbar-expand-lg" style={{backgroundColor: 'rgba(0, 6, 14)'}}>
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#"><img src="/images/navlogo.svg" alt="stacklogo" className="bg-warning" style={{height: '50px'}}/> <span className='text-warning'>STACK</span> REFORM</a>
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-5">
          <li class="nav-item mx-2">
            <a class="nav-link active text-light" aria-current="page" href="#navlink1">What is Stack Reform?</a>
          </li>

          {/* <li class="nav-item">
            <a class="nav-link text-light" href="#">Past Events</a>
          </li> */}

          <li class="nav-item mx-2">
            <a class="nav-link text-light" href="#navlink3">Partners</a>
          </li>

          <li class="nav-item mx-2">
            <a class="nav-link text-light" href="https://www.kbklub.org/about" target="_blank">About the KB KLUB</a>
          </li>
        </ul>

        <div className='ms-auto'>
          <button type="button" class="btn btn-warning mx-3 my-3">Register to Attend</button>
          <button type="button" class="btn btn-light">Download Brochure <i class="bi bi-arrow-right"></i></button> 
        </div>
      </div>
    </div>
  </nav>
</>    
  )
}

export default Nav