// twin-macro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.div`relative bg-background my-16 md:my-32`;
export const Grid = tw.div`relative max-w-6xl mx-auto lg:grid lg:grid-cols-5 border border-accents_2`;
export const Column1 = styled.div`
  ${tw`bg-background py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12`}
  h2 {
    ${tw`text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 sm:text-3xl`}
  }
  .text {
    ${tw`mt-3 text-base leading-6 text-foreground`}
  }
  .icon {
    ${tw`flex-shrink-0 h-6 w-6 text-foreground`}
  }
  .careers {
    ${tw`mt-6 text-base text-foreground`}
  }
  a {
    ${tw`font-normal text-sm text-info hover:underline `}
  }
`;

export const Column2 = styled.div`
  ${tw`bg-accents_1 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12`}
  form {
    ${tw`grid grid-cols-1 gap-y-6`}
  }
  input {
    ${tw`block w-full shadow-sm py-3 px-4 placeholder-accents_6 focus:ring-info focus:border-info border-accents_2 rounded-md bg-accents_1 text-foreground`}
  }
  textarea {
    ${tw`block w-full shadow-sm py-3 px-4 placeholder-accents_6 focus:ring-info focus:border-info border border-accents_2 rounded-md bg-accents_1 text-foreground`}
  }
  button {
    ${tw`inline-flex justify-center py-3 px-6 border border-foreground shadow-sm text-base font-medium rounded-md text-background bg-foreground hover:bg-background hover:text-foreground focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-foreground`}
  }
`;
