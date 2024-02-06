import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = (element) => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");

    switch (element) {
      case 0:
        allFooterLinks.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 1:
        allFooterLinks.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 2:
        allFooterLinks.forEach((item, index) =>
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 3:
        allFooterLinks.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 4:
        allFooterLinks.forEach((item, index) =>
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 5:
        allFooterLinks.forEach((item, index) =>
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;

      default:
        allFooterLinks.forEach((item) => (item.style.opacity = 1));
        break;
    }
  };

  const linksBackToNormal = () => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  };

  return (
    <>
      <footer>
        <h1>
          #Transforming_Surfaces,
          <br />
          One Shot at a Time
        </h1>

        <aside onMouseLeave={linksBackToNormal}>
          <Link
            to="/"
            className="footerLinks"
            onMouseOver={() => footerLinks(0)}
            data-cursorpointermini={true}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="footerLinks"
            onMouseOver={() => footerLinks(1)}
            data-cursorpointermini={true}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="footerLinks"
            onMouseOver={() => footerLinks(2)}
            data-cursorpointermini={true}
          >
            Products
          </Link>
          <Link
            to="/applications"
            className="footerLinks"
            onMouseOver={() => footerLinks(3)}
            data-cursorpointermini={true}
          >
            Applications
          </Link>
          <Link
            to="/blogs"
            className="footerLinks"
            onMouseOver={() => footerLinks(4)}
            data-cursorpointermini={true}
          >
            Blogs
          </Link>
          <Link
            to="/contactus"
            className="footerLinks"
            onMouseOver={() => footerLinks(5)}
            data-cursorpointermini={true}
          >
            Contact Us
          </Link>
        </aside>

        <div>
          <h5>Email</h5>
          <a data-cursorpointer={true} href="mailto: enquiry@rotocastgroup.com">enquiry@rotocastgroup.com</a>

        </div>

        <div>
          <h5>Phone</h5>
          <a data-cursorpointer={true} href="tel: +919201592832">+919201592832</a>
        </div>


        <p>© COPYRIGHT 2024 Rotocastgroup</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;