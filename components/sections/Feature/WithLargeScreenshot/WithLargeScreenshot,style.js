// twin-micro
import tw, { styled } from 'twin.macro';

export const BackgroundContainer = tw.div`relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32`;
export const Container = styled.div`${tw`mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl`}
  h2 {
    ${tw`text-base font-semibold tracking-wider text-cyan-600 uppercase`}
  }
  .heading {
    ${tw`mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl`}
  }
  p {
    ${tw`mt-5 max-w-prose mx-auto text-xl text-gray-500`}
  }
  img {
    ${tw`rounded-lg shadow-xl ring-1 ring-black ring-opacity-5`}
  }
`;
export const ImageWrap = tw.div`mt-12 -mb-10 sm:-mb-24 lg:-mb-80`;
