<<<<<<< HEAD
import Link from 'next/link';

//twin-micro
import tw from "twin.macro";

//Animation wrapper
import MotionWrap from "../../../helper/MotionWrap";

import { Container, HeroContainer } from "./hero.style";


const Hero = ({
=======
import Link from 'next/link'
import tw from "twin.macro";
import { Container, HeroContainer } from "./hero.style";


export default function Hero({
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
    headingOne = "gpt-3",
    headingTwo = "AI & Machine Learning Development.",
    Text = "We engineer practical data-driven algorithms to implement machine learning solutions for startups by separating the AI hype from computational realities.",
    primaryButtonText = "Get started",
    primaryButtonkUrl = "#",
    secondaryButtonText = "Live demo",
    secondaryButtonkUrl = "#",
<<<<<<< HEAD
}) => {
=======
}) {
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1

    return (
        <Container>
            <div tw="px-14">
                <HeroContainer className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
                    <div>
                        <div className="mb-4">
                            <p className="gpt">{headingOne}</p>
                        </div>
                        <div>
                            <h1 className="heading">
                                {headingTwo}
                            </h1>
                            <p>
                                {Text}
                            </p>
                            <div tw="mt-8 flex gap-x-4 sm:justify-center">
                                <Link href={primaryButtonkUrl} passHref legacyBehavior>
                                    <a className="getStarted">
                                        {primaryButtonText}
                                    </a>
                                </Link>
                                <Link href={secondaryButtonkUrl} passHref legacyBehavior>
                                    <a className="liveDemo">
                                        {secondaryButtonText}
                                        <span tw="ml-1" aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </HeroContainer>
            </div>
        </Container>
    )
};
<<<<<<< HEAD

export default MotionWrap(Hero);
=======
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
