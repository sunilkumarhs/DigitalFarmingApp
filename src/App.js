import './App.css';
import React, { useState } from 'react'
import './style.css';
import MainPage from './MainContainer/MainPage';
import AboutUsPage from './MainContainer/AboutUsPage';
import Services from './MainContainer/Services';
import Contact from './MainContainer/Contact';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PdfDisplayPage from './SoilTestContainer/PdfDisplayPage';
import SoilTestPdfUploader from './admin/SoilTestPdfUploader';
import SoilTestMainPage from './SoilTestContainer/SoilTestMainPage';
import FarmRegisteration from './BussinessContainer/FarmRegisteration';
import FarmLogin from './BussinessContainer/FarmLogin';
import FarmersPage from './BussinessContainer/FarmersPage';
import BuyersPage from './BussinessContainer/BuyersPage';
import AboutUs from './SoilTestContainer/AboutUs';
import OurMethods from './SoilTestContainer/OurMethods';
import LawnGarden from './SoilTestContainer/TestingServices/LawnGarden';
import HowToTakeSoil from './SoilTestContainer/TestingServices/HowToTakeSoil';
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from './firebase';
import Query from './MainContainer/Query';
import FarmerDetailsPage from './BussinessContainer/FarmerDetailsPage';
import Updateprofile from './BussinessContainer/Updateprofile';
import BuyersDetailsPage from './BussinessContainer/BuyersDetailsPage';
import BuyerUpdateProfile from './BussinessContainer/BuyerUpdateProfile';
// import PageNotFound from './PageNotFound';


function App() {

  const [user, setUser] = useState({});
  // const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  })
  return (
    <div>
      <BrowserRouter>
      
      {
        user ? (
          <Routes>
            <Route path='/FarmersPage' element={<FarmersPage/>}></Route>
            <Route path='/BuyersPage' element={<BuyersPage/>}></Route>
            <Route path='/FarmerDetails' element={<FarmerDetailsPage/>}></Route>
            <Route path='/BuyerDetails' element={<BuyersDetailsPage/>}></Route>
          </Routes>
        ) : null
      }
       
      <Routes>
        <Route path="/" element={<MainPage/>}></Route> 
        <Route path='/PdfDisplayPage' element={<PdfDisplayPage/>}></Route>
        <Route path='/AboutUsPage' element={<AboutUsPage/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/SoilTestPage' element={<SoilTestMainPage/>}></Route>
        <Route path='/Registeration' element={<FarmRegisteration/>}></Route>
        <Route path='/FarmLogin' element={<FarmLogin/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/OurMathods' element={<OurMethods/>}></Route>
        <Route path='/LawnGarden' element={<LawnGarden/>}></Route>
        <Route path='/SoilSample' element={<HowToTakeSoil/>}></Route>
        <Route path='/SoilReportUpload' element={<SoilTestPdfUploader/>}></Route>
        <Route path='/Query' element={<Query/>}></Route>
        <Route path='/UpdateProfile' element={<Updateprofile/>}></Route>
        <Route path='/BuyerUpdateProfile' element={<BuyerUpdateProfile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
