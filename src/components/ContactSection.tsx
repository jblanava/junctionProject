import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Respetamos la privacidad
            </h2>

            <div className="mt-6 border-t border-white/10 pt-8">
              <span className="font-display text-base text-white">
                Recopilamos datos anónimos para mejorar la experiencia del
                cliente y la rentabilidad de los negocios así como datos
                voluntarios que reducen el spam y la publicidad irrelevante
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
