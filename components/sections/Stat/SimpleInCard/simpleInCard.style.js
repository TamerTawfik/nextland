//twin-macro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.div`bg-background pt-4 sm:pt-8`;

export const StatsWrap = styled.div`
  ${tw`mt-4 pb-12 bg-background sm:pb-16`}
  .bg {
    ${tw`absolute inset-0 h-1/2 bg-background`}
  }
  .cardContianer {
    ${tw`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
  }
`;

export const Stats = styled.dl`
  ${tw`rounded-lg bg-background shadow-lg sm:grid sm:grid-cols-4`}
  .label {
    ${tw`order-2 mt-2 text-lg leading-6 font-medium text-secondary`}
  }
  .value {
    ${tw`order-1 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#09662b]  to-green`}
  }
`;

export const Stat1 = tw.div`flex flex-col border-b border-accents_1 p-6 text-center sm:border-0 sm:border-r`;
export const Stat2 = tw.div`flex flex-col border-t border-b border-accents_1 p-6 text-center sm:border-0 sm:border-l sm:border-r`;
export const Stat3 = tw.div`flex flex-col border-t border-accents_1 p-6 text-center sm:border-0 sm:border-l`;
