import React from 'react';
import siteData from '../siteData.js';
import "../styles/MainStyleSheet.css";
import Slider from './Slider';


const Testimonials = () => {
    return (
      <section id="testimonials">
          <div className="row">
              <Slider />
          </div> {/* row ends */}
      </section>
        );
  }

  export default Testimonials