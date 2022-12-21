// twin-macro
import tw from 'twin.macro';

export const BackgroundContainer = tw.section`bg-background pb-12 px-4`;

export const Container = tw.div`max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between bg-gradient-to-r from-background to-background rounded-lg border border-green rounded-3xl`;

export const Heading = tw.h2`text-3xl font-extrabold tracking-tight sm:text-4xl block bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6`;

export const LinksContainer = tw.div`mt-8 flex lg:mt-0 lg:flex-shrink-0`;
export const PrimaryLinkWrap = tw.div`inline-flex rounded-md shadow`;

export const PrimaryLink = tw.a`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-accents_7 bg-gradient-to-r from-green to-[#09662b] hover:border border-green hover:text-background`;
