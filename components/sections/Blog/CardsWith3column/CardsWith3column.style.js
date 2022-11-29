// twin-macro
import tw, { styled } from "twin.macro";

export const Container = tw.div`relative bg-background pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8`;
export const Header = styled.div`
  ${tw`text-center`}
  h2 {
    ${tw`text-base font-semibold tracking-wider text-success uppercase`}
  }
  h3 {
    ${tw`mt-2 text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl`}
  }
  p {
    ${tw`mt-3 max-w-2xl mx-auto text-xl text-accents_5 sm:mt-4`}
  }
`;
export const BlogCard = styled.div`
  ${tw`mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none`}
  .card {
    ${tw`flex flex-col rounded-lg shadow-lg overflow-hidden`}
  }
  .postImage {
    ${tw`h-48 w-full object-cover`}
  }
  .cardBody {
    ${tw`flex-1 bg-accents_1 p-6 flex flex-col justify-between`}
  }
  .categoryName {
    ${tw`text-sm font-medium text-success`}
  }
  .title {
    ${tw`text-xl font-semibold text-foreground`}
  }
  .description {
    ${tw`mt-3 text-base text-accents_5`}
  }
  .author {
    ${tw`mt-6 flex items-center`}
    p {${tw`text-sm font-medium text-foreground`}}
  }
  .info {
    ${tw`flex space-x-1 text-sm text-accents_5`}
  }
`;
