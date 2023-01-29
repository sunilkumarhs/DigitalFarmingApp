import React from 'react'
import NavBar1 from '../NavBarContainer/NavBar1'
import Footer from './Footer'
import Header from './Header'

function AboutUs() {
  return (
    <div>
        <NavBar1/>
      <Header/>
      <div className="container-fluid bg-white about py-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-8 pb-5 mb-lg-0">
                <div className='pb-3'>
              <h1>About Us</h1>
            </div>
            <div>
             <p style={{fontSize:'1.5rem'}}>
             The Soil Testing Laboratory is an analytical service laboratory providing Universities,
              state and federal agencies, private companies, and the general public with quality analyses.
               With over 100 tests available, our goals are to provide a high level of analytical precision,
                quality, and accuracy, with timely results, to every client, for every sample tested. 
            </p>
            <p style={{fontSize:'1.5rem'}}>
            Soil testing takes the guesswork out of fertilizer recommendations,
             ensures fertile soil without pollution of the environment,
              and makes good economic sense. Our recommendations are based on laboratory results,
               soil characteristics, crop history, and crop nutrient requirements
                and are specific to Minnesota locations and conditions.
            </p>            
            </div>
                <hr></hr>
                <div>
              <b style={{fontSize:'1.5rem'}}>The Soil Testing Laboratory is part of the <a href='/'>Digital Farming</a>.We provide high quality testing services
                 to the public, universities, private companies, as well as state and federal agencies.
              </b>
              </div>
                </div>
                <div className="col-lg-4 pb-5" >
                  <div style={{backgroundColor:'lightgray', padding:'1rem'}}>
                    <div className="mb-3 pb-2">
                        <h2 className="display-5"><b>Contact Information</b></h2>
                    </div>
                    <h5 className="mb-8 pb-3">Office Hours : 8:00am to 4:30pm Monday through Friday! </h5>
                    <div className="row gx-5 gy-4">
                       <h5><p style={{margin:'0rem'}}>Address :</p>
                        Soil Testing Laboratory
                        Room 135 Crops Research Building
                        1902 Dudley Ave
                        St Paul,  MN  55108
                        </h5>
                        <p style={{fontSize:'1.3rem'}}>
                            Email : <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">soiltest@ind.in</a>
                        </p>
                        <p style={{fontSize:'1.3rem'}}>
                            Phone : 612 625-3101
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
