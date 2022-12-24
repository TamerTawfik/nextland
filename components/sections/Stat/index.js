//twin-macro
import tw from "twin.macro";
<<<<<<< HEAD
import CountUp from 'react-countup';

//Animation wrapper
import MotionWrap from "../../common/MotionWrap";

import { BackgroundContainer, StatsWrap, Stat1, Stat2, Stat3, Stats } from "./stat.style";

const Stat = ({
  state1 = { label: "Complete Project", value: "150", suffix: "K" },
  state2 = { label: "AI Experts", value: "400", suffix: "+" },
  state3 = { label: "Satisfied Clients", value: "3500", suffix: "+" },
  state4 = { label: "Industries Served", value: "50", suffix: "+" },
}) => {
=======

import { BackgroundContainer, StatsWrap, Stat1, Stat2, Stat3, Stats } from "./stat.style";

export default function Stat({
  state1 = { label: "Complete Project", value: "150k" },
  state2 = { label: "AI Experts", value: "400+" },
  state3 = { label: "Satisfied Clients", value: "3500+" },
  state4 = { label: "Industries Served", value: "50+" },
}) {
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
  return (
    <BackgroundContainer>
      <StatsWrap>
        <div className="cardContianer">
          <div tw="max-w-7xl mx-auto">
            <Stats>
              <Stat1>
                <dt className="label">{state1.label}</dt>
<<<<<<< HEAD
                <dd className="value">
                  <CountUp
                    end={state1.value}
                    duration={2.75}
                    suffix={state1.suffix}
                    enableScrollSpy
                  />
                </dd>
              </Stat1>
              <Stat2>
                <dt className="label">{state2.label}</dt>
                <dd className="value">
                  <CountUp
                    end={state2.value}
                    duration={2.75}
                    suffix={state2.suffix}
                    enableScrollSpy
                  />
                </dd>
              </Stat2>
              <Stat2>
                <dt className="label">{state3.label}</dt>
                <dd className="value">
                  <CountUp
                    end={state3.value}
                    duration={2.75}
                    suffix={state3.suffix}
                    enableScrollSpy
                  />
                </dd>
              </Stat2>
              <Stat3>
                <dt className="label">{state4.label}</dt>
                <dd className="value">
                  <CountUp
                    end={state4.value}
                    duration={2.75}
                    suffix={state4.suffix}
                    enableScrollSpy
                  />
                </dd>
=======
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
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
              </Stat3>
            </Stats>
          </div>
        </div>
      </StatsWrap>
    </BackgroundContainer>
  )
};
<<<<<<< HEAD

export default MotionWrap(Stat);
=======
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
