import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../Styles/Discover.css";
import Footer from "../Components/Footer";
import { SubNavbar } from "../Components/SubNavbar";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/esm/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import "../Styles/payment.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Explore = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const naviagate = useNavigate();
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [booking_price, setBooking_price] = useState({});
  const [booking_member_name, setBooking_member_name] = useState("");
  const [booking_member_age, setBooking_member_age] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [payment, setPayment] = useState(false);
  const userData = useSelector((store) => store.AuthReducer.userData);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}events?page=${page}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setList(res);
        window.scrollTo({
          top: "0",
          left: "0",
          behavior: "smooth",
        });
        setLoading(false);
      })
      .catch((err) => {
        setList([]);
        console.log(err);
        setLoading(false);
      });
  }, [page]);

  const handleBooking = () => {
    if (
      booking_member_name === "" ||
      booking_member_age === "" ||
      booking_member_age === "0"
    ) {
      toast.warn("Please fill all the fields");
    } else if (payment === false) {
      toast.warn("Payment Pending");
    } else if (userData === "") {
      toast.warn("Not Logged In");
    } else {
      const payload = {
        username: userData.username,
        user_id: userData.id,
        booking_name: booking_price.Bookings_name__1IKPG,
        booking_location: booking_price.location,
        payment_status: payment,
        booking_members: [
          {
            name: booking_member_name,
            age: booking_member_age,
          },
        ],
      };
      fetch(`${process.env.REACT_APP_API_URL}bookings`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: userData.token,
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.msg === "booking successfull") {
            toast.success("Booking Successfull");
            setBooking_member_age("");
            setBooking_member_name("");
            setPayment(false);
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          } else {
            toast.error("Booking Failed");
            setBooking_member_age("");
            setBooking_member_name("");
            setPayment(false);
          }
        })
        .catch((err) => {
          toast.error("Booking Failed");
          setBooking_member_age("");
          setBooking_member_name("");
        });
    }
  };

  if (loading) {
    return (
      <>
        <SubNavbar />
        <div style={{ width: "100%", height: "70px" }}></div>
        <div className="results_for_title">
          <h2>Explore your camping journey.</h2>
        </div>
        <div
          style={{
            width: "100%",
            height: "90vh",
            background: "#fff",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner animation="border" variant="dark" />
        </div>
      </>
    );
  }

  return (
    <>
      <SubNavbar />
      <div style={{ width: "100%", height: "70px" }}></div>
      <div className="results_for_title">
        <h2>Ongoing Events.</h2>
      </div>
      {list.length > 0 ? (
        <div className="parent_grid_discover">
          <div className="grid_discover_discover">
            {list.map((el) => {
              return (
                <div className="card_discover_discover" key={el._id}>
                  <Card
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "0px 0px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ width: "100%", height: "50% !important" }}
                      src={el.img}
                      alt={el.Bookings_name__1IKPG}
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
                        {el.Bookings_name__1IKPG}
                      </Card.Title>
                      <Card.Text>{el.location}</Card.Text>
                      <Card.Text>{el.state}</Card.Text>
                      <Card.Text>₹{el.Bookings_price__YVqxb} onwards</Card.Text>
                      <Card.Text>
                        <Button
                          onClick={() => {
                            handleShow();
                            setBooking_price(el);
                          }}
                          style={{ background: "#2b1055" }}
                        >
                          Book Event
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="no_found">
          <p>No places found try different</p>
        </div>
      )}

      <div className="pagination">
        {page > 1 ? (
          <button
            className="btn_pagination"
            onClick={() => {
              setPage((page) => page - 1);
            }}
          >
            Prev
          </button>
        ) : (
          <button className="btn_pagination_disabled" disabled>
            Prev
          </button>
        )}
        <div className="current_page">{page}</div>
        {list.length > 0 ? (
          <button
            className="btn_pagination"
            onClick={() => {
              setPage((page) => page + 1);
            }}
          >
            Next
          </button>
        ) : (
          <button className="btn_pagination_disabled" disabled>
            Next
          </button>
        )}
      </div>
      <Footer />
      <Offcanvas
        placement="end"
        style={{ zIndex: "11111" }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Book Event Now</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name Of Person</Form.Label>
              <Form.Control
                value={booking_member_name}
                onChange={(e) => {
                  setBooking_member_name(e.target.value);
                }}
                type="text"
                placeholder="Enter name of person"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Age Of Person</Form.Label>
              <Form.Control
                value={booking_member_age}
                onChange={(e) => {
                  setBooking_member_age(e.target.value);
                }}
                type="number"
                placeholder="Enter age of person"
              />
            </Form.Group>
            <Form.Label style={{ marginTop: "10px" }}>
              Payment Status{" "}
              <span>
                {payment ? (
                  <span style={{ color: "green", fontWeight: "bolder" }}>
                    Paid
                  </span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bolder" }}>
                    Pending
                  </span>
                )}
              </span>
            </Form.Label>
            {payment === false ? (
              <div className="container">
                <div id="Checkout" className="inline">
                  <h1>Pay Invoice</h1>
                  <div className="card-row">
                    <span className="visa"></span>
                    <span className="mastercard"></span>
                    <span className="amex"></span>
                    <span className="discover"></span>
                  </div>
                  <form>
                    <div className="form-group">
                      <label for="PaymentAmount">Payment amount</label>
                    </div>
                    <div className="form-group">
                      <label or="NameOnCard">Name on card</label>
                      <input
                        id="NameOnCard"
                        className="form-control"
                        type="text"
                        maxlength="255"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="CreditCardNumber">Card number</label>
                      <input
                        id="CreditCardNumber"
                        className="null card-image form-control"
                        type="text"
                      ></input>
                    </div>
                    <div className="expiry-date-group form-group">
                      <label for="ExpiryDate">Expiry date</label>
                      <input
                        id="ExpiryDate"
                        className="form-control"
                        type="text"
                        placeholder="MM / YY"
                        maxlength="7"
                      ></input>
                    </div>
                    <div className="security-code-group form-group">
                      <label for="SecurityCode">Security code</label>
                      <div className="input-container">
                        <input
                          id="SecurityCode"
                          className="form-control"
                          type="text"
                        ></input>
                        <i id="cvc" className="fa fa-question-circle"></i>
                      </div>
                      <div className="cvc-preview-container two-card hide">
                        <div className="amex-cvc-preview"></div>
                        <div className="visa-mc-dis-cvc-preview"></div>
                      </div>
                    </div>
                    <div className="zip-code-group form-group">
                      <div className="input-container"></div>
                    </div>
                    <Button
                      onClick={(e) => {
                        setPayment(true);
                        toast.success("Payment Successfull");
                      }}
                      style={{ width: "100%", background: "#2b1055" }}
                    >
                      Pay Rs. {booking_price.Bookings_price__YVqxb}.00
                    </Button>
                  </form>
                </div>
              </div>
            ) : (
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "150px",
                    backgroundColor: "#fff",
                  }}
                  src="https://thumbs.dreamstime.com/b/paid-red-stamp-concept-illustration-paid-rubber-stamp-red-grunge-illustration-check-mark-111703693.jpg"
                  alt="Paid"
                />
              </div>
            )}
            <Button
              style={{ background: "#2b1055", width: "100%" }}
              onClick={handleBooking}
            >
              Book Event Now
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Explore;
