// twin-macro
import tw from 'twin.macro';

//Animation wrapper
import MotionWrap from "../../../helper/MotionWrap";

import { BackgroundContainer, Container, Grid } from "./solution.style";

const solutions = [
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


const Solution = ({
  headingOne = "Capabilities",
  headignTwo = "What We Have Done",
  subHeading = "An AI development team comprises of domain experts, data scientists, data engineers, product designers, data modelling experts.",
}) => {
  return (
    <BackgroundContainer id="solutions">
      <Container>
        <h2>{headingOne}</h2>
        <p className="heading">
          {headignTwo}
        </p>
        <p className="SubHeading">
          {subHeading}
        </p>
        <div tw="mt-12">
          <Grid>
            {solutions.map((solution) => (
              <div key={solution.name} tw="pt-6">
                <div className="card">
                  <div className="-mt-6">
                    <div>
                      <span>
                        <img src={solution.icon} tw="h-8 w-8 text-alert" aria-hidden="true" />
                      </span>
                    </div>
                    <h3>{solution.name}</h3>
                    <p>
                      {solution.description}
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
};

export default MotionWrap(Solution);
