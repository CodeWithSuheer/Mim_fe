import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// utils
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export const SKILLS = [...Array(3)].map((_, index) => ({
  label: ['Development', 'Design', 'Marketing'][index],
  value: [20, 40, 60][index],
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 4, md: 10 },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography
          variant="h1"
          align="center"
          color={'#A70E16'}
          sx={{
            mb: 5,
            fontSize: { xs: '2rem', md: '2.5rem' },
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
          About Us
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          align="center"
          sx={{
            mb: 8,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.8,
          }}
        >
          At MIM Transport Group, we're not just another trucking company. We're a family that's committed to helping owner-operators succeed. Founded in 2013, our mission has always been to provide a trustworthy and supportive environment where you can focus on what you do best—driving and delivering.
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          variant="h1"
          align="center"
          color={'#A70E16'}
          sx={{
            mb: 8,
            fontSize: { xs: '2rem', md: '2.5rem' },
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
          Our Story
        </Typography>
      </m.div>

      <Grid container spacing={4} alignItems="center">
        <Grid xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <m.div variants={varFade().inLeft}>
            <Stack spacing={3}>
              <Typography
                paragraph
                sx={{
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  lineHeight: 1.6,
                }}>
                MIM Transport Group was born out of a deep understanding of the challenges owner-operators face every day. Our founders, seasoned veterans in the trucking industry, recognized the need for a company that not only values professionalism but also fosters a culture of respect and fairness. Starting with just a small fleet and big dreams, we've grown into a nationally trusted partner for owner-operators across the country.
              </Typography>

              <Typography
                paragraph
                sx={{
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  lineHeight: 1.6,
                }}>
                We understand that trucking isn't just a job—it's a lifestyle. That's why we've built a community where drivers feel valued and supported. From transparent communication and dependable pay to a team that's always just a call away, we've created a company that puts people first. At MIM Transport Group, you're not just a driver; you're family.
              </Typography>
            </Stack>
          </m.div>
        </Grid>

        <Grid xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
          <m.div variants={varFade().inRight}>
            <Image
              alt="MIM Transport Truck"
              src="/assets/images/about/truck_1.png"
              ratio="4/3"
              sx={{ borderRadius: 2 }}
            />
          </m.div>
        </Grid>

        <Grid xs={12} md={6} sx={{ order: { xs: 4, md: 4 } }}>
          <m.div variants={varFade().inLeft}>
            <Typography
              paragraph
              sx={{
                fontSize: { xs: '1rem', md: '1.05rem' },
                lineHeight: 1.6,
              }}>
              We've always prioritized honesty and dependability. We understand the challenges of being an owner-operator, and that's why we've built our company on the values of transparency and support. Over the years, we've grown into a trusted partner for drivers across the country, offering steady opportunities and a team that truly cares about your success.
            </Typography>
          </m.div>
        </Grid>

        <Grid xs={12} md={6} sx={{ order: { xs: 3, md: 3 } }}>
          <m.div variants={varFade().inRight}>
            <Image
              alt="MIM Transport Fleet"
              src="/assets/images/about/truck_2.png"
              sx={{
                borderRadius: 2,
                height: { xs: '200px', md: '300px' },
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );
}
