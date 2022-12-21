//Animation wrapper
import MotionWrap from "../../../helper/MotionWrap";

import { BackgroundContainer, Container, Heading, InputWrap, InputContainer, Input, PrimaryLink, Note } from "./newsletter.style";

const Newsletter = ({
    heading = "Join our Newsletter and get updated.",
    primaryLinkText = "Subscribe",
    primaryLinkUrl = "#",
    noteText = "We respect your privacy and are committed to protecting your personal data. ",
}) => {
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
};

export default MotionWrap(Newsletter);