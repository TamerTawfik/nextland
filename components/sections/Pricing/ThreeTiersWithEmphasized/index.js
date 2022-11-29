// twin-micro
import tw, { styled } from "twin.macro";
// react-icons
import { FaCheck } from "react-icons/fa";

const hobbyFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const scaleFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const growthFeatures = [
  'Quia rem est sed impedit magnam',
  'Dolorem vero ratione voluptates',
  'Qui sed ab doloribus voluptatem dolore',
  'Laborum commodi molestiae id et fugiat',
  'Nam ut ipsa nesciunt culpa modi dolor',
]

const BackgroundContainer = tw.div`bg-background`;
const Header = styled.div`
  ${tw`pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20`}
  h2 {
    ${tw`text-lg leading-6 font-semibold text-success uppercase tracking-wider`}
  }
  .heading {
    ${tw`mt-2 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl`}
  }
  .text {
    ${tw`mt-3 max-w-4xl mx-auto text-xl text-accents_5 sm:mt-5 sm:text-2xl`}
  }
`;
const Container = tw.div`mt-16 bg-background pb-12 lg:mt-20 lg:pb-20`;
const BgContainer = tw.div`absolute inset-0 h-5/6 bg-background lg:h-2/3`;
const PlansWrap = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const Grid = styled.div`${tw`relative lg:grid lg:grid-cols-7`}
  .column-1 {
    ${tw`mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3`}
  }
  .column-2 {
    ${tw`mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4`}
  }
  .column-3 {
    ${tw`mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3`}
  }
`;
const Card = styled.div`${tw`h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg`}
  .cardWrap {
    ${tw`flex-1 flex flex-col`}
  }
  .cardHeader {
    ${tw`bg-white px-6 py-10`}
  }
  .cardBody {
    ${tw`flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10`}
  }
  .plan {
    ${tw`text-center text-2xl font-medium text-gray-900`}
  }
  .priceWrap {
    ${tw`mt-4 flex items-center justify-center`}
  }
  .price {
    ${tw`px-3 flex items-start text-6xl tracking-tight text-gray-900`}
  }
  .currency {
    ${tw`mt-2 mr-2 text-4xl font-medium`}
  }
  .duration {
    ${tw`text-xl font-medium text-gray-500`}
  }
  .checkIcon {
    ${tw`flex-shrink-0 h-6 w-6 text-green-500`}
  }
  .feature {
    ${tw`ml-3 text-base font-medium text-gray-500`}
  }
  .btn {
    ${tw`block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50`}
  }
`;
const CardPopular = styled.div`${tw`relative z-10 rounded-lg shadow-xl`}
  .borderOutline {
    ${tw`pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600`}
  }
  .badgeWrap {
    ${tw`absolute inset-x-0 top-0 transform translate-y-px`}
  }
  .badgeContainer {
    ${tw`flex justify-center transform -translate-y-1/2`}
  }
  .badge {
    ${tw`inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white`}
  }
  .cardHeader {
    ${tw`bg-white rounded-t-lg px-6 pt-12 pb-10`}
  }
  h3 {
    ${tw`text-center text-3xl font-semibold text-gray-900 sm:-mx-6`}
  }
  .priceWrap { 
    ${tw`mt-4 flex items-center justify-center`}
  }
  .priceContainer {
    ${tw`px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl`}
  }
  .currency {
    ${tw`mt-2 mr-2 text-4xl font-medium`}
  }
  .duration {
    ${tw`text-2xl font-medium text-gray-500`}
  }
  .cardBody {
    ${tw`border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10`}
  }
  .checkIcon {
    ${tw`flex-shrink-0 h-6 w-6 text-green-500`}
  }
  .feature {
    ${tw`ml-3 text-base font-medium text-gray-500`}
  }
  .btn {
    ${tw`block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700`}
  }
`;

export default function ThreeTiersWithEmphasized() {
  return (
    <BackgroundContainer>
      <Header>
        <div tw="text-center">
          <h2>Pricing</h2>
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
                              <FaCheck className="checkIcon" aria-hidden="true" />
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
                            <FaCheck className="checkIcon" aria-hidden="true" />
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
                              <FaCheck className="checkIcon" aria-hidden="true" />
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
