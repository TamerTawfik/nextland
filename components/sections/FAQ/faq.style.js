// twin-macro
import tw, { styled } from 'twin.macro';

export const BackgroundContainer = tw.section`bg-accents_1 pt-6 pb-24 md:pt-8 md:pb-32  border-t border-accents_2`;

export const Container = styled.div`
  ${tw`max-w-3xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8`}

  .divider {
    ${tw`max-w-3xl mx-auto divide-y-2 divide-accents_2`}
  }
  
`;
export const Heading = tw.h2`text-center text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 sm:text-4xl mb-16`;

export const List = styled.dl`
  ${tw`mt-6 space-y-6 divide-y divide-accents_2`}

  .arrow {
    ${tw`text-left w-full flex justify-between items-start text-foreground`}
  }

  .question {
    ${tw`font-light text-base text-foreground ml-0 pl-0`}
  }

  span {
    ${tw`ml-6 h-7 flex items-center`}
  }

  p {
    ${tw`font-light text-base text-foreground`}
  }
`;
