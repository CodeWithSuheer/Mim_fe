import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';

const AboutDriver = () => {

  const items = [
    'Your Social Security Number',
    '3 years of residence history',
    '3-10 years of current or previous employment history, including any gaps in employment',
    'Full addresses, phone numbers, and employment dates needed for previous employers',
    '3 years of traffic conviction and violation history',
    '3 years of motor vehicle accident history',
    "Copy of driver's license",
    'Use your legal name as it appears on your driver’s license',
  ];


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
          Driver Application
        </Typography>
      </m.div>

      <Typography variant="h6" component="h2" align="center" sx={{ mb: 6, fontSize: { xs: '1.4rem', md: '1.8rem', }, fontWeight: 700, }}>
        You will need the following information to complete the application.
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.4rem' }, fontWeight: 700, }}>
        Start New Application
      </Typography>

      <Typography variant='subtitle1' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400, mt: 2 }}>You will need the following information to complete the application.</Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'list-item',
              fontSize: { xs: '0.8rem', md: '1.1rem' },
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AboutDriver;
