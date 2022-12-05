// twin-macro
import tw from 'twin.macro';

export const BackgroundContainer = tw.div`bg-background mt-12`;
export const Container = tw.div`container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between`;
export const Heading = tw.h2`text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6 xl:text-4xl`;
export const InputWrap = tw.div`mt-8 lg:mt-0`;
export const InputContainer = tw.div`flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2`;
export const Input = tw.input`px-4 py-2 text-accents_6 bg-accents_1 border border-accents_6 rounded-md sm:mx-2  focus:border-foreground focus:ring-accents_7 focus:outline-none focus:ring focus:ring-opacity-40`;
export const PrimaryLink = tw.a`inline-flex items-center justify-center px-4 py-2 border border-foreground text-base font-medium rounded-md text-background hover:text-foreground bg-foreground hover:bg-background`;
export const Note = tw.p`mt-3 text-sm text-[#fc6d26]`;
