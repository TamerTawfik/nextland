// twin-micro
import tw, { styled } from "twin.macro";
// react-icons
import { HiCheck } from "react-icons/hi2";
import { BackgroundContainer, Header, Container, BgContainer, PlansWrap, Grid, Card, CardPopular, } from "./threeTiersWithEmphasized.style";

const hobbyFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const scaleFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const growthFeatures = [
  'Quia rem est sed impedit magnam',
  'Dolorem vero ratione voluptates',
  'Qui sed ab doloribus voluptatem dolore',
  'Laborum commodi molestiae id et fugiat',
  'Nam ut ipsa nesciunt culpa modi dolor',
]


export default function ThreeTiersWithEmphasized() {
  return (
    <BackgroundContainer>
      <Header>
        <div tw="text-center">
          <h2> Faster Pricing</h2>
          <p className="heading">
            The right price for you, whoever you are
          </p>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus
            molestiae voluptatum.
          </p>
        </div>
      </Header>

      <Container>
        <div tw="relative z-0">
          <BgContainer />
          <PlansWrap>
            <Grid>
              <div className="column-1">
                <Card>
                  <div className="cardWrap">
                    <div className="cardHeader">
                      <div>
                        <h3 className="plan" id="tier-hobby">
                          Hobby
                        </h3>
                        <div className="priceWrap">
                          <span className="price">
                            <span className="currency">$</span>
                            <span tw="font-extrabold">79</span>
                          </span>
                          <span className="duration">/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="cardBody">
                      <ul role="list" tw="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} tw="flex items-start">
                            <div tw="flex-shrink-0">
                              <HiCheck className="checkIcon" aria-hidden="true" />
                            </div>
                            <p className="feature">{feature}</p>
                          </li>
                        ))}
                      </ul>
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
                        Growth
                      </h3>
                      <div className="priceWrap">
                        <span className="priceContainer">
                          <span className="currency">$</span>
                          <span tw="font-extrabold">149</span>
                        </span>
                        <span className="duration">/month</span>
                      </div>
                    </div>
                  </div>
                  <div className="cardBody">
                    <ul role="list" tw="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} tw="flex items-start">
                          <div tw="flex-shrink-0">
                            <HiCheck className="checkIcon" aria-hidden="true" />
                          </div>
                          <p className="feature">{feature}</p>
                        </li>
                      ))}
                    </ul>
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
                </CardPopular>
              </div>
              <div className="column-3">
                <Card>
                  <div className="cardWrap">
                    <div className="cardHeader">
                      <div>
                        <h3 className="plan" id="tier-scale">
                          Scale
                        </h3>
                        <div className="priceWrap">
                          <span className="price">
                            <span className="currency">$</span>
                            <span tw="font-extrabold">349</span>
                          </span>
                          <span className="duration">/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="cardBody">
                      <ul role="list" tw="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} tw="flex items-start">
                            <div tw="flex-shrink-0">
                              <HiCheck className="checkIcon" aria-hidden="true" />
                            </div>
                            <p className="feature">{feature}</p>
                          </li>
                        ))}
                      </ul>
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
                  </div>
                </Card>
              </div>
            </Grid>
          </PlansWrap>
        </div>
      </Container>
    </BackgroundContainer>
  )
}
