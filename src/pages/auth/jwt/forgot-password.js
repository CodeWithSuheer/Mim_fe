import { Helmet } from 'react-helmet-async';
// sections
import { JwtForgotPasswordView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function ClassicForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Forgot Password</title>
      </Helmet>

      <JwtForgotPasswordView />
    </>
  );
}
