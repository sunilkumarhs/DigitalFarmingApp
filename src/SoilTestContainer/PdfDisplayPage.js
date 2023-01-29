import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { storage } from '../firebase/index';
import { useState } from 'react';
import {ref, getDownloadURL,listAll} from 'firebase/storage';
import { addfile } from '../redux/reducers/PdfReducer';
import { connect } from 'react-redux';



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
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function listPdf(folder) {
      setIsLoading(true);
      const listRef = ref(storage, folder);
      listAll(listRef).then((res) => {
          res.items.forEach((itemRef) => {
              console.log(itemRef);
              getDownloadURL(itemRef).then((url) => {  
                if(url && url.length > 0) {
                  console.log("Download url: " +url);
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
          setIsLoading(false);
        });
  }
  const listAllPdf =() => {
    listPdf("pdfs/")
  }

  if(isLoading) {
    return <div>Loading....</div>;
  }
  console.log("pdf files:",props);

  const pdffile = props.files.pdf.find(file => file.name === email)

  const login = () => {
    if(pdffile) {
      return(
        <div>
          <p>yes</p>
          <a href={pdffile.url} target='_blank' rel='noopener noreferrer'>{pdffile.name}</a>
        </div>
      )
    }else{
      alert("invalid name");
    }
  }

  return (
    <div className="App">
      <div>
        <label>Email-Address</label>
        <input type="text" placeholder='e-mail' id='user'value={email} onChange={(e) =>setEmail(e.target.value)}/>
      </div>
      <button onClick={listAllPdf}>list the pdf</button>
      <button onClick={login}>Login</button>
      <h1>View Pdf</h1>
      <div>
        {
          pdffile && <>
            <a href={pdffile.url} target='_blank' rel='noopener noreferrer'>{pdffile.name}</a>
          </>
        }
        {!pdffile && <>No PDF</>}
      </div>
      
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PdfDisplayPage);
