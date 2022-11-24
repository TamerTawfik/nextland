import tw, { styled } from "twin.macro";

export const Container = tw.div`isolate bg-transparent`;

export const HeroContainer = styled.div`
    ${tw`mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40`}
    .ctaWrapper {
        ${tw`hidden sm:mb-8 sm:flex sm:justify-center`}
    }
    .cta {
        ${tw`relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20`}
        a {${tw`font-semibold text-indigo-600`}}
    }
    .heading {
        ${tw`text-4xl text-foreground font-bold tracking-tight sm:text-center sm:text-6xl`}
    }
    p {
        ${tw`mt-6 text-lg leading-8 text-gray-600 sm:text-center`}
    }
    .getStarted {
        ${tw`inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700`}
    }
    .liveDemo {
        ${tw`inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20`}
    }
`;
