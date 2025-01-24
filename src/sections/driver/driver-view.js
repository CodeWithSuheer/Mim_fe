import { useScroll } from 'framer-motion';
import AboutDriver from '../about/driver';
import ReadyToJoin from '../home/home-readyToJoin';
import Testimonials from '../home/home-testimonial';
import DriverHero from './driver-hero';
import ScrollProgress from 'src/components/scroll-progress';
// ----------------------------------------------------------------------

export default function DriverView() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <ScrollProgress scrollYProgress={scrollYProgress} />
            <DriverHero />
            <AboutDriver />
            <ReadyToJoin />
            <Testimonials />
        </>
    );
}
