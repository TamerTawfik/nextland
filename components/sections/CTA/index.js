<<<<<<< HEAD
//Animation wrapper
import MotionWrap from "../../../helper/MotionWrap";

import { BackgroundContainer, Container, Heading, LinksContainer, PrimaryLinkWrap, PrimaryLink } from "./cta.style";

const CTA = ({
    heading = 'Start your free trial today.',
    primaryLinkText = "Get started",
    primaryLinkUrl = "#",
}) => {
=======
import { BackgroundContainer, Container, Heading, LinksContainer, PrimaryLinkWrap, PrimaryLink } from "./cta.style";

export default function CTA({
    heading = 'Start your free trial today.',
    primaryLinkText = "Get started",
    primaryLinkUrl = "#",
}) {
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
    return (
        <BackgroundContainer>
            <Container>
                <Heading>
                    {heading}
                </Heading>
                <LinksContainer>
                    <PrimaryLinkWrap>
                        <PrimaryLink href={primaryLinkUrl}>
                            {primaryLinkText}
                        </PrimaryLink>
                    </PrimaryLinkWrap>
                </LinksContainer>
            </Container>
        </BackgroundContainer>
    )
};
<<<<<<< HEAD

export default MotionWrap(CTA);
=======
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
