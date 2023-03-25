import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddModal = (props) => {
  const { camp, event, user } = props;
  const state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const discoverData = [
    {
      img: "https://campmonk.com/_next/image?url=https%3A%2F%2Fcampmonk.s3.ap-south-1.amazonaws.com%2Ffeature-groups%2Fmedium-a8d8d818-d97e-477a-9e49-a449750f8fb2.webp&w=1920&q=75",
      title: "Ecamp Bannerghatta",
      desc: "Our flagship properly Bannerghata nestled in nature and by a pristine lake",
    },
    {
      img: "https://campmonk.com/_next/image?url=https%3A%2F%2Fcampmonk.s3.ap-south-1.amazonaws.com%2Ffeature-groups%2Fmedium-6b3e8676-958f-4a99-8f3a-219fc2343b1d.webp&w=1920&q=75",
      title: "Tent Camping",
      desc: "Curated and safe camps with all gears provided",
    },
    {
      img: "https://campmonk.com/_next/image?url=https%3A%2F%2Fcampmonk.s3.ap-south-1.amazonaws.com%2Ffeature-groups%2Fmedium-dfbec7ae-1314-4acc-907c-82056645660a.webp&w=1920&q=75",
      title: "Offbeat Nature Stays",
      desc: "Tiny homes, Glamping and more",
    },
    {
      img: "https://campmonk.com/_next/image?url=https%3A%2F%2Fcampmonk.s3.ap-south-1.amazonaws.com%2Ffeature-groups%2Fmedium-0dab2d19-f72a-4384-9f53-f4662de0cc5f.webp&w=1920&q=75",
      title: "Lodging",
      desc: "Handpicked homestays nestled in nature",
    },
    {
      img: "https://campmonk.com/_next/image?url=https%3A%2F%2Fcampmonk.s3.ap-south-1.amazonaws.com%2Ffeature-groups%2Fmedium-6cf55dbc-a570-4e67-97cc-5a22088ec4ec.webp&w=1920&q=75",
      title: "BYOT Camping",
      desc: "Bring your tent or RV",
    },
    {
      img: "https://campmonk.com/_next/image?url=https%3A%2F%2Fcampmonk.s3.ap-south-1.amazonaws.com%2Ffeature-groups%2Fmedium-673fe293-47a1-4f3a-b20c-b66c06384c45.webp&w=1920&q=75",
      title: "Waterfront Stays",
      desc: "Stays by a lake, river or beach",
    },
    {
      img: "https://campmonk.com/_next/image?url=https%3A%2F%2Fcampmonk.s3.ap-south-1.amazonaws.com%2Ffeature-groups%2Fmedium-f1394625-e4a6-497d-b76a-07e4d5a32a3b.webp&w=1920&q=75",
      title: "Pet Friendly Stays",
      desc: "Vacation with your bff",
    },
  ];

  if (camp) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: "11111" }}
      >
        <Modal.Header
          style={{
            background: "#f9f9f9",
            color: "#2b1055",
            fontWeight: "bold",
          }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Camp
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "#f9f9f9",
            color: "#2b1055",
            fontWeight: "bold",
          }}
        >
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            placeholder="Image Url"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Name Of Camp</Form.Label>
          <Form.Control
            placeholder="Title Of Camp "
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Select State</Form.Label>
          <Form.Select aria-label="Default select example">
            {state.map((el) => {
              return <option value={el}>{el}</option>;
            })}
          </Form.Select>
          <Form.Label>Enter Location</Form.Label>
          <Form.Control
            placeholder="Enter Location "
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Select Category</Form.Label>
          <Form.Select aria-label="Default select example">
            {discoverData.map((el) => {
              return <option value={el.title}>{el.title}</option>;
            })}
          </Form.Select>
          <Form.Label>Price Of Camp</Form.Label>
          <Form.Control
            placeholder="Price Of Camp"
            aria-label="Username"
            type="number"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Per (/ unit or / adult)</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="/ unit">/ unit</option>
            <option value="/ adult">/ adult</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer
          style={{ background: "#f9f9f9", color: "#fff", fontWeight: "bold" }}
        >
          <Button
            style={{
              background: "#2b1055",
              border: "none",
              color: "#fff",
              width: "100%",
              fontWeight: "bold",
            }}
            onClick={props.onHide}
          >
            Add Camp
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  if (event) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: "11111" }}
      >
        <Modal.Header
          style={{
            background: "#f9f9f9",
            color: "#2b1055",
            fontWeight: "bold",
          }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "#f9f9f9",
            color: "#2b1055",
            fontWeight: "bold",
          }}
        >
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            placeholder="Image Url"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Name Of Camp</Form.Label>
          <Form.Control
            placeholder="Title Of Camp "
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Select State</Form.Label>
          <Form.Select aria-label="Default select example">
            {state.map((el) => {
              return <option value={el}>{el}</option>;
            })}
          </Form.Select>
          <Form.Label>Enter Location</Form.Label>
          <Form.Control
            placeholder="Enter Location "
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Price Of Camp</Form.Label>
          <Form.Control
            placeholder="Price Of Camp"
            aria-label="Username"
            type="number"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Price Of Camp"
            aria-label="Username"
            type="textarea"
            aria-describedby="basic-addon1"
          />
        </Modal.Body>
        <Modal.Footer
          style={{ background: "#f9f9f9", color: "#fff", fontWeight: "bold" }}
        >
          <Button
            style={{
              background: "#2b1055",
              border: "none",
              color: "#fff",
              width: "100%",
              fontWeight: "bold",
            }}
            onClick={props.onHide}
          >
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  if(user){
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: "11111" }}
      >
        <Modal.Header
          style={{
            background: "#f9f9f9",
            color: "#2b1055",
            fontWeight: "bold",
          }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Add New User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "#f9f9f9",
            color: "#2b1055",
            fontWeight: "bold",
          }}
        >
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            placeholder="Image Url"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Name Of User</Form.Label>
          <Form.Control
            placeholder="Enter Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Enter E-mail</Form.Label>
          <Form.Control
            placeholder="Enter E-mail "
            aria-label="Username"
            type="email"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            placeholder="Enter Password"
            aria-label="Username"
            type="password"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Description</Form.Label>
          <Form.Select aria-label="Default select example">
      <option value="Guest">Guest</option>
      <option value="Admin">Admin</option>
    </Form.Select>
        </Modal.Body>
        <Modal.Footer
          style={{ background: "#f9f9f9", color: "#fff", fontWeight: "bold" }}
        >
          <Button
            style={{
              background: "#2b1055",
              border: "none",
              color: "#fff",
              width: "100%",
              fontWeight: "bold",
            }}
            onClick={props.onHide}
          >
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return <div>AddCampModal</div>;
};

export default AddModal;
