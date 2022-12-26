import tw, { styled } from "twin.macro";

export const NavContainer = tw.div`sticky top-0 z-20 bg-background px-6 py-4 lg:px-8  mx-auto`;

export const Logo = tw.div`flex lg:min-w-0 lg:flex-auto mt-2`;

export const Nav = tw.div`flex h-9 items-center justify-between bg-transparent`;

export const DialogButton = tw.div`flex lg:hidden`;

export const NavLinks = styled.div`
    ${tw`hidden lg:flex lg:min-w-0 lg:flex-auto lg:justify-center lg:gap-x-8`}
    a {${tw`font-normal text-sm text-secondary tracking-wider  hover:text-foreground`}}
`;

export const NavButton = styled.div`
    ${tw`hidden lg:flex lg:min-w-0 lg:flex-auto lg:justify-end`}
    .login {
        ${tw`mx-4 mt-2 inline-block  font-medium text-sm text-secondary hover:text-foreground`}
    }
    .CTA {
        ${tw`inline-block rounded-lg px-3 py-1.5 text-sm font-medium leading-6 bg-foreground text-background shadow-sm ring-1 hover:ring-foreground hover:bg-background hover:text-foreground`}
    }
`;

export const MobileNav = styled.div`
    ${tw`mt-6 flow-root`}
    .wrapper {
        ${tw`-my-6 divide-y divide-accents_2`}
        a {${tw`-mx-3 block rounded-lg py-2 px-3 text-sm font-medium leading-7 text-foreground hover:bg-accents_1`}}
    }
`;