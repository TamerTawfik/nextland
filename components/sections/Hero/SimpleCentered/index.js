import Link from 'next/link'
import tw from "twin.macro";
// import Navbar from "../../../common/Navbar/CenteredNavbar";
import { Container, HeroContainer } from "./simpleCentered.style";



export default function SimpleCentered() {

    return (
        <Container>
            {/* <Navbar /> */}
            <div tw="relative px-6 lg:px-8">
                <HeroContainer className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
                    <div>
                        <div className="wrapper">
                            <p className="gpt">GPT-3</p>
                        </div>
                        <div>
                            <h1 className="heading">
                                AI & Machine Learning Development
                            </h1>
                            <p>
                                We engineer practical data-driven algorithms to implement machine learning solutions for startups by separating the AI hype from computational realities.
                            </p>
                            <div tw="mt-8 flex gap-x-4 sm:justify-center">
                                <Link href='#' passHref legacyBehavior>
                                    <a className="getStarted">
                                        Get started
                                </a>
                                </Link>
                                <Link href='#' passHref legacyBehavior>
                                    <a className="liveDemo">
                                        Live demo
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
}
