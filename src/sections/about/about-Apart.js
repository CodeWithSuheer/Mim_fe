import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import Masonry from '@mui/lab/Masonry';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// utils
import { fDate } from 'src/utils/format-time';
// _mock
import { _testimonials } from 'src/_mock';
// theme
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import Image from 'src/components/image';
import line from 'src/assets/landingPage/line.png';

// ----------------------------------------------------------------------

const FEATURES = [
  {
    title: 'Transparency',
    description: "We believe in straight talk and keeping our promises. You'll always know where you stand with us.",
    image: '/assets/images/about/card_01.png'
  },
  {
    title: 'Family-Like Culture',
    description: "We treat every driver as a partner, not just a number. Your success is our success.",
    image: '/assets/images/about/card_02.png'

  },
  {
    title: 'Supportive Environment',
    description: "Whether it's help with logistics, resolving issues on the road, or providing steady loads, we've got your back.",
    image: '/assets/images/about/card_03.png'

  },
  {
    title: 'Commitment to Excellence',
    description: "We're constantly evolving to meet the needs of our drivers and the demands of the industry. Your feedback shapes our growth.",
    image: '/assets/images/about/card_01.png'

  },
  {
    title: 'Growth Opportunities',
    description: "MIM Transport Group thrives by ensuring the well-being and steady growth of its owner-operators, providing consistent freight without compromise.",
    image: '/assets/images/about/card_02.png'

  },
  {
    title: 'Recognition and respect',
    description: "At MIM Transport Group, recognition and respect are the core of our values—what every hardworking owner-operator truly deserves.",
    image: '/assets/images/about/card_03.png'

  }
];

export default function AboutApart() {

  return (

    <Box
      component={MotionViewport}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: {
          xs: '10% 0',
          lg: '4% 0',
      },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(/assets/images/about/apart.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Box sx={{ mb: { xs: 4, md: 8 }, textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Grid
              item
              xs={12}
              md={12}
              px={2}
              sx={{
                marginBottom: { xs: '0rem', md: '3rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <m.span variants={varFade().inUp}>
                <Box sx={{ display: 'inline-block', textAlign: 'center', margin: '0 auto' }}>
                  <Typography
                    variant="h2"
                    fontWeight={700}
                    sx={{
                      color: '#A70E16',
                      marginBottom: '-0.7rem',
                    }}
                  >
                    What Sets Us Apart
                  </Typography>

                  <Box
                    mt={0}
                    pt={0}
                    sx={{
                      width: '100%',
                      margin: '0 auto',
                      textAlign: 'center',
                      display: 'inline-flex',
                      justifyContent: 'center',
                      marginTop: 0,
                      paddingTop: 0,
                    }}
                  >
                    <img
                      src={line}
                      alt="line"
                      style={{
                        width: '80%',
                        maxWidth: 'inherit',
                      }}
                    />
                  </Box>
                </Box>
              </m.span>
            </Grid>

          </m.div>
        </Box>

        <Grid container spacing={3}>
          {FEATURES.map((feature) => (
            <Grid key={feature.title} xs={12} sm={6} md={4}>
              <m.div variants={varFade().inUp}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'common.white',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '23rem'
                  }}
                >
                  <Box sx={{ position: 'relative', pt: '60%' }}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                      }}
                    />
                  </Box>

                  <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 1,
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'text.primary',
                        textAlign: 'center'
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '16.94px',
                        color: 'text.secondary',
                        textAlign: 'center',
                        letterSpacing: '0.5px',
                        flexGrow: 1
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

