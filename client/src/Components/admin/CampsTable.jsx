import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import AddModal from "./AddModal";
import UpdateModal from "./UpdateModal";

const Campstable = ({ data }) => {
  const token = "";
  const type="camp";
  const navigate=useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [tobeupdated,setTobeUpdated]=useState("");
  const [editModalShow, setEditModalShow] = React.useState(false);

  const handleEdit = (id) => {

  };

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${process.env.REACT_APP_API_URL}camps/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: token,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            if (res.msg === "deleted") {
              toast.success("Camp deleted form database!");
              setTimeout(() => {
                window.location.reload();
              }, 1500);
            } else {
              toast.error("Failed to delete");
            }
          });
      } else {
      }
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <button
          style={{
            background: "#2b1055",
            color: "#fff",
            border: "none",
            width: "20%",
            height: "40px",
            marginBottom: "20px",
          }}
          onClick={() => setModalShow(true)}
        >
          Add Camp
        </button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Price</th>
            <th>Per</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={el._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={el.img}
                    alt="avatar"
                  />
                </td>
                <td>{el.Bookings_name__1IKPG}</td>
                <td>{el.discover}</td>
                <td>{el.location}</td>
                <td>{el.Bookings_price__YVqxb}</td>
                <td>{el.Bookings_person__3ao1H}</td>
                <td
                  onClick={() => {
                    navigate(`/admin/edit/${el._id}/${type}`)
                  }}
                  style={{ background: "yellow", color: "#000",cursor:"pointer" }}
                >
                  Edit
                </td>
                <td
                  onClick={() => {
                    handleDelete(el._id);
                  }}
                  style={{ background: "red", color: "#fff",cursor:"pointer" }}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddModal
        camp="true"
        show={modalShow}
        onHide={() => {setModalShow(false)}}
      />
     
    </>
  );
};

export { Campstable };
