import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Conqueror Brothers will win the junction 2023"
      subtitle="For real for real"
      button={
        <Link href="https://youtu.be/dQw4w9WgXcQ?si=vsGoac_9ahIndKTF">
          <Button>Win 500$ and a pack of Malboro</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
