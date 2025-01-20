import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';

export default function OurMission() {

    return (
        <>
            <Box
                component={MotionViewport}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: {
                        xs: '10% 0',
                        lg: '4% 0',
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: `url(/assets/landingpage/backgrounds/ourMission.png) `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >

                <Grid item xs={12} md={12} px={2}>
                    <m.span variants={varFade().inUp}>
                        <Typography gutterBottom variant="h2" fontWeight={800}
                            sx={{
                                color: '#A70E16',
                                marginBottom: {
                                    xs: '1rem',
                                    lg: '4rem'
                                },
                                textAlign: {
                                    xs: 'start',
                                    lg: 'center'
                                }
                            }}>
                            Where Truckers Come First
                        </Typography>
                    </m.span>
                </Grid>

                {/* TRACKOR 01 */}
                <Grid
                    container
                    sx={{
                        margin: {
                            xs: '0% 0',
                            lg: '1% 0',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Grid
                        item
                        xs={11}
                        md={5}
                        order={{ xs: 1, md: 1 }}
                        display={'grid'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <m.span variants={varFade().inUp}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                fontWeight={400}
                                xs={{ paddingRight: '2rem' }}
                                sx={{ lineHeight: 1.8 }}
                            >
                                Where the Truckers come first your trusted partner in reliable trucking solutions across the United States. It's the kind of place where truckers can join to have an interest free cash based business and earn an honest living.
                            </Typography>
                        </m.span>
                    </Grid>

                    <Grid
                        mt={8}
                        item
                        xs={12}
                        md={5}
                        order={{ xs: 2, md: 2 }}
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
                                        src={'/assets/background/truck_1.jpg'}
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

                {/* TRACKOR 02 */}
                <Grid
                    container
                    sx={{
                        margin: {
                            xs: '5% 0',
                            lg: '5% 0',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Grid
                        item
                        xs={11}
                        md={5}
                        order={{ xs: 1, md: 2 }}
                        display={'grid'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <m.span variants={varFade().inUp}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                fontWeight={400}
                                xs={{ paddingRight: '2rem' }}
                                sx={{ lineHeight: 1.8 }}
                            >
                                We specialize in business-to-business dry freight hauling, mostly in the Northeast region of the United States. In today's fast-evolving world, we are rare in the sense that we say what we mean and we do what we say
                            </Typography>
                        </m.span>
                    </Grid>

                    <Grid
                        mt={8}
                        item
                        xs={12}
                        md={5}
                        order={{ xs: 2, md: 1 }}
                        sx={{
                            marginTop: {
                                lg: '-2rem',
                                md: '-2rem',
                                sm: '2rem',
                                xs: '1rem',
                            },
                        }}
                    >
                        <m.span variants={varFade().inUp}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: {
                                        lg: 'flex-start',
                                        xs: 'center',
                                    },
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        paddingInline: {
                                            xs: '1rem',
                                            md: '0rem',
                                        },
                                    }}
                                >
                                    <img
                                        src={'/assets/background/truck_2.jpg'}
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

                {/* TRACKOR 03 */}
                <Grid
                    container
                    sx={{
                        margin: {
                            xs: '2% 0',
                            lg: '1% 0',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Grid
                        item
                        xs={11}
                        md={5}
                        order={{ xs: 1, md: 1 }}
                        display={'grid'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <m.span variants={varFade().inUp}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                fontWeight={400}
                                xs={{ paddingRight: '2rem' }}
                                sx={{ lineHeight: 1.8 }}
                            >
                                MIM Transport Group is a place where owner-operators find a home. We believe in creating a family-like environment where honesty, dependability, and straight talk are at the core of everything we do. If you're an owner-operator looking for a company that values your hard work, keeps its promises, and treats you like family, you've come to the right place.
                            </Typography>
                        </m.span>
                    </Grid>

                    <Grid
                        mt={8}
                        item
                        xs={12}
                        md={5}
                        order={{ xs: 2, md: 2 }}
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
                                        src={'/assets/background/truck_3.jpg'}
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

                {/* TRACKOR 04 */}
                <Grid
                    container
                    sx={{
                        margin: {
                            xs: '5% 0',
                            lg: '5% 0',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Grid
                        item
                        xs={11}
                        md={5}
                        order={{ xs: 1, md: 2 }}
                        display={'grid'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <m.span variants={varFade().inUp}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                fontWeight={400}
                                xs={{ paddingRight: '2rem' }}
                                sx={{ lineHeight: 1.8 }}
                            >
                                We provide a supportive and transparent partnership that prioritizes your success. From ensuring consistent loads to offering fair compensation and clear communication, we're here to help you thrive on the road. At MIM Transport Group, your journey matters, and so does your peace of mind.
                            </Typography>
                        </m.span>
                    </Grid>

                    <Grid
                        mt={8}
                        item
                        xs={12}
                        md={5}
                        order={{ xs: 2, md: 1 }}
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
                                        lg: 'flex-start',
                                        xs: 'center',
                                    },
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        paddingInline: {
                                            xs: '1rem',
                                            md: '0rem',
                                        },
                                    }}
                                >
                                    <img
                                        src={'/assets/background/truck_4.jpg'}
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
