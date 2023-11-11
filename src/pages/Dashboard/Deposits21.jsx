import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()

  return (
    <React.Fragment>
      <div style={{ marginTop: "50px" }}>
        <h5 style={{ color: "#430e7e" }}><b>  Total Deposit Balance</b></h5>
        <Typography variant="h5">
        $0
        </Typography>
      </div>
    </React.Fragment>
  );
}
