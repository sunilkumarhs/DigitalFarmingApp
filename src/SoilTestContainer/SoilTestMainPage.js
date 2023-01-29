import React from 'react'
import NavBar1 from '../NavBarContainer/NavBar1'
import LabImage from '../Images/main_images/soiltestimage.png'
import ProcedureImage from '../Images/main_images/soilprocedure.png';
import Footer from './Footer'
import Header from './Header'

function SoilTestMainPage() {
  return (
    <div>
      <div><NavBar1/></div>
      <Header/>
      <div style={{margin:'1.3rem'}}>
        <h1 style={{margin:'2rem'}}>Welcome to the Soil testing Laboratory</h1>
      </div>
      <div>
      <img
            className="d-block w-100"
            src={LabImage}
            alt=""
            style={{height:'50rem',padding:'1rem'}}
          />
      </div>
      <div className="container-fluid bg-info about py-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-8 mb-5 mb-lg-0">
                <div>
              <h2>Proceed to the relevant pages to see how to collect and submit samples:</h2>
            </div>
            <div>
              <ul style={{fontSize:'1.5rem'}}>
                <li style={{padding:'0.5rem'}}><a href='/LawnGarden'>Lawns, gardens (flowers/veg), including trees, small fruits and shrubs</a></li>
                <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Farms, fields, wildlife plots, horticulture crops</a></li>
                <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Florists, greenhouses, nursery tests</a></li>
                <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Liming materials</a></li>
                <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Plant samples for greenhouses and nurseries</a></li>
                <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Professional turf and lawn lawn care</a></li>
                <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Basal stalk nitrate for corn</a></li>
              </ul>
            </div>
                <hr></hr>
                <div>
              <b style={{fontSize:'1.5rem'}}>The Soil Testing Laboratory is part of the <a href='/'>Digital Farming</a>.We provide high quality testing services
                 to the public, universities, private companies, as well as state and federal agencies.
              </b>
              </div>
                    <div className='pt-4 bg'>
                        <img className="img-fluid mt-auto mx-auto" src={ProcedureImage} alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 pb-5" >
                  <div style={{backgroundColor:'lightgray', padding:'1rem'}}>
                    <div className="mb-3 pb-2">
                        <h1 className="display-5"><b>Turnaround for soil testing is about two to three weeks.</b></h1>
                    </div>
                    <h5 className="mb-8">The Soil Testing Lab is open for business from 8:00am to 4:30pm Monday through Friday! </h5>
                    <div className="row gx-5 gy-4">
                       <h5>UMN Soil Testing Laboratory
                  135 Crops Research Building
                  1902 Dudley Avenue
                  St. Paul, MN 55108</h5>
                  <p style={{fontSize:'1.3rem'}}>
                Email us at <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">soiltest@ind.in</a>
                 or call 612-625-3101 for more information.
                 Email messages often result in the fastest response. 
                 Results will be sent to you via email (if your email is on the form), but may fall into your spam folder.  
                 Keep a look out for email from soiltest@ind.in</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div>
        <Footer/> 
      </div>
    </div>
  )
}

export default SoilTestMainPage
