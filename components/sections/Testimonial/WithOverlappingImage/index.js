//twin-macro
import tw from "twin.macro";
import { BackgroundContainer, TestimonialBg, Grid, ImageContainer, Testimonial } from "./WithOverlappingImage.style";

export default function WithOverlappingImage() {
  return (
    <BackgroundContainer>
      <TestimonialBg>
        <Grid>
          <ImageContainer>
            <div aria-hidden="true" className="imageCenter" />
            <div className="imageWrapper">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                />
              </div>
            </div>
          </ImageContainer>
          <Testimonial>
            <div className="testimonialWrapper">
              <blockquote>
                <div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet
                    feugiat est integer dolor auctor adipiscing nunc urna, sit.
                  </p>
                </div>
                <footer tw="mt-6">
                  <p className="name">Judith Black</p>
                  <p className="company">CEO at PureInsights</p>
                </footer>
              </blockquote>
            </div>
          </Testimonial>
        </Grid>
      </TestimonialBg>
    </BackgroundContainer>
  )
}
