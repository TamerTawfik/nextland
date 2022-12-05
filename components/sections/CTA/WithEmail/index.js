import Link from 'next/link';
// twin-macro
import tw from 'twin.macro';
import { BackgroundContainer, Container, Heading, InputWrap, InputContainer, Input, PrimaryLink, Note } from "./withEmail.style";

export default function WithEmail({
    heading = "Join our Newsletter and get the update",
    primaryLinkUrl = "http://google.com",
    primaryLinkText = "Subscribe",
    noteText = "Attention! Offer expires in 30 days. Make sure not to miss this opportunity",
}) {
    return (
        <BackgroundContainer>
            <Container>
                <Heading>
                    {heading}
                </Heading>

                <InputWrap>
                    <InputContainer>
                        <Input id="email" type="text" placeholder="Email Address" />
                        <Link href={primaryLinkUrl} passHref>
                            <PrimaryLink>
                                {primaryLinkText}
                            </PrimaryLink>
                        </Link>
                    </InputContainer>

                    <Note>
                        {noteText}
                    </Note>
                </InputWrap>
            </Container>
        </BackgroundContainer>
    )
}