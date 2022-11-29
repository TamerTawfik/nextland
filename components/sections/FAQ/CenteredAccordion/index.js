// twin-macro
import tw, { styled } from 'twin.macro';
//headlessui/react
import { Disclosure } from '@headlessui/react';
//react0icons
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const BackgroundContainer = tw.div`bg-background`;
const Container = styled.div`
  ${tw`max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8`}
  .divider {
    ${tw`max-w-3xl mx-auto divide-y-2 divide-accents_2`}
  }
`;
const Heading = tw.h2`text-center text-3xl font-extrabold text-foreground sm:text-4xl`;
const List = styled.dl`
  ${tw`mt-6 space-y-6 divide-y divide-accents_2`}
  .arrow {
    ${tw`text-left w-full flex justify-between items-start text-success`}
  }
  .question {
    ${tw`font-medium text-foreground`}
  }
  span {
    ${tw`ml-6 h-7 flex items-center`}
  }
  p {
    ${tw`text-base text-accents_5`}
  }
`;

export default function CenteredAccordion() {
  return (
    <BackgroundContainer>
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
                          <FaChevronDown
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
}
