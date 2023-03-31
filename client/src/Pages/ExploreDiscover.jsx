import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../Styles/Discover.css";
import Footer from "../Components/Footer";
import { SubNavbar } from "../Components/SubNavbar";
import Spinner from "react-bootstrap/Spinner";
import FilterComponent from "../Components/FilterComponent";
import Button from "react-bootstrap/esm/Button";

const ExploreDiscover = () => {
  const { discover } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const naviagate = useNavigate();
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleNavigate = (id) => {
    naviagate(`/prod/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}camps/type/${discover}?page=${page}`)
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

  if (loading) {
    return (
      <>
        <SubNavbar />
        <div style={{ width: "100%", height: "70px" }}></div>
        <div className="results_for_title">
          <h2>Showing results for {discover}</h2>
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
        <h2>Showing results for {discover}</h2>
        <Button
          style={{ border: "1px solid lightgray" }}
          variant="light"
          onClick={handleShow}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#2b1055"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
          </svg>{" "}
          Filters
        </Button>
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
                    onClick={() => {
                      handleNavigate(el._id);
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
                      <Card.Text>
                        {el.Bookings_price__YVqxb} {el.Bookings_person__3ao1H}
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
      <FilterComponent show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default ExploreDiscover;
