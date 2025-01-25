import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// _mock
import { _mapContact } from 'src/_mock';
//
import ContactMap from '../contact-map';
import ContactHero from '../contact-hero';
import ContactForm from '../contact-form';
import ScrollProgress from 'src/components/scroll-progress';

// ----------------------------------------------------------------------

export default function ContactView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <ContactHero />

      <Container sx={{ py: 10 }}>
        <ContactForm />
      </Container>
    </>
  );
}
