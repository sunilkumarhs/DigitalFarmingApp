import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {

    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    }

  return (
    <div>
      <h1>404 errror</h1>
      <div>
        Page Not Found 
      </div>
      <Button onClick={home}>Go to Home</Button>
    </div>
  )
}

export default PageNotFound
