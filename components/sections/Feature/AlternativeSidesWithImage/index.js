// twin-micro
import tw, { styled } from "twin.macro";
// react-icons
import { FaGlobe, FaRocket, FaSatelliteDish, FaScroll, FaBalanceScale } from "react-icons/fa";
import { BackgroundContainer, Container, Heading, HeadingText, FirstContent, FirstContentList, FirstContentImage, IconWrap, SeccondContentGrid, SeconContetnList, SecondContent, SecondContentImage } from "./alternativeSidesWithImage.style";

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


export default function AlternativeSidesWithImage() {
  return (
    <BackgroundContainer>
      <Container>
        {/* <svg
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
              <rect x={0} y={0} width={4} height={4} className="text-accents_2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg> */}
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
            {/* <svg
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
                  <rect x={0} y={0} width={4} height={4} className="text-accents_2" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg> */}

            <svg className="hidden lg:block absolute left-full transform -translate-x-full translate-y-1/4 blur-3xl opacity-75" width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_17_19)">
                <g filter="url(#filter0_f_17_19)">
                  <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#AE03FF"></path>
                  <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#FF016C"></path>
                  <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#AE03FF"></path>
                  <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#EB00FF"></path>
                </g>
              </g>
              <defs>
                <filter id="filter0_f_17_19" x="-160.333" y="-160.333" width="720.666" height="720.666" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="80.1666" result="effect1_foregroundBlur_17_19"></feGaussianBlur>
                </filter>
              </defs>
            </svg>

            <img
              tw="relative mx-auto"
              width={490}
              src="./images/dashboard-dark.png"
              alt=""
            />
          </FirstContentImage>
        </FirstContent>
        {/* the second side */}
        {/* <svg
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
              <rect x={0} y={0} width={4} height={4} className="text-accents_2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg> */}

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
              {/* <svg
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
                    <rect x={0} y={0} width={4} height={4} className="text-accents_2" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg> */}
              <svg className="hidden lg:block absolute left-full transform -translate-x-full translate-y-1/4 blur-3xl opacity-75" width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_19)">
                  <g filter="url(#filter0_f_17_19)">
                    <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#AE03FF"></path>
                    <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#FF016C"></path>
                    <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#AE03FF"></path>
                    <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#EB00FF"></path>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_f_17_19" x="-160.333" y="-160.333" width="720.666" height="720.666" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur stdDeviation="80.1666" result="effect1_foregroundBlur_17_19"></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
              <img
                tw="relative mx-auto"
                width={490}
                src="./images/mobile.png"
                alt=""
              />
            </SecondContentImage>
          </SeccondContentGrid>
        </SecondContent>
      </Container>
    </BackgroundContainer>
  )
}
