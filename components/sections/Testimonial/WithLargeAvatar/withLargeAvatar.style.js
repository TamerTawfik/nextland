//twin-macro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.section`bg-background overflow-hidden mt-16`;
export const Container = styled.div`
  ${tw`relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20`}
  .pattern1 {
    ${tw`absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden`}
  }
  .pattern2 {
    ${tw`hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2`}
  }
`;

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
    ${tw`text-base font-medium text-foreground`}
  }
  .company {
    ${tw`text-base font-medium text-[#0cce6b]`}
  }
`;
