import Link from 'next/link';
// twin-macro
import tw from 'twin.macro';

const PrimaryBackgroundContainer = tw.div`bg-background pb-12`;
const Container = tw.div`max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between bg-gradient-to-r from-background to-background rounded-lg border border-green rounded-3xl`;
const Heading = tw.h2`text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl`;
const SubHeadingOne = tw.span`block`;
const SubHeadingTwo = tw.span`block bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6`;
const LinksContainer = tw.div`mt-8 flex lg:mt-0 lg:flex-shrink-0`;
const PrimaryLinkWrap = tw.div`inline-flex rounded-md shadow`;
const PrimaryLink = tw.a`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-accents_7 bg-gradient-to-r from-green to-[#09662b] hover:border border-green hover:text-background`;
const SecondaryLinkWrap = tw.div`ml-3 inline-flex rounded-md shadow`;
const SecondaryLink = tw.a`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50`;

export default function Simple({
    subheadingOne = 'Ready to dive in?',
    subheadingTwo = 'Start your free trial today.',
    primaryLinkText = "Get started",
    primaryLinkUrl = "http://google.com",
    secondaryLinkText = "Learn more",
    secondaryLinkUrl = "http://google.com",
}) {
    return (
        <PrimaryBackgroundContainer>
            <Container>
                <Heading>
                    {/* <SubHeadingOne>{subheadingOne}</SubHeadingOne> */}
                    <SubHeadingTwo>{subheadingTwo}</SubHeadingTwo>
                </Heading>
                <LinksContainer>
                    <PrimaryLinkWrap>
                        <PrimaryLink href={primaryLinkUrl}>
                            {primaryLinkText}
                        </PrimaryLink>
                    </PrimaryLinkWrap>
                    {/* <SecondaryLinkWrap>
                        <Link href={secondaryLinkUrl} passHref>
                            <SecondaryLink>
                                {secondaryLinkText}
                            </SecondaryLink>
                        </Link>
                    </SecondaryLinkWrap> */}
                </LinksContainer>
            </Container>
        </PrimaryBackgroundContainer>

    )
}
