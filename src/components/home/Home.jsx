import React from 'react'


const Home = () => {
  return (
<>    
    <div style={{backgroundColor: 'rgba(0, 6, 14)'}}>
        <div class="card text-bg-dark text-center">
            <img src="/images/stack.png" class="card-img img-fluid custom-card-length" alt="..."/>
            <div className='position-absolute top-0 start-0 w-100 h-100' style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <div class="card-img-overlay">
                    <p class="card-title fw-bold"><span className='text-warning'>STACK</span> REFORM</p>
                    <p>Fast Forward: Nigeria's Giant Leap Into The Future</p>
                    <p>A conference for students, entrepreneurs, growth professionals and policy makers to 
                        examine the latest trends and tactics driving healthcare growth in Nigeria.</p>

                    <div class="row">
                        <div class="col">
                            <i class="bi bi-geo-alt-fill display-6"></i><div>J.F. Ade Ajayi Auditorium, University of Lagos, Akoka.</div>    
                        </div>
                        <div class="col">
                            <i class="bi bi-calendar-check display-6"></i><div>July 4th 2024</div>
                            <div>09:00AM (GMT+1)</div>
                        </div>
                    </div>

                    <div className="container d-flex justify-content-center align-item-center">
                        <div className="row mt-3">
                            <div className="col-md-auto custom-col"><button type="button" class="btn btn-warning">Register to Attend</button></div>
                            <div className="col-md-auto"><button type="button" class="btn btn-light">Download Brochure <i class="bi bi-arrow-right"></i></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Home