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
        video: "/assets/video/dummy_video_1.mp4",
        count: 500,
        suffix: "+",
        description: "Loads Delivered Monthly",
    },
    {
        video: "/assets/video/dummy_video_1.mp4",
        count: 98,
        suffix: "%",
        description: "On-Time Delivery Rate",
    },
    {
        video: "/assets/video/dummy_video_1.mp4",
        count: 25,
        suffix: "+",
        description: "Owner-Operator Business Members",
    },
    {
        video: "/assets/video/dummy_video_1.mp4",
        count: 20,
        suffix: "+",
        description: "Years of Industry Expertise",
    },
];

export default function TakeCharge() {

    return (
        <>
            <Box
                component={MotionViewport}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: {
                        xs: '12% 0',
                        lg: '3% 0',
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
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        position: "relative",
                                        overflow: "hidden",
                                        borderTopLeftRadius: "20px",
                                        borderTopRightRadius: "20px",
                                    }}
                                >
                                    <video
                                        src={item.video}
                                        controls
                                        autoPlay
                                        muted
                                        style={{
                                            width: "100%",
                                            // borderRadius: "20px",
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ py: 1 }}>
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
