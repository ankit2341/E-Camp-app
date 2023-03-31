import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const FilterComponent = (props) => {
  const naviagate = useNavigate();
  const [locationList, setLocationList] = useState([]);
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
    fetch(`${process.env.REACT_APP_API_URL}camps/state/nods`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLocationList(res);
      });
  }, []);

  return (
    <Offcanvas style={{ zIndex: "11111" }} {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {" "}
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
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <div key={`types`} className="mb-3" style={{ paddingLeft: "20px" }}>
            <h4
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Select Type
            </h4>
            {discoverData.map((el) => {
              return (
                <Form.Check
                  type="radio"
                  value={el.title}
                  radioGroup="group1"
                  onClick={() => {
                    naviagate(`/explore/type/${el.title}`);
                    window.location.reload();
                  }}
                  label={`${el.title}`}
                />
              );
            })}
          </div>

          <div key={`types`} className="mb-3" style={{ paddingLeft: "20px" }}>
            <h4
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Available Locations
            </h4>
            {locationList.length > 0 ? (
              locationList.map((el) => {
                return (
                  <Form.Check
                    type="radio"
                    radioGroup="group1"
                    value={el}
                    onClick={() => {
                      naviagate(`/explore/${el}`);
                      window.location.reload();
                    }}
                    label={`${el}`}
                  />
                );
              })
            ) : (
              <p>Loading</p>
            )}
          </div>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FilterComponent;
