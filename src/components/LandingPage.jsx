// import React from 'react';
// import Slider from 'react-slick'; 
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import image1 from '../assets/images/slides/slide1.webp';
// import image2 from '../assets/images/slides/slide2.png';
// import image3 from '../assets/images/slides/slide3.png';
// import image4 from '../assets/images/slides/slide4.webp';

// const LandingPage = () => {
//     const sliderSettings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };

//   return (
//     <div>
//       <Slider {...sliderSettings}>
//         <div>
//           <img src={image1} alt="Clinic" style={imageStyle} />
//         </div>
//         <div>
//           <img src={image2} alt="Doctor" style={imageStyle} />
//         </div>
//         <div>
//           <img src={image3} alt="Booking" style={imageStyle} />
//         </div>
//         <div>
//           <img src={image4} alt="Booking" style={imageStyle} />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// const imageStyle = {
//     width: '100%',
//     maxHeight: '500px', 
//     objectFit: 'cover',
//   };

// export default LandingPage;
// LandingPage.js
// LandingPage.jsx

import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import '../assets/css/animate.css';
import '../assets/css/font-awesome.min.css';
// import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.min.css';
import '../assets/css/tooplate-style.css';

import slide1 from '../assets/images/slider1.jpg';
import slide2 from '../assets/images/slider2.jpg';
import slide3 from '../assets/images/slider3.jpg';

const LandingPage = () => {
  const images = [slide1, slide2, slide3];

  const carouselData = [
    {
      id: 1,
      image: 'https://cdn.light-it.net/articles_image/art11M1.jpg',
      caption: {
        title: 'First slide label',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
    },
    {
      id: 2,
      image: 'https://content-static.upwork.com/blog/uploads/sites/3/2018/07/05111646/Best-Practices-for-Developing-a-Doctor-Booking-App-feature.jpg',
      caption: {
        title: 'Second slide label',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    },
    {
      id: 3,
      image: 'https://www.fatbit.com/fab/wp-content/uploads/2015/09/Online-doctor-booking-platform.png',
      caption: {
        title: 'Third slide label',
        description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
      <div className="carousel-indicators">
        {carouselData.map((item, index) => (
          <button
            key={item.id}
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {carouselData.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <img src={item.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.caption.title}</h5>
              <p>{item.caption.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev" onClick={() => handleSlide((activeIndex - 1 + carouselData.length) % carouselData.length)}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next" onClick={() => handleSlide((activeIndex + 1) % carouselData.length)}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default LandingPage;

