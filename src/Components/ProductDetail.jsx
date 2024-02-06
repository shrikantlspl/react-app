import React from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import "../Styles/productDetail.scss"
import { Helmet } from 'react-helmet';

const ProductDetail = () => {
  const location = useLocation();
  const { imglink, description, title, ChemicalComposition, Hardness, Microstructure } = location.state || {};

  return (
    <div className='productdetail-container'>
      <Helmet>
        <title>{`Rotocast - ${title}`}</title>
        <meta name="description" content={`Explore details about ${title} - Chemical Composition: ${ChemicalComposition}, Hardness: ${Hardness}, Microstructure: ${Microstructure}.`} />
        <meta name="keywords" content="Rotocast steel shots, abrasive media, surface preparation, shot peening, cleaning and blasting, made in India, high-performancesteel shot sizes, clean refined steel, micro alloying, quality control, special processing line, international know-how, European equipment" />
      </Helmet>

      <Header heading={title} />

      <div className="productdetail">
        <img src={imglink} alt={`Product: ${title}`} />
        <p>{description}</p>
      </div>
      <div className="moreproductdetail">

        <div className="ChemicalComposition">
          <h3>Chemical Composition</h3>
          <p>{ChemicalComposition}</p>
        </div>

        <div className="Hardness">
          <h3>Hardness</h3>
          <p>{Hardness}</p>
        </div>

        <div className="Microstructure">
          <h3>Microstructure</h3>
          <p>{Microstructure}</p>
        </div>

      </div>

      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetail;
