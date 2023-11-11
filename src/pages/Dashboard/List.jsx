import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate, useParams } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import RequestPageIcon from '@mui/icons-material/RequestPage';

const ListItems = () => {
  const navigate = useNavigate();
  const params = useParams()

  const handleProductsClick = () => {
    // const costerID = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage
    // console.log('Stored _id:', costerID);
    navigate(`/dashboard1`);
  };
  const q = () => {
    // const costerID = localStorage.getItem('costerID'); // Retrieve the stored _id from local storage
    // console.log('Stored _id:', costerID);
    navigate(`/dashboard`);
  };

  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" onClick={q} />
      </ListItemButton>
      <ListItemButton onClick={handleProductsClick}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Transacations" />
      </ListItemButton>
      {/* <ListItemButton onClick={w}>
        <ListItemIcon>
          <PaidIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton> */}


    </React.Fragment>
  );
};

export default ListItems;
