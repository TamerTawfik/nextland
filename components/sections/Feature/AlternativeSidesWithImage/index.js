// twin-micro
import tw, { styled } from "twin.macro";
// react-icons
import { FaGlobe, FaRocket, FaSatelliteDish, FaScroll, FaBalanceScale } from "react-icons/fa";

const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FaGlobe,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FaRocket,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FaSatelliteDish,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FaScroll,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FaBalanceScale,
  },
]

const BackgroundContainer = tw.div`py-16 bg-lotion overflow-hidden lg:py-24`;
const Container = tw.div`relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl`;
const Heading = tw.h2`text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl`;
const HeadingText = tw.p`mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500`;
const FirstContent = styled.div`${tw`relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center`}
  h3 {
    ${tw`text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl`}
  }
  p {
    ${tw`mt-3 text-lg text-gray-500`}
  }
`;
const FirstContentList = styled.dl`${tw`mt-10 space-y-10`}
  p {
    ${tw`ml-16 text-lg leading-6 font-medium text-gray-900`}
  }
  dd {
    ${tw`mt-2 ml-16 text-base text-gray-500`}
  }
`;
const IconWrap = tw.div`absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand text-white`;
const FirstContentImage = tw.div`mt-10 -mx-4 relative lg:mt-0`;
const SecondContent = styled.div`${tw`relative mt-12 sm:mt-16 lg:mt-24`}
  h3 {
    ${tw`text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl`}
  }
  p {
    ${tw`mt-3 text-lg text-gray-500`}
  }
`;
const SeccondContentGrid = tw.div`lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center`;
const SeconContetnList = styled.dl`${tw`mt-10 space-y-10`}
  p {
    ${tw`ml-16 text-lg leading-6 font-medium text-gray-900`}
  }
  dd {
    ${tw`mt-2 ml-16 text-base text-gray-500`}
  }
`;
const SecondContentImage = tw.div`mt-10 -mx-4 relative lg:mt-0 lg:col-start-1`;

export default function AlternativeSidesWithImage() {
  return (
    <BackgroundContainer>
      <Container>
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>
        {/* the Heading Wrap */}
        <div tw="relative">
          <Heading>
            A better way to send money
          </Heading>
          <HeadingText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in,
            accusamus quisquam.
          </HeadingText>
        </div>
        {/* the first side */}
        <FirstContent>
          <div tw="relative">
            <h3>
              Transfer funds world-wide
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
              officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
              Totam, velit.
            </p>

            <FirstContentList>
              {transferFeatures.map((item) => (
                <div key={item.id} tw="relative">
                  <dt>
                    <IconWrap>
                      <item.icon tw="h-6 w-6" aria-hidden="true" />
                    </IconWrap>
                    <p>{item.name}</p>
                  </dt>
                  <dd>{item.description}</dd>
                </div>
              ))}
            </FirstContentList>
          </div>

          <FirstContentImage aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              tw="relative mx-auto"
              width={490}
              src="https://tailwindui.com/img/features/feature-example-1.png"
              alt=""
            />
          </FirstContentImage>
        </FirstContent>
        {/* the second side */}
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <SecondContent>
          <SeccondContentGrid>
            <div tw="lg:col-start-2">
              <h3>Always in the loop</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus,
                cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
              </p>

              <SeconContetnList>
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <IconWrap>
                        <item.icon tw="h-6 w-6" aria-hidden="true" />
                      </IconWrap>
                      <p>{item.name}</p>
                    </dt>
                    <dd>{item.description}</dd>
                  </div>
                ))}
              </SeconContetnList>
            </div>

            <SecondContentImage>
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                tw="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-2.png"
                alt=""
              />
            </SecondContentImage>
          </SeccondContentGrid>
        </SecondContent>
      </Container>
    </BackgroundContainer>
  )
}
