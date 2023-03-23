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


const CampDetails = () => {
  const { prod_id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [images, setimages] = useState([]);
  const [current, setCurrent] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}camps/prod/${prod_id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
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
      })
      .catch((err) => {
        setLoading(false);
        setimages([]);
        setData([]);
      });
  }, []);

  const handleadd = () => {
    if (current <= 4) {
      setCurrent((current) => current + 1);
    } else {
      toast.warn("Only 5 are allowed to book at time");
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
      <div style={{ width: "100%", height: "70px",background:"#fff" }}></div>
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
              {current >= 1 ? (
                <Button
                  variant="light"
                  onClick={() => {
                    setCurrent((current) => current - 1);
                  }}
                >
                  -
                </Button>
              ) : (
                <Button variant="light" disabled>
                  -
                </Button>
              )}
              <Button variant="light">{current}</Button>
                <Button variant="light" onClick={handleadd}>
                  +
                </Button>
            </div>
            <button className="book_now_btn">Book Now</button>
          </div>
          <div className="description_overlays">
            <button  onClick={handleShow} >More details</button>
            <button >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="#2b1055"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
            Verified
            </button>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement={"end"} style={{zIndex:"11111"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      <Footer />
    </>
  );
};

export default CampDetails;
