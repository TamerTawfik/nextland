import tw, { styled } from "twin.macro";


export const HeroContainer = tw.div`relative overflow-hidden`;
export const Nav = styled.nav`${tw`relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6`}
  .navLinksWrapper {
    ${tw`flex items-center flex-1`}
  }
  .logo {
    ${tw`flex items-center justify-between w-full md:w-auto`}
  }
  .navMenu {
    ${tw`-mr-2 flex items-center md:hidden`}
  }
  .menuButton {
    ${tw`bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
  }
  .links {
    ${tw`hidden space-x-8 md:flex md:ml-10`}
  }
  .linkItem {
    ${tw`text-base font-medium text-white hover:text-gray-300`}
  }
  .ctaWrapper {
    ${tw`hidden md:flex md:items-center md:space-x-6`}
  }
  .ctaButton {
    ${tw`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700`}
  }
`;
export const PanelMenu = styled.div`${tw`rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden`}
  .panelWrapper {
    ${tw`px-5 pt-4 flex items-center justify-between`}
  }
  .panelButton {
    ${tw`bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600`}
  }
  .linkItem {
    ${tw`block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50`}
  }
  .ctaButton {
    ${tw`block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700`}
  }
  .text {
    ${tw`text-center text-base font-medium text-gray-500`}
  }
`;
