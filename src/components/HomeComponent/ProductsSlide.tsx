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
      pagination={{ clickable: true, dynamicBullets: true }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 12,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 12,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      style={{ width: "100%", maxWidth: "1200px", paddingBottom: "60px" }}
    >
      {slides.map((product) => (
     <SwiperSlide
     key={product.id}
     className="flex justify-center items-center justify-items-center"
   >
     <div className="w-full md:max-w-[600px]">
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