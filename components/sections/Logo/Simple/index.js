//twin-macro
import tw from "twin.macro";
import { BackgroundContainer, Container, Heading, LogoWrapper, Grid } from "./simple.style";

export default function Simple() {
  return (
    <BackgroundContainer>
      <Container>
        <Heading>
          TRUSTED BY LEADING ORGANIZATIONS
        </Heading>
        <LogoWrapper>
          <Grid>
            <div className="col">
              <img src="./images/google.svg" alt="Google" />
            </div>
            <div className="col">
              <img src="./images/microsoft.svg" alt="Microsoft" />
            </div>
            <div className="col">
              <img src="./images/paypal.svg" alt="Paypal" />
            </div>
            <div className="col">
              <img src="./images/square.svg" alt="Square" />
            </div>
            <div className="col">
              <img src="./images/airbnb.svg" alt="Airbnb" />
            </div>
            <div className="col">
              <img src="./images/shopify.svg" alt="Shopify" />
            </div>
          </Grid>
        </LogoWrapper>
      </Container>
    </BackgroundContainer>
  )
}
