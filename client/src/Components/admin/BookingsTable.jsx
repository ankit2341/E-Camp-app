import React from 'react'
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import swal from "sweetalert";

const BookingsTable = ({data}) => {
    const token="";

  return (
    <Table striped bordered hover responsive>
    <thead>
      <tr>
        <th>No.</th>
        <th>User_Id</th>
        <th>User Who Booked</th>
        <th>Title</th>
        <th>Location</th>
        <th>Payment status</th>
        <th>Members</th>
        <th>Members (Name,Age)</th>
      </tr>
    </thead>
    <tbody>
        {data.map((el,index)=>{
            return(
                <tr key={el._id}>
                <td>{index+1}</td>
                <td>{el.user_id}</td>
                <td>{el.username}</td>
                <td>{el.booking_name}</td>
                <td>{el.booking_location}</td>
                <td>{el.payment_status?"Done":"Pending"}</td>
                <td>{el.booking_members.length}</td>
                <td><ol>{el.booking_members.map((member)=>{
                    return <li key={member._id}>{member.name}, {member.age}</li> 
                })}</ol></td>
              </tr>
            )
        })}
    </tbody>
  </Table>
  )
}

export default BookingsTable