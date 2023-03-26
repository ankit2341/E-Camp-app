import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const AddModal = (props) => {
  const { camp, event, user } = props;
  const [ImageUrl, setImageUrl] = useState("");
  const [name, SetName] = useState("");
  const [states, setStates] = useState("");
  const [locationName, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [perUnit, setPerUnit] = useState("");
  const [desription, setDescrition] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");

  const token = "";
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

  const addCamp = () => {
    if (
      ImageUrl === "" ||
      name === "" ||
      states === "" ||
      category === "" ||
      locationName === "" ||
      price === "" ||
      perUnit === ""
    ) {
      toast.warn("Please fill all fields!");
    } else {
      const payload = {
        url: "",
        img: ImageUrl,
        Bookings_name__1IKPG: name,
        discover: category,
        location: `${(locationName, states)}`,
        state: states,
        Bookings_price__YVqxb: `₹${price}`,
        Bookings_person__3ao1H: perUnit,
      };
      fetch(`${process.env.REACT_APP_API_URL}camps`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "added") {
            toast.success("Camp added to database!");
            window.location.reload();
          } else {
            toast.error("Failed to Add");
          }
        })
        .catch((err) => {
          toast.error("Failed to Add");
        });
    }
  };

  const addEvent = () => {
    if (
      ImageUrl === "" ||
      name === "" ||
      states === "" ||
      locationName === "" ||
      price === "" ||
      desription === ""
    ) {
      toast.warn("Please fill all fields!");
    } else {
      const payload = {
        img: ImageUrl,
        Bookings_name__1IKPG: name,
        location: `${(locationName, states)}`,
        Bookings_price__YVqxb: price,
        description: desription,
      };
      fetch(`${process.env.REACT_APP_API_URL}events`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "event added") {
            toast.success("Event added to database!");
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          } else {
            toast.error("Failed to Add");
          }
        })
        .catch((err) => {
          toast.error("Failed to Add");
        });
    }
  };
  const addUser = () => {
    if (
      ImageUrl === "" ||
      name === "" ||
      pass === "" ||
      email === "" ||
      role===""
    ) {
      toast.warn("Please fill all fields!");
    } else {
      const payload = {
        username:name,
        email:email,
        password:pass,
        avatar:ImageUrl,
        role:role
      };
      fetch(`${process.env.REACT_APP_API_URL}users/add`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "added") {
            toast.success("User added to database!");
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          } else {
            toast.error("Failed to Add");
          }
        })
        .catch((err) => {
          toast.error("Failed to Add");
        });
    }
  };

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
        <Modal.Body>
          <img
            src={ImageUrl}
            style={{ width: "50%", height: "200px", marginLeft: "25%" }}
            alt="Preview of entered url"
          />
        </Modal.Body>
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
            value={ImageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Name Of Camp</Form.Label>
          <Form.Control
            placeholder="Title Of Camp "
            value={name}
            onChange={(e) => {
              SetName(e.target.value);
            }}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Select State</Form.Label>
          <Form.Select
            value={states}
            onChange={(e) => {
              setStates(e.target.value);
            }}
            aria-label="Default select example"
          >
            <option value="">Select from below</option>
            {state.map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </Form.Select>
          <Form.Label>Enter Location</Form.Label>
          <Form.Control
            placeholder="Enter Location "
            value={locationName}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Select Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Select from below</option>
            {discoverData.map((el) => {
              return (
                <option key={el.title} value={el.title}>
                  {el.title}
                </option>
              );
            })}
          </Form.Select>
          <Form.Label>Price Of Camp</Form.Label>
          <Form.Control
            placeholder="Price Of Camp"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            aria-label="Username"
            type="number"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Per (/ unit or / adult)</Form.Label>
          <Form.Select
            value={perUnit}
            onChange={(e) => {
              setPerUnit(e.target.value);
            }}
            aria-label="Default select example"
          >
            <option value="">Select from below</option>
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
            onClick={addCamp}
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
        <Modal.Body>
          <img
            src={ImageUrl}
            style={{ width: "50%", height: "200px", marginLeft: "25%" }}
            alt="Preview of entered url"
          />
        </Modal.Body>
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
            value={ImageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Name Of Camp</Form.Label>
          <Form.Control
            placeholder="Title Of Camp "
            value={name}
            onChange={(e) => {
              SetName(e.target.value);
            }}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Select State</Form.Label>
          <Form.Select
            value={states}
            onChange={(e) => {
              setStates(e.target.value);
            }}
            aria-label="Default select example"
          >
            {state.map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </Form.Select>
          <Form.Label>Enter Location</Form.Label>
          <Form.Control
            placeholder="Enter Location "
            value={locationName}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Price Of Camp</Form.Label>
          <Form.Control
            placeholder="Price Of Camp"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            aria-label="Username"
            type="number"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Enter some details"
            value={desription}
            onChange={(e) => {
              setDescrition(e.target.value);
            }}
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
            onClick={addEvent}
          >
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  if (user) {
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
        <Modal.Body>
          <img
            src={ImageUrl}
            style={{ width: "50%", height: "200px", marginLeft: "25%" }}
            alt="Preview of entered url"
          />
        </Modal.Body>
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
            value={ImageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Name Of User</Form.Label>
          <Form.Control
            placeholder="Enter Username"
            value={name}
            onChange={(e) => {
              SetName(e.target.value);
            }}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Enter E-mail</Form.Label>
          <Form.Control
            placeholder="Enter E-mail "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            aria-label="Username"
            type="email"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            aria-label="Username"
            type="password"
            aria-describedby="basic-addon1"
          />
          <Form.Label>Role</Form.Label>
          <Form.Select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            aria-label="Default select example"
          >
            <option value="">Select from below</option>
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
            onClick={addUser}
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
