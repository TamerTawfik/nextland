//twin-macro
import tw, { styled } from "twin.macro";

<<<<<<< HEAD
export const BackgroundContainer = tw.section`bg-background overflow-hidden`;

export const Container = styled.div`
  ${tw`relative max-w-6xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-32`}
  
  .swiper-pagination-bullet {
    background: green;
  }
`;

export const Testimonial = styled.div`
  ${tw`relative lg:flex lg:items-center mt-20`}

  cursor: grab;
  
=======
export const BackgroundContainer = tw.section`bg-background overflow-hidden mt-6`;

export const Container = tw.div`relative max-w-6xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20`;

export const Testimonial = styled.div`
  ${tw`relative lg:flex lg:items-center`}

>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
  .imageWrap {
    ${tw`hidden lg:block lg:flex-shrink-0`}
    img {${tw`h-32 w-32 rounded-full xl:h-60 xl:w-60`}}
  }

  .blockquoteSvg {
    ${tw`absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-[#09662b] opacity-50`}
  }

  .text {
<<<<<<< HEAD
    ${tw`text-lg tracking-wider leading-9 font-normal text-foreground`}
=======
    ${tw`text-xl leading-9 font-medium text-foreground`}
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
  }

  .name {
    ${tw`text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#09662b] to-green`}
  }
  
  .company {
    ${tw`text-base font-medium text-foreground`}
  }
`;
