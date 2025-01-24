import React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { _socials } from 'src/_mock';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { Button, InputAdornment, TextField } from '@mui/material';
import EmailInboxIcon from 'src/assets/icons/email-inbox-icon';
import { useLocales } from 'src/locales';
import { HashLink } from 'react-router-hash-link';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { enqueueSnackbar } from 'notistack';
// import { useNewsLetterMutation } from 'src/store/Reducer/newsLetter';
import { LoadingButton } from '@mui/lab';

const SOCIALS = [
  {
    name: 'Facebook',
    href: '/',
  },
  {
    name: 'Instagram',
    href: '/',
  },
  {
    name: 'Twitter',
    href: '/',
  },
];

const LINKS = [
  {
    headline: 'Company',
    children: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about-us' },
      { name: "Driver Application", href: "/driver" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    headline: 'Policies',
    children: [
      { name: "Cookies & Privacy Policy", href: "/privacy-policy" },
      { name: 'Terms & Condition', href: '/tac' },
    ],
  },
];

export default function Footer() {
  const { t } = useLocales();

  // const [sendNewsLetter] = useNewsLetterMutation();
  let sendNewsLetter;


  const emailSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const methods = useForm({
    resolver: yupResolver(emailSchema),
  });

  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const newData = {
        email: data.email,
      };


      const response = await sendNewsLetter(newData);

      if (!response.error) {
        enqueueSnackbar(response?.data?.message || 'Success!');
        reset();
        setValue('email', '');
      }
    } catch (error) {
      console.error(error);
    }
  });

  const mainFooter = (
    <>
      <Box
        component="footer"
        sx={{
          position: 'relative',
          color: 'white',
          backgroundColor: "black",
        }}
      >
        <Divider />
        <Container sx={{ pt: 8, pb: { xs: 2, md: 5 }, textAlign: { xs: 'center', md: 'unset' } }}>
          <Grid container justifyContent={{ xs: 'center', md: 'space-between' }}>
            <Grid xs={12} md={5}>
              <Logo sx={{
                mb: 1,
                width: 105,
                height: 105,
              }} />

              <FormProvider methods={methods} onSubmit={onSubmit}>
                <Grid
                  item
                  spacing={0}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    // marginTop: '1rem',
                  }}
                >
                  <RHFTextField
                    name="email"
                    // label="Email"
                    variant="outlined"
                    placeholder="Enter your email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Iconify icon="mdi:email-outline" width={28} color="#A70E16" />
                        </InputAdornment>
                      ),
                      sx: {
                        color: '#fff',
                        borderRadius: '1rem 0 0 1rem',
                        borderColor: '#484848',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        backgroundColor: 'tranparent',
                      },
                    }}
                  />

                  <LoadingButton
                    color="primary"
                    size="large"
                    // sx={{ minWidth: '10rem', marginTop: '1rem' }}
                    style={{
                      borderRadius: '0 1rem 1rem 0',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: '#A70E16',
                      height: '100%',
                      minHeight: '55px',
                      width: '10rem',
                      backgroundColor: '#A70E16',
                    }}
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Continue
                  </LoadingButton>
                </Grid>
              </FormProvider>

              {/* <Stack
                direction="row"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{
                  mt: 1,
                  mb: { xs: 5, md: 0 },
                }}
              >
                <IconButton sx={{ mr: 1 }}>
                  <a
                    href="mailto:support@accounty.com"
                    target="_blank"
                    underline="none"
                  >
                    <Iconify
                      color="#fafafa"
                      icon={'material-symbols-light:stacked-email'}
                      width={30}
                    />
                  </a>
                </IconButton>

                <IconButton sx={{ mr: 1 }}>
                  <Link
                    href="/"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    <Iconify color="#fafafa" icon={'basil:instagram-solid'} width={30} />
                  </Link>
                </IconButton>
              </Stack> */}
            </Grid>

            <Grid xs={12} md={6}>
              <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} sx={{ my: { xs: 4, md: 0 } }}>
                {LINKS.map((list) => (
                  <Stack
                    key={list.headline}
                    spacing={2}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    sx={{ width: 1 }}
                  >
                    <Typography component="div" sx={{ fontSize: '1.05rem', fontWeight: 700 }}>{t(list.headline)}</Typography>
                    {list.headline === 'Company' &&
                      list.children.map((link) => (
                        <Link
                          key={link.name}
                          component={RouterLink}
                          href={link.href}
                          color="inherit"
                          variant="body2"
                          sx={{ color: 'white' }}
                        >
                          {t(link.name)}
                        </Link>
                      ))}

                    {/* Stack for external links */}
                    {list.headline === 'Legal' &&
                      list.children.map((link) => (
                        <Link
                          key={link.name}
                          component={RouterLink}
                          href={link.href}
                          color="inherit"
                          variant="body2"
                          sx={{ color: 'white' }}
                        >
                          {t(link.name)}
                        </Link>
                      ))}

                    {/* Stack for "Find Us" social links */}
                    {list.headline === 'Policies' &&
                      list.children.map((social) => (
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener"
                          color="inherit"
                          variant="body2"
                          sx={{ color: 'white' }}
                        >
                          {t(social.name)}
                        </Link>
                      ))}
                  </Stack>
                ))}
              </Stack>

              <Stack
                direction="row"
                justifyContent={{ xs: 'center', md: 'flex-end' }}
                sx={{
                  mt: 1,
                  mb: { xs: 5, md: 0 },
                }}
              >
                {[
                  { href: '/', icon: 'ic:outline-facebook' },
                  { href: '/', icon: 'mdi:instagram' },
                  { href: '/', icon: 'mdi:linkedin' },
                ].map(({ href, icon }, index) => (
                  <IconButton key={index} sx={{ mr: 1 }}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <Iconify color="#fafafa" icon={icon} width={28} />
                    </Link>
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#A70E16",
          color: "#fff"
        }}
      >
        <Typography variant="body2">{t('© 2025. All rights reserved')}</Typography>
      </Box>
    </>
  );

  return mainFooter;
}
