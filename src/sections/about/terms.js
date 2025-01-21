import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';

const Terms = () => {
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
          Terms and Condition
        </Typography>
      </m.div>

      <Typography variant="h6" component="h2" align="center" sx={{ mb: 6, fontSize: { xs: '1.4rem', md: '1.6rem', }, fontWeight: 700, }}>
        Welcome to MIM Transport Group. These terms and conditions govern your partnership with us as an owner-operator. By joining our team, you agree to the following
      </Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Partnership Details:</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>We provide consistent freight opportunities and support for independent owner-operators. Full details of our agreements are available during onboarding</Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Payment Terms:</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>Timely and competitive payment schedules are guaranteed. Specific terms will be outlined in your contract</Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Liability Disclaimer:</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>MIM Transport Group is not liable for delays or damages caused by unforeseen circumstances beyond our control</Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Cancellations and Disputes:</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>Either party may terminate the partnership under the conditions specified in the agreement. Dispute resolution processes will also be outlined.</Typography>
      <Typography variant='subtitle1' sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, mt: 2 }}>Governing Law:</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>All agreements are governed by the laws of Virginia, USA.</Typography>
      <Typography variant='subtitle2' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 5 }}>For a full list of terms or further clarification, contact us at info@mimtransportgroup.com</Typography>


    </Container>
  );
};

export default Terms;
