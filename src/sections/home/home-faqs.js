import React, { useState } from 'react';
import { useMediaQuery } from '@mui/system';
import Iconify from 'src/components/iconify';
import { useTheme } from '@mui/material/styles';
import { MotionViewport } from 'src/components/animate';

// mui
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

export default function HomeFAQs() {
  const theme = useTheme();

  const is500px = useMediaQuery('(min-width:600px)');
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Grid
        component={MotionViewport}
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: {
            xs: '10% 0',
            lg: '5% 0',
          },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={11}
          md={6}
          sx={{
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            gutterBottom
            textAlign="center"
            variant="h2"
            fontWeight={900}
          >
            Frequently Asked Questions
          </Typography>

          <Typography gutterBottom textAlign="center" variant="h6" sx={{ marginBottom: "1rem" }} fontWeight={400}>
            Everything you need to know about Accounty.
          </Typography>
        </Grid>

        <Grid item xs={11} md={6}>
          {FaqsData?.map((faq, idx) => (
            <Accordion
              key={idx}
              expanded={expanded === idx}
              onChange={handleChange(idx)}
            >
              <AccordionSummary
                sx={{
                  '&:after': {
                    backgroundColor: 'transparent',
                  },
                }}
                expandIcon={
                  <Iconify
                    icon={expanded === idx ? 'tabler:minus' : 'tabler:plus'}
                    sx={{ margin: '1.7rem 0rem', color: "#078DEE" }}
                  />
                }
              >
                <Typography
                  variant="subtitle1"
                  sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}
                >
                  {faq.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'tranparent',
                }}
              >
                <Typography>{faq.message}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

const FaqsData = [
  {
    title: 'What is Accounty?',
    message: "Accounty is a comprehensive financial management platform designed to simplify your accounting needs. It helps you track expenses, manage invoices, calculate taxes, and organize your finances in one place.",
  },
  {
    title: 'How can we use Accounty?',
    message: "Using Accounty is simple! Sign up for free, log in, and access a powerful dashboard equipped with tools to manage your finances. You can create and track invoices, monitor your cash flow, generate financial reports, and even calculate taxes all in just a few clicks.",
  },
  {
    title: 'Is my data safe with Accounty?',
    message: "Yes, data security is our top priority. Accounty uses advanced encryption to keep your financial information safe and secure. Your data is private and accessible only to you.",
  },
  {
    title: 'Can Accounty help with tax calculations?',
    message: "Yes, Accounty includes built-in tools to help you calculate taxes, track deductible expenses, and even generate tax reports to make filing easier.",
  },
];
