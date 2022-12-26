//Animation wrapper
import MotionWrap from "../../common/MotionWrap";

import { BackgroundContainer, Container, Heading, LinksContainer, PrimaryLinkWrap, PrimaryLink } from "./cta.style";

const CTA = ({
    heading = 'Start your free trial today.',
    primaryLinkText = "Get started",
    primaryLinkUrl = "#",
}) => {
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

export default MotionWrap(CTA);
