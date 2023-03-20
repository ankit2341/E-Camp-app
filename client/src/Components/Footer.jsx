import React from "react";
import "../Styles/footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="pages">
          <ul>
            <h3>E-Camp</h3>
            <li>Home</li>
            <li>Catalog</li>
            <li>Search</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <ul>
            <h3>Careers</h3>
            <li>Apply Online</li>
            <li>Available Positions</li>
          </ul>

          <ul>
            <h3>About Us</h3>
            <li>Meet Our Team</li>
            <li>Our Responsibilities</li>
            <li>Our Codes</li>
            <li>Our Values</li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Stay in Touch</h3>
          <form>
            <input
              type="email"
              name="newsletter_email"
              id="newsletter_email"
              placeholder="Email"
            />
            <input type="button" value="Submit" />
          </form>
        </div>
      </div>

      <div className="info">
        <div className="legal">Terms & Conditions Privacy Policy</div>
        <div className="copyright">2021 Copyright &copy; ECamp</div>
      </div>
    </footer>
  );
};

export default Footer;
