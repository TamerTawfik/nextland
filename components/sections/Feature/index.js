// twin-micro
import tw, { styled } from "twin.macro";
// react-icons
import { HiArrowPath, HiOutlinePencilSquare, HiOutlineCpuChip, HiOutlineCursorArrowRipple, HiOutlineFire } from "react-icons/hi2";

import { BackgroundContainer, Container, Heading, SubHeading, FirstContent, FirstContentList, FirstContentImage, IconWrap, SeccondContentGrid, SeconContetnList, SecondContent, SecondContentImage } from "./feature.style";

const firstFeatures = [
  {
    id: 1,
    name: 'Annotate',
    description:
      'Rely on machine learning forautomatically identifies and labels objects in images, videos, and text.',
    icon: HiArrowPath,
  },
  {
    id: 2,
    name: 'Manage',
    description:
      'AIOps accelerates digital transformation by providing better endpoint management, smarter help desk tools, efficient infrastructure monitoring.',
    icon: HiOutlinePencilSquare,
  },
  {
    id: 3,
    name: 'Automate',
    description:
      'Combination of Robotic Process Automation (RPA) and artificial intelligence (AI) technologies.',
    icon: HiOutlineCpuChip,
  },
]
const secondFeatures = [
  {
    id: 1,
    name: 'Evaluate',
    description:
      'Understanding the reliability of any AI model, based on outputs by feeding the test dataset into the model and comparing it with actual answers.',
    icon: HiOutlineCursorArrowRipple,
  },
  {
    id: 2,
    name: 'Generate',
    description:
      'The AI generator is a tool is based on a deep learning algorithm that has been trained on a large dataset.',
    icon: HiOutlineFire,
  },
]


export default function AlternativeSidesWithImage({
  heading = "Democratize AI",
  subHeading = "Our comprehensive automated machine learning (autoML) capabilities transform how AI is created and consumed.",
}) {
  return (
    <BackgroundContainer id="features">
      <Container>
        {/* the Heading Wrap */}
        <div tw="relative">
          <Heading>
            {heading}
          </Heading>
          <SubHeading>
            {subHeading}
          </SubHeading>
        </div>
        {/* the first section */}
        <FirstContent>
          <div tw="relative">
            <FirstContentList>
              {firstFeatures.map((item) => (
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
            {/* Gradient Background */}
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
        {/* the second section */}
        <SecondContent>
          <SeccondContentGrid>
            <div tw="lg:col-start-2">
              <SeconContetnList>
                {secondFeatures.map((item) => (
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
              {/* Gradient Background */}
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
};
