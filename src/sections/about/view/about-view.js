import { useScroll } from 'framer-motion';
import AboutHero from '../about-hero';
import AboutWhat from '../about-what';
import AboutTeam from '../about-team';
import AboutVision from '../about-vision';
import AboutApart from '../about-Apart';
import ReadyToJoin from 'src/sections/home/home-readyToJoin';
import ScrollProgress from 'src/components/scroll-progress';
// ----------------------------------------------------------------------

export default function AboutView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <AboutHero />
      <AboutWhat />
      <AboutVision />
      <ReadyToJoin />
      <AboutApart />
    </>
  );
}
