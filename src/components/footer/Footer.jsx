import React from 'react'

const Footer = () => {
  return (
  <>  
    <hr className='hr-dark'/>
    <div class="container my-5 text-center">
      <div class="row align-items-start">
        <div class="col-md mb-4">
          <img src="/images/klublogo.png" alt="klublogo" className="img-fluid" style={{height: '50px'}}/>
          Copyright&copy; 2024 KB KLUB.
          <div className='pb-3'>All rights reserved.</div> 
          <div className='fs-4'>
            <a href="https://twitter.com/KBKLUB" target="_blank" className='text-reset m-2'><i class="bi bi-twitter-x"></i></a>
            <a href="https://www.instagram.com/kbklub/?hl=en" target="_blank" className='text-reset m-2'><i class="bi bi-instagram"></i></a>
            <a href="https://ng.linkedin.com/company/kb-klub" target="_blank" className='text-reset m-2'><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-md pb-4">
          <h5>Core Ethos</h5>
          <div className='pb-2'><a href="https://www.kbklub.org/philanthropy" target="_blank" className='text-decoration-none text-reset'>Philanthropy</a></div>
          <div className='pb-2'><a href="https://www.kbklub.org/academic-excellence" target="_blank" className='text-decoration-none text-reset'>Academic Excellence</a></div>
          <div><a href="https://www.kbklub.org/social-empowerment" target="_blank" className='text-decoration-none text-reset'>Social Empowerment</a></div>
        </div>

        <div class="col-md pb-4">
          <h5>Contact Us</h5>
          <a href="mailto:kbklubcmul@gmail.com" className='text-reset text-decoration-none'><i class="bi bi-envelope"></i>kbklubcmul@gmail.com</a>
        </div>
      </div>
    </div>
  </>
  )
}

export default Footer