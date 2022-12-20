//twin-macro
import tw from "twin.macro";

import { BackgroundContainer, StatsWrap, Stat1, Stat2, Stat3, Stats } from "./stat.style";

export default function Stat({
  state1 = { label: "Complete Project", value: "150k" },
  state2 = { label: "AI Experts", value: "400+" },
  state3 = { label: "Satisfied Clients", value: "3500+" },
  state4 = { label: "Industries Served", value: "50+" },
}) {
  return (
    <BackgroundContainer>
      <StatsWrap>
        <div className="cardContianer">
          <div tw="max-w-7xl mx-auto">
            <Stats>
              <Stat1>
                <dt className="label">{state1.label}</dt>
                <dd className="value">{state1.value}</dd>
              </Stat1>
              <Stat2>
                <dt className="label">{state2.label}</dt>
                <dd className="value">{state2.value}</dd>
              </Stat2>
              <Stat2>
                <dt className="label">{state3.label}</dt>
                <dd className="value">{state3.value}</dd>
              </Stat2>
              <Stat3>
                <dt className="label">{state4.label}</dt>
                <dd className="value">{state4.value}</dd>
              </Stat3>
            </Stats>
          </div>
        </div>
      </StatsWrap>
    </BackgroundContainer>
  )
};
