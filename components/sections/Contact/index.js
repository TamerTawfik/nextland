// twin-macro
import tw, { styled } from "twin.macro";

// hero-icons
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

<<<<<<< HEAD
//Animation wrapper
import MotionWrap from "../../../helper/MotionWrap";

import { BackgroundContainer, Grid, Column1, Column2 } from "./contact.style";


const Contact = ({
=======
import { BackgroundContainer, Grid, Column1, Column2 } from "./contact.style";


export default function Contact({
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
  heading = "Get in touch",
  text = "Need to get in touch with us? Either fill out the form with your inquiry or find the phone, email you'd like to contact below.",
  street = "221B Baker Street",
  country = "London, England",
  phone = "+2 (333) 123-4567",
  email = "support@example.com",
<<<<<<< HEAD
}) => {
=======
}) {
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
  return (
    <BackgroundContainer id="contact">
      <div tw="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-background" />
      </div>
      <Grid>
        {/* Contact Info */}
        <Column1>
          <div tw="max-w-lg mx-auto">
            <h2>{heading}</h2>
            <p className="text">
              {text}
            </p>
            <dl tw="mt-8 text-sm text-foreground">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>{street}</p>
                  <p>{country}</p>
                </dd>
              </div>
              <div tw="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <HiOutlinePhone className="icon" aria-hidden="true" />
                  <span tw="ml-3">{phone}</span>
                </dd>
              </div>
              <div tw="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <HiOutlineEnvelope className="icon" aria-hidden="true" />
                  <span tw="ml-3">{email}</span>
                </dd>
              </div>
            </dl>
            <p className="careers">
              Looking for careers?{' '}
              <a href="#" className="link">
                View all job openings.
              </a>
            </p>
          </div>
        </Column1>
        {/* Contact Form */}
        <Column2>
          <div tw="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Column2>
      </Grid>
    </BackgroundContainer>
  )
};
<<<<<<< HEAD

export default MotionWrap(Contact);
=======
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
