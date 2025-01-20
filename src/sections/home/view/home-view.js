import { useScroll } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HeroSection from '../home-heroSection';
import OurMission from '../home-ourMission';
import TakeCharge from '../home-takeCharge';
import HomeFAQs from '../home-faqs';
import WhyChooseUs from '../home-whyChooseUs';
import ReadyToJoin from '../home-readyToJoin';
import Testimonials from '../home-testimonial';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <div id="Home"><HeroSection /></div>
      <div id="OurMission"><OurMission /></div>
      <div id=""><TakeCharge /></div>
      <div id=""><WhyChooseUs /></div>
      <div id=""><ReadyToJoin /></div>
      <div id=""><Testimonials /></div>
    </>
  );
}
