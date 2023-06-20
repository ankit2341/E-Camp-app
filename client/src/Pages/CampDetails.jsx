import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/esm/Spinner";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { useParams } from "react-router-dom";
import { SubNavbar } from "../Components/SubNavbar";
import "../Styles/details.css";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import "../Styles/payment.css";
import { useSelector } from "react-redux";

const CampDetails = () => {
  const { prod_id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [images, setimages] = useState([]);
  const [current, setCurrent] = useState(1);
  const [show, setShow] = useState(false);
  const [bookOffCanvas, setBookOffCanvas] = useState(false);
  const [booking_price, setBooking_price] = useState({});
  const [booking_member_name, setBooking_member_name] = useState("");
  const [booking_member_age, setBooking_member_age] = useState("");
  const [payment, setPayment] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userData = useSelector((store) => store.AuthReducer.userData);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}camps/prod/${prod_id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        // console.log(res)
        setimages([
          { src: res[0].img },
          {
            src: "https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712__340.jpg",
          },
          {
            src: "https://www.euttaranchal.com/tourism/photos/camping-in-chakrata-8761748.jpg",
          },
          {
            src: "https://hips.hearstapps.com/hmg-prod/images/camping-quotes-1556677391.jpg?crop=1.00xw:0.855xh;0,0.0384xh&resize=1200:*",
          },
        ]);
        setLoading(false);
        let price_of_camp_total = res[0].Bookings_price__YVqxb.split("₹")[1];
        // console.log(price_of_camp_total,typeof(price_of_camp_total))
        setBooking_price(price_of_camp_total);
      })
      .catch((err) => {
        setLoading(false);
        setimages([]);
        setData([]);
      });
  }, []);

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
        booking_name: data[0].Bookings_name__1IKPG,
        booking_location: data[0].location,
        payment_status: payment,
        booking_members: [
          {
            name: booking_member_name,
            age: booking_member_age,
          },
        ],
      };
      // console.log(payload);
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
      <div style={{ width: "100%", height: "70px", background: "#fff" }}></div>
      <div className="details_page">
        <div className="details_page_subdiv">
          <Carousel
            thumbnailWidth={"25%"}
            thumbnailHeight={"100px"}
            images={images}
            hasSizeButton={false}
            hasIndexBoard={false}
            hasMediaButton={false}
            isAutoPlaying={true}
            className="carousel_media_query"
          />
        </div>
        <div className="details_page_subdiv">
          <div className="prod_info">
            <h1>{data[0].Bookings_name__1IKPG}</h1>
            <p>{data[0].discover}</p>
            <p>{data[0].location}</p>
            <p style={{ fontWeight: "bold" }}>
              Rs. {data[0].Bookings_price__YVqxb}{" "}
              {data[0].Bookings_person__3ao1H}
            </p>
          </div>
          <div className="add_people_title">
            <p>Add number of peoples you want to book camp for</p>
          </div>
          <div className="book_now">
            <div className="quantity">
              <Button variant="light">Only 1 person at a time</Button>
            </div>
            <button
              className="book_now_btn"
              onClick={() => setBookOffCanvas(true)}
            >
              Book Now
            </button>
          </div>
          <div className="description_overlays">
            <button onClick={handleShow}>More details</button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
                fill="#2b1055"
              >
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              Verified
            </button>
          </div>
        </div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        style={{ zIndex: "11111" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontWeight: "bold" }}>
            {data[0].Bookings_name__1IKPG}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Location :- {data[0].location}</p>
          <p style={{ fontWeight: "bold" }}>
            Rs. {data[0].Bookings_price__YVqxb} {data[0].Bookings_person__3ao1H}
          </p>
          <h6 style={{ fontWeight: "bold" }}> Description</h6>
          <p>
            You could start off with purchasing some tents to provide your guest
            while they camp at your land however there is also a growing trend
            of BYOT (Bring your own tent). Ground tents can be purchased at
            decathlon or Coleman fairly easily these days. Equip your campsite
            with a few 3-man tents and a couple of family size tents so that it
            can suit a variety of campers. A cabin in the woods, a tiny home or
            a treehouse always piques the interest of the reluctant camper who
            is looking for a bit more comfort. Build a platform made of wood or
            stone to elevate from the ground so that it gives a feeling of
            safety. Though there’s a bunch of campers who love pitching their
            tents onto the ground to get some love from mother earth.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        placement="end"
        style={{ zIndex: "11111" }}
        show={bookOffCanvas}
        onHide={() => setBookOffCanvas(false)}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Book Event Now</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name Of Person </Form.Label>
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
              <Form.Label>Enter Age Of Person </Form.Label>
              <Form.Control
                value={booking_member_age}
                onChange={(e) => {
                  setBooking_member_age(e.target.value);
                }}
                type="number"
                placeholder="Enter age of person in numbers"
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
                      Pay {booking_price}.00
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
              Book Camp Now
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <Footer />
    </>
  );
};

export default CampDetails;
