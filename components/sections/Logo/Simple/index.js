//twin-macro
import tw from "twin.macro";
import { BackgroundContainer, Container, Heading, LogoWrapper, Grid } from "./simple.style";

export default function Simple() {
  return (
    <BackgroundContainer>
      <Container>
        <Heading>
          Trusted by the best teams at
        </Heading>
        <LogoWrapper>
          <Grid>
            <div tw="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src="./images/google.svg" alt="Google" />
            </div>
            <div tw="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src="./images/microsoft.svg" alt="Microsoft" />
            </div>
            <div tw="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src="./images/paypal.svg" alt="Paypal" />
            </div>
            <div tw="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img src="./images/airbnb.svg" alt="Airbnb" />
            </div>
            <div tw="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img src="./images/shopify.svg" alt="Shopify" />
            </div>
          </Grid>
        </LogoWrapper>
      </Container>
    </BackgroundContainer>
  )
}
