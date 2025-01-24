import { Helmet } from 'react-helmet-async';
// sections
import { JwtVerifyPasswordView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function ClassicVerifyPage() {
  return (
    <>
      <Helmet>
        <title> Verify</title>
      </Helmet>

      <JwtVerifyPasswordView />
    </>
  );
}
