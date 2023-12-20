"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import spi from "../assets/spiimg.jpg";

import "swiper/css";
import { Autoplay, EffectCreative } from "swiper/modules";
import Image from "next/image";
import herop from "../assets/herop.jpeg";

const Hero = () => {
  return (
    <Swiper
      centeredSlides={true}
      speed={500}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      autoplay={{
        delay: 7000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, EffectCreative]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="hero min-h-[80vh]"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className=" text-neutral-content">
            <div className=" hero-content items-start max-w-5xl flex flex-col gap-y-10">
              <h1 className="text-5xl font-bold">Unleash Your Style!</h1>
              <p className="max-w-3xl">
                Welcome to our Block.Boi Fashion Store, where style meets
                sophistication. We offer a curated selection of high-quality
                clothing designed to make you look and feel your best. Explore
                our latest collection and discover a new world of fashion right
                at your fingertips. It's time to redefine your style with us.
              </p>
              <button className="btn btn-wide btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero min-h-[80vh]">
          <div className="hero-overlay bg-opacity-60 contrast-150"></div>

          <Image src={herop} alt="hero" backgroundImage fill style={{

          }}/>

          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold">Unleash Your Style!</h1>
              <p className="mb-5">
                Welcome to our Block.Boi Fashion Store, where style meets
                sophistication. We offer a curated selection of high-quality
                clothing designed to make you look and feel your best. Explore
                our latest collection and discover a new world of fashion right
                at your fingertips. It's time to redefine your style with us.
              </p>
              <button className="btn btn-wide btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-accent h-[90vh]">
        <div className="bg-primary h-[80vh]">do you know what i'm doing</div>
      </SwiperSlide>
      <SwiperSlide className="bg-secondary h-[90vh]">
        <div className="bg-primary h-[80vh]">Please tell me what i'm doing</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
