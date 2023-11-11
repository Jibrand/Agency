import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const params = useParams()
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  return (
    <React.Fragment>
      <h5 style={{color:"black",fontWeight:"bold"}}><u>Product Information  </u></h5>
     

          <div style={{ textAlign: "left", color: "GrayText" }}>
            <p style={{color:"#e5b509",fontWeight:"bold"}}><span  style={{fontWeight:"bold",color:"#430e7e"}}>ID: </span><span style={{ fontSize: "18px" }} className='tedko'>row._id</span> </p>
            <p style={{color:"#e5b509",fontWeight:"bold"}}><span  style={{fontWeight:"bold",color:"#430e7e"}}>Purchase Date: </span> <span style={{ fontSize: "18px" }} className='lato'> DATE</span> </p>
            <p style={{color:"#e5b509",fontWeight:"bold"}}><span  style={{fontWeight:"bold",color:"#430e7e"}}> Project Location: </span><b>row.location </b> </p>
          </div>
          <div>
        </div >
          
    </React.Fragment>
  );
}
