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
import line from 'src/assets/landingPage/line.png'

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
            xs: '10% 0',
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
                      color: '#FFF200',
                      marginBottom: '-0.7rem',
                    }}
                  >
                    About the Founder
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

            {/* First Paragraph - Full Width */}
            <Grid item xs={12}>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    mb: 4,
                    color: '#fff',
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    lineHeight: 1.6,
                    textAlign: 'justify',
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
                        lineHeight: 1.8,
                        textAlign: 'justify',
                      }}>
                      In 2010, Zubair's passion for transportation led him back to the trucking industry, where he found his true calling. By 2013, he had established MIM Transport Group, driven by a simple yet powerful vision: to create a family-like environment where owner-operators can thrive. His approach is built on honesty, straight talk, and fostering an interest-free, cash-based business model that enables drivers to earn an honest living.
                    </Typography>

                    <Typography
                      sx={{
                        mb: 2,
                        color: '#fff',
                        fontSize: { xs: '1rem', md: '1.05rem' },
                        lineHeight: 1.8,
                        textAlign: 'justify',
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
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src="/assets/images/about/founder.png"
                      alt="Founder"
                      sx={{
                        width: '100%',
                        height: '26rem',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                        objectFit: 'cover',
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