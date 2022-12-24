// twin-macro
import tw, { styled } from 'twin.macro';

//headlessui/react
import { Disclosure } from '@headlessui/react';

//Animation wrapper
import MotionWrap from "../../common/MotionWrap";

//react-icons
import { HiChevronDown } from "react-icons/hi2";

import { BackgroundContainer, Container, Heading, List } from "./faq.style";

const faqs = [
  {
    question: "What is AI?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus libero et nulla pharetra, et tempus turpis dapibus. Aenean elementum quam vel ligula dictum, vel gravida tellus blandit. Sed ac dictum nibh, et convallis mauris. Cras nisi nisl, porttitor sed commodo nec, euismod eget magna. Suspendisse potenti.",
  },
  {
    question: "What an AI development team looks like?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus libero et nulla pharetra, et tempus turpis dapibus. Aenean elementum quam vel ligula dictum, vel gravida tellus blandit. Sed ac dictum nibh, et convallis mauris. Cras nisi nisl, porttitor sed commodo nec, euismod eget magna. Suspendisse potenti.",
  },
  {
    question: "What are the top AI technologies in demand?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus libero et nulla pharetra, et tempus turpis dapibus. Aenean elementum quam vel ligula dictum, vel gravida tellus blandit. Sed ac dictum nibh, et convallis mauris. Cras nisi nisl, porttitor sed commodo nec, euismod eget magna. Suspendisse potenti.",
  },
  {
    question: "What are the steps involved in an Artificial Intelligence development project?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus libero et nulla pharetra, et tempus turpis dapibus. Aenean elementum quam vel ligula dictum, vel gravida tellus blandit. Sed ac dictum nibh, et convallis mauris. Cras nisi nisl, porttitor sed commodo nec, euismod eget magna. Suspendisse potenti.",
  },
  {
    question: "What are the common mistakes to avoid while developing AI solutions?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus libero et nulla pharetra, et tempus turpis dapibus. Aenean elementum quam vel ligula dictum, vel gravida tellus blandit. Sed ac dictum nibh, et convallis mauris. Cras nisi nisl, porttitor sed commodo nec, euismod eget magna. Suspendisse potenti.",
  },
  // More questions...
]

// Add classes based on Boolean for the Disclosure component
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const FAQ = () => {
  return (
    <BackgroundContainer id="faq">
      <Container>
        <div className="divider">
          <Heading>Frequently asked questions</Heading>
          <List>
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} tw="pt-6">
                {({ open }) => (
                  <>
                    <dt tw="text-lg">
                      <Disclosure.Button className="arrow">
                        <span className="question">{faq.question}</span>
                        <span>
                          <HiChevronDown
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" tw="mt-2 pr-12">
                      <p>{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </List>
        </div>
      </Container>
    </BackgroundContainer>
  )
};

export default MotionWrap(FAQ);