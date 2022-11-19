import tw, { styled } from "twin.macro";

export const Nav = styled.div`
    ${tw`flex h-9 items-center justify-between bg-transparent`}
    .logoWrapper {
        ${tw`flex lg:min-w-0 lg:flex-auto`}
        a {${tw`-m-1.5 p-1.5`}}
    }
    button {
        ${tw`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700`}
    }
    .navLinks {
        ${tw`hidden lg:flex lg:min-w-0 lg:flex-auto lg:justify-center lg:gap-x-12`}
        a {${tw`font-medium text-sm text-eerie hover:text-black`}}
    }
    .navButton {
        ${tw`hidden lg:flex lg:min-w-0 lg:flex-auto lg:justify-end`}
        a {${tw`inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-eerie shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20`}}
    }    
`;

export const MobileNav = styled.div`${tw`mt-6 flow-root`}
    .wrapper {
        ${tw`-my-6 divide-y divide-gray-500/10`}
        a {${tw`-mx-3 block rounded-lg py-2 px-3 text-sm font-medium leading-7 text-gray-900 hover:bg-gray-400/10`}}
    }
`;

