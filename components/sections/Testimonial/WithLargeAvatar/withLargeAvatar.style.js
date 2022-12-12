//twin-macro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.section`bg-background overflow-hidden mt-6`;
export const Container = tw.div`relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20`;

export const Testimonial = styled.div`
  ${tw`relative lg:flex lg:items-center`}
  .imageWrap {
    ${tw`hidden lg:block lg:flex-shrink-0`}
    img {${tw`h-64 w-64 rounded-full xl:h-80 xl:w-80`}}
  }
  .blockquoteSvg {
    ${tw`absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-[#09662b] opacity-50`}
  }
  .text {
    ${tw`text-2xl leading-9 font-medium text-secondary`}
  }
  .name {
    ${tw`text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#09662b] to-green`}
  }
  .company {
    ${tw`text-base font-medium text-foreground`}
  }
`;
