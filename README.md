<!-- TABLE OF CONTENTS -->
<details open >
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About NextLand</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#usage">Deployment</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT NextLand -->
## About NextLand

Rock your landing page with NextLand - a supercharged, beautiful, responsive landing page template. Nextland is based on React JS, Next JS and Tailwindcss. We have a single code base & a simple, intuitive development environment. We used Emotion/react and carefully created custom components, and modern repo architecture.

NextLand is a landing page template based on the latest front-end technologies. It's fast, responsive, and mobile-friendly. Using Tailwindcss to make your content stand out.

### Key Features
* React, NextJs 13.x
* Built On Tailwind 3.x
* Emotion react
* Headlessui
* Framer motion
* React countup
* React swiper slider
* React Icons
* 100% Responsive
* Nice and Clean Design
* Clean and commented code
* Easy to customize
* HTML & CSS & JS files are included
* Detailed documentation
* Lifetime Free Update
* 24/7 Awesome support
* And Much More...


<!-- GETTING STARTED -->
## Getting Started

Setting up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

Node.js 14.6.0 or newer

MacOS, Windows (including WSL), and Linux are supported

To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool

* node
  ```sh
   node --version
  ```

### Installation

Unzip the downloaded file nextland.zip and run the following commands on nextland folder to get started with the project.

IMPORTANT NOTE: Make sure you have backup copy from nextland.zip to have a restore point in case of any complications.

1. open your Command Prompt, Powershell or a similar command line tool
2. make sure your are inside the nextland folder
   ```sh
   cd nextland
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. For starting NextJs Server run
   ```sh
   npm run dev
   ```

NextJs Server will start in `localhost:3000`


<!-- USAGE EXAMPLES -->
## Usage

### Folder Structure
```
└───components
    ├───common
    │   ├───LogoSVG
    │   ├───Navbar
    |   |   ├───navbar.style.js
    |   |   ├───index.js
    │   └───MotionWrap
    └───sections
        ├───Blog
        |   ├───blog.style.js
        │   ├───index.js
        ├───CTA
        ├───Contact
        ├───FAQ
        ├───Feature
        ├───Footer
        ├───Hero
        ├───LogoClouds
        ├───Newsletter
        ├───Pricing
        ├───Solution
        ├───Stat
        └───Testimonial
├───pages
    ├───_app.js
    ├───_document.js
    └───index.js
├───public
│   └───images
├───styles
├───.babelrc.js
├───.gitignore
├───next.config.js
├───package.json
├───postcss.config.js
├───README.md
├───tailwind.config.js
```
### Page Structure

pages/index.js

```js

import Head from 'next/head';
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/Hero";
import LogoSection from "../components/sections/LogoClouds";
import SolutionSection from '../components/sections/Solution';
import FeatureSection from '../components/sections/Feature';
import PricingSection from "../components/sections/Pricing";
import StatSection from '../components/sections/Stat';
import TestimonialSection from "../components/sections/Testimonial";
import CTASection from "../components/sections/CTA";
import BlogSection from "../components/sections/Blog";
import FAQSection from "../components/sections/FAQ";
import ContactSection from "../components/sections/Contact";
import NewsletterSection from "../components/sections/Newsletter";
import FooterSection from "../components/sections/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Nextland - Landing Page Main</title>
        <meta name="description" content="React Next Tailwindcss Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <SolutionSection />
      <FeatureSection />
      <PricingSection />
      <StatSection />
      <TestimonialSection />
      <CTASection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <NewsletterSection />
      <FooterSection />
    </>
  )
}

```

### File Structure

components/section/CTA/index.js

```js
//Animation wrapper
import MotionWrap from "../../common/MotionWrap";

import { BackgroundContainer, Container, Heading, LinksContainer, PrimaryLinkWrap, PrimaryLink } from "./cta.style";

const CTA = ({
    heading = 'Start your free trial today.',
    primaryLinkText = "Get started",
    primaryLinkUrl = "#",
}) => {
    return (
        <BackgroundContainer>
            <Container>
                <Heading>
                    {heading}
                </Heading>
                <LinksContainer>
                    <PrimaryLinkWrap>
                        <PrimaryLink href={primaryLinkUrl}>
                            {primaryLinkText}
                        </PrimaryLink>
                    </PrimaryLinkWrap>
                </LinksContainer>
            </Container>
        </BackgroundContainer>
    )
};

export default MotionWrap(CTA);
```
components/section/CTA/cta.style.js

```js

// twin-macro
import tw from 'twin.macro';

export const BackgroundContainer = tw.section`bg-background pb-12 px-4`;

export const Container = tw.div`max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between bg-gradient-to-r from-background to-background rounded-lg border border-green rounded-3xl`;

export const Heading = tw.h2`text-3xl font-extrabold tracking-tight sm:text-4xl block bg-clip-text text-transparent bg-gradient-to-tr from-foreground to-accents_6`;

export const LinksContainer = tw.div`mt-8 flex lg:mt-0 lg:flex-shrink-0`;
export const PrimaryLinkWrap = tw.div`inline-flex rounded-md shadow`;

export const PrimaryLink = tw.a`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-accents_7 bg-gradient-to-r from-green to-[#09662b] hover:border border-green hover:text-background`;

```


<!-- Deployment -->
## Deployment

To build the project you have to follow below procedure.

```
npm run build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

npm start
```

### Deploy Next.js with Vercel

Vercel is the fastest way to deploy your Next.js application with zero configuration.

When deploying to Vercel, the platform automatically detects Next.js, runs next build, and optimizes the build output for you.

For deploying nextjs on vercel.com run below command .

```
vercel
```

> **Make sure you have `vercel-cli` installed in your system.**

### Self-Hosting

Next.js can be deployed to any hosting provider that supports Node.js.

run
``` npn run build ```
 to build your application. 

 Finally, run 
 ```npm start ```
  to start the Node.js server. This server supports all features of Next.js.

### Docker Image

Next.js can be deployed to any hosting provider that supports Docker containers. You can use this approach when deploying to container orchestrators such as Kubernetes or HashiCorp Nomad, or when running inside a single node in any cloud provider.

1- Install Docker on your machine

2- Clone the with-docker example

3- Build your container: docker build -t nextjs-docker .

4- Run your container: docker run -p 3000:3000 nextjs-docker

### Static HTML Export

If you’d like to do a static HTML export of your Next.js app which can be run standalone without the need of a Node.js server.

```
npm run export
```



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments



* [Emotion React](https://emotion.sh/docs/@emotion/react)
* [Headlessui](https://headlessui.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [React Countup](https://react-countup.vercel.app/)
* [React swiper](https://swiperjs.com/react)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Tailwindcss Scrollbar](https://github.com/adoxography/tailwind-scrollbar)
* [Twin micro](https://github.com/ben-rogerson/twin.macro)

### Images

* [Pixabay](https://pixabay.com/)
* [Flicker](https://www.flickr.com/)
* [Freepik](https://www.freepik.com/)


