import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';

const AboutDriver = () => {
    return (

        
        <Container sx={{ py: { xs: 10, md: 8 },}}>
            <m.div variants={varFade().inUp}>
        <Typography 
          variant="h1" 
          align="center" 
        color={'#A70E16'}
          sx={{ 
            mb: 6,
            fontSize: { xs: '2.5rem', md: '3rem' },
            fontWeight:700,
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
           
            <Typography variant="h6" component="h2"  align="center" sx={{ mb: 6, fontSize: { xs: '1.4rem', md: '1.8rem', },fontWeight:700,}}>
                You will need the following information to complete the application.
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.4rem' },fontWeight:700,}}>
                Start New Application
            </Typography>

            <Typography variant='subtitle1' sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' },fontWeight:400,mt:2}}>You will need the following information to complete the application.</Typography>
            <List sx={{ listStyleType: "disc", pl: 2 }}>
                <ListItem sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400 }}>Your Social Security Number</ListItem>
                <ListItem sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400 }}>3 years of residence history</ListItem>
                <ListItem sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400 }}>3-10 years of current or previous employment history, including any gaps in employment</ListItem>
                <ListItem sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400 }}>Full addresses, phone numbers, and employment dates needed for previous employers</ListItem>
                <ListItem sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400 }}>3 years of traffic conviction and violation history</ListItem>
                <ListItem sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400 }}>3 years of motor vehicle accident history</ListItem>
                <ListItem sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400 }}>Copy of driver's license</ListItem>
                <ListItem sx={{ fontSize: { xs: '0.8rem', md: '1.1rem' }, fontWeight: 400 }}>Use your legal name as it appears on your driver's license</ListItem>
            </List>
        </Container>
    );
};

export default AboutDriver;
