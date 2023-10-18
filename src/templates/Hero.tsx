import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://junction-project.vercel.app/">GitHub</Link>
        </li>
        <li>
          <Link href="/xd">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The example landing page for\n'}
            <span className="text-primary-500">React developers forever</span>
          </>
        }
        description="Let's ducking win the junction."
        button={
          <Link href="https://youtu.be/dQw4w9WgXcQ?si=vsGoac_9ahIndKTF">
            <Button xl>win 500$ and a pack of Malboro</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
