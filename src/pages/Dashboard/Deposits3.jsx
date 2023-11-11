import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()
  
  return (
    <React.Fragment>
      <div style={{ marginTop: "40px" }}>
        <h5 style={{ color: "#430e7e" }}><b>Total withdraw Deposited Amount</b></h5>
        <Typography component="p" variant="h4">
          $0
        </Typography>
      </div>
    </React.Fragment>
  );
}
