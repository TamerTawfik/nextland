// twin-macro
import tw from 'twin.macro';
import { BackgroundContainer, Container, Grid } from "./GridWithOffseetIcons.style";
// react-icons
import {
  FaCloudUploadAlt,
  FaCog,
  FaLock,
  FaShare,
  FaServer,
  FaShieldVirus,
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
