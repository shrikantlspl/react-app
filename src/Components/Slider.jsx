import React from 'react';

const Slider = () => {
  return (
    <div className='slider-container'>
      <div className="stack">
        <div className="box box-1" data-cursorpointer={true}>
          <p id="b30" data-cursorpointer={true}>
            <b>30+</b> <br />
            YEARS OF <br />
            <span>EXCELLENCE</span>
          </p>
        </div>
        <div className="box" data-cursorpointer={true}>
          <p data-cursorpointer={true}>
            <span>INDIA'S</span> <br />
            <b>LARGEST</b><br />
            EXPORTER OF<br />
            STEEL<br />
            ABRASIVE
          </p>
        </div>
        <div className="box" data-cursorpointer={true}>
          <p data-cursorpointer={true}>
            <b>1000+ </b><br />
            CUSTOMERS <br />
            SERVED <br />
            <span>DIRECT</span>
          </p>
        </div>
        <div className="box" data-cursorpointer={true}>
          <p data-cursorpointer={true}>
            <span>INDIA'S</span> <br />
            LARGEST & <br />
            MOST <br />
            <b>TRUSTED</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
