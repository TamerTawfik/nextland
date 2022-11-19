import tw from "twin.macro";
import { FaArrowRight } from "react-icons/fa";


import { HeroContent, ContentSide, ImageSide } from "./darkWithIllustration.style";

export default function DarkWithIllustration() {
  return (
    <div className="relative overflow-hidden">
      <HeroContent>
        <div className="heroWrapper">
          <div className="grid">
            <ContentSide>
              <div tw="lg:py-24">
                <a
                  href="#"
                  className="hiringLink"
                >
                  <span className="hiring">
                    We're hiring
                    </span>
                  <span tw="ml-4 text-sm">Visit our careers page</span>
                  <FaArrowRight className="arrowIcon" aria-hidden="true" />
                </a>
                <h1 className="heading">
                  <span tw="block">A better way to</span>
                  <span className="slogn">ship web apps</span>
                </h1>
                <p className="paragraph">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat.
                  </p>
                <div tw="mt-10 sm:mt-12">
                  <form action="#">
                    <div tw="sm:flex">
                      <div tw="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                          </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Subscribe Newsletter"
                        />
                      </div>
                      <div tw="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                        >
                          Subscribe
                          </button>
                      </div>
                    </div>
                    <p tw="mt-3 text-sm text-eerie sm:mt-4">
                      Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                        our{' '}
                      <a href="#" tw="font-medium text-white">
                        terms of service
                        </a>
                        .
                      </p>
                  </form>
                </div>
              </div>
            </ContentSide>
            <ImageSide>
              <div>
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  src="./images/hero-3-img.png"
                  alt=""
                />
              </div>
            </ImageSide>
          </div>
        </div>
      </HeroContent>
    </div>
  )
}
