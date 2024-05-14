import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";

export default function Slider() {
  const slides = useLoaderData();

  console.log(slides);

  return (
    <div
      className="container mx-auto mt-10 rounded-2xl"
      style={{ position: "relative" }}
    >
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.product_image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "500px",
                opacity: 0.7,
                borderRadius: "20px",
              }}
              className="blur-background relative"
            ></div>
            <div className="text-container absolute z-10">
              <h1 className="text-2xl md:text-4xl font-bold py-6">
                {slide.product_name}
              </h1>
              <p className="mb-10 text-gray-900 sm:text-base md:text-2xl px-5 ">
                {slide.query_title}
              </p>
              <Link
                to={`/details/${slide._id}`}
                type="button"
                className="mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Details
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
