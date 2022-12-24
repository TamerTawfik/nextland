//twin-macro
import tw, { styled } from "twin.macro";

<<<<<<< HEAD
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Init Autoplay
SwiperCore.use([Autoplay])

//Animation wrapper
import MotionWrap from "../../common/MotionWrap";

import { BackgroundContainer, Container, Testimonial } from "./testimonial.style";

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    company: 'CEO, Microsoft',
    testimonial:
      'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. I never have any problem at all.',
    image: './images/microsoft.svg',
  },
  {
    id: 2,
    name: 'Gary L. Nash',
    company: 'PM, Square',
    testimonial:
      'The Landscaping Professionals were quick, courteous and very helpful. They helped me restore my lawn and gardens completely after putting in my deck. I was worried it wouldn’t be done in time for my garden party, but they finished the job with time to spare!',
    image: './images/square.svg',
  },
  {
    id: 3,
    name: 'Arlene G. Icenhour',
    company: 'CTO, Shopify',
    testimonial:
      'They are accommodating to our needs and budget, We’ve been a customer for four years and our productivity is better, our stress is lower, and our clients are happier ever since we started working with Local Cleaning Service.',
    image: './images/shopify.svg',
  },
]

const Testimonials = () => {

  return (
    <BackgroundContainer id="testimonials">
      <Container>
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <Testimonial>
                <div className="imageWrap">
                  <img
                    src={item.image}
                    alt=""
                  />
                </div>
                <div tw="relative lg:ml-10">
                  {/* blockquote background */}
                  <svg
                    className="blockquoteSvg"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 144 144"
                    aria-hidden="true"
                  >
                    <path
                      strokeWidth={2}
                      d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                    />
                  </svg>
                  <blockquote tw="relative">
                    <div className="text">
                      <p>
                        {item.testimonial}
                      </p>
                    </div>
                    <footer tw="mt-8">
                      <div tw="flex">
                        <div tw="flex-shrink-0 lg:hidden">
                          <img
                            tw="h-12 w-12 rounded-full"
                            src={item.image}
                            alt=""
                          />
                        </div>
                        <div tw="ml-4 lg:ml-0">
                          <div className="name">{item.name}</div>
                          <div className="company">{item.company}</div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </Testimonial>
            </SwiperSlide>
          ))}

        </Swiper>
=======
import { BackgroundContainer, Container, Testimonial } from "./testimonial.style";

export default function Testimonials({
  testimonial = "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. I never have any problem at all.",
  image = "./images/microsoft.svg",
  name = "John Smith",
  company = "CEO, Microsoft",
}) {
  return (
    <BackgroundContainer id="testimonials">
      <Container>
        <Testimonial>
          <div className="imageWrap">
            <img
              src="./images/microsoft.svg"
              alt=""
            />
          </div>
          <div tw="relative lg:ml-10">
            {/* blockquote background */}
            <svg
              className="blockquoteSvg"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote tw="relative">
              <div className="text">
                <p>
                  {testimonial}
                </p>
              </div>
              <footer tw="mt-8">
                <div tw="flex">
                  <div tw="flex-shrink-0 lg:hidden">
                    <img
                      tw="h-12 w-12 rounded-full"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div tw="ml-4 lg:ml-0">
                    <div className="name">{name}</div>
                    <div className="company">{company}</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </Testimonial>
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
      </Container>
    </BackgroundContainer>
  )
};
<<<<<<< HEAD

export default MotionWrap(Testimonials);
=======
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
