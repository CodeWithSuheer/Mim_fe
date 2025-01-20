import React from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';


const cardsData = [
    {
        title: "MODERN FLEET",
        description: "A modern fleet featuring the latest in transportation technology.",
        icon: "/assets/home/whyChoose/img1.png",
    },
    {
        title: "EXPERT DRIVERS",
        description: "Work with a partner that keeps its word and is consistent.",
        icon: "/assets/home/whyChoose/img2.png",
    },
    {
        title: "Comprehensive coverage",
        description: "Expert drivers committed to safety and punctuality.",
        icon: "/assets/home/whyChoose/img3.png",
    },
    {
        title: "Family-like Environment",
        description: "Years of Industry Expertise",
        icon: "/assets/home/whyChoose/img4.png",
    },
    {
        title: "Trustworthy",
        description: "A family-like environment where owner-operator's ease and success come first.",
        icon: "/assets/home/whyChoose/img5.png",
    },
    {
        title: "Reliable",
        description: "A modern fleet featuring the latest in transportation technology.",
        icon: "/assets/home/whyChoose/img6.png",
    },
    {
        title: "Consistent",
        description: "Work with a partner that keeps its word and is consistent.",
        icon: "/assets/home/whyChoose/img7.png",
    },
    {
        title: "Transparent",
        description: "Work with a partner that keeps its word and is consistent.",
        icon: "/assets/home/whyChoose/img8.png",
    },
    {
        title: "Nurturing",
        description: "A modern fleet featuring the latest in transportation technology.",
        icon: "/assets/home/whyChoose/img9.png",
    },
    {
        title: "Equitable",
        description: "Work with a partner that keeps its word and is consistent.",
        icon: "/assets/home/whyChoose/img10.png",
    },
];

export default function WhyChooseUs() {

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
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: `url(/assets/home/whyChooseUs.png) `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    overflowX: 'hidden',
                }}
            >
                <Grid item xs={12} md={12}>
                    <m.span variants={varFade().inUp}>
                        <Typography gutterBottom mb={10} variant="h2" fontWeight={800}
                            sx={{
                                color: '#A70E16',
                                textAlign: {
                                    xs: 'start',
                                    lg: 'center'
                                }
                            }}>
                            Why Choose Us
                        </Typography>
                    </m.span>
                </Grid>

                <Grid
                    container
                    spacing={3}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: { xs: '0 16px', md: '0 32px', lg: '0 64px' },
                    }}
                >
                    {cardsData?.map((item, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Card
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "16px",
                                    padding: "1.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    // maxWidth: "250px", 
                                    minHeight: "240px",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.icon}
                                    alt={item.title}
                                    sx={{
                                        width: "55px",
                                        height: "55px",
                                        marginBottom: "1rem",
                                    }}
                                />
                                <CardContent sx={{ py: 0 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontSize: '1.95rem', fontWeight: "bold", mb: 0, color: "#000000" }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: "14px", color: "#000000" }}
                                    >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
