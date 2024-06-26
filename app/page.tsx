import Hero from "./_components/hero/hero";
import { useMediaQuery } from '@mui/material'
import MobileHero from "./_components/hero/mobile-hero";
import Trailers from "./_components/trailers/trailers";
import About from "./_components/about/about";
import Partners from "./_components/partners/partners";
import Distribution from "./_components/distribution/distribution";
import Production from "./_components/production/production";
import Events from "./_components/events/events";
const Home = () => {
  // const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div className="flex flex-col gap-y-12">
      <div className="lg:hidden">
        <MobileHero />
      </div>
      <div className="lg:block hidden">
        <Hero />
      </div>
      <Trailers />
      <About />
      <Partners />
      <Distribution />
      <Production />
      <Events />
    </div>
  );
}

export default Home;