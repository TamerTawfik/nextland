// twin-micro
import tw from "twin.macro";
<<<<<<< HEAD

//Animation wrapper
import MotionWrap from "../../common/MotionWrap";

// react-icons
import { HiOutlineCheckCircle } from "react-icons/hi2";

=======
// react-icons
import { HiOutlineCheckCircle } from "react-icons/hi2";

>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
import { BackgroundContainer, Header, Container, PlansWrap, Grid, Card, CardPopular, } from "./pricing.style";

const personalFeatures = ['Only 1 user seat', '5 projects', '7-day free trial of Pro Plan']
const enterpriseFeatures = ['All professional plan', 'Unlimited user seats included', '24/7 live support']
const professionalFeatures = [
  '5 user seats included',
  'Unlimited projects',
  'Priority email support',
  '25+ languages',
  'Access to newest features',
]


<<<<<<< HEAD
const Pricing = ({
  headingOne = "Pricing",
  headingTwo = "Get started today",
  subHeading = "Choose which Plan suits your organization best.",
}) => {
=======
export default function Pricing({
  headingOne = "Pricing",
  headingTwo = "Get started today",
  subHeading = "Choose which Plan suits your organization best.",
}) {
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
  return (
    <BackgroundContainer id="pricing">
      <Header>
        <div tw="text-center">
          <h2>{headingOne}</h2>
          <p className="heading">
            {headingTwo}
          </p>
          <p className="text">
            {subHeading}
          </p>
        </div>
      </Header>
      <Container>
        <div tw="relative z-0">
          <PlansWrap>
            <Grid>
              <div className="column-1">
                <Card>
                  <div className="cardWrap">
                    <div className="cardHeader">
                      <div>
                        <h3 className="plan">
                          Personal
                        </h3>
                        <div className="priceWrap">
                          <span className="price">
                            <span className="currency">$</span>
                            <span tw="font-extrabold">99</span>
                          </span>
                          <span className="duration">/month</span>
                        </div>
                        <div tw="mt-8">
                          <div tw="rounded-lg shadow-md">
                            <a
                              href="#"
                              className="btn"
                              aria-describedby="tier-hobby"
                            >
                              Start your trial
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cardBody">
                      <p className="text-foreground pb-4">What’s included</p>
                      <ul role="list" tw="space-y-4">
                        {personalFeatures.map((feature) => (
                          <li key={feature} tw="flex items-start">
                            <div tw="flex-shrink-0">
                              <HiOutlineCheckCircle className="checkIcon" aria-hidden="true" />
                            </div>
                            <p className="feature">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="column-2">
                <CardPopular>
                  <div
                    className="borderOutline"
                    aria-hidden="true"
                  />
                  <div className="badgeWrap">
                    <div className="badgeContainer">
                      <span className="badge">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="cardHeader">
                    <div>
                      <h3 id="tier-growth">
                        Professional
                      </h3>
                      <div className="priceWrap">
                        <span className="priceContainer">
                          <span className="currency">$</span>
                          <span tw="font-extrabold">199</span>
                        </span>
                        <span className="duration">/month</span>
                      </div>
                    </div>
                    <div tw="mt-10">
                      <div tw="rounded-lg shadow-md">
                        <a
                          href="#"
                          className="btn"
                          aria-describedby="tier-growth"
                        >
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cardBody">
                    <p className="text-foreground pb-4">What’s included</p>
                    <ul role="list" tw="space-y-4">
                      {professionalFeatures.map((feature) => (
                        <li key={feature} tw="flex items-start">
                          <div tw="flex-shrink-0">
                            <HiOutlineCheckCircle className="checkIcon" aria-hidden="true" />
                          </div>
                          <p className="feature">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardPopular>
              </div>
              <div className="column-3">
                <Card>
                  <div className="cardWrap">
                    <div className="cardHeader">
                      <div>
                        <h3 className="plan">
                          Enterprise
                        </h3>
                        <div className="priceWrap">
                          <span className="price">
                            <span className="currency">$</span>
                            <span tw="font-extrabold">399</span>
                          </span>
                          <span className="duration">/month</span>
                        </div>
                      </div>
                      <div tw="mt-8">
                        <div tw="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="btn"
                            aria-describedby="tier-scale"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="cardBody">
                      <p className="text-foreground pb-4">What’s included</p>
                      <ul role="list" tw="space-y-4">
                        {enterpriseFeatures.map((feature) => (
                          <li key={feature} tw="flex items-start">
                            <div tw="flex-shrink-0">
                              <HiOutlineCheckCircle className="checkIcon" aria-hidden="true" />
                            </div>
                            <p className="feature">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </Grid>
          </PlansWrap>
        </div >
      </Container >
    </BackgroundContainer>
  )
};
<<<<<<< HEAD

export default MotionWrap(Pricing);
=======
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
