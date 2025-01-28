import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
// theme
import { bgGradient } from 'src/theme/css';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';
import {
  Typography,
  Card,
  Avatar,
  Rating,
} from "@mui/material";

// ----------------------------------------------------------------------




export default function CarouselCenterMode({ data }) {
  const carousel = useCarousel({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' },
      },
    ],
  });

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <CarouselArrows
        filled
        icon="tabler:arrow-right"
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      >
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {data?.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  minHeight: "260px",
                  minHeight: "20rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: '#FFF5EC',
                  padding: "2px",
                  textAlign: "center",
                  borderColor: "#A70E16",
                  borderWidth: "1.5px",
                  borderRadius: "16px",
                  margin: "10px",
                  width: "90%",
                }}
              >
                <CardContent>
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
                  />
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 1, color: '#A70E16' }} />
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.feedback}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </CarouselArrows>
    </Box>
  );
}

CarouselCenterMode.propTypes = {
  data: PropTypes.array,
};

// ----------------------------------------------------------------------

function CarouselItem({ item }) {
  const theme = useTheme();

  const { coverUrl, title } = item;

  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Image alt={title} src={coverUrl} ratio="3/4" />

      <CardContent
        sx={{
          bottom: 0,
          zIndex: 9,
          width: '100%',
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
          ...bgGradient({
            direction: 'to top',
            startColor: `${theme.palette.grey[900]} 25%`,
            endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
          }),
        }}
      >
        <TextMaxLine variant="h4" sx={{ mb: 2 }}>
          {title}
        </TextMaxLine>

        <Link
          color="inherit"
          variant="overline"
          sx={{
            opacity: 0.72,
            alignItems: 'center',
            display: 'inline-flex',
            transition: theme.transitions.create(['opacity']),
            '&:hover': { opacity: 1 },
          }}
        >
          learn More
          <Iconify icon="eva:arrow-forward-fill" width={16} sx={{ ml: 1 }} />
        </Link>
      </CardContent>
    </Paper>
  );
}

CarouselItem.propTypes = {
  item: PropTypes.object,
};
