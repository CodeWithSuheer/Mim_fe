import AboutDriver from '../about/driver';
import Testimonials from '../home/home-testimonial';
import DriverHero from './driver-hero';

// ----------------------------------------------------------------------

export default function DriverView() {
    return (
        <>
            <DriverHero />
            <AboutDriver />
            <Testimonials />
        </>
    );
}
