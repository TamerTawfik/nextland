//twin-macro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.section`bg-background`;

export const Container = tw.div`max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8`;

export const Heading = tw.div`text-center text-sm font-normal uppercase text-accents_6 tracking-widest`;

export const LogoWrapper = tw.div`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8`;

export const Grid = styled.div`
  ${tw`grid grid-cols-2 gap-16 md:grid-cols-6 lg:grid-cols-6`}

  .col {
    ${tw`col-span-1 flex justify-center md:col-span-2 lg:col-span-1`}
  }
  
  img {
    ${tw`opacity-75 hover:opacity-100 transition h-6 md:h-7`}
  }
`;
