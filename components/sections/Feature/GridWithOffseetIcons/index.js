// twin-macro
import tw, { styled } from 'twin.macro';
// react-icons
import {
  FaCloudUploadAlt,
  FaCog,
  FaLock,
  FaAlignJustify,
  FaShare,
  FaServer,
  FaShieldVirus,
  FaNotEqual,
} from "react-icons/fa";

const features = [
  {
    name: 'Push to Deploy',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: FaCloudUploadAlt,
  },
  {
    name: 'SSL Certificates',
    description: 'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: FaLock,
  },
  {
    name: 'Simple Queues',
    description: 'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: FaShare,
  },
  {
    name: 'Advanced Security',
    description: 'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
    icon: FaShieldVirus,
  },
  {
    name: 'Powerful API',
    description:
      'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
    icon: FaCog,
  },
  {
    name: 'Database Backups',
    description: 'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
    icon: FaServer,
  },
]

const BackgroundContainer = tw.div`relative bg-white py-16 sm:py-24 lg:py-32`;
const Container = styled.div`${tw`mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl`}
  h2 {
    ${tw`text-base font-semibold tracking-wider text-cyan-600 uppercase`}
  }
  .heading {
    ${tw`mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl`}
  }
  .SubHeading {
    ${tw`mt-5 max-w-prose mx-auto text-xl text-gray-500`}
  }
`;
const Grid = styled.div`${tw`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3`}
  .card {
    ${tw`flow-root bg-gray-50 rounded-lg px-6 pb-8`}
  }
  span {
    ${tw`inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg`}
  }
  h3 {
    ${tw`mt-8 text-lg font-medium text-gray-900 tracking-tight`}
  }
  p {
    ${tw`mt-5 text-base text-gray-500`}
  }
`;

export default function GridWithOffseetIcons() {
  return (
    <BackgroundContainer>
      <Container>
        <h2>Deploy faster</h2>
        <p className="heading">
          Everything you need to deploy your app
        </p>
        <p className="SubHeading">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div tw="mt-12">
          <Grid>
            {features.map((feature) => (
              <div key={feature.name} tw="pt-6">
                <div className="card">
                  <div className="-mt-6">
                    <div>
                      <span>
                        <feature.icon tw="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3>{feature.name}</h3>
                    <p>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </BackgroundContainer>
  )
}
