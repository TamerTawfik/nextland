import Head from 'next/head';
import SimpleCentered from "../components/sections/Hero/SimpleCentered";
import SimpleInCard from '../components/sections/Stat/SimpleInCard';
import Simple from "../components/sections/Logo/Simple";
import GridWithOffseetIcons from '../components/sections/Feature/GridWithOffseetIcons';
import AlternativeSidesWithImage from '../components/sections/Feature/AlternativeSidesWithImage';
import ThreeTiersWithEmphasized from "../components/sections/Pricing/ThreeTiersWithEmphasized";
// import SimpleCenter from "../components/sections/CTA/SimpleCenter";
// import SplitWithImage from "../components/sections/CTA/SplitWithImage";
// import WithLargeAvatar from "../components/sections/Testimonial/WithLargeAvatar";
// import LogoCloud from "../components/sections/Logo/simple";
// import CenteredAccordion from "../components/sections/FAQ/CenteredAccordion";
// import CardsWith3column from "../components/sections/Blog/CardsWith3column";
// import MissonWith4Column from "../components/sections/Footer/MissonWith4Column";


export default function Home() {
  return (
    <>
      <Head>
        <title>Mobiland - Landing Page Main</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background">
        {/* Hero section with Navigation */}
        <SimpleCentered />
        <Simple />
        {/* Stats Section */}

        {/* Feature Section */}
        <GridWithOffseetIcons />
        <AlternativeSidesWithImage />
        <ThreeTiersWithEmphasized />
        <SimpleInCard />
        {/* <SimpleCenter />
        <WithLargeAvatar />
        <LogoCloud />
        <CardsWith3column />
        <CenteredAccordion />
        <SplitWithImage /> */}
      </main>
      <footer>
        {/* <MissonWith4Column /> */}
      </footer>
    </>
  )
}
