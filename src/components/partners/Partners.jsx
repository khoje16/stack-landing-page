import React from 'react'
import {Tweet} from 'react-tweet'


const Partners = () => {
  return (
<>
    <div id='navlink3' className='text-light' style={{backgroundColor: 'rgba(128, 30, 225)'}}>
        <section className='p-5'>
            
            <div class="container">
                <div class="row">
                    <div class="col-md">
                    <h1>Meet Our Partners</h1>
                        <p className='fs-4 py-3'>We work with organizations that impact people just as they make their contribution to the development of the healthcare sector in Africa
                            If that's you, request for more info below- we'd love to talk.
                            Want to partner with us?</p>

                        <a href="#" className='text-light fs-4'>Click to Request Sponsorship Deck</a>              
                    </div>


{/* potential partners */}

                    <div class="col-md text-center fs-3 pt-5">
                    <div className="row">
                        <div className="col-md"><img src="/images/navlogo.svg" class="img-fluid" style={{filter: 'blur(15px)', height: '120px'}} alt="Image"/></div>
                        <div className="col-md"><img src="/images/navlogo.svg" class="img-fluid" style={{filter: 'blur(15px)', height: '120px'}} alt="Image"/></div>
                        <div className="col-md"><img src="/images/navlogo.svg" class="img-fluid" style={{filter: 'blur(15px)', height: '120px'}} alt="Image"/></div>
                    </div>

                    <div className="row">
                        <div className="col-12">COMING SOON</div>
                    </div>

                    <div className="row">
                        <div className="col-md"><img src="/images/navlogo.svg" class="img-fluid" style={{filter: 'blur(15px)', height: '120px'}} alt="Image"/></div>
                        <div className="col-md"><img src="/images/navlogo.svg" class="img-fluid" style={{filter: 'blur(15px)', height: '120px'}} alt="Image"/></div>
                        <div className="col-md"><img src="/images/navlogo.svg" class="img-fluid" style={{filter: 'blur(15px)', height: '120px'}} alt="Image"/></div>
                    </div>
  


                        
                    </div>


                </div>
            </div>
    
        </section>
    </div>



{/* Responses to Stack 2023 */}
    <div className='conatainer shutter pt-5 mx-2 d-flex justify-content-center align-items-center'>
        <div>
            <h1 className='text-center'>What People Are Saying About <span className='text-warning'>Stack</span> Reform</h1>

            <div className="row">
                <div className="col-md"><Tweet id= "1722584568077730096"/></div>
                <div className="col-md"><Tweet id= "1722584771937636397"/></div>
            </div>


            <div className="row">
                <div className="col-md"><Tweet id= "1722584827822563365"/></div>
                <div className="col-md px-5"><img src="/images/navlogo.svg" alt="stack" className='img-fluid'/></div>
                <div className="col-md"><Tweet id= "1722599092562383007"/></div>
            </div>

    <       div className="row">
                <div className="col"><Tweet id= "1722586983782863128"/></div>
                <div className="col"><Tweet id= "1722582785502642481"/></div>
            </div>
        </div>
    </div>
</>
  )
}

export default Partners