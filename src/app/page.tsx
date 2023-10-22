import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { ContactSection } from '@/components/ContactSection'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Servicios"
        title="Ayudamos a identificar, explorar y responder a nuevas tendencias y oportunidades."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Analizamos la respuesta de los clientes ante escaparates, expositorios
          de productos y otras formas de publicidad para entender qué resulta
          interesante y qué no.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Tecnología de vanguardia">
              Utilizamos técnicas de machine learning, reconocimiento de gestos
              y neuromarketing para identificar intenciones e intereses.
            </ListItem>
            <ListItem title="Experiencia del cliente">
              Utilizamos los datos para hacer más interesantes la experiencia
              del usuario en los expositores y reducimos la publicidad genérica.
            </ListItem>
            <ListItem title="Insights para las empresas">
              Con los mapas de calor obtenidos del análisis se mejora la
              disposición de productos en los escaparates y se segmenta de
              manera eficaz la publicidad dirigida.
            </ListItem>
            <ListItem title="Integración con otras soluciones">
              La herramienta Diana puede integrarse con otros aplicaciones,
              elementos de gamificación y eventos para potenciar la
              interactividad de los clientes con los entornos comerciales.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            DIANA
          </h1>
          <h2 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            A showcase digitizer.
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            Diana es una herramienta que permite a las empresas digitalizar y
            gamificar los escaparates de pequeñas tiendas y centros comerciales.
          </p>
        </FadeIn>
      </Container>

      <ContactSection />

      <CaseStudies caseStudies={caseStudies} />

      <Services />
    </>
  )
}
