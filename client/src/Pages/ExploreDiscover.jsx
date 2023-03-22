import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../Styles/Discover.css";
import Footer from "../Components/Footer";
import { SubNavbar } from "../Components/SubNavbar";
import Spinner from "react-bootstrap/Spinner";

const ExploreDiscover = () => {
  const { discover } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const naviagate = useNavigate();

  const handleNavigate = () => {};

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}camps/type/${discover}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setList(res);
        window.scrollTo({
            top:"0",
            left:"0",
            behavior:"smooth"
        })
        setLoading(false);
      })
      .catch((err) => {
        setList([]);
        console.log(err);
        setLoading(false);
      });
  },[]);

  if (loading) {
    return (
      <>
        <SubNavbar />
        <div style={{ width: "100%", height: "100px" }}></div>
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
      <div className="parent_grid_discover">
        <div className="grid_filter"></div>
        <div className="grid_discover_discover">
          {list.length > 0 ? (
            list.map((el) => {
              return (
                <div className="card_discover_discover" key={el._id}>
                  <Card
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "0px 0px",
                    }}
                    onClick={() => {
                      handleNavigate(el.title);
                    }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ width: "100%", height: "55%" }}
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
                      <Card.Text>
                        {el.Bookings_price__YVqxb} {el.Bookings_person__3ao1H}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          ) : (
            <p>No places found try different</p>
          )}
        </div>
      </div>
      <div style={{ marginTop: "100px" }}></div>
      <Footer />
    </>
  );
};

export default ExploreDiscover;
