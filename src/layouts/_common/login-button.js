import PropTypes from 'prop-types';
// @mui
import Button from '@mui/material/Button';
// routes
import { RouterLink } from 'src/routes/components';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';

// ----------------------------------------------------------------------

export default function LoginButton({ sx }) {
  return (
    // <Button component={RouterLink} href={PATH_AFTER_LOGIN} variant="outlined" sx={{ mr: 1, ...sx }}>
    //   Login
    // </Button>

    <Button
      color="primary"
      variant="contained"
      sx={{ color: "#000", fontWeight: 500 }}
    >
      Login | Sign up
    </Button>
  );
}

LoginButton.propTypes = {
  sx: PropTypes.object,
};
