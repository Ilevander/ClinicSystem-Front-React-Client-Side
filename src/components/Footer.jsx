import React from 'react';
import image1 from '../assets/images/news-image1.jpg'
import image2 from '../assets/images/author-image.jpg'

const Footer = () => {
  return (
    <footer data-stellar-background-ratio="5" className="bg-dark text-light">
      <div className="container">
        <div className="row">

          <div className="col-md-4 col-sm-4">
            <div className="footer-thumb">
              <h4 className="wow fadeInUp" data-wow-delay="0.4s">Contact Info</h4>
              <p>Full Stack Web Application using ASP Core Web API and React JS , to manage Doctors' appointment and Patient's booking into schedule. </p>

              <div className="contact-info">
                <p><i className="fa fa-phone"></i> 010-070-0170</p>
                <p><i className="fa fa-envelope-o"></i> <a href="#">info@company.com</a></p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="footer-thumb">
              <h4 className="wow fadeInUp" data-wow-delay="0.4s">Latest News</h4>
              <div className="latest-stories">
                <div className="stories-image">
                  <a href="#"><img src={image1} className="img-responsive" alt="" /></a>
                </div>
                <div className="stories-info">
                  <a href="#"><h5>Amazing Technology</h5></a>
                  <span>March 08, 2018</span>
                </div>
              </div>

              <div className="latest-stories">
                <div className="stories-image">
                  <a href="#"><img src={image2} className="img-responsive" alt="" /></a>
                </div>
                <div className="stories-info">
                  <a href="#"><h5>New Healing Process</h5></a>
                  <span>February 20, 2018</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="footer-thumb">
              <div className="opening-hours">
                <h4 className="wow fadeInUp" data-wow-delay="0.4s">Opening Hours</h4>
                <p>Monday - Friday <span>06:00 AM - 10:00 PM</span></p>
                <p>Saturday <span>09:00 AM - 08:00 PM</span></p>
                <p>Sunday <span>Closed</span></p>
              </div>

              <ul className="social-icon">
                <li><a href="https://www.facebook.com/tooplate" className="fa fa-facebook-square" attr="facebook icon"></a></li>
                <li><a href="#" className="fa fa-twitter"></a></li>
                <li><a href="#" className="fa fa-instagram"></a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 border-top">
            <div className="col-md-4 col-sm-6">
              <div className="copyright-text">
                <p>Copyright &copy; 2024 Coders Evanderhood | Design </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="footer-link">
                <a href="#">Laboratory Tests</a>
                <a href="#">Departments</a>
                <a href="#">Insurance Policy</a>
                <a href="#">Careers</a>
              </div>
            </div>
            <div className="col-md-12 col-sm-2 text-align-center">
              <div className="angle-up-btn">
                <a href="#top" className="smoothScroll wow fadeInUp" data-wow-delay="1.2s"><i className="fa fa-angle-up"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
