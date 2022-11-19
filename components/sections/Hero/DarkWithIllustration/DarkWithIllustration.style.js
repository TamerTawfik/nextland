import tw, { styled } from "twin.macro";



export const HeroContent = styled.div`
  ${tw`mt-4 pt-10 bg-lotion sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden`}
  .heroWrapper {
    ${tw`mx-auto max-w-7xl `}
  }
  .grid {
    ${tw`lg:grid lg:grid-cols-2 lg:gap-8`}
  }
`;

export const ContentSide = styled.div`
  ${tw`mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center`}
  .hiringLink {
    ${tw`inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200`}
  }
  .hiring {
    ${tw`px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-brand to-brand rounded-full`}
  }
  .arrowIcon {
    ${tw`ml-2 w-5 h-5 text-gray-500`}
  }
  .heading {
    ${tw`mt-4 text-4xl tracking-tight font-extrabold text-eerie sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl`}
  }
  .slogn {
    ${tw`pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand sm:pb-5`}
  }
  .paragraph {
    ${tw`mt-3 text-base text-eerie sm:mt-5 sm:text-xl lg:text-lg xl:text-xl`}
  }
  form {
    ${tw`sm:max-w-xl sm:mx-auto lg:mx-0`}
  }
  input {
    ${tw`block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand focus:ring-offset-brand`}
  }
  button {
    ${tw`block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-brand to-brand text-white font-medium hover:from-brand hover:to-brand focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900`}
  }
`;

export const ImageSide = styled.div`${tw`mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative`}
  div {
    ${tw`mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0`}
  }
  img {
    ${tw`w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none`}
  }
`;
