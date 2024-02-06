import React from 'react'
import { Helmet } from 'react-helmet';
import Header from './Header'
import "../Styles/applications.scss"
import s930 from "../Assets/S-930.jpg";

function Application({ imglink, description, title, industries }) {
  return (
    <div className="application">
      <img src={imglink} alt={`Application: ${title} - ${description}`} />
      <div>
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <p className="industries"> <h3>Industries: </h3>{industries}</p>
      </div>

    </div>
  );
}


const Applications = () => {
  const applicationData = [
    {
      imglink: "https://rotocastgroup.com/wp-content/uploads/2019/01/Surface-Preparation.jpg",
      title: "Surface Preparation:",
      description: "Our steel shots are extensively used in surface preparation processes such as cleaning, descaling, and derusting. The abrasive nature of our shots ensures efficient and consistent surface treatment for a wide range of materials.",
      industries: " Automotive, Aerospace, Shipbuilding, Foundries, Construction, and more.",
    },
    {
      imglink: "https://rotocastgroup.com/wp-content/uploads/2019/01/shot-Peening.jpg",
      title: "Shot Peening:",
      description: "In shot peening applications, our steel shots are employed to enhance the fatigue life and durability of metal components. The controlled shot peening process imparts compressive stress, improving resistance to cracking and fatigue failure.",
      industries: "Automotive, Aerospace, Manufacturing, and Precision Engineering.",
    },
    {
      imglink: "https://rotocastgroup.com/wp-content/uploads/2019/01/steel-shot-blasting.jpg",
      title: "Cleaning and Blasting:",
      description: "Our steel shots are ideal for cleaning and blasting applications, ensuring the removal of contaminants, paint, and coatings from various surfaces. The result is a clean and prepared surface ready for further treatment.",
      industries: " Manufacturing, Shipbuilding, Oil and Gas, and Metal Fabrication.",
    },
    {
      imglink: "https://rotocastgroup.com/wp-content/uploads/2023/12/steel-casting01.jpg",
      title: "Foundry Applications:",
      description: "Rotocast Steel Shots play a crucial role in foundry applications, contributing to the production of high-quality castings. The use of our shots aids in the removal of sand and other impurities, resulting in superior casting quality.",
      industries: " Foundries, Metal Casting.",
    },
    {
      imglink: "https://rotocastgroup.com/wp-content/uploads/2023/12/rotocast-inner-image2.png",
      title: " Steel Shot Blasting Machines",
      description: "Our steel shots are compatible with various shot blasting machines, ensuring optimal performance and efficiency in the blasting process. The uniform size and hardness of our shots contribute to consistent and reliable results.",
      industries: " Surface Treatment Facilities, Metal Processing Plants.",
    },
  ]

  return (
    <div className='application-container'>
      <Helmet>
        <title>Rotocast - Steel Shot Applications</title>
        <meta name="description" content="Explore the diverse applications where Rotocast Steel Shots excel, including surface preparation, shot peening, cleaning, blasting, foundry applications, and more." />
        <meta name="keywords" content="steel shot applications, surface preparation, shot peening, cleaning and blasting, foundry, applications, steel shot blasting machines , automotive industry, aerospace industry, shipbuilding industry, foundries , construction industry, manufacturing industry metal fabrication, high-performance steel shot, consistent surface treatment, fatigue life improvement, contaminant removal, casting quality, shot blasting efficiency, reliable results" />
      </Helmet>
      <Header heading={"Applications"} />
      <div className="application-intro">
        <p><strong>Discover the Versatility of Our Steel Shot Products</strong> <br />
          At Rotocast, we take pride in providing high-performance steel shots that find application across various industries. Our steel shots are engineered to meet the demanding needs of surface preparation, shot peening, and beyond. Explore the diverse applications where our steel shots excel:
        </p>
        <div className="applications">
          {applicationData.map((application, index) => (
            <Application key={index} {...application} />
          ))}
        </div>
        <p>Discover the difference that Rotocast Steel Shots can make in your industry. Contact us to discuss your specific needs and explore the possibilities of our high-quality steel shot products.
        </p>
      </div>
    </div>
  )
}

export default Applications