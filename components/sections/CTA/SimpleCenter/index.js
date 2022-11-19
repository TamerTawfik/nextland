import Link from 'next/link';
// twin-macro
import tw, { styled } from 'twin.macro';

const BackgroundContainer = tw.div`bg-brand`;
const Container = tw.div`max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8`;
const Heading = styled.h2`${tw`text-3xl font-extrabold text-white sm:text-4xl`}
span {
    ${tw`block`}
}`;
const SubHeading = tw.p`mt-4 text-lg leading-6 text-gray-50`;
const PrimaryLink = tw.a`mt-8 mx-2 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-eerie bg-white hover:bg-gray-100 sm:w-auto`;

export default function SimpleCenter({
    HeadingOne = "Boost your productivity.",
    HeadingTwo = "Start using Workflow today.",
    subHeading = "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.",
    primaryLinkText = "Sign up for free",
    primaryLinkUrl = "http://google.com",
}) {
    return (
        <BackgroundContainer>
            <Container>
                <Heading>
                    <span >{HeadingOne}</span>
                    <span >{HeadingTwo}</span>
                </Heading>
                <SubHeading>
                    {subHeading}
                </SubHeading>
                <Link href={primaryLinkUrl} passHref>
                    <PrimaryLink>
                        {primaryLinkText}
                    </PrimaryLink>
                </Link>
                <Link href={primaryLinkUrl} passHref>
                    <PrimaryLink>
                        {primaryLinkText}
                    </PrimaryLink>
                </Link>
            </Container>
        </BackgroundContainer>
    )
}
