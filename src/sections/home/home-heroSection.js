import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { m, motion } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';
import { Button } from '@mui/material';
import { useResponsive } from 'src/hooks/use-responsive';

export default function HeroSection() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      component={MotionViewport}
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        backgroundImage: `url(/assets/background/homebg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Grid
        container
        sx={{
          margin: {
            lg: '5% 0',
            md: '5% 0',
            sm: '15% 0',
            xs: '25% 0 5% 0',
          },
          paddingLeft: { xs: '5%', md: '10%' },
        }}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Grid
          item
          xs={11}
          md={11}
          order={{ xs: 1, md: 1 }}
          display={'grid'}
          justifyContent={'start'}
          width="100%"
          alignItems={'flex-start'}
          sx={{
            marginTop: {
              lg: '-2rem',
              md: '-2rem',
              sm: '2rem',
              xs: '2rem',
            },
          }}
        >
          <m.span variants={varFade().inUp}>
            <Typography
              gutterBottom
              textAlign="start"
              variant="h1"
              fontWeight={900}
            >
              Welcome to
            </Typography>

            <Typography
              gutterBottom
              textAlign="start"
              variant="h1"
              fontWeight={900}
              sx={{ color: '#A70E16' }}
            >
              MIM Transport Group
            </Typography>

            <Button
              type="button"
              variant="contained"
              color="primary"
              sx={{ mt: 2, px: 2, py: 1, color: 'black', fontWeight: 500, fontSize: '1.02rem' }}
            >
              Join our team
            </Button>
          </m.span>
        </Grid>
      </Grid>
    </Box>
  );
}
