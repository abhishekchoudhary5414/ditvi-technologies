'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
    FaQuoteLeft,
    FaStar,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Testimonial.module.css';
import Heading from '@/custom/heading/Heading';

interface TestimonialItem {
    id: number;
    name: string;
    position: string;
    image: StaticImageData | string;
    quote: string;
    rating: number;
}

const testimonials: TestimonialItem[] = [
    {
        id: 1,
        name: 'Jaya',
        position: 'CEO',
        image: '/assets/testimonial/female.png',
        quote:
            'Sharma Interiors transformed our office space into a modern, functional environment. Their attention to detail exceeded our expectations.',
        rating: 5
    },
    {
        id: 2,
        name: 'R.K. Singh',
        position: 'Restaurant Manager',
        image: '/assets/testimonial/boy.png',
        quote:
            'The wooden work and partitions they installed are simply outstanding. The team was efficient, and the results were exactly what we envisioned.',
        rating: 5
    },
    {
        id: 3,
        name: 'A. Patel',
        position: 'Hotel Director',
        image: '/assets/testimonial/boy.png',
        quote:
            'Their expertise in ceiling work and paneling is remarkable. They delivered the project on time and maintained high quality throughout.',
        rating: 5
    },
    {
        id: 4,
        name: 'J. Sharma',
        position: 'Interior Designer',
        image: '/assets/testimonial/boy.png',
        quote:
            'Sharma Interiors has an incredible eye for design. They helped us create a cohesive look throughout our office that truly reflects our brand.',
        rating: 5
    }
];
//sadf
const Testimonial: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.container}>


                <Heading
                    subtitle='Testimonials'
                    title='What Our Clients'
                    titleHighlight='Say'
                ></Heading>

                <div className={styles.sliderContainer}>
                    <button
                        className={`${styles.navigationButton} ${styles.prevButton}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous testimonial"
                        type="button"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className={`${styles.navigationButton} ${styles.nextButton}`}
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next testimonial"
                        type="button"
                    >
                        <FaChevronRight />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop
                        speed={1000}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 }
                        }}
                        className={styles.swiper}
                    >
                        {testimonials.map((t) => (
                            <SwiperSlide key={t.id}>
                                <article className={styles.testimonialCard}>
                                    <FaQuoteLeft className={styles.quoteIcon} />
                                    <p className={styles.quote}>{t.quote}</p>

                                    <div className={styles.rating}>
                                        {Array.from({ length: t.rating }, (_, i) => (
                                            <FaStar key={i} className={styles.star} />
                                        ))}
                                    </div>

                                    <div className={styles.clientInfo}>
                                        <div className={styles.clientImage}>
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                width={60}
                                                height={60}
                                                className={styles.image}
                                            />
                                        </div>
                                        <div className={styles.clientDetails}>
                                            <h4 className={styles.clientName}>{t.name}</h4>
                                            <p className={styles.clientPosition}>
                                                {t.position}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
