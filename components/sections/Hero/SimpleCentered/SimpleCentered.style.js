import tw, { styled } from "twin.macro";

export const Container = tw.div`isolate bg-transparent`;

export const HeroContainer = styled.div`
    ${tw`mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40`}
    .ctaWrapper {
        ${tw`hidden sm:mb-8 sm:flex sm:justify-center`}
    }
    .cta {
        ${tw`relative overflow-hidden rounded-full py-1.5 px-4 text-sm font-thin leading-6 ring-1 ring-accents_2  bg-accents_1 text-accents_8`}
        a {${tw`font-thin text-success hover:text-successLight`}}
    }
    .heading {
        ${tw`text-4xl text-transparent  font-bold bg-clip-text bg-gradient-to-r from-success via-cyan to-success animate-text tracking-tight sm:text-center sm:text-6xl`}
    }
    p {
        ${tw`mt-6 text-lg leading-8 text-secondary sm:text-center`}
    }
    .getStarted {
        ${tw`inline-block rounded-md bg-foreground hover:bg-background px-10 py-1.5 text-base font-medium leading-7 text-background hover:text-foreground shadow-inner ring-1 ring-foreground`}
    }
    .liveDemo {
        ${tw`inline-block rounded-md border border-r-success border-b-success border-l-cyan border-t-cyan bg-background hover:bg-gradient-to-r from-success to-cyan hover:text-background px-10 py-1.5 text-base font-medium leading-7 text-foreground  ring-1 ring-success`}
    }
`;
