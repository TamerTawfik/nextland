//twin-macro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.div`bg-white pt-16 lg:py-24`;
export const TestimonialBg = tw.div`pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative`;
export const Grid = tw.div`lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8`;
export const ImageContainer = styled.div`${tw`relative lg:-my-8`}
  .imageCenter {
    ${tw`absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden`}
  }
  .imageWrapper {
    ${tw`mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full`}
  }
  img {
    ${tw`object-cover lg:h-full lg:w-full`}
  }
`;
export const Testimonial = styled.div`${tw`mt-12 lg:m-0 lg:col-span-2 lg:pl-8`}
  .testimonialWrapper {
    ${tw`mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none`}
  }
  svg {
    ${tw`h-12 w-12 text-white opacity-25`}
  }
  .testimonial {
    ${tw`mt-6 text-2xl font-medium text-white`}
  }
  .name {
    ${tw`text-base font-medium text-white`}
  }
  .company {
    ${tw`text-base font-medium text-indigo-100`}
  }
`;
