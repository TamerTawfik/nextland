//twin-macro
import tw from "twin.macro";
import { BackgroundContainer, StatsWrap, Stat1, Stat2, Stat3, Stats } from "./simpleInCard.style";

export default function SimpleInCard() {
  return (
    <BackgroundContainer>
      <StatsWrap>
        <div tw="relative">
          <div className="bg" />
          <div className="cardContianer">
            <div tw="max-w-7xl mx-auto">
              <Stats>
                <Stat1>
                  <dt className="label">Complete Project</dt>
                  <dd className="value">150k</dd>
                </Stat1>
                <Stat2>
                  <dt className="label">AI Experts</dt>
                  <dd className="value">400+</dd>
                </Stat2>
                <Stat2>
                  <dt className="label">Satisfied Clients</dt>
                  <dd className="value">3500+</dd>
                </Stat2>
                <Stat3>
                  <dt className="label">Industries Served</dt>
                  <dd className="value">50+</dd>
                </Stat3>
              </Stats>
            </div>
          </div>
        </div>
      </StatsWrap>
    </BackgroundContainer>
  )
}
