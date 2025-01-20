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
    headline: 'About MIM',
    children: [
      { name: "Driver", href: "/driver" },
      { name: 'About Us', href: '/about-us' },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  // {
  //   headline: 'Legal',
  //   children: [
  //     { name: 'Privacy Policy', href: '/privacy-policy' },
  //     { name: 'What We Offer', href: '/what-we-offer' },
  //   ],
  // },
  {
    headline: 'Find Us',
    children: SOCIALS,
  },
];

export default function Footer() {
  const { t } = useLocales();

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
        <Container sx={{ pt: 8, pb: 5, textAlign: { xs: 'center', md: 'unset' } }}>
          <Grid container justifyContent={{ xs: 'center', md: 'space-between' }}>
            <Grid xs={9} md={5}>
              <Logo sx={{
                mb: 1,
                width: 105,
                height: 105,
              }} />

              <Typography
                variant="body1"
                sx={{
                  width: { xs: '100%', md: "80%" },
                  mx: { xs: 'auto', md: 'unset' },
                }}
              >
                Where the Truckers come first your trusted partner in reliable trucking solutions
              </Typography>

              <Stack
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
              </Stack>
            </Grid>

            <Grid xs={12} md={6}>
              <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
                {LINKS.map((list) => (
                  <Stack
                    key={list.headline}
                    spacing={2}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    sx={{ width: 1 }}
                  >
                    <Typography component="div" sx={{ fontSize: '1.05rem', fontWeight: 700 }}>{t(list.headline)}</Typography>

                    {/* Stack for home page section links */}
                    {list.headline === 'About MIM' &&
                      list.children.map((link) => (
                        // <HashLink
                        //   smooth
                        //   to={`/#${link.name.replace(/\s+/g, '')}`}
                        //   key={link.name}
                        //   component={RouterLink}
                        //   color="inherit"
                        //   variant="body2"
                        //   sx={{ color: 'white' }}
                        //   style={{ textDecoration: 'none', color: 'white' }}
                        // >
                        //   {t(link.name)}
                        // </HashLink>
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
                    {list.headline === 'Find Us' &&
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
