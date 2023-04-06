import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SubNavbar } from "../Components/SubNavbar";
import "../Styles/blogs.css";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const blogsData = [
    {
      image:
        "https://campmonk.com/blog/wp-content/uploads/2022/06/south-india-campsites-510x374.jpeg",
      title: "6 Best Trekking And Camp Locations Of South India",
      desc: "“In every walk with nature, one receives far more than he seeks” – John Muir Humans over the millennia have had restless feet, natural explorers thirsting for new lands. Even though most of the world is now mapped, the spirit of personal exploration is at its peak. Trekking in South India and hiking around beautiful",
    },
    {
      image:
        "https://campmonk.com/blog/wp-content/uploads/2022/06/summer-camps-510x374.jpeg",
      title: "10 Of The Best Summer Camps – 2021",
      desc: "Summer is here and there’s no better place to be than outdoors! The last year has been a crazy one and what we’ve learned is that building your immunity is the only way to counter all that’s going on with the pandemic. So many ways to get a dose of nature for kids and adults",
    },
    {
      image:
        "https://campmonk.com/blog/wp-content/uploads/2022/06/campsite-510x374.jpeg",
      title: "How To Build A Campsite On Your Land (India)",
      desc: "The outdoors is in and India is taking notice! More and more people are discovering the joy of spending time in nature and looking for unique accommodations to spend their weekends. If you have a farm, estate or waterfront land that you’d like to host holidaymakers at we have a few tips to get you",
    },
    {
      image:
        "https://campmonk.com/blog/wp-content/uploads/2022/06/pet-friendly-campsite-510x374.jpeg",
      title: "The Best Pet-Friendly Campsites In India",
      desc: "The outdoors and dogs are made for each other. There are leaves to gambol in, creatures to sniff out, miles of land to explore, lakes to jump into and cuddle up next to a cosy campfire. Whisk your dog away for an awesome weekend getaway at a campsite close to you. We’re certain that your",
    },
  ];
  return (
    <>
      <SubNavbar /> <div style={{ width: "100%", height: "70px" }}></div>
      <div className="blogs_grid_parent">
        <div className="blogs_grid_child">
          {blogsData.map((el) => {
            return (
              <Card
                style={{
                  width: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Card.Img variant="top" src={el.image} />
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bolder", fontSize: "larger" }}
                  >
                    {el.title}
                  </Card.Title>
                  <Card.Text>{el.desc}</Card.Text>
                  <Button
                    variant="light"
                    style={{ color: "#fff", background: "#2b1055" }}
                    onClick={() => {
                      toast.warn(
                        "Currently Not Available! Sorry for incovinence but you can explore and checkout events"
                      );
                      navigate("/explore");
                    }}
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#fff"
                      viewBox="0 0 320 512"
                    >
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
