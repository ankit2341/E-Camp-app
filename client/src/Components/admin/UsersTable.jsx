import React from 'react'
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import swal from "sweetalert";

const UsersTable = ({data}) => {

    const handleDelete=(id)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              fetch(`${process.env.REACT_APP_API_URL}users/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                }
              })
              .then((res)=>{
                return res.json();
              })
              .then((res)=>{
                if(res.msg==="user deleted"){
                    toast.success("User deleted form database!");
                    window.location.reload();
                }
                else{
                    toast.error("Failed to delete")
                }
              })
             
            } else {
              
            }
          });
    }

  return (
    <Table striped bordered hover responsive>
    <thead>
      <tr>
        <th>No.</th>
        <th>Avatar</th>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {data.map((el,index)=>{
            return(
                <tr>
                <td>{index+1}</td>
                <td><img style={{width:"50px",height:"50px"}} src={el.avatar} alt="avatar" /></td>
                <td>{el.username}</td>
                <td>{el.email}</td>
                <td>{el.role}</td>
                <td onClick={()=>{handleDelete(el._id)}} style={{background:"red",color:"#fff"}}>Delete</td>
              </tr>
            )
        })}
    </tbody>
  </Table>
  )
}

export default UsersTable