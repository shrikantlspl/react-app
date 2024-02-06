import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import "../Styles/mediaQuary.scss";
import "../Styles/products.scss";
import productsData from "../Data/product.json";
import sizeChart from "../Assets/Steel shots size chart.png";

function Product({ data }) {
  const { imglink, description, title, ChemicalComposition, Hardness, Microstructure } = data;

  return (
    <Link to={`/products/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}`} state={{ imglink, description, title, ChemicalComposition, Hardness, Microstructure }}>
      <div className="product" data-cursorpointer={true}>
        <img style={{ width: "350px" }} src={imglink} alt={`Product: ${title} - ${description}`} data-cursorpointer={true} />
        <h3 className="description" data-cursorpointer={true}>{title}</h3>
      </div>
    </Link>
  );
}

const Products = () => {
  const productsDataArray = Object.values(productsData);

  return (
    <div className='product-container'>

      <Helmet>
        <title>Rotocast Steel Shots: High-Performance Abrasive Media Made in India</title>
        <meta name="description" content="Unleash powerful cleaning & blasting with Rotocast Steel Shots! Made in India with premium steel, precise controls, & advanced processing. Explore all sizes (S-930 to S-70) for your specific needs." />
        <meta name="keywords" content="Rotocast steel shots, abrasive media, surface preparation, shot peening, cleaning and blasting, made in India, high-performancesteel shot sizes (S-930, S-780, S-660, S-460, S-390, S-280, S-230, S-170, S-110, S-70), clean refined steel, micro alloying, quality control, special processing line, international know-how, European equipment" />
      </Helmet>

      <Header heading={"Our Products"} />
      <div className="product-intro">
        <div className="content">
          <p>
            Rotocast Steel Shots are part of the family of high-performance abrasive media manufactured for the first time in India. These steel shot media are made through clean refined steel with special micro alloying and extremely tight quality controls. Processed and packed using a special processing line which has been put up with the help of International know-how and European equipment.
          </p>
        </div>
        <div className="image">
          <img src={sizeChart} alt="Steel Shot Size Distribution Table" />
        </div>
      </div>
      <div className="products">
        {productsDataArray.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
