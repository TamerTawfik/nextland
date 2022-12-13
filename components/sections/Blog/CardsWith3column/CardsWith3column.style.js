// twin-macro
import tw, { styled } from "twin.macro";

export const Container = tw.div`bg-background max-w-7xl mx-auto pt-3 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-12 lg:px-8`;

export const Header = styled.div`
  ${tw`text-center`}
  h2 {
    ${tw`h-10 text-xl  tracking-wider  uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D4D] via-[#fc6d26] to-[#F9CB28]`}
  }
  h3 {
    ${tw`mt-3 h-16 text-3xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 tracking-tight sm:text-4xl`}
  }
  p {
    ${tw`max-w-prose mx-auto text-xl text-secondary leading-8`}
  }
`;

export const BlogCard = styled.div`
  ${tw`mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none`}
  .card {
    ${tw`flex flex-col rounded-lg shadow-lg overflow-hidden`}
  }
  .postImage {
    ${tw`h-48 w-full object-cover rounded-lg`}
  }
  .cardBody {
    ${tw`flex-1 py-6 flex flex-col justify-between`}
  }
  .blogLink {
    ${tw`py-6 text-sm font-medium text-[#fc6d26]`}
  }
  .title {
    ${tw`text-lg font-semibold text-foreground`}
  }
  .description {
    ${tw`mt-3 text-base text-accents_6`}
  }
  .author {
    ${tw`mt-6 flex items-center`}
    p {${tw`text-sm font-medium text-foreground`}}
  }
  .info {
    ${tw`flex space-x-1 text-sm text-accents_5`}
  }
`;
