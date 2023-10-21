import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function Footer() {
  return (
    <Container as="footer" className="mt-20 w-full">
      <FadeIn>
        <div className="flex flex-col gap-2">
          <Link href="/" aria-label="Home">
            Home
          </Link>
          <Link href="/about" aria-label="Nosotros">
            Nosotros
          </Link>
        </div>

        <div className="mb-20 mt-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link className="text-2xl font-bold" href="/" aria-label="Home">
            Diana
          </Link>
          <p className="text-sm text-neutral-700">
            © Diana Platform Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
