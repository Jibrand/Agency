import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CircularProgress } from '@mui/material'

const theme = createTheme({
  palette: {
    warning: {
      light: '#b0bec5',
      main: '#b0bec5',
      dark: '#b0bec5',
      contrastText: '#b0bec5',
    },
    secondary: {
      light: '#b0bec5',
      main: '#b0bec5',
      dark: '#b0bec5',
      contrastText: '#b0bec5',
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#a5cbf2',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const params = useParams();
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const send = () => {
    Navigate('/User/Dashboard/product/product/preview');
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <h1
          className="teko"
          style={{
            fontSize: "1.7em",
            color: "#1976d2",
            textAlign: "center",
            fontFamily: "Sans-serif",
          }}
        >
          <span className="purple">
            {" "}
            <u> Your Transactions </u>{" "}
          </span>
        </h1>
        <div
          className="d-flex flex-start mb-21"
          style={{
            textAlign: "right",
            justifyContent: "right",
            justifyItems: "right",
          }}
        ></div>

        <br />
        <div
          style={{
            maxHeight: '500px',
            overflow: 'auto',
            borderRadius: "3px",
            border: "1px solid #430e7e",
            boxShadow: "4px 5px 8px 5px #888888",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead style={{ position: "sticky" }}>
                <TableRow>
                  <StyledTableCell align="left"><b> sr.no</b> </StyledTableCell>
                  <StyledTableCell align="left"><b> Amount</b> </StyledTableCell>
                  <StyledTableCell align="left"><b> Receiver Name</b> </StyledTableCell>
                  <StyledTableCell align="left"><b> Receiver no </b></StyledTableCell>
                  <StyledTableCell align="left"><b>Time</b> </StyledTableCell>
                  <StyledTableCell align="left"><b>Date </b></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <React.Fragment  >

                  <StyledTableRow >
                    <StyledTableCell
                      style={{
                        color: 'purple',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                      onClick={() =>
                        Navigate(`/User/Dashboard/product/product/preview/row._id`)
                      }
                      align="left"
                    >
                      <u>row.name</u>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      $row.price
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      row.quantity
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      row.category
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    </StyledTableCell>
                  </StyledTableRow>

                </React.Fragment>

              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </ThemeProvider>
    </>

  );
}
