// components/HeroSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop",
  },
];

function HeroSlider() {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <img
                src={slide.image}
                alt="Banner"
                className="hero-image"
              />

              <div className="hero-overlay">
                <div className="container hero-content">
                  <p className="hero-subtitle">Explore</p>

                  <h1>Welcome Developer!</h1>

                  <p className="hero-description">
                    Build responsive and modern frontend applications
                    using HTML, CSS, JavaScript and React.
                  </p>

                  <div className="hero-buttons">
                    <button className="primary-btn">
                      Shop Now
                    </button>

                    <button className="secondary-btn">
                      Browse All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;