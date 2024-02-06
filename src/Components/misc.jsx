import React, { useState, useEffect } from "react";
import "../Styles/mediaQuary.scss";
import { Link } from "react-router-dom";
import logo from "../Assets/rotocast-logo.png";
import { BsMouse } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Misc = ({ hasIcon = false, hascontactusBtn = false }) => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const menuIcon = document.querySelector(".menueicon");
    menuIcon.style.display = "none";
    sidebar.style.display = "flex";
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    const menuIcon = document.querySelector(".menueicon");
    menuIcon.style.display = "block";
  };

  return (
    <>
      <div className={`cursor ${scrolling ? "scrolled" : ""}`}></div>

      <Link to="/" className="logo">
        <img src={logo} alt="Logo" data-cursorpointer={true} />
      </Link>

      {hascontactusBtn && (
        <Link
          to="/contactus"
          className="franchiseBtn"
          data-cursorpointer={true}
        >
          Contact Us
        </Link>
      )}

      {hasIcon && (
        <BsMouse className="scrollBtn" data-cursorpointer={true} />
      )}

      <div className={`nav-bg ${scrolling ? "scrolled" : ""}`}></div>

      <nav>
        <ul className="sidebar">
          <li className="crossicon" onClick={hideSidebar}>
            <RxCross2 />
          </li>
          <li onClick={hideSidebar}><Link to="/">HOME</Link></li>
          <li onClick={hideSidebar}><Link to="/aboutus">ABOUT US</Link></li>
          <li onClick={hideSidebar}><Link to="/products">PRODUCTS</Link></li>
          <li onClick={hideSidebar}><Link to="/applications">APPLICATIONS</Link></li>
          <li onClick={hideSidebar}><Link to="/blogs">BLOGS</Link></li>
          <li onClick={hideSidebar}><Link to="/contactus">Contact Us</Link></li>
        </ul>
        <ul>
          <li className="hideonsmall link-style"><Link data-cursorpointermini={true} to="/">HOME</Link></li>
          <li className="hideonsmall link-style"><Link data-cursorpointermini={true} to="/aboutus">ABOUT US</Link></li>
          <li className="hideonsmall link-style"><Link data-cursorpointermini={true} to="/products">PRODUCTS</Link></li>
          <li className="hideonsmall link-style"><Link data-cursorpointermini={true} to="/applications">APPLICATIONS</Link></li>
          <li className="hideonsmall link-style"><Link data-cursorpointermini={true} to="/blogs">BLOGS</Link></li>
          <li className="menueicon hideonsmall" onClick={showSidebar}><IoIosMenu/></li>
        </ul>
      </nav>
    </>
  );
};

export default Misc;
