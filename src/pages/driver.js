import { Helmet } from 'react-helmet-async';
// sections
import DriverView from 'src/sections/driver/driver-view';

// ----------------------------------------------------------------------

export default function DriverPage() {
  return (
    <>
      <Helmet>
        <title> Driver</title>
      </Helmet>

      <DriverView />
    </>
  );
}
