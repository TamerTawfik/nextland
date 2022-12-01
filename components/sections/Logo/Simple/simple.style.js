//twin-macro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.div`bg-background`;
export const Container = tw.div`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8`;
export const Heading = tw.div`text-center text-sm font-medium uppercase text-secondary tracking-widest`;
export const LogoWrapper = tw.div`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8`;
export const Grid = styled.div`
  ${tw`grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5`}
  img {
    ${tw`opacity-75 hover:opacity-100 transition h-4 md:h-8`}
  }
`;
