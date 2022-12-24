//twin-macro
import tw from "twin.macro";
<<<<<<< HEAD

//Animation wrapper
import MotionWrap from "../../../helper/MotionWrap";

import { BackgroundContainer, Container, Heading, LogoWrapper, Grid } from "./logoClouds.style";

const LogoClouds = ({
  heading = "TRUSTED BY LEADING ORGANIZATIONS",
}) => {
=======
import { BackgroundContainer, Container, Heading, LogoWrapper, Grid } from "./logoClouds.style";

export default function LogoClouds() {
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
  return (
    <BackgroundContainer>
      <Container>
        <Heading>
<<<<<<< HEAD
          {heading}
=======
          TRUSTED BY LEADING ORGANIZATIONS
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
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
};

export default MotionWrap(LogoClouds);
