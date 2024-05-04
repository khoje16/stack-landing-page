import React from 'react'

const Stack = () => {
  return (
<>
    <section className='p-3' id='navlink1'>
        <h1 className='text-center py-4'>What is Stack Reform?</h1>
        <div class="container">
            <div class="row">

                <div class="col-md pb-4" style={{maxWidth: '450px'}}>
                    <img src="/images/stacklogo.png" className='img-fluid' alt="stacklogo" />
                </div>

                <div class="col-md">
                    <p>STACK REFORM, an academic conference birthed in 2017, was set up to help young people blossom into a culture of innovation, thereby enabling a generation
                        of solution-oriented individuals. It aims to reform healthcare delivery in Nigeria and Africa by creating innovative, inclusive, affordable, reliable and sustainable solutions.</p>
                    <p>Over the years, the STACK REFORM conference has evolved into a diverse range of events. From exciting speech competitions to intercollegiate elevator pitch contests, it has not relented 
                        in nurturing the minds of our inquisitive attendees through thought-provoking panel sessions and keynote speeches, sparking disruptive conversations about institutional reforms.</p>
                    <p>This year's edition of STACK REFORM is appropriately themed "FAST-FORWARD." The theme conveys a sense of urgency and the need for rapid action to catch up with and leverage technological advancements. It is a leap into the future, a visionary outlook to 
                        overcome existing barriers to technology adoption in healthcare settings. The theme encourages stakeholders to embrace change and innovation in order to revolutionize the healthcare industry, drive impactful transformations and lead the way in global health advancements.</p>        
                </div>
   
            </div>
        </div>
    </section>



{/* why should you attend stack */}
    <section className='bg-light pb-5'>
        <div className="container pt-5">
            <h1 className='text-center'>Why you should attend Stack Reform 2024</h1>
            <div class="row row-cols-1 row-cols-md-3 g-3 mt-3">
                <div class="col">
                    <div class="card border border-4">      
                        <div class="card-body">
                            <h5 class="card-title">Networking Opportunities</h5>
                            <p class="card-text">Connect with notable personalities and leaders in the health and technology industries across both public and private sectors. Create partnerships and make collaborations that can shape the future of these industries.</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card border border-4">      
                        <div class="card-body">
                            <h5 class="card-title">Exclusive Prizes and Incentives</h5>
                            <p class="card-text">Stand a chance to win prizes by featuring in any of the competitions STACK has to offer such as the inter-collegiate elevator pitch, the secondary school speech competition and the essay competition.</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card border border-4">     
                        <div class="card-body">
                            <h5 class="card-title">Professional Development</h5>
                            <p class="card-text">This conference provides opportunities for skill-building, sharing of ideas and opinions through conversations as well as exposure to internships and job opportunities with partner companies and startup organizations.</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card border border-4">
                        <div class="card-body">
                            <h5 class="card-title">Investment Opportunities</h5>
                            <p class="card-text">Discover promising startups, innovative technologies and investment opportunities in the health and technology sectors.</p>
                        </div>    
                    </div>
                </div>

                <div class="col">
                    <div class="card border border-4">
                        <div class="card-body">
                            <h5 class="card-title">Exposure to High-Tech Solutions</h5>
                            <p class="card-text">Experience and explore innovative ideas and technologies, exhibited by startups and companies that can advance and reshape healthcare in the nation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>    
  )
}

export default Stack