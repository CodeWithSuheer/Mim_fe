import React from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';
import CarouselCenterMode from '../_examples/extra/carousel-view/carousel-center-mode';
import { _mock } from 'src/_mock';

const testimonialsData = [
    {
        name: "James Pattinson",
        image: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img06.png?v=1737191604",
        rating: 5,
        feedback:
            "A game changer for my business! Their expertise streamlined my operations. Highly recommend!",
    },
    {
        name: "Greg Stuart",
        image: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img04.png?v=1737191604",
        rating: 5,
        feedback:
            "Impressive service and support! Always available to help and provided valuable insights.",
    },
    {
        name: "Trevor Mitchell",
        image: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img07.png?v=1738005936",
        rating: 5,
        feedback:
            "User-friendly platform that simplifies logistics. I can focus on my business while they handle the rest!",
    },
    {
        name: "Emily Johnson",
        image: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img04.png?v=1737191604",
        rating: 5,
        feedback:
            "Outstanding service! The team is professional and truly cares about their clients.",
    },
    {
        name: "Michael Brown",
        image: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img08.png?v=1738005936",
        rating: 5,
        feedback:
            "Personalized attention that understands my needs. A fantastic partnership!",
    },
    {
        name: "Sarah Davis",
        image: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img04.png?v=1737191604",
        rating: 5,
        feedback:
            "Quality service! I've seen a noticeable improvement in delivery rates and customer satisfaction.",
    },
];

export default function Testimonials() {

    return (
        <>
            <Box
                component={MotionViewport}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBlock: {
                        xs: '10% 0',
                        lg: '5% 0',
                    },
                    px: 2,
                    justifyContent: 'center',
                    backgroundColor: '#FFF5EC',
                    alignItems: 'center',
                    // backgroundImage: `url(/assets/home/whyChooseUs.png) `,
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
                    // overflowX: 'hidden',
                }}
            >
                <Grid item xs={12} md={12} pb={2}>
                    <m.span variants={varFade().inUp}>
                        <Typography gutterBottom variant="h3" fontWeight={800}
                            sx={{
                                color: '#A70E16',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                textAlign: {
                                    xs: 'center',
                                    lg: 'center'
                                }
                            }}>
                            Testimonials
                        </Typography>

                        <Typography gutterBottom variant="h3" fontWeight={800}
                            sx={{
                                color: '#000',
                                letterSpacing: '1px',
                                fontWeight: 700,
                                textAlign: {
                                    xs: 'center',
                                    lg: 'center'
                                }
                            }}>
                            What Our Clients Say About Us
                        </Typography>
                    </m.span>
                </Grid>
            </Box>

            <Box
                gap={11}
                display="grid"
                gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(1, 1fr)',
                }}
                sx={{
                    // padding: {
                    //     xs: '8% 0',
                    //     lg: '6% 0',
                    // },
                    alignItems: 'flex-start',
                    backgroundColor: '#FFF5EC',
                }}
            >
                <Card
                    px={0}
                    sx={{
                        boxShadow: 'none',
                        backgroundColor: '#FFF5EC',
                    }}
                >
                    <CardContent
                        sx={{
                            padding: 1,
                        }}
                    >
                        <CarouselCenterMode data={testimonialsData} />
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
