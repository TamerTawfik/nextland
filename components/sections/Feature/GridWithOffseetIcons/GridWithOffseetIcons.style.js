// twin-macro
import tw, { styled } from 'twin.macro';

export const BackgroundContainer = tw.div`relative bg-background py-16 sm:py-24 lg:py-32`;
export const Container = styled.div`
  ${tw`mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl`}
  h2 {
    ${tw`text-base font-semibold tracking-wider text-success uppercase`}
  }
  .heading {
    ${tw`mt-2 text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl`}
  }
  .SubHeading {
    ${tw`mt-5 max-w-prose mx-auto text-xl text-accents_5`}
  }
`;

export const Grid = styled.div`
  ${tw`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3`}
  .card {
    ${tw`flow-root bg-accents_1 rounded-lg px-6 pb-8`}
  }
  span {
    ${tw`inline-flex items-center justify-center p-3 bg-gradient-to-r from-success to-success rounded-md shadow-lg`}
  }
  h3 {
    ${tw`mt-8 text-lg font-medium text-foreground tracking-tight`}
  }
  p {
    ${tw`mt-5 text-base text-accents_5`}
  }
`;
