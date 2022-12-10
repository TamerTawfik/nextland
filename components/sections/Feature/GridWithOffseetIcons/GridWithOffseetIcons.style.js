// twin-macro
import tw, { styled } from 'twin.macro';

export const BackgroundContainer = tw.div`relative bg-background pb-16 md:pb-24 lg:pb-32`;
export const Container = styled.div`
  ${tw`mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl`}
  h2 {
    ${tw`h-10 text-xl  tracking-wider  uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet via-alert to-alert `}
  }
  .heading {
    ${tw`mt-3 h-16 text-3xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 tracking-tight sm:text-4xl `}
  }
  .SubHeading {
    ${tw` max-w-prose mx-auto text-lg text-secondary leading-8`}
  }
`;

export const Grid = styled.div`
  ${tw`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3`}
  .card {
    ${tw`flow-root  rounded-lg px-6 pb-8 border border-accents_2 hover:border-accents_6`}
  }
  span {
    ${tw`inline-flex items-center justify-center p-3 bg-background rounded-lg shadow-lg border border-accents_2`}
  }
  h3 {
    ${tw`mt-8 text-base font-medium text-foreground tracking-wide`}
  }
  p {
    ${tw`mt-5 text-sm font-light text-accents_5`}
  }
`;
