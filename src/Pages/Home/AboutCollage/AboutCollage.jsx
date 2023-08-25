import useReview from "../../../hooks/useReview";
// import AboutCollageCard from "./AboutCollageCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules';
import './AboutCollage.css';
import { useState } from "react";
import { useEffect } from "react";

const Research = () => {
    const [review] = useReview();
    const [slidesPerView, setSlidesPerView] = useState(2); // Default value for larger devices

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
                setSlidesPerView(1);
            } else {
                setSlidesPerView(2);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial adjustment

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <div className="text-center pt-20 pb-10 px-6">
                <h2 className="text-4xl font-bold">Students Say’s About Our Collage</h2>
                <p className="lg:text-xl pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias.</p>
            </div>
            <div>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={4}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    {review.map((item, index) => (
                        <SwiperSlide key={index} className='border bottom-3 border-primary p-8 lg:px-20 lg:py-16 lg:mx-20 mb-28 mt-10 mx-5'>
                            <div className='lg:flex gap-4 border-b-2 border-primary pb-5'>
                                <div className="avatar">
                                    <div className="w-28 h-32 rounded">
                                        <img src={item.image} alt="Avatar" />
                                    </div>
                                </div>
                                <p className='w-full text-[17px]'>{item.review}</p>
                            </div>
                            <div className='pt-3'>
                                <h1 className='text-xl font-bold'>{item.name}</h1>
                                <p className='pt-2 font-semibold text-[16px] text-primary'>{item.subject}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
<p className="w-16 mx-auto"><span className="loading loading-spinner text-primary w-16"></span></p>
export default Research;