import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';

export default function ReadyToJoin() {

    return (
        <>
            <Box
                component={MotionViewport}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: {
                        xs: '13% 0',
                        lg: '4% 0',
                    },
                    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.0)), url(/assets/images/about/ppBanner.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Grid
                    container
                    sx={{
                        margin: {
                            lg: '7% 0',
                            md: '8% 0',
                            sm: '0% 0',
                            xs: '0% 0 5% 0',
                        },
                        paddingLeft: { xs: '5%', md: '10%' },
                    }}
                    width="100%"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                >

                    <Grid
                        item
                        xs={11}
                        md={11}
                        width="100%"
                        display={'grid'}
                        justifyContent={'start'}
                        alignItems={'flex-start'}
                    >
                        <m.span variants={varFade().inUp}>
                            <Typography
                                gutterBottom
                                textAlign="start"
                                variant="h3"
                                fontWeight={900}
                                color="primary"
                            >
                                Ready to join a company
                            </Typography>

                            <Typography
                                gutterBottom
                                textAlign="start"
                                variant="h2"
                                fontWeight={900}
                            >
                                That’s got your back
                            </Typography>

                            <Button type="button" variant="contained" color="primary" sx={{ backgroundColor: '#A70E16', color: "#fff", mt: 2, px: 2, py: 1 }}>
                                Apply Now
                            </Button>
                        </m.span>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
