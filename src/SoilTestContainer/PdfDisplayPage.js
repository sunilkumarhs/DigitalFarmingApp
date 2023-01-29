import React from 'react'
import { storage } from '../firebase/index';
import { useState } from 'react';
import {ref, getDownloadURL,listAll} from 'firebase/storage';
import { addfile } from '../redux/reducers/PdfReducer';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ReportImage from '../Images/report.png';
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import NavBar1 from '../NavBarContainer/NavBar1';
import Header from './Header';
import Spinner from 'react-bootstrap/Spinner';


const mapStateToProps = (state) => {
  return {
    files: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addfile: (obj) => dispatch(addfile(obj)),
  };
};

function PdfDisplayPage(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  function listPdf(folder) {
      setIsLoading(true);
      const listRef = ref(storage, folder);
      listAll(listRef).then((res) => {
          res.items.forEach((itemRef) => {
              // console.log(itemRef);
              getDownloadURL(itemRef).then((url) => {  
                if(url && url.length > 0) {
                  // console.log("Download url: " +url);
                      props.addfile({
                        id: itemRef.name,
                        url: url,
                        name: itemRef.name,
                      })
                }
                setIsLoading(false);
                });
          });
        }).catch((error) => {
          console.log(error);
          alert(error);
          setIsLoading(false);
        });
  }
  const listAllPdf =() => {
    if(email.length !== 0) {
      listPdf("pdfs/")
    } else {
      alert("Enter the mail address to fetch the report!!")
    }
  }

  if(isLoading) {
    return <div><Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button></div>;
  }
  // console.log("pdf files:",props);

  const pdffile = props.files.pdf.find(file => file.name === email)

 
  


  return (
    <div className="App">
      <NavBar1/>
      <Header/>
      {/* <div className='container'> */}
      <Card className="bg-dark text-white">
      <Card.Img src={ReportImage}  alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='pb-5'><b style={{fontSize:'3rem', color:'yellow'}}>Soil-Test Report(PDF)</b></Card.Title>
          <div className='pb-4'>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Email Address:
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                id='user'value={email} onChange={(e) =>setEmail(e.target.value)}
                style={{fontSize:'1.5rem'}}
              />
            </InputGroup>
          </div>
          <div className='pb-5'>
            <Button onClick={listAllPdf} style={{fontSize:'2rem'}}>Submit</Button>
          </div>
          <div className='pb-3'>
            <h1 style={{color:'red'}}>Report-URL</h1>
          </div>
            <div>
              {
                pdffile && <>
                  <a href={pdffile.url} target='_blank' rel='noopener noreferrer'>{pdffile.name}</a>
                </>
              }
              {!pdffile && <><h3>No Reports Mtched</h3></>}
            </div>
      </Card.ImgOverlay>
    </Card>
    {/* </div> */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PdfDisplayPage);
