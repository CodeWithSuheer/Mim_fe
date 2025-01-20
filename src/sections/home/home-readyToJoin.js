import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';

export default function TakeCharge() {

    return (
        <>
            <Box
                component={MotionViewport}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: {
                        lg: '8% 0',
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: `url(/assets/background/readyToBg.png) `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Grid
                    container
                    sx={{
                        margin: {
                            xs: '10% 0',
                            lg: '1% 0',
                        },
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Grid
                        item
                        xs={11}
                        md={5}
                        order={{ xs: 2, md: 2 }}
                        display={'grid'}
                        justifyContent={'flex-end'}
                        alignItems={'center'}
                        width="100%"
                        sx={{
                            marginTop: {
                                lg: '-2rem',
                                md: '-2rem',
                                sm: '2rem',
                                xs: '2rem',
                            },
                        }}
                    >
                        <m.span variants={varFade().inUp}>
                            <Typography
                                gutterBottom
                                textAlign="start"
                                variant="h3"
                                fontWeight={900}
                                sx={{ color: "#FFF200" }}
                            >
                                Ready to join a company
                            </Typography>

                            <Typography
                                gutterBottom
                                textAlign="start"
                                variant="h3"
                                fontWeight={900}
                                sx={{ color: "#fff" }}
                            >
                                That's got your back
                            </Typography>

                            <Button type="button" variant="contained" color="primary" sx={{ backgroundColor: "A70E16", mt: 2, px: 2, py: 1 }}>
                                Apply Now
                            </Button>
                        </m.span>
                    </Grid>

                    <Grid
                        mt={8}
                        item
                        xs={12}
                        md={5}
                        width="100%"
                        order={{ xs: 1, md: 1 }}
                        sx={{
                            marginTop: {
                                lg: '-2rem',
                                md: '-2rem',
                                sm: '2rem',
                                xs: '2rem',
                            },
                        }}
                    >
                        <m.span variants={varFade().inUp}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: {
                                        lg: 'flex-end',
                                        xs: 'center',
                                    },
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        paddingInline: {
                                            xs: '1rem',
                                            md: '4rem',
                                        },
                                    }}
                                >
                                    <img
                                        src={'/assets/landingpage/takeChargeImg.png'}
                                        alt="OurMissionImage"
                                        style={{
                                            width: '30rem',
                                            height: 'auto',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>
                            </Box>
                        </m.span>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
