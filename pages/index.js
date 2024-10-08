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
