import tw, { styled } from "twin.macro";

export const Container = tw.header`bg-transparent`;

export const HeroContainer = styled.div`
    ${tw`mx-auto max-w-3xl py-14 sm:py-32`}

    .gpt {
        ${tw`text-xl uppercase font-black bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 tracking-tight sm:text-3xl`}
      }

    .heading {
        ${tw`sm:h-32 text-4xl  text-transparent  font-bold bg-clip-text bg-gradient-to-r from-success via-cyan to-success animate-text tracking-tight sm:text-center sm:text-6xl`}
    }

    p {
        ${tw`mt-6 text-lg leading-8 text-secondary sm:text-center`}
    }

    .getStarted {
        ${tw`inline-block rounded-md bg-foreground hover:bg-background px-10 py-1.5 text-base font-medium leading-7 text-background hover:text-foreground shadow-inner ring-1 ring-foreground`}
    }

    .liveDemo {
        ${tw`inline-block rounded-md border border-r-success border-b-success border-l-cyan border-t-cyan bg-background hover:bg-gradient-to-r from-success via-success to-cyan  px-10 py-1.5 text-base font-medium leading-7 text-foreground hover:text-background  ring-1 ring-success`}
    }
`;
