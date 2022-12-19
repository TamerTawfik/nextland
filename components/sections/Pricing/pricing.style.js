// twin-micro
import tw, { styled } from "twin.macro";

export const BackgroundContainer = tw.section`bg-background`;

export const Header = styled.div`
  ${tw`pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20`}

  h2 {
    ${tw`text-xl  tracking-wider  uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#09662b] to-green`}
  }

  .heading {
    ${tw`my-2 md:my-4 text-2xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 tracking-tight sm:text-4xl`}
  }

  .text {
    ${tw`max-w-prose mx-auto text-xl text-secondary leading-8`}
  }
`;

export const Container = tw.div`mt-16 bg-background pb-12 lg:mt-20 lg:pb-20`;

export const PlansWrap = tw.div`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`;

export const Grid = styled.div`
  ${tw`relative lg:grid lg:grid-cols-7`}

  .column-1 {
    ${tw`mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3`}
  }

  .column-2 {
    ${tw`mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4`}
  }

  .column-3 {
    ${tw`mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3`}
  }
`;

export const Card = styled.div`
  ${tw`h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg border border-accents_2`}

  .cardWrap {
    ${tw`flex-1 flex flex-col`}
  }

  .cardHeader {
    ${tw`bg-accents_1 px-6 py-10`}
  }

  .cardBody {
    ${tw`flex-1 flex flex-col justify-between  p-6 bg-accents_1 sm:p-10 lg:p-6 xl:p-10`}
  }

  .plan {
    ${tw`text-center text-xl font-medium bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6`}
  }

  .priceWrap {
    ${tw`mt-4 flex items-center justify-center`}
  }

  .price {
    ${tw`px-3 flex items-start text-4xl tracking-tight text-green`}
  }

  .currency {
    ${tw`mt-2 mr-2 text-2xl font-medium`}
  }

  .duration {
    ${tw`text-xl font-medium text-accents_6`}
  }

  .checkIcon {
    ${tw`flex-shrink-0 h-6 w-6 text-green`}
  }

  .feature {
    ${tw`ml-3 text-base font-medium text-accents_6`}
  }

  .btn {
    ${tw`block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-accents_1 hover:text-foreground hover:bg-background hover:border border-foreground`}
  }
`;

export const CardPopular = styled.div`
  ${tw`relative z-10 rounded-lg shadow-xl`}

  .borderOutline {
    ${tw`pointer-events-none absolute -inset-0 rounded-lg border border-green`}
  }

  .badgeWrap {
    ${tw`absolute inset-x-0 top-0 transform translate-y-px`}
  }

  .badgeContainer {
    ${tw`flex justify-center transform -translate-y-1/2`}
  }

  .badge {
    ${tw`inline-flex rounded-full bg-gradient-to-r from-green to-[#09662b] px-4 py-2 text-sm font-medium tracking-wider uppercase text-accents_7`}
  }

  .cardHeader {
    ${tw`bg-accents_1 rounded-t-lg px-6 pt-12 pb-10`}
  }

  h3 {
    ${tw`text-center text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 sm:-mx-6`}
  }

  .priceWrap { 
    ${tw`mt-4 flex items-center justify-center`}
  }

  .priceContainer {
    ${tw`px-3 flex items-start text-4xl tracking-tight text-green sm:text-5xl`}
  }

  .currency {
    ${tw`mt-2 mr-2 text-3xl font-medium`}
  }

  .duration {
    ${tw`text-2xl font-medium text-accents_6`}
  }

  .cardBody {
    ${tw`rounded-b-lg pt-10 pb-8 px-6 bg-accents_1 sm:px-10 sm:py-10`}
  }

  .checkIcon {
    ${tw`flex-shrink-0 h-6 w-6 text-green`}
  }

  .feature {
    ${tw`ml-3 text-base font-medium text-accents_6`}
  }

  .btn {
    ${tw`block w-full text-center rounded-lg px-6 py-4 text-xl leading-6 font-medium text-green bg-background border border-green hover:bg-green hover:text-accents_7`}
  }
`;
