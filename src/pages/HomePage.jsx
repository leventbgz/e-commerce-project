import PageContent from "../layout/PageContent";

import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    { image: "../public/images/first-slide.jpg", link: "/shop" },

    { image: "../public/images/female-slide.jpg", link: "/puppi" },
    { image: "../public/images/man-slide.jpg", link: "/pucci" },
  ];

  return (
    <PageContent>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex justify-center">
            <Link to={slide.link}>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </PageContent>
  );
};

export default HomePage;
