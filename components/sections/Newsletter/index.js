<<<<<<< HEAD
//Animation wrapper
import MotionWrap from "../../../helper/MotionWrap";

import { BackgroundContainer, Container, Heading, InputWrap, InputContainer, Input, PrimaryLink, Note } from "./newsletter.style";

const Newsletter = ({
=======
import { BackgroundContainer, Container, Heading, InputWrap, InputContainer, Input, PrimaryLink, Note } from "./newsletter.style";

export default function Newsletter({
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
    heading = "Join our Newsletter and get updated.",
    primaryLinkText = "Subscribe",
    primaryLinkUrl = "#",
    noteText = "We respect your privacy and are committed to protecting your personal data. ",
<<<<<<< HEAD
}) => {
=======
}) {
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
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
<<<<<<< HEAD
};

export default MotionWrap(Newsletter);
=======
};
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
