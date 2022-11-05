import { BackgroundContainer, Container, ImageWrap } from "./WithLargeScreenshot,style";

export default function WithLargeScreenshot() {
  return (
    <BackgroundContainer>
      <Container>
        <div>
          <h2>Serverless</h2>
          <p className="heading">
            No server? No problem.
          </p>
          <p>
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>
        <ImageWrap>
          <img
            src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
            alt=""
          />
        </ImageWrap>
      </Container>
    </BackgroundContainer>
  )
}
