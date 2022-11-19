// twin-macro
import tw from 'twin.macro';

export const BackgroundContainer = tw.div`relative bg-eerie`;
export const LeftCol = tw.div`relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2`;
export const Image = tw.img`w-full h-full object-cover`;
export const BgGradient = tw.div`absolute inset-0 bg-gradient-to-r from-brand to-brand mix-blend-multiply`;
export const RightCol = tw.div`relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32`;
export const TextContainer = tw.div`md:ml-auto md:w-1/2 md:pl-10`;
export const Heading = tw.h2`text-base font-semibold uppercase tracking-wider text-gray-300`;
export const SubHeading = tw.p`mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl`;
export const Text = tw.p`mt-3 text-lg text-gray-300`;
export const LinkWrap = tw.div`mt-8`;
export const SecondaryLinkWrap = tw.div`inline-flex rounded-md shadow`;
export const SecondaryLink = tw.a`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50`;
