import React, { useState } from 'react'
import { storage } from '../firebase/index';
import {ref, uploadBytes} from 'firebase/storage';
// import {v4} from "uuid";
import Card from 'react-bootstrap/Card';
import simage from '../Images/main_images/Soil-Testingimage.jpg';
import { Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import {FaPlus} from '@react-icons/all-files/fa/FaPlus.esm'
// import { useNavigate } from 'react-router-dom';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function SoiltestReportPDF() {
  const [pdfFile, setPDFFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const [selectFile, setfiles] = useState(null);
  const fileType = ['application/pdf']
//   const navigate = useNavigate();

  function viewPdfHandler() {
    if(selectFile) {
      if(selectFile && fileType.includes(selectFile.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(selectFile)
        reader.onload=(e) => {
          setPDFFile(e.target.result)
        }
      } else {
        setPDFFile(null)
      }
    }
    else{
      alert("Select the Pdf to view!!")
    }
    if(pdfFile !== null) {
      setViewPdf(pdfFile)
    } else {
      setViewPdf(null)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(selectFile !== null) {
      const pdfRef = ref(storage, `pdfs/${selectFile.name}`);
      uploadBytes(pdfRef, selectFile).then(() => {
        alert("Pdf is sucessfully uploaded");
      })
    //    navigate('/')
    }
    else {
      alert("Select the pdf file");
    }
  }
  const newplugin = defaultLayoutPlugin();
    return (
    <div>
     <Container>
    <Card className="text-center">
      
      <Card.Img src={simage} alt="Card image" style={{height:"40rem"}}/>
      <Card.ImgOverlay>
      <Card.Header style={{fontSize:'2rem',color:'darkolivegreen',backgroundColor:'lightcoral'}}>Soil Test Pdf Report Uploader</Card.Header>
      <Card.Body>
        <Card.Title style={{fontSize:'1.5rem',color:'darkslateblue',backgroundColor:'lightgreen'}}>SRS SoilTest Labaratery</Card.Title>
        <Card.Text id='cd'>
          <input type="file" id='int' onChange={(event) => setfiles(event.target.files[0])}/>
          <button id='btn'>
            <FaPlus size={50}/>
           <h3> Upload Pdf </h3>
          </button>
        </Card.Text>
        
        <Button type='button' onClick={handleSubmit}>submit</Button>
      </Card.Body>
      </Card.ImgOverlay>
      </Card>  
    </Container>
    <div className='App' style={{marginTop:'30px'}}>
    <Button className='btn btn-warning' type='button' onClick={viewPdfHandler}><h3>View Pdf</h3></Button>
    </div>
    <Container>
      <div style={{margin: '10px'}}>
        <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js'>
          {viewPdf && <>
                <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>
          </>}
          {!viewPdf && <>NO PDF</>}
        </Worker>
      </div>
      </Container>
    </div>
  )
}

export default connect()(SoiltestReportPDF);