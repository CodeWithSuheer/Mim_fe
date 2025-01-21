import AboutHero from '../about-hero';
import AboutWhat from '../about-what';
import AboutTeam from '../about-team';
import AboutVision from '../about-vision';
import AboutApart from '../about-Apart';
import AboutDriver from '../driver';
import Privacy from '../privacy';
import Terms from '../terms';

// ----------------------------------------------------------------------

export default function AboutView() {
  return (
    <>
      <AboutHero />

      <AboutWhat />

      <AboutVision />

      <AboutApart/>

{/* <AboutDriver/> */}
{/* <Privacy/> */}
<Terms/>


    </>
  );
}
