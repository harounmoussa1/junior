import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProduitModal from "./ProduitModal";

import 'swiper/swiper-bundle.css';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface SlideSwiperProps {
  slides: Product[];
}

const ProductsSlide: React.FC<SlideSwiperProps> = ({ slides }) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      style={{
        width: "100%",
        maxWidth: "1200px",
        paddingBottom: "20px",
        "--swiper-pagination-bottom": "0px",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-color": "#007aff"
      } as React.CSSProperties}
    >
      {slides.map((product) => (
        <SwiperSlide
          key={product.id}
          className="flex justify-center items-center justify-items-center"
        >
          <div className="w-full max-w-[600px] mt-20 flex flex-col justify-center items-center">
            <ProduitModal
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              link={product.link}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlide;
