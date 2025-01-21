import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';

const Privacy = () => {
  return (
    <Container sx={{ py: { xs: 10, md: 8 }, }}>
      <m.div variants={varFade().inUp}>
        <Typography
          variant="h2"
          align="center"
          color={'#A70E16'}
          sx={{
            mb: 6,
            fontSize: { xs: '2.5rem', md: '3rem' },
            fontWeight: 700,
            color: '#A70E16',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '100%',
              height: '3px',
              backgroundColor: '#A70E16',
            }
          }}
        >
          Privacy Policy
        </Typography>
      </m.div>

      <Typography variant="h6" component="h2" align="center" sx={{ mb: 6, fontSize: { xs: '1.4rem', md: '1.6rem', }, fontWeight: 700, }}>
        At MIM Transport Group, we value your trust and are committed to protecting your personal information. Below is an overview of our privacy practices:
      </Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Data Collection</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>We collect personal details such as your name, contact information, and driving credentials to facilitate the partnership process.</Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Data Usage:</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>The information you provide is used to manage freight assignments, ensure compliance, and maintain effective communication.</Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Third-Party Sharing:</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>Your data is only shared with trusted partners when necessary for operational purposes, and we never sell your information.</Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Your Rights:</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>You have the right to access, update, or request the deletion of your data at any time. Opt-out options for communications are also available.</Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Compliance:</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>We adhere to all relevant data protection regulations, including CCPA as well as FMCSA and DOT guidelines to ensure your information is handled securely.</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 5 }}>If you have any questions about this policy or your data, please contact us at info@mimtransportgroup.com.</Typography>


    </Container>
  );
};

export default Privacy;
