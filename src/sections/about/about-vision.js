import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';
import { margin } from '@mui/system';

export default function AboutFounder() {
  const theme = useTheme();

  return (
    <>
      <Box
        component={MotionViewport}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: {
            lg: '4% 0',
          },
          backgroundImage: `url(/assets/images/about/founder_bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflowX: 'hidden',
        }}
      >
        <Container>
          <Grid container spacing={3}>
            {/* Title */}
            <Grid item xs={12}>
              <m.span variants={varFade().inUp}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    mt: { xs: 5, md: 0 },
                    color: '#FFF200',
                    textAlign: { xs: 'start', lg: 'center' },
                    fontWeight: 700,
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


                  About the Founder
                </Typography>
              </m.span>
            </Grid>

            {/* First Paragraph - Full Width */}
            <Grid item xs={12}>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    mb: 4,
                    color: '#fff',
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    lineHeight: 1.6,
                  }}>
                  Zubair Raza Shah, the visionary behind MIM Transport Group, brings decades of diverse experience and an unwavering commitment to the trucking community. Having a background in economics, Zubair moved to the United States in 1994, where his entrepreneurial journey began. Starting in sales in bustling New York City, he honed his skills in connecting with people, understanding their needs, and solving problems for mutual wins. Over the years, he transitioned into managing retail and gas station businesses in Northern Virginia, eventually co-owning a home mortgage firm until 2007.
                </Typography>
              </m.div>
            </Grid>

            {/* Content Container */}
            <Grid container item spacing={4}>
              {/* Left Content - Text */}
              <Grid item xs={12} md={8}>
                <m.div variants={varFade().inLeft}>
                  <Stack spacing={4}>
                    <Typography
                      sx={{
                        mb: 2,
                        color: '#fff',
                        fontSize: { xs: '1rem', md: '1.05rem' },
                        lineHeight: 1.6,
                      }}>
                      In 2010, Zubair's passion for transportation led him back to the trucking industry, where he found his true calling. By 2013, he had established MIM Transport Group, driven by a simple yet powerful vision: to create a family-like environment where owner-operators can thrive. His approach is built on honesty, straight talk, and fostering an interest-free, cash-based business model that enables drivers to earn an honest living.
                    </Typography>

                    <Typography
                      sx={{
                        mb: 2,
                        color: '#fff',
                        fontSize: { xs: '1rem', md: '1.05rem' },
                        lineHeight: 1.6,
                      }}>
                      Zubair's journey reflects his resilience and dedication to building a company that puts people first. His leadership ensures that MIM Transport Group remains a trusted partner for drivers, offering them the respect, support, and opportunities they deserve. Under his guidance, MIM Transport Group is more than just a trucking company—it's a community where drivers can succeed and feel at home.
                    </Typography>
                  </Stack>
                </m.div>
              </Grid>

              {/* Right Content - Image */}
              <Grid item xs={12} md={4}>
                <m.div variants={varFade().inRight}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      py: 0,
                    }}
                  >
                    <Image
                      alt="Founder"
                      src="/assets/images/about/founder.png"
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 2,
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                        boxShadow: 'none',
                        shadow: 'none',
                      }}
                    />
                  </Box>
                </m.div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission and Vision Cards */}
      <Container sx={{ py: 10 }}>
        <Grid container >
          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Card
                sx={{
                  px: {
                    xs: 3, md: 4
                  },
                  py: {
                    xs: 4, md: 7
                  },
                  height: '100%',
                  bgcolor: '#B22222',
                  color: 'common.white',
                  borderRadius: 1,
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Stack spacing={2}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#FFD700',
                      lineHeight: 1.6,
                      fontWeight: 700,
                    }}>
                    Our Mission
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}>
                    "To foster a friendly, honest, and dependable environment for owner-operators, where open communication and keeping promises are the foundation of our business relationships."
                  </Typography>

                </Stack>
              </Card>
            </m.div>
          </Grid>

          <Grid xs={12} md={6} alignSelf={'center'} justifyItems={'center'}>
            <m.div variants={varFade().inRight} >
              <Image
                alt="MIM Transport Truck"
                src="/assets/images/about/mission.png"
                sx={{
                  borderRadius: 2,
                  width: { xs: '100%', sm: '250px' },
                  height: { xs: 'auto', sm: '180px' },
                  objectFit: 'cover',

                }}
              />
            </m.div>
          </Grid>

          <Grid xs={12} md={6} alignSelf={'center'} justifyItems={'center'} >
            <m.div variants={varFade().inRight}>
              <Image
                alt="MIM Transport Truck"
                src="/assets/images/about/vision.png"
                sx={{
                  borderRadius: 2,
                  margin: 'auto',
                  width: { xs: '100%', sm: '250px' },
                  height: { xs: 'auto', sm: '180px' },
                  objectFit: 'cover',
                }}
              />
            </m.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Card
                sx={{
                  px: {
                    xs: 3, md: 4
                  },
                  py: {
                    xs: 4, md: 7
                  },
                  height: '100%',
                  bgcolor: '#FFD700',
                  color: 'grey.800',
                  borderRadius: 1,
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Stack spacing={2}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#B22222',
                      lineHeight: 1.6,
                      fontWeight: 700,
                    }}>
                    Our Vision
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}>
                    "To be the industry leader in creating a family-like atmosphere in trucking, built on trust, integrity, and a commitment to delivering on every promise."
                  </Typography>

                </Stack>
              </Card>
            </m.div>
          </Grid>
        </Grid>
      </Container >
    </>
  );
}