import React from 'react';
import userData from './userData';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ElementRow from './ElementRow';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#8A1538',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

userData.sort(function (a, b) {
  return b.total_points - a.total_points;
})

const userTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700}} aria-label="customised table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Team</StyledTableCell>
            <StyledTableCell align="right">Owner</StyledTableCell>
            <StyledTableCell align="right">Played</StyledTableCell>
            <StyledTableCell align="right">Won</StyledTableCell>
            <StyledTableCell align="right">Drawn</StyledTableCell>
            <StyledTableCell align="right">Lost</StyledTableCell>
            <StyledTableCell align="right">Yellow</StyledTableCell>
            <StyledTableCell align="right">Red</StyledTableCell>
            <StyledTableCell align="right">For</StyledTableCell>
            <StyledTableCell align="right">Against</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map(element => 
            <ElementRow key={element.team} element={element} />  
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default userTable;