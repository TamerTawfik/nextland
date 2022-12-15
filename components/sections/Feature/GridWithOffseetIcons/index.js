// twin-macro
import tw from 'twin.macro';
import { BackgroundContainer, Container, Grid } from "./GridWithOffseetIcons.style";

const features = [
  {
    name: 'Natural Language Processing',
    description: 'services could give 80% accuracy on extraction tasks involving generic data.',
    icon: './images/ai-1.png',
  },
  {
    name: 'Pattern Recognition',
    description: ' We engage in a machine learning solution tailored to bring product features to life.',
    icon: './images/ai-2.png',
  },
  {
    name: 'Computer Vision',
    description: 'Deep learning techniques have given a fillip to computer vision processing solutions.',
    icon: './images/ai-3.png',
  },
  {
    name: 'Machine Learning',
    description: 'Building a solution involving machine learning is much more than the model.',
    icon: './images/ai-4.png',
  },
  {
    name: 'Image Processing',
    description:
      'Innovative ways to transform a problem into a generic computational problem.',
    icon: './images/ai-5.png',
  },
  {
    name: 'Mathematical Optimization',
    description: 'We strive to use these fundamental algorithms to deliver solutions to problems.',
    icon: './images/ai-6.png',
  },
]


export default function GridWithOffseetIcons() {
  return (
    <BackgroundContainer id="features">
      <Container>
        <h2>Capabilities</h2>
        <p className="heading">
          What We Have Done
        </p>
        <p className="SubHeading">
          An AI development team comprises of domain experts, data scientists, data engineers, product designers, data modelling experts.
        </p>
        <div tw="mt-12">
          <Grid>
            {features.map((feature) => (
              <div key={feature.name} tw="pt-6">
                <div className="card">
                  <div className="-mt-6">
                    <div>
                      <span>
                        <img src={feature.icon} tw="h-8 w-8 text-alert" aria-hidden="true" />
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
