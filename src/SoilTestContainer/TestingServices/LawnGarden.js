import React from 'react'
import NavBar1 from '../../NavBarContainer/NavBar1'
import Footer from '../Footer'
import Header from '../Header'
import Lawn from '../../Images/lawn.png'
import SoilSample from '../../Images/soilsample.gif'

function LawnGarden() {
  return (
    <div>
      <NavBar1/>
      <Header/>
      <div className="container-fluid bg-white py-4">
        <div className='container'>
            <b style={{fontSize:'4rem',}}>Lwan & Garden</b>
            <div className='pb-4'>
                <img 
                className="d-block w-100"
                src={Lawn} alt=''/>
            </div>
            <div className="row gx-5">
                <div className="col-lg-7 pb-0 mb-lg-0">
                    <p style={{fontSize:'1.5rem'}} className='pb-2'>
                    The tests provided here are for evaluating soil fertility, pH level,
                     and/or problems due to excessive salts or fertilizer materials.
                      Based on the test results and type of plants to be grown,
                       you will be sent the appropriate fertilizer recommendation for good plant growth
                        without adverse effects on the environment. Watch the video below to learn how to
                         collect soil samples from your lawn or garden. 
                    </p>
                    <div className='p-3'>
                        <div className='pb-3'>
                            <h2>How to Submit Samples for Analysis</h2>
                        </div>
                        <ol style={{fontSize:'1.5rem'}}>
                            <li style={{padding:'0.5rem'}}>Download, print and fill out the Lawn & Garden Soil Analysis Request Sheet. Use one sheet per sample. Include your email address and we will email you the results. </li>
                            <li style={{padding:'0.5rem'}}>Follow the instructions for collecting samples on the second/back page of the PDF and watch the
                            <p style={{margin:'0rem'}}><a href='https://www.youtube.com/watch?v=BeK4Eg9Dzr8&t=1s' target='_blank' rel='noopener noreferrer'>How to Take a Soil Sample video.</a></p></li>
                            <li style={{padding:'0.5rem'}}>The sample size should be about 2-3 cups.</li>
                            <li style={{padding:'0.5rem'}}>Place sample in a tightly sealed container or bag (clean). Label the container or bag with a sample name/number that matches what you put on the request sheet. </li>
                            <li style={{padding:'0.5rem'}}>Enclose a check payable to the University of Minnesota for all services requested. Do NOT send cash - we cannot be responsible for cash sent through the mail. You may also pay with a credit card. Scroll down for prices.</li>
                            <li style={{padding:'0.5rem'}}>Send the soil sample(s), payment, and request sheet(s) to:
                               <p style={{margin:'0rem'}}><b>Soil Testing Laboratory, University of Minnesota</b></p>
                                <p style={{margin:'0rem'}}>135 Crops Research Building</p>
                                <p style={{margin:'0rem'}}>1902 Dudley Ave.</p>
                                <p>St. Paul, MN 55108</p>
                            </li>
                        </ol>
                        <div>
                            <p style={{fontSize:'1.5rem'}}>
                            You may drop off the samples in person. See <a href='/SoilTestMainPage'>Contact Us</a> for directions.
                            Free parking to drop-off samples is available along the curb on Dudley Ave.
                            Call us from your car if you would like us to walk outside the office to pick
                            up your samples from you.
                            </p>
                        </div>
                    </div>
                    <div  className='pb-5'>
                        <div  className='pb-3'>
                            <h2>Tests Offered (with recommendations)</h2>
                        </div>
                        <ul style={{fontSize:'1.5rem'}}>
                            <li style={{padding:'0.5rem'}}>Regular Series (phosphorus, potassium, pH and lime requirement,
                             organic matter (%) and estimated texture class) - &#8377;19/sample</li>
                            <li style={{padding:'0.5rem'}}>Lead -  &#8377;20/sample</li>
                            <li style={{padding:'0.5rem'}}>Soluble Salts (from excess fertilizer or road salt) - &#8377;8/sample</li>
                        </ul>
                    </div>
                    <div  className='pb-0'>
                        <div  className='pb-3'>
                            <h2>Professional Tests (no recommendations)</h2>
                        </div>
                        <ul style={{fontSize:'1.5rem'}}>
                            <li style={{padding:'0.5rem'}}>Micronutrient Series - &#8377;14/sample</li>
                            <li style={{padding:'0.5rem'}}>Calcium and Magnesium  -  &#8377;20/sample</li>
                            <li style={{padding:'0.5rem'}}>Nitrate - &#8377;8/sample</li>
                            <li style={{padding:'0.5rem'}}>Sulfur - &#8377;8/sample</li>
                            <li style={{padding:'0.5rem'}}>Boron - &#8377;8/sample</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 pb-5">
                <div style={{backgroundColor:'lightgray', padding:'1rem'}}>
                    <div className='pb-4'>
                    <img 
                    className="d-block w-100"
                    src={SoilSample} alt=''/>
                    </div>
                    <div style={{padding:'1rem'}}>
                    <p style={{fontSize:'1.5rem'}}>
                    <a href='https://firebasestorage.googleapis.com/v0/b/digitalfarmingapp.appspot.com/o/soilSample%2Flawnpdf.pdf?alt=media&token=74c5deb4-b63e-46cc-812b-7cf61dd06986' target='_blank' rel='noopener noreferrer'>Lawn & Garden Soil Analysis Request Sheet</a>(PDF)
                    </p>
                    <p style={{fontSize:'1.5rem'}}>
                    <a href='/SoilSample'>How to take a Soil Sample</a>
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

export default LawnGarden
