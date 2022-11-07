import tw, { styled } from "twin.macro";

export const Container = tw.div`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8`;
export const Grid = tw.div`xl:grid xl:grid-cols-3 xl:gap-8`;
export const MissonSide = styled.div`${tw`space-y-8 xl:col-span-1`}
  p {
    ${tw`text-gray-500 text-base`}
  }
  a {
    ${tw`text-gray-400 hover:text-gray-500`}
  }
`;
export const LinksSide = styled.div`${tw`mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2`}
  .columnWrapper {
    ${tw`md:grid md:grid-cols-2 md:gap-8`}
  }
  h3 {
    ${tw`text-sm font-semibold text-gray-900 tracking-wider uppercase`}
  }
  ul {
    ${tw`mt-4 space-y-4`}
  }
  a {
    ${tw`text-base text-gray-500 hover:text-gray-900`}
  }
`;
export const CopyRights = styled.div`${tw`mt-12 border-t border-gray-200 pt-8`}
  p {
    ${tw`text-base text-gray-400 xl:text-center`}
  }
`;
