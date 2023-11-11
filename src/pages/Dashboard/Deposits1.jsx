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
      <div style={{ marginTop: "50px" }}>
        <h4 className='font-medium text-3xl text-center text-gray-800'><>Total Transactions</></h4>
        <h4 className='font-medium text-3xl text-center text-gray-800'><>0</></h4>
        <Typography component="p" variant="h4">
         
        </Typography>
      </div>
    </React.Fragment>
  );
}
