import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewstudent = () => {
var [student,setstudents]=useState([]);
useEffect(()=>{
axios.get("http://localhost:3010/view")
.then(Response =>{
    setstudents(Response.data)
})
.catch(err=>console.log(err))
},[])

return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Admission No</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Course</TableCell>
                 </TableRow>
        </TableHead>
        <TableBody>
          {student.map((row,index) =>{
            return(
                    <TableRow    key={index}>
             <TableCell component="th" scope="row">
                {row.admissionno}
              </TableCell>
              <TableCell >{row.Name}</TableCell>
              <TableCell >{row.age}</TableCell>
              <TableCell >{row.course}</TableCell>
              
            </TableRow>
          
          )})}
        </TableBody>
      </Table>
    </TableContainer>    </div>
  )
}

export default Viewstudent
