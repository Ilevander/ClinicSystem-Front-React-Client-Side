import React from 'react';
import image from '../assets/images/author-image.jpg';


const About = () => {
  return (
    <section id="about" style={{ marginTop: '-50px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <h2 className="wow fadeInUp" data-wow-delay="0.6s">
                Welcome to Your <i className="fa fa-h-square"></i>ealth Center
              </h2>
              <div className="wow fadeInUp" data-wow-delay="0.8s">
                <p>
                Full Stack Web Application using ASP Core Web API and React JS , to manage Doctors' appointment and Patient's booking into schedule.
                </p>
                <p>
                  SQL SERVER + ASP CORE WEB API + REACT JS
                </p>
              </div>
              <figure className="profile wow fadeInUp" data-wow-delay="1s">
                {/* You can replace the image source with the actual path to your image */}
                <img src={image} className="img-responsive" alt="Dr. Neil Jackson" />
                <figcaption>
                  <h3>Dr. Neil Jackson</h3>
                  <p>General Principal</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
