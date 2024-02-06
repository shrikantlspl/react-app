import React from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import "../Styles/fullblog.scss";
import { Helmet } from 'react-helmet';

const FullBlog = () => {
  const location = useLocation();
  const { imglink, description, title, description2, title2, keyword } = location.state || {};

  return (
    <div className='FullBlog-container'>
    <Helmet>
  <title>{title2}</title>
  <meta name="description" content={description2} />
  <meta name="keywords" content={keyword} />
</Helmet>
      <Header heading={title} />

      <div className="FullBlog">
        <img src={imglink} alt={title} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default FullBlog;
