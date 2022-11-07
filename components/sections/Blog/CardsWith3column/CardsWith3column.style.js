// twin-macro
import tw, { styled } from "twin.macro";

export const Container = tw.div`relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8`;
export const Header = styled.div`${tw`text-center`}
  h2 {
    ${tw`text-base font-semibold tracking-wider text-cyan-600 uppercase`}
  }
  h3 {
    ${tw`mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl`}
  }
  p {
    ${tw`mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4`}
  }
`;
export const BlogCard = styled.div`${tw`mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none`}
  .card {
    ${tw`flex flex-col rounded-lg shadow-lg overflow-hidden`}
  }
  .postImage {
    ${tw`h-48 w-full object-cover`}
  }
  .cardBody {
    ${tw`flex-1 bg-white p-6 flex flex-col justify-between`}
  }
  .categoryName {
    ${tw`text-sm font-medium text-indigo-600`}
  }
  .title {
    ${tw`text-xl font-semibold text-gray-900`}
  }
  .description {
    ${tw`mt-3 text-base text-gray-500`}
  }
  .author {
    ${tw`mt-6 flex items-center`}
    p {${tw`text-sm font-medium text-gray-900`}}
  }
  .info {
    ${tw`flex space-x-1 text-sm text-gray-500`}
  }
`;
