//twin-macro
import tw from "twin.macro";
import { BackgroundContainer, HeaderWrap, Header, StatsWrap, Stat1, Stat2, Stat3, Stats } from "./simpleInCard.style";

export default function SimpleInCard() {
  return (
    <BackgroundContainer>
      <HeaderWrap>
        <Header>
          <h2>
            Trusted by developers from over 80 planets
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
          </p>
        </Header>
      </HeaderWrap>
      <StatsWrap>
        <div tw="relative">
          <div className="bg" />
          <div className="cardContianer">
            <div tw="max-w-4xl mx-auto">
              <Stats>
                <Stat1>
                  <dt className="label">Pepperoni</dt>
                  <dd className="value">100%</dd>
                </Stat1>
                <Stat2>
                  <dt className="label">Delivery</dt>
                  <dd className="value">24/7</dd>
                </Stat2>
                <Stat3>
                  <dt className="label">Calories</dt>
                  <dd className="value">100k</dd>
                </Stat3>
              </Stats>
            </div>
          </div>
        </div>
      </StatsWrap>
    </BackgroundContainer>
  )
}
