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
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers forever</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://youtu.be/dQw4w9WgXcQ?si=vsGoac_9ahIndKTF">
            <Button xl>More Malboro and cash</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
