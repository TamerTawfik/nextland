//twin-macro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.div`bg-lotion pt-12 sm:pt-16`;
export const HeaderWrap = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;

export const Header = styled.div`
  ${tw`max-w-4xl mx-auto text-center`}
  h2 {
    ${tw`text-3xl font-extrabold text-eerie sm:text-4xl`}
  }
  p {
    ${tw`mt-3 text-xl text-gray-500 sm:mt-4`}
  }
`;

export const StatsWrap = styled.div`
  ${tw`mt-10 pb-12 bg-white sm:pb-16`}
  .bg {
    ${tw`absolute inset-0 h-1/2 bg-gray-50`}
  }
  .cardContianer {
    ${tw`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
  }
`;

export const Stats = styled.dl`
  ${tw`rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3`}
  .label {
    ${tw`order-2 mt-2 text-lg leading-6 font-medium text-gray-500`}
  }
  .value {
    ${tw`order-1 text-5xl font-extrabold text-brand`}
  }
`;

export const Stat1 = tw.div`flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r`;
export const Stat2 = tw.div`flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r`;
export const Stat3 = tw.div`flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l`;
