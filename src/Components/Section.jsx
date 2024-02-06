import React from 'react';
import Slider from './Slider';
import Faq from './Faq';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function Section({ h3, text, hasP = true, hasFaq = false, hasBtn = true, hasImg = true, btnTxt, hasSlider = true, imgSrc, imgSize = "40%", backgroundColor, headingColor, textColor, btnBgColor, btnColor, btnTo }) {
  const navigate = useNavigate();

  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  const textOption = {
    ...headingOptions,
    transition: {
      delay: 0.3,
    }
  };
  const btnOption = {
    initial: {
      y: "50%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    }
  };
  const imgOption = {
    initial: {
      scale: .1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    }
  };

  const handleButtonClick = () => {
    // Add any logic here before navigating if needed
    navigate(btnTo);
  };

  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className="section"
    >
      <div>
        <motion.h3
          style={{ color: headingColor }}
          {...headingOptions}
        >
          {h3}
        </motion.h3>
        {hasP && (
          <motion.p
            style={{ color: textColor }}
            {...textOption}
          >
            {text}
          </motion.p>
        )}
        {hasFaq && <Faq />}
        {hasBtn && (
          <motion.button
          data-cursorpointer={true}
            style={{
              color: btnColor,
              background: btnBgColor,
            }}
            {...btnOption}
            onClick={handleButtonClick}
          >
            {btnTxt}
          </motion.button>
        )}
        {hasImg && (
          <div>
            <motion.img
              src={imgSrc}
              alt="steel short slide"
              style={{
                width: imgSize,
              }}
              {...imgOption}
            />
          </div>
        )}
        {hasSlider && <Slider />}
      </div>
    </section>
  );
}

export default Section;
