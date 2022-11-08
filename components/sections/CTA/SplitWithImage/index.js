import Link from 'next/link';
// twin-macro
import { BackgroundContainer, LeftCol, Image, BgGradient, RightCol, Heading, SubHeading, LinkWrap, SecondaryLink, SecondaryLinkWrap, TextContainer, Text } from "./SplitWithImage.style";
// react-icons
import { FaExternalLinkAlt } from "react-icons/fa";


export default function SplitWithImage({
    imageUrl = "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100",
    imageAlt = "contact image",
    heading = "Award winning support",
    subHeading = "We’re here to help",
    text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
    scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
    tincidunt duis.`,
    secondaryLinkText = "Visit the help center",
    secondaryLinkUrl = "http://google.com",
}) {
    return (
        <BackgroundContainer>
            <LeftCol>
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                />
                <BgGradient
                    aria-hidden="true"
                />
            </LeftCol>
            <RightCol>
                <TextContainer>
                    <Heading>{heading}</Heading>
                    <SubHeading>{subHeading}</SubHeading>
                    <Text>
                        {text}
                    </Text>
                    <LinkWrap>
                        <SecondaryLinkWrap>

                            <SecondaryLink href={secondaryLinkUrl}>
                                {secondaryLinkText}
                                <FaExternalLinkAlt className="-mr-1 ml-3 h-5 w-5 text-gray-300" />
                            </SecondaryLink>
                        </SecondaryLinkWrap>
                    </LinkWrap>
                </TextContainer>
            </RightCol>
        </BackgroundContainer>
    )
}
