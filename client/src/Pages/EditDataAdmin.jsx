import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubNavbar } from "../Components/SubNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Styles/editAdmin.css";
import Card from "react-bootstrap/Card";
import { toast } from "react-toastify";
import Footer from "../Components/Footer";

const EditDataAdmin = () => {
  const { id, type } = useParams();
  const [tobeUpdated, setTobeUpdated] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [name, SetName] = useState("");
  const [states, setStates] = useState("");
  const [locationName, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [perUnit, setPerUnit] = useState("");
  const [desription, setDescrition] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

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

  useEffect(() => {
    if (type === "camp") {
      fetch(`${process.env.REACT_APP_API_URL}camps/prod/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setTobeUpdated(res[0]);
          console.log(res[0]);
          setImageUrl(res[0].img);
          SetName(res[0].Bookings_name__1IKPG);
          setStates(res[0].state);
          setLocation(res[0].location);
          let priceNumber = res[0].Bookings_price__YVqxb.trim()
            .split("₹")
            .map(String);
          setPrice(priceNumber[1]);
          console.log(price);
          setPerUnit(res[0].Bookings_person__3ao1H);
          setCategory(res[0].discover);
        })
        .catch((err) => {
          setTobeUpdated("");
          toast.error("Failed to fetch");
        });
    } else if (type === "user") {
      fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setTobeUpdated(res[0]);
          setImageUrl(res[0].avatar);
          SetName(res[0].username);
          setEmail(res[0].email);
          setPass(res[0].pass);
          setRole(res[0].role);
        })
        .catch((err) => {
          setTobeUpdated("");
          toast.error("Failed to fetch");
        });
    } else if (type === "event") {
      fetch(`${process.env.REACT_APP_API_URL}events/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setTobeUpdated(res[0]);
          setImageUrl(res[0].img);
          SetName(res[0].Bookings_name__1IKPG);
          setLocation(res[0].location);
          setPrice(res[0].Bookings_price__YVqxb);
          setDescrition(res[0].description);
        });
    }
  }, []);

  const editCampDetails = (dataid) => {
    if (
      ImageUrl === "" ||
      name === "" ||
      category === "" ||
      locationName === "" ||
      states === "" ||
      price === "" ||
      perUnit === ""
    ) {
      toast.warn("Fields cannot be empty");
    } else {
      const payload = {
        url: "",
        img: ImageUrl,
        Bookings_name__1IKPG: name,
        discover: category,
        location: locationName,
        state: states,
        Bookings_price__YVqxb: price,
        Bookings_person__3ao1H: perUnit,
      };
      fetch(`${process.env.REACT_APP_API_URL}camps/${dataid}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "updated") {
            toast.success("Camp Edited Successfully");
            setTimeout(() => {
              navigate("/admin");
            }, 1500);
          } else {
            toast.error("Updation failed");
          }
        })
        .catch((err) => {
          toast.error("Updation failed");
        });
    }
  };

  const editUserDetails = (dataid) => {
    if (
      ImageUrl === "" ||
      name === "" ||
      email === "" ||
      pass === "" ||
      role === ""
    ) {
      toast.warn("Fields cannot be empty");
    } else {
      const payload = {
        username: name,
        email: email,
        password: pass,
        avatar: ImageUrl,
        role: role,
      };
      fetch(`${process.env.REACT_APP_API_URL}users/${dataid}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "updated") {
            toast.success("User Updated successfully");
            setTimeout(() => {
              navigate("/admin");
            }, 1500);
          } else {
            toast.error("Updation failed");
          }
        })
        .catch((err) => {
          toast.error("Updation failed");
        });
    }
  };

  const editEventDetails = (dataid) => {
    if (
      ImageUrl === "" ||
      name === "" ||
      desription === "" ||
      locationName === "" ||
      price === ""
    ) {
      toast.warn("Fields cannot be empty");
    } else {
      const payload = {
        img: ImageUrl,
        Bookings_name__1IKPG: name,
        location: locationName,
        Bookings_price__YVqxb: price,
        description: desription,
      };
      fetch(`${process.env.REACT_APP_API_URL}events/${dataid}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "updated") {
            toast.success("Event Edited Successfully");
            setTimeout(() => {
              navigate("/admin");
            }, 1500);
          } else {
            toast.error("Updation failed");
          }
        })
        .catch((err) => {
          toast.error("Updation failed");
        });
    }
  };

  if (type === "user") {
    return (
      <>
        <SubNavbar />
        <div style={{ width: "100%", height: "70px" }}></div>
        <div className="edit_form_main">
          <Form className="edit_form">
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
            <Button
              onClick={() => {
                editUserDetails(tobeUpdated._id);
              }}
              style={{
                width: "100%",
                marginTop: "30px",
                background: "#2b1055",
                color: "#fff",
              }}
              variant=""
            >
              Change Details
            </Button>
          </Form>
          <div className="edit_form">
            <h4 style={{ marginBottom: "20px", textAlign: "center" }}>
              Preview of entered data changes made in form reflect here.
            </h4>
            <div className="card_size" key={tobeUpdated._id}>
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "0px 0px",
                }}
                onClick={() => {}}
              >
                <Card.Img
                  variant="top"
                  style={{
                    width: "100%",
                    height: "50% !important",
                    borderRadius: "50%",
                  }}
                  src={ImageUrl}
                  alt={name}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "1.1875rem",
                      fontWeight: "700",
                      color: "#212121",
                      letterSpacing: "-.1px",
                    }}
                  >
                    {name}
                  </Card.Title>
                  <Card.Text>{email}</Card.Text>
                  <Card.Text>{role}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }

  if (type === "event") {
    return (
      <>
        <SubNavbar />
        <div style={{ width: "100%", height: "70px" }}></div>
        <div className="edit_form_main">
          <Form className="edit_form">
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
            <Button
              onClick={() => {
                editEventDetails(tobeUpdated._id);
              }}
              style={{
                width: "100%",
                marginTop: "30px",
                background: "#2b1055",
                color: "#fff",
              }}
              variant=""
            >
              Change Details
            </Button>
          </Form>
          <div className="edit_form">
            <h4 style={{ marginBottom: "20px", textAlign: "center" }}>
              Preview of entered data changes made in form reflect here.
            </h4>
            <div className="card_size" key={tobeUpdated._id}>
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "0px 0px",
                }}
                onClick={() => {}}
              >
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "50% !important" }}
                  src={ImageUrl}
                  alt={name}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "1.1875rem",
                      fontWeight: "700",
                      color: "#212121",
                      letterSpacing: "-.1px",
                    }}
                  >
                    {name}
                  </Card.Title>
                  <Card.Text>{locationName}</Card.Text>
                  <Card.Text>{states}</Card.Text>
                  <Card.Text>
                    {price} {perUnit}
                  </Card.Text>
                  <Card.Text>{desription}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }

  return (
    <>
      <SubNavbar />
      <div style={{ width: "100%", height: "70px" }}></div>
      <div className="edit_form_main">
        <Form className="edit_form">
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
          <Button
            onClick={() => {
              editCampDetails(tobeUpdated._id);
            }}
            style={{
              width: "100%",
              marginTop: "30px",
              background: "#2b1055",
              color: "#fff",
            }}
            variant=""
          >
            Change Details
          </Button>
        </Form>
        <div className="edit_form">
          <h4 style={{ marginBottom: "20px", textAlign: "center" }}>
            Preview of entered data changes made in form reflect here.
          </h4>
          <div className="card_size" key={tobeUpdated._id}>
            <Card
              style={{
                width: "100%",
                height: "100%",
                padding: "0px 0px",
              }}
              onClick={() => {}}
            >
              <Card.Img
                variant="top"
                style={{ width: "100%", height: "50% !important" }}
                src={ImageUrl}
                alt={name}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "1.1875rem",
                    fontWeight: "700",
                    color: "#212121",
                    letterSpacing: "-.1px",
                  }}
                >
                  {name}
                </Card.Title>
                <Card.Text>{locationName}</Card.Text>
                <Card.Text>{states}</Card.Text>
                <Card.Text>
                  {price} {perUnit}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default EditDataAdmin;
