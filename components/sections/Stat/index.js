//twin-macro
import tw from "twin.macro";
import CountUp from 'react-countup';

//Animation wrapper
import MotionWrap from "../../../helper/MotionWrap";
import { BackgroundContainer, StatsWrap, Stat1, Stat2, Stat3, Stats } from "./stat.style";

const Stat = ({
  state1 = { label: "Complete Project", value: "150" },
  state2 = { label: "AI Experts", value: "400" },
  state3 = { label: "Satisfied Clients", value: "3500" },
  state4 = { label: "Industries Served", value: "50" },
}) => {
  return (
    <BackgroundContainer>
      <StatsWrap>
        <div className="cardContianer">
          <div tw="max-w-7xl mx-auto">
            <Stats>
              <Stat1>
                <dt className="label">{state1.label}</dt>
                <dd className="value">
                  <CountUp
                    end={state1.value}
                    duration={2.75}
                    suffix=" K"
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
                    suffix="+"
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
                    suffix="+"
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
                    suffix="+"
                    enableScrollSpy
                  />
                </dd>
              </Stat3>
            </Stats>
          </div>
        </div>
      </StatsWrap>
    </BackgroundContainer>
  )
};

export default MotionWrap(Stat);
