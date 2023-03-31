import React, { useEffect, useState } from "react";
import NavbarMain from "../Components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import "../Styles/Home.css";
import Card from "react-bootstrap/Card";
import Footer from "../Components/Footer";
import ChooseLocation from "../Components/ChooseLocation";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { LogoutSuccess } from "../Provider/actions";
import { toast } from "react-toastify";
import swal from "sweetalert";

const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [modalShowlogin, setModalShowlogin] = useState(false);
  const userData = useSelector((store) => store.AuthReducer.userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    swal({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(LogoutSuccess());
        toast.success("Logout Success");
      } else {
      }
    });
  };

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

  const eventsdata = [
    {
      img: "https://campmonk.com/_next/image?url=https%3A%2F%2Fcampmonk.s3.ap-south-1.amazonaws.com%2Fuser%2Fmedium-36c08a93-2478-428e-a527-b342d1b7f089.webp&w=1920&q=75",
      title: "Sunday day mounting at Ecamp Bannerghatta",
      desc: "350 onwards",
    },
    {
      img: "https://campmonk.com/_next/image?url=https%3A%2F%2Fcampmonk.s3.ap-south-1.amazonaws.com%2Fuser%2Fmedium-377cde19-1e9b-4105-bbbe-60af60af0f87.webp&w=1920&q=75",
      title: "Pindrop Bannerghatta",
      desc: "250 onwards",
    },
  ];

  const handleNavigate = (el) => {
    navigate(`/explore/type/${el}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrool = window.scrollY;
    if (scrool > 150) {
      setActive(true);
    } else if (scrool > 2000) {
      setActive(false);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <NavbarMain />
      <section>
        <img
          src="https://i.postimg.cc/C19R7WQM/stars.png"
          className="stars"
          alt="stars"
        />
        <img
          src="https://i.postimg.cc/C5yKkbRz/moon.png"
          className="moon"
          alt="moon"
        />
        <h2 className="logo_home">E-CAMP</h2>
        <button className="choose_location" onClick={() => setModalShow(true)}>
          Choose Location
        </button>
        <img
          src="https://i.postimg.cc/gcvz1XwH/mountains-behind.png"
          className="mountains"
          alt="mountains"
        />
        <img
          src="https://i.postimg.cc/26Qs9WHq/man.png"
          className="man"
          alt="man"
        />
        {/* <img className='scene' src="https://png.pngtree.com/png-clipart/20210226/ourmid/pngtree-green-forest-mountains-clip-art-png-image_2942046.jpg" alt="" /> */}
      </section>

      <div className="about_us">
        <h2>Find Your True Nature</h2>
        <p>
          Discover and book tent camping, glamping, tiny homes and lodging
          nestled in nature. Private lands unlocked across India for you to
          immerse yourself in the great outdoors.
        </p>
        <h2>Our Mission</h2>
        <p>
          To get more people into nature. We believe mindful time in nature is
          what the human spirit yearns for. Get out of the city and into your
          true nature.
        </p>
        <h2>What We do</h2>
        <p>
          E-Camp is one step destination where you can book your camping trip at
          reasonable prices. Most of our partner properties are located on
          farms, estates and vineyards - the revenue from tourism helps our
          landowners conserve their lands and protect the natural world that
          calls it home.
        </p>
      </div>
      <div className="title_div">
        <div>
          <h2>Discover top spots around you</h2>
          <p>
            Choose from a wide variety of accommodations across the best
            properties in India.
          </p>
        </div>
      </div>
      <div className="parent_grid">
        <div className="grid_discover" data-aos="fade-up">
          {discoverData.map((el) => {
            return (
              <div className="card_discover">
                <Card
                  style={{ width: "100%", height: "100%" }}
                  onClick={() => {
                    handleNavigate(el.title);
                  }}
                >
                  <Card.Img variant="top" src={el.img} alt={el.title} />
                  <Card.Body>
                    <Card.Title
                      style={{
                        fontSize: "1.1875rem",
                        fontWeight: "700",
                        color: "#212121",
                        letterSpacing: "-.1px",
                      }}
                    >
                      {el.title}
                    </Card.Title>
                    <Card.Text>{el.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className="title_div">
        <div>
          <h2>Events</h2>
          <p>
            Choose your vibe from our curated list of events held across our
            properties in India
          </p>
        </div>
      </div>
      <div className="parent_grid">
        <div className="grid_discover" data-aos="fade">
          {eventsdata.map((el) => {
            return (
              <div className="card_discover">
                <Card style={{ width: "100%", height: "100%" }}>
                  <Card.Img variant="top" src={el.img} alt={el.title} />
                  <Card.Body>
                    <Card.Title
                      style={{
                        fontSize: "1.1875rem",
                        fontWeight: "700",
                        color: "#212121",
                        letterSpacing: "-.1px",
                      }}
                    >
                      {el.title}
                    </Card.Title>
                    <Card.Text>Rs. {el.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <ChooseLocation show={modalShow} onHide={() => setModalShow(false)} />
      <LoginForm
        show={modalShowlogin}
        onHide={() => setModalShowlogin(false)}
      />
      <div
        className={
          active
            ? "fixed_choose_location_under"
            : "fixed_choose_location_under_none"
        }
      >
        <button
          className="fixed_under_nav_explore"
          onClick={() => navigate("/explore")}
        >
          Explore
        </button>
        {userData === "" ? (
          <button
            className="fixed_under_nav_explore"
            onClick={() => setModalShow(true)}
          >
            Login
          </button>
        ) : (
          <button className="fixed_under_nav_explore" onClick={handleLogout}>
            <img
              style={{
                width: "25px",
                height: "25px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
              src={userData.avatar}
              alt=""
            />
            {userData.username}
          </button>
        )}
        <button
          className="fixed_under_nav_explore"
          onClick={() => setModalShow(true)}
        >
          Location
        </button>
      </div>
    </>
  );
};

export default Home;
