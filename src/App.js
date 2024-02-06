import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import "./Styles/App.scss";
import "./Styles/intro.scss";
import "./Styles/section.scss"
import "./Styles/footer.scss"
import "./Styles/misc.scss";
import "./Styles/slider.scss";
import "./Styles/faq.scss";
import "./Styles/contact.scss";

// import "./Styles/mediaQuary.scss";



import Blog from './Components/Blog';
import Contactus from './Components/Contactus';
import Introvideo from "./Components/Introvideo";
import Footer from './Components/Footer';
import Misc from './Components/misc';
import Section from "./Components/Section";
import blog from "./Assets/Steel Shots Blog image.gif";
import title2Img from "./Assets/Steel Shots product slider.gif";

import faqImg from "./Assets/steel shot_faq.png";

import data from "./Data/data.json";
import Aboutus from './Components/Aboutus';
import Products from './Components/Products';
import Applications from './Components/Applications';
import ProductDetail from './Components/ProductDetail';
import FullBlog from './Components/FullBlog';


import { Helmet } from 'react-helmet';

const yellow = "#fff100", blue = "#2D2CFF", white = "#fff", brown = "#6d3d0f", black = "#000000";

const App = () => {
  // const navigate = useNavigate();  
  const { title1, title2, chooseUs, Blogs, faq, courses, album, barat, chaiwala } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);

    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Helmet>
        <title>Rotocast Steel Shot: Unleashing Performance Across Industries</title>
        <meta name="description" content="Elevate your surface prep, shot peening, & blasting with Rotocast, India's leading steel shot manufacturer. Explore high-quality media, custom solutions, & expert support. Discover how we can empower your industry!" />
        <meta name="keywords" content="Rotocast steel shot, steel shot manufacturer, surface preparation, shot peening, abrasive media, high-quality steel shot, custom solutions, expert support, industrial applications, made in India, precision manufacturing, quality control, timely delivery, environmental responsibility, automotive industry, aerospace industry, construction industry, metal fabrication, cost-effective solutions" />

      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Introvideo />
              <Section
                h3={title1.heading}
                text={title1.text}
                hasBtn={false}
                hasP={true}
                hasImg={false}
                hasSlider={false}
                backgroundColor={blue}
                headingColor={white}
                textColor={white}
              />

              <Section
                h3={title2.heading}
                text={title2.text}
                imgSrc={title2Img}
                imgSize={"100%"}
                hasSlider={false}
                hasP={true}
                backgroundColor={white}
                headingColor={black}
                textColor={black}
                btnTxt={title2.btn}
                btnBgColor={black}
                btnColor={white}
                btnTo="/products"  // Specify the target route here
              />

              <Section
                h3={chooseUs.heading}
                text={chooseUs.text}
                btnTxt={chooseUs.btn}
                hasP={true}
                hasImg={false}
                hasBtn={false}
                backgroundColor={blue}
                headingColor={white}
                textColor={white}
                btnBgColor={white}
                btnColor={black}
              />

              <Section
                h3={Blogs.heading}
                text={Blogs.text}
                btnTxt={Blogs.btn}
                imgSrc={blog}
                imgSize={"100%"}
                hasP={true}
                backgroundColor={white}
                headingColor={black}
                textColor={black}
                btnBgColor={black}
                btnColor={white}
                hasSlider={false}
                btnTo="/blogs"

              />

              <Section
                h3={faq.heading}
                text={faq.text}
                imgSrc={faqImg}
                imgSize={"60%"}
                hasFaq={true}
                hasBtn={false}
                hasP={false}
                hasImg={true}
                backgroundColor={blue}
                headingColor={white}
                textColor={white}
                hasSlider={false}
              />
            </>
          }
        />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/applications" element={<Applications />} />

        <Route path="/" element={<Products />} />
        <Route path="/products/:description" element={<ProductDetail />} />

        <Route path="/" element={<Blog />} />
        <Route path="/blogs/:title" element={<FullBlog />} />


      </Routes>
      <Footer />
      <Misc hasIcon={false} hascontactusBtn={true} />
    </Router>
  );
}

export default App;
