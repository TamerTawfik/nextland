// twin-macro
import tw, { styled } from "twin.macro";

export const Container = tw.section`bg-background max-w-full mx-auto pt-3 pb-20 px-4 sm:px-6 lg:py-24 lg:px-8`;

export const Header = styled.div`
  ${tw`text-center`}

  h2 {
    ${tw`h-10 text-xl tracking-wider uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D4D] via-[#fc6d26] to-[#F9CB28]`}
  }

  h3 {
    ${tw`mt-3 h-16 text-3xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 tracking-tight sm:text-4xl`}
  }
`;

export const BlogCard = styled.div`
  ${tw`mt-12 max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none`}

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
<<<<<<< HEAD
    ${tw`my-6 text-sm font-medium text-[#fc6d26] hover:text-foreground`}
  }

  .title {
    ${tw`text-lg font-semibold text-foreground hover:underline`}
=======
    ${tw`py-6 text-sm font-medium text-[#fc6d26]`}
  }

  .title {
    ${tw`text-lg font-semibold text-foreground`}
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
  }

  .info {
    ${tw`flex space-x-1 text-sm text-accents_5`}
  }
`;
