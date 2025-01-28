import React from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';
import line from 'src/assets/landingPage/line.png'


const drivingSuccessData = [
    {
        video: "https://youtu.be/OYQkPUu5diM",
        icon: '/assets/icons/driving-success/box.png',
        count: 500,
        suffix: "+",
        description: "Loads Delivered Monthly",
    },
    {
        video: "https://youtu.be/jJv08b2b6iY",
        icon: '/assets/icons/driving-success/stop-watch.png',
        count: 98,
        suffix: "%",
        description: "On-Time Delivery Rate",
    },
    {
        video: "https://youtu.be/YI747maCGEI",
        icon: '/assets/icons/driving-success/trophy.png',
        count: 25,
        suffix: "+",
        description: "Owner-Operator Business Members",
    },
    {
        video: "https://youtu.be/ow5SS_NQrmA",
        icon: '/assets/icons/driving-success/add-user.png',
        count: 20,
        suffix: "+",
        description: "Years of Industry Expertise",
    },
];

export default function DrivingSuccess() {

    return (
        <>
            <Box
                component={MotionViewport}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: {
                        xs: '12% 0',
                        lg: '7% 0',
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: `url(/assets/home/driving.png) `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    overflowX: 'hidden',
                }}
            >

                <Grid item xs={12} md={12}
                    sx={{
                        marginBottom: { xs: '2rem', md: '5rem' }
                    }}
                >
                    <m.span variants={varFade().inUp}>
                        <Typography
                            gutterBottom
                            textAlign={'center'}
                            variant="h2"
                            fontWeight={700}
                            sx={{
                                color: '#fff',
                            }}
                        >
                            Driving Success
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { md: '90%', xs: '60%' }, margin: 'auto' }}>
                            <img src={line} alt='line' />
                        </Box>
                    </m.span>
                </Grid>

                <Grid
                    container
                    spacing={{ xs: 1, lg: 4 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: {
                            xs: '0 16px',
                            md: '0 32px',
                            lg: '0 64px',
                        },
                    }}
                >
                    {drivingSuccessData.map((item, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            display={'grid'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            sx={{
                                marginTop: {
                                    lg: '-2rem',
                                    md: '-2rem',
                                    sm: '2rem',
                                    xs: '2rem',
                                },
                            }}
                        >
                            <Card
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    color: "white",
                                    textAlign: "center",
                                    boxShadow: "none",
                                    borderRadius: "22px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "330px", // Fixed height for all cards
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        position: "relative",
                                        overflow: "hidden",
                                        borderTopLeftRadius: "20px",
                                        borderTopRightRadius: "20px",
                                        height: "50%", // Ensures the video section is consistent
                                    }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`${item.video.replace("youtu.be", "www.youtube.com/embed")}?autoplay=1&mute=1`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </Box>
                                <CardContent sx={{ pt: 1 }}>
                                    <Box
                                        component="img"
                                        src={item.icon}
                                        alt={item.count}
                                        sx={{
                                            width: "40px",
                                            height: "40px",
                                            marginBottom: "0.5rem",
                                        }}
                                    />
                                    <Typography
                                        variant="h3"
                                        sx={{ fontWeight: "bold", mb: 0, color: "#000000" }}
                                    >
                                        {item.count}+
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
