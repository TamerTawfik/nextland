import Head from 'next/head';
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/sections/Hero";
import LogoSection from "../components/sections/LogoClouds";
import SolutionSection from '../components/sections/Solution';
import FeatureSection from '../components/sections/Feature';
import PricingSection from "../components/sections/Pricing";
import StatSection from '../components/sections/Stat';
import TestimonialSection from "../components/sections/Testimonial";
import SimpleCTA from "../components/sections/CTA/Simple";
import CardsWith3column from "../components/sections/Blog/CardsWith3column";
import CenteredAccordion from "../components/sections/FAQ/CenteredAccordion";
import SplitTwo from "../components/sections/Contact/SplitTwo";
import WithEmail from "../components/sections/CTA/WithEmail";
import MissonWith4Column from "../components/sections/Footer/MissonWith4Column";


export default function Home() {
  return (
    <>
      <Head>
        <title>Nextland - Landing Page Main</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background">
        <Navbar />
        <HeroSection />
        <LogoSection />
        <SolutionSection />
        <FeatureSection />
        <PricingSection />
        <StatSection />
        <TestimonialSection />
        <SimpleCTA />
        <CardsWith3column />
        <CenteredAccordion />
        <SplitTwo />
        <WithEmail />
      </main>
      <MissonWith4Column />
    </>
  )
}
