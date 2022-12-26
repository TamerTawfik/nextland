// twin-macro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.section`relative bg-background  border-t border-accents_2`;

export const Grid = tw.div`relative max-w-5xl mx-auto lg:grid lg:grid-cols-5`;

export const Column1 = styled.div`
  ${tw`bg-accents_1 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12`}

  h2 {
    ${tw`text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 sm:text-3xl`}
  }

  .text {
    ${tw`mt-3 font-light text-base leading-6 text-accents_7`}
  }

  .icon {
    ${tw`flex-shrink-0 h-6 w-6 text-accents_7`}
  }

  .careers {
    ${tw`mt-6 font-light text-base text-accents_7`}
  }

  a {
    ${tw`font-light text-sm text-info hover:underline `}
  }
`;

export const Column2 = styled.div`
  ${tw`bg-accents_1 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12`}

  form {
    ${tw`grid grid-cols-1 gap-y-6`}
  }

  input {
    ${tw`block w-full shadow-sm py-3 px-4 placeholder-accents_6 focus:ring-accents_5 focus:border-accents_5 border-accents_2 rounded-md bg-accents_1 text-foreground`}
  }

  textarea {
    ${tw`block w-full shadow-sm py-3 px-4 placeholder-accents_6 focus:ring-accents_5 focus:border-accents_5 border border-accents_2 rounded-md bg-accents_1 text-foreground`}
  }

  button {
    ${tw`inline-flex justify-center py-3 px-6 border border-foreground shadow-sm text-base font-medium rounded-md text-background bg-foreground hover:bg-background hover:text-foreground focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-foreground`}
  }
`;
