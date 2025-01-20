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
    description: "MIM Transport Group truly understands that its growth lies in the well-being and consistent growth of its owner-operators that's why we keep no stone unturned in making sure our owner-operators are always getting steady and consistent freight.",
    image: '/assets/images/about/card_02.png'

  },
  {
    title: 'Recognition and respect',
    description: "Recognition and Respect are the foundation of all of our dealings at MIM Transport Group, after-all that's the foremost thing a hardworking owner-operator deserves for the hard work they do every day.",
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
          lg: '4% 0',
        },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(/assets/images/about/apart.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowX: 'hidden',
      }}
    >


      <Container>
        <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Montserrat',
                mt:{xs:5,md:0},
                fontSize: { xs: '40px', md: '54px' },
                fontWeight: 700,
                lineHeight: { xs: '48px', md: '64.8px' },
                color: '#B22222',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#B22222',
                }
              }}
            >
              What Sets Us Apart
            </Typography>
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
                        mb: 2,
                        fontFamily: 'Inter',
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
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '16.94px',
                        color: 'text.secondary',
                        textAlign: 'center',
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

