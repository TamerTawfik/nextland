// twin-micro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.div`py-16 bg-background overflow-hidden lg:py-24`;
export const Container = tw.div`relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl`;
export const Heading = tw.h2`text-center text-3xl leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 sm:text-4xl`;
export const HeadingText = tw.p`mt-4 max-w-3xl mx-auto text-center text-xl text-accents_5`;
export const FirstContent = styled.div`${tw`relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center`}
  h3 {
    ${tw`text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 tracking-tight sm:text-3xl`}
  }
  p {
    ${tw`mt-3 text-lg text-accents_5`}
  }
`;
export const FirstContentList = styled.dl`${tw`mt-10 space-y-10`}
  p {
    ${tw`ml-16 text-lg leading-6 font-medium bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6`}
  }
  dd {
    ${tw`mt-2 ml-16 text-base text-accents_5`}
  }
`;
export const IconWrap = tw.div`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-alert border border-accents_2`;
export const FirstContentImage = tw.div`mt-10 -mx-4 relative lg:mt-0`;
export const SecondContent = styled.div`
  ${tw`relative mt-12 sm:mt-16 lg:mt-24`}
  h3 {
    ${tw`text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 tracking-tight sm:text-3xl`}
  }
  p {
    ${tw`mt-3 text-lg text-accents_5`}
  }
`;
export const SeccondContentGrid = tw.div`lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center`;
export const SeconContetnList = styled.dl`${tw`mt-10 space-y-10`}
  p {
    ${tw`ml-16 text-lg leading-6 font-medium bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6`}
  }
  dd {
    ${tw`mt-2 ml-16 text-base text-accents_5`}
  }
`;
export const SecondContentImage = tw.div`mt-10 -mx-4 relative lg:mt-0 lg:col-start-1`;
