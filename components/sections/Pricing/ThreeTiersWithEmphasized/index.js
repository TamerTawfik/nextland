// twin-micro
import tw from "twin.macro";
// react-icons
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { BackgroundContainer, Header, Container, PlansWrap, Grid, Card, CardPopular, } from "./threeTiersWithEmphasized.style";

const personalFeatures = ['Only 1 user seat', '5 projects', '7-day free trial of Pro Plan']
const scaleFeatures = ['All professional plan', 'Unlimited user seats included', '24/7 live support']
const professionalFeatures = [
  '5 user seats included',
  'Unlimited projects',
  'Priority email support',
  '25+ languages',
  'Access to newest features',
]


export default function ThreeTiersWithEmphasized() {
  return (
    <BackgroundContainer>
      <Header>
        <div tw="text-center">
          <h2>Pricing</h2>
          <p className="heading">
            Get started today
          </p>
          <p className="text">
            Choose which Plan suits your organization best.
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
                        <h3 className="plan" id="tier-hobby">
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
                              <HiOutlineCheckBadge className="checkIcon" aria-hidden="true" />
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
                            <HiOutlineCheckBadge className="checkIcon" aria-hidden="true" />
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
                        <h3 className="plan" id="tier-scale">
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
                        {scaleFeatures.map((feature) => (
                          <li key={feature} tw="flex items-start">
                            <div tw="flex-shrink-0">
                              <HiOutlineCheckBadge className="checkIcon" aria-hidden="true" />
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
}
