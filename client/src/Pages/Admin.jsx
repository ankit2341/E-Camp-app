import React, { useEffect, useState } from "react";
import { SubNavbar } from "../Components/SubNavbar";
import "../Styles/admin.css";
import ListGroup from "react-bootstrap/ListGroup";
import UsersTable from "../Components/admin/UsersTable";
import { Campstable } from "../Components/admin/CampsTable";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Admin = () => {
  const [user, setuser] = useState([]);
  const [camps, setCamps] = useState([]);
  const [events, setEvents] = useState([]);
  const [Statistics, setSTATS] = useState([]);
  const [campsPage, setCampspage] = useState(1);
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setuser(res);
      })
      .catch((err) => {
        setuser([]);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}camps?page=${campsPage}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCamps(res);
      })
      .catch((err) => {
        setCamps([]);
      });
  }, [campsPage]);

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    setActive(true);
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setActive(false);
  }

  return (
    <>
      <SubNavbar />
      <div style={{ width: "100%", height: "70px" }}></div>
      <div className="Admin_menu">
        <span
          style={{ fontSize: "30px", cursor: "pointer", color: "#000" }}
          onClick={openNav}
        >
          &#9776; Admin Menu
        </span>
      </div>
      <div
        id="mySidenav"
        style={active ? { width: "250px", zIndex: "11111" } : { width: "0px" }}
        className="sidenav"
      >
        <a to="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#users_table" onClick={closeNav}>Users data</a>
        <a href="#camps_table" onClick={closeNav}>Camps data</a>
        <a href="#event_table" onClick={closeNav}>Events data</a>
        <a href="#statistics" onClick={closeNav}>Statistics</a>
      </div>
      <div className="admin_panel_main">
        <div className="admin_panel_main_subdiv">
          <section
            style={{ width: "100%", height: "0px", padding: "60px 60px",zIndex:"0",color:"#fff",fontSize:"larger",background:"#2b1055" }}
            id="users_table"
          > USERS SECTION</section>
          <h2
            style={{ color: "#000", marginBottom: "20px", marginTop: "20px" }}
          >
            Users table
          </h2>
          <div className="users_table">
            {user.length > 0 ? <UsersTable data={user} /> : "failed to fetch"}
          </div>
          <section
            style={{ width: "100%", height: "0px", padding: "60px 60px",zIndex:"0",color:"#fff",fontSize:"larger",background:"#2b1055" }}
            id="camps_table"
          >CAMPS SECTION</section>
          <h2 style={{ color: "#000" }} >Camps table</h2>
          <div className="camps_table" >
            {camps.length > 0 ? <Campstable data={camps} /> : "failed to fetch"}
          </div>
          <div className="pagination">
            {campsPage > 1 ? (
              <button
                className="btn_pagination"
                onClick={() => {
                  setCampspage((page) => page - 1);
                }}
              >
                Prev
              </button>
            ) : (
              <button className="btn_pagination_disabled" disabled>
                Prev
              </button>
            )}
            <div className="current_page">{campsPage}</div>
            {camps.length > 0 ? (
              <button
                className="btn_pagination"
                onClick={() => {
                  setCampspage((page) => page + 1);
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
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Admin;
