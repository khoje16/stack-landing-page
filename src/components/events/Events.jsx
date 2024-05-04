import React from 'react'

const Events = () => {
  return (
<>
    
    <div className='bg-dark p-5'>
        <div className="container justify-content-center align-items-center">
            <h1 className='text-light text-center'>Events at Stack Reform 2024</h1>
        
            <div class="card mb-3 bg-dark text-light my-5" style={{maxWidth: '800px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'}}>
                <div class="row g-0">
                    <div class="col-md">
                        <img src="/images/intercollegiate.png" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md">
                        <div class="card-body">
                            <h5 class="card-title">ELEVATOR PITCH CHALLENGE COMPETITION</h5>
                            <p class="card-text">Join us in this high-stakes showdown of innovation. Whether you're a healthcare professional, a future startup founder or student, this is your chance to shine. 
                                Don't miss out on the opportunity to connect with like-minded individuals, industry experts and potential investors. Elevate your pitch game and turn your ideas into reality.</p>
                            <a href="#" class="d-grid btn btn-dark  btn-hover-effect text-warning border border-warning">Register</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-row-reverse'>
                <div class="card mb-3 bg-dark text-light my-5" style={{maxWidth: '800px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'}}>
                    <div class="row g-0">
                        <div class="col-md">
                            <img src="images/speechcomp.png" class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md">
                            <div class="card-body">
                                <h5 class="card-title">KB KLUB SECONDARY SCHOOL SPEECH COMPETITON</h5>
                                <p class="card-text">Join us in this high-stakes showdown of innovation. Whether you're a healthcare professional, a future startup founder or student, this is your chance to shine. 
                                Don't miss out on the opportunity to connect with like-minded individuals, industry experts and potential investors. Elevate your pitch game and turn your ideas into reality.</p>
                                <a href="#" class="d-grid btn btn-dark btn-hover-effect text-warning border border-warning">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3 bg-dark text-light my-5" style={{maxWidth: '800px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'}}>
                <div class="row g-0">
                    <div class="col-md">
                        <img src="/images/intercollegiate.png" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md">
                        <div class="card-body">
                            <h5 class="card-title">KEYNOTE SPEECHES</h5>
                            <p class="card-text">Join us in this high-stakes showdown of innovation and persuasion. Whether you're a healthcare professional, a future startup founder, student or simply looking to sharpen your communication skills, this is your chance to shine. 
                                Don't miss out on the opportunity to connect with like-minded individuals, industry expertss and potential investors. Elevate your pitch game, seize the spotlight and turn your ideas into reality.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-row-reverse'>
                <div class="card mb-3 bg-dark text-light my-5" style={{maxWidth: '800px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'}}>
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src="/images/intercollegiate.png" class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">PANEL SESSIONS</h5>
                                <p class="card-text">Join us in this high-stakes showdown of innovation and persuasion. Whether you're a healthcare professional, a future startup founder, student or simply looking to sharpen your communication skills, this is your chance to shine. 
                                    Don't miss out on the opportunity to connect with like-minded individuals, industry expertss and potential investors. Elevate your pitch game, seize the spotlight and turn your ideas into reality.</p>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




{/* Pictures  */}
    <div>
        <div className='d-flex justify-content-center align-items-center'>
            <div className="shutter mt-5 ">
                
                <h1 className='text-center mt-5'>Check Out Pictures From Stack 2023</h1>
                <div class="row mt-5">
                    <div class="col-4">
                        <img src="/images/image1.png" alt="stack" className="img-fluid"/>
                    </div>

                    <div class="col-4">
                        <img src="/images/image3.png" alt="stack" className="img-fluid"/>
                    </div>

                    <div class="col-4">
                        <img src="/images/image2.png" alt="stack" className="img-fluid"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <img src="/images/image4.png" alt="stack" className="img-fluid"/>
                    </div>

                    <div class="col-6">
                        <img src="/images/image5.png" alt="stack" className="img-fluid"/>
                    </div>

                    <div class="col-3">
                        <img src="/images/image6.png" alt="stack" className="img-fluid"/>
                    </div>
                </div> 

                <div class="row">
                    <div class="col">
                        <img src="/images/image5.png" alt="stack" className="img-fluid"/>
                    </div>

                    <div class="col">       
                        <img src="/images/image7.png" alt="stack" className="img-fluid"/>
                    </div>

                    <div class="col">
                        <img src="/images/image8.png" alt="stack" className="img-fluid"/>
                    </div>
                </div> 
            </div>
            
        </div>
        <div className="d-flex justify-content-center align-item-center"> <button type="button" class="btn text-light my-5 fs-5" style={{backgroundColor: 'rgba(40, 1, 64)'}}>Download Post Event Report <i class="bi bi-arrow-right"></i></button></div>
    </div>
</>

  )
}

export default Events