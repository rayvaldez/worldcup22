import React from 'react'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ElementRow = ({ element }) => {
  return (
    <StyledTableRow key={element.team}>
      <StyledTableCell align="right">{element.team}</StyledTableCell>
      <StyledTableCell align="right">{element.owner}</StyledTableCell>
      <StyledTableCell align="right">{element.played}</StyledTableCell>
      <StyledTableCell align="right">{element.win}</StyledTableCell>
      <StyledTableCell align="right">{element.draw}</StyledTableCell>
      <StyledTableCell align="right">{element.loss}</StyledTableCell>
      <StyledTableCell align="right">{element.yellow_cards}</StyledTableCell>
      <StyledTableCell align="right">{element.red_cards}</StyledTableCell>
      <StyledTableCell align="right">{element.goals_for}</StyledTableCell>
      <StyledTableCell align="right">{element.goals_against}</StyledTableCell>
      <StyledTableCell align="right">{element.total_points}</StyledTableCell>
    </StyledTableRow>
  )
}

export default ElementRow