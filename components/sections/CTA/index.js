import { BackgroundContainer, Container, Heading, LinksContainer, PrimaryLinkWrap, PrimaryLink } from "./cta.style";

export default function CTA({
    heading = 'Start your free trial today.',
    primaryLinkText = "Get started",
    primaryLinkUrl = "#",
}) {
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
