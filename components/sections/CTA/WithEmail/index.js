// twin-macro
import tw from 'twin.macro';
import { BackgroundContainer, Container, Heading, InputWrap, InputContainer, Input, PrimaryLink, Note } from "./withEmail.style";

export default function WithEmail({
    heading = "Join our Newsletter",
    primaryLinkUrl = "http://google.com",
    primaryLinkText = "Subscribe",
    noteText = "We respect your privacy and are committed to protecting your personal data. ",
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
                        <PrimaryLink href={primaryLinkUrl}>
                            {primaryLinkText}
                        </PrimaryLink>
                    </InputContainer>

                    <Note>
                        {noteText}
                    </Note>
                </InputWrap>
            </Container>
        </BackgroundContainer>
    )
}