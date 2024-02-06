import React from 'react';
import Header from './Header';
import '../Styles/aboutus.scss';
import '../Styles/mediaQuary.scss';

import aboutusImg from '../Assets/Ensuring_Safety_in_Steel_Shot_Handling_and_Storage.png';
import { Helmet } from 'react-helmet';

const Aboutus = () => {
    return (
        <div className='aboutus-container'>
            <Helmet>
                <title>Rotocast Steel Shot: Your Partner for Quality, Precision, & Performance</title>
                <meta name="description" content="Discover Rotocast, your trusted provider of premium steel shot for surface prep, shot peening, & more. Explore our commitment to quality, innovation, & customer satisfaction. Contact us today for your steel shot needs!" />
        <meta name="keywords" content="Rotocast steel shot, steel shot manufacturer , surface preparation, shot peening, abrasive media, high-quality steel shot, precision manufacturing, custom solutions, timely delivery, environmental, responsibility, automotive industry, aerospace industry ,construction industry

metal fabrication, industrial applications, quality control, state-of-the-art facilities, customer, service, reliable steel shot, cost-effective solutions" />

            </Helmet>
            <Header heading={'About Us'} />
            <div className='aboutus'>
                <div className='content'>
                    <p>
                        <h2>Welcome to Rotocast – Your Trusted Partner in Steel Shot Manufacturing.</h2>
                    </p>
                    <br />

                    <p>
                        At Rotocast, we take pride in being a leading provider of high-quality
                        steel shots for various industrial applications. With a commitment to
                        excellence and a focus on delivering top-notch products, we have
                        established ourselves as a reliable name in the industry.
                    </p>
                    <br />

                    <p>
                        Our journey began with a vision to provide cutting-edge solutions for
                        surface preparation, shot peening, and other applications requiring
                        abrasive materials. Over the years, we have evolved and expanded our
                        capabilities to meet the diverse needs of our clients.
                    </p>
                    <br />

                    <p>
                        What sets us apart is our dedication to quality, precision, and
                        customer satisfaction. Our state-of-the-art manufacturing facilities
                        and a team of skilled professionals enable us to produce steel shots
                        that meet the highest industry standards.
                    </p>
                    <br />
                    <p>
                        <h3>Key Features of Rotocast:</h3>
                        <ul>
                            <li>Premium Quality Steel Shots</li>
                            <li>Advanced Manufacturing Technology</li>
                            <li>Customized Solutions</li>
                            <li>Timely Delivery</li>
                            <li>Environmental Responsibility</li>
                        </ul>
                    </p>
                    <br />

                    <p>
                        Whether you are in the automotive, aerospace, or construction
                        industry, Rotocast is here to provide you with reliable and
                        cost-effective steel shot solutions. We understand the importance of
                        surface finishing in your processes, and we are committed to helping
                        you achieve optimal results.
                    </p>
                    <br />

                    <p>
                        Thank you for considering Rotocast as your partner in steel shot
                        manufacturing. We look forward to serving your needs and contributing
                        to the success of your projects.
                    </p>
                    <br />

                    <p>Best Regards,</p>
                    <p>The Rotocast Team</p>
                </div>
                <div className='img-container'><img src={aboutusImg} alt='Ensuring Safety in Steel Shot Handling and Storage' /></div>
            </div>
        </div>
    );
};

export default Aboutus;
