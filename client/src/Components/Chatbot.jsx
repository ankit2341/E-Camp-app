import React, { useState } from "react";
import "../Styles/chatbot.css";

const Chatbot = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [bookingsShow, setBookingsShow] = useState(false);
  const [aboutShow, setAboutShow] = useState(false);
  const [contactShow, setContactShow] = useState(false);

  return (
    <>
      <div
        className="chatbot"
        onClick={() => {
          setShowIcon(false);
          setBookingsShow(false);
          setAboutShow(false);
          setContactShow(false);
        }}
        style={showIcon ? { display: "flex" } : { display: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          width="30"
          height="30"
          viewBox="0 0 640 512"
        >
          <path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" />
        </svg>
      </div>
      <div
        className="chatbot_ask_questions"
        style={
          showIcon
            ? { display: "none" }
            : { display: "block", transitionDuration: "2000ms" }
        }
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            paddingRight: "10px",
            paddingTop: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
            onClick={() => setShowIcon(true)}
            fill="#000"
            width="30"
            height="30"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        {/* --------------------------------message b0x-------------------------------------- */}
        <div className="message_box_chatbot">
          <div className="chatbot_popup_message">
            <div style={{ display: "block" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <span style={{ paddingRight: "15px" }}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ background: "lightgray", borderRadius: "5px" }}
                    fill="#000"
                    width="30"
                    height="30"
                    viewBox="0 0 640 512"
                  >
                    <path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" />
                  </svg>
                </span>
                <p style={{ paddingBottom: "5px" }}>
                  {" "}
                  Hi, I am your digital assistant how can I help you ?
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <button
                  className="query_btn"
                  onClick={(e) => {
                    setBookingsShow(true);
                    setAboutShow(false);
                    setContactShow(false);
                  }}
                >
                  My orders
                </button>
                <button
                  className="query_btn"
                  onClick={(e) => {
                    setBookingsShow(false);
                    setAboutShow(true);
                    setContactShow(false);
                  }}
                >
                  About Me
                </button>
                <button
                  className="query_btn"
                  onClick={(e) => {
                    setBookingsShow(false);
                    setAboutShow(false);
                    setContactShow(true);
                  }}
                >
                  Complaint
                </button>
              </div>
            </div>
          </div>
          {bookingsShow && aboutShow != true && contactShow != true ? (
            <div className="response_of_bot">orders</div>
          ) : bookingsShow != true && aboutShow && contactShow != true ? (
            <div className="response_of_bot">about</div>
          ) : bookingsShow != true &&
            aboutShow != true &&
            contactShow == true ? (
            <div className="response_of_bot">contact</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Chatbot;
