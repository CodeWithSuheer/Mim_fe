import { useScroll } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HeroSection from '../home-heroSection';
import HomeFAQs from '../home-faqs';
import WhyChooseUs from '../home-whyChooseUs';
import ReadyToJoin from '../home-readyToJoin';
import Testimonials from '../home-testimonial';
import DrivingSuccess from '../home-driving-success';
import WhereTruckers from '../home-where-truckers';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <div id="Home"><HeroSection /></div>
      <div id="OurMission"><WhereTruckers /></div>
      <div id=""><DrivingSuccess /></div>
      <div id=""><WhyChooseUs /></div>
      <div id=""><ReadyToJoin /></div>
      <div id=""><Testimonials /></div>
    </>
  );
}
