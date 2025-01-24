import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import { m, motion } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';
import { Button } from '@mui/material';
import { useResponsive } from 'src/hooks/use-responsive';

const slides = [
  {
    image: "/assets/background/homebg.png",
    title: "Welcome to",
    subtitle: "MIM Transport <br/>Group",
    buttonText: "Join Our Team",
  },
  {
    image: "/assets/background/homebg.png",
    title: "Reliable Transport",
    subtitle: "Nationwide <br/> Coverage",
    buttonText: "Learn More",
  },
  {
    image: "/assets/background/homebg.png",
    title: "Trusted Partner",
    subtitle: "In Logistics <br/> Solutions",
    buttonText: "Contact Us",
  },
];

export default function HeroSection() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {dots}
      </Box>
    ),
    customPaging: (i) => (
      <Box
        className={`slick-dot`}
        sx={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#FFC300",
          },
        }}
      />
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: "100vh",
              display: "flex !important",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingLeft: { xs: 2, sm: 3, md: 5 },
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
                <span variants={varFade().inUp}>
                  <Typography
                    gutterBottom
                    textAlign="start"
                    variant="h1"
                    fontWeight={800}
                  >
                    {slide.title}
                  </Typography>

                  <Typography
                    gutterBottom
                    textAlign="start"
                    variant="h1"
                    fontWeight={800}
                    sx={{ color: '#A70E16', textWrap: 'nowrap' }}
                    dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                  />

                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, px: 2, py: 1, color: 'black', fontWeight: 600, fontSize: '1.02rem' }}
                  >
                    {slide.buttonText}
                  </Button>
                </span>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
    </div>
  );
}
