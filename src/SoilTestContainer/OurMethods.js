import React from 'react'
import NavBar1 from '../NavBarContainer/NavBar1'
import Footer from './Footer'
import Header from './Header'
import ProcedureImage from '../Images/main_images/soilprocedure.png';

function OurMethods() {
  return (
    <div>
        <NavBar1/>
        <Header/>
        <div className="container-fluid bg-white about py-5">
            <div className='container'>
                <div className="col-lg-9 mb-lg-0">
                    <div className='pb-5'> 
                        <h1>Our Methods</h1>
                    </div>
                    <div  className='pb-4'>
                        <h2>Our Soil Testing Methods</h2>
                    </div>
                    <div className='pb-5'>
                        <h5>We use a variety of instruments to analyze soil samples including:</h5>
                        <ul style={{fontSize:'1.5rem'}}>
                            <li style={{padding:'0.5rem'}}>atomic absorption spectrophotometers;</li>
                            <li style={{padding:'0.5rem'}}>Inductively Coupled Plasma Spectrometers (ICPs);</li>
                            <li style={{padding:'0.5rem'}}>Lachat Flow Injection Analyzer;</li>
                            <li style={{padding:'0.5rem'}}>colorimeters; and</li>
                            <li style={{padding:'0.5rem'}}>general laboratory equipment.</li>
                        </ul>
                    </div>
                    <div className='pb-5'>
                        <div className='pb-3'>
                            <h2>Sample Preparation</h2>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>At the laboratory, each sample is assigned an identification number,
                            transferred to a paper bag, and then placed in a metal tray.
                            Every 12th sample is a quality control sample, either a check sample of known chemical
                            properties to ensure accuracy or a duplicate sample to evaluate laboratory precision.
                        </p>
                        <p style={{fontSize:'1.5rem'}}>
                        Samples are dried rapidly under forced air, the temperature not exceeding 95oF.
                        </p>
                        <p style={{fontSize:'1.5rem'}}>
                        Dried samples are crushed with a mechanical grinder and passed through a stainless steel
                         10-mesh 2.0 millimeter sieve to remove stones and unwanted debris.
                        </p>
                    </div>
                    <div className='pb-5'>
                        <div className='pb-3'>
                            <h2>Routine Soil Tests (regular tests)</h2>
                        </div>
                        <div>
                        <ul style={{fontSize:'1.5rem'}}>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Estimated texture category</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Soil pH (1:1 suspension)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Lime requirement (Sikora buffer index)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Extractable phosphorus (Bray-1 extractant, Olsen-sodium bicarbonate extractant)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Available potassium (ammonium acetate extractant)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Organic matter (%) (loss on ignition)</a ></li>
                        </ul>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className='pb-3'>
                            <h2>Soil Tests Made Upon Request</h2>
                        </div>
                        <div>
                        <ul style={{fontSize:'1.5rem'}}>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Soluble salts (electrical conductance, 1:1 soil suspension, saturation extract)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Extractable sulfur (calcium phosphate extractant)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Extractable zinc (DTPA extractant)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Extractable zinc, copper, iron, and manganese (DTPA extractant)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Nitrate-nitrogen (0.01 M CaSO4 extractant)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Exchangeable magnesium and calcium (ammonium acetate extractant)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Hot water extractable boron (0.1 % CaCl2.H2O)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Environmental Lead (1 N HNO3 extractant)</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Nutrient Management Phosphorus (Olsen method)</a ></li>
                        </ul>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className='pb-3'>
                            <h2>Florist/Greenhouse Tests</h2>
                        </div>
                        <div>
                        <ul style={{fontSize:'1.5rem'}}>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Spurway</a ></li>
                            <li style={{padding:'0.5rem'}}><a href='/SoilTestMainPage'>Saturated Media Extract (SME)</a ></li>
                        </ul>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className='pb-3'>
                            <h2>Reference</h2>
                        </div>
                        <p style={{fontSize:'1.5rem'}}>
                        <a href='/OurMethods'>Recommended Chemical Soil Test Procedures for the North Central Region.</a> 1988 (revised 2015).
                         North Central Regional Research Publication No. 221 (Missouri Agricultural Experiment Station SB 1001). 
                        </p>
                    </div>
                    <div>
                        <div>
                            <h2>Soil Testing Procedures</h2>
                        </div>
                        <div className='pt-4 bg'>
                        <img className="img-fluid mt-auto mx-auto" src={ProcedureImage} alt=""/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default OurMethods
