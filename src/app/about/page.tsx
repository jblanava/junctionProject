import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import javiimage from '@/images/team/javi.jpeg'
import franimage from '@/images/team/fran.jpeg'
import expeimage from '@/images/team/expe.jpeg'
import lorenzoimage from '@/images/team/lorenzo.jpeg'
import maherimage from '@/images/team/maher.jpeg'
import teamimage from '@/images/team/equipo.jpeg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Equipo',
    people: [
      {
        name: 'Expe Avomo',
        role: 'Data and bussiness consultant',
        image: { src: expeimage },
      },
      {
        name: 'Fran Fernandez',
        role: 'Bussiness manager',
        image: { src: franimage },
      },
      {
        name: 'Javier Blanco',
        role: 'CTO and software engineer',
        image: { src: javiimage },
      },
      {
        name: 'Lorenzo Velasco',
        role: 'COO and mobile lead',
        image: { src: lorenzoimage },
      },
      {
        name: 'Maher bouymejan',
        role: 'ML expert',
        image: { src: maherimage },
      },
      {
        name: 'Conqueror Brothers',
        role: `Vota por nosotros (pls 🙏)`,
        image: { src: teamimage },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: ' Sobre nosotros',
  description: 'Nuestra fortaleza es el trabajo en equipo.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="Sobre nosotros"
        title="Nuestra fortaleza es el trabajo en equipo."
      >
        <p>
          Somos un equipo multiudisciplinar con pasión por crear cosas nuevas,
          desde el primer minuto que fromamos el grupo las ideas y el buen rollo
          empezaron a fluir y, creemos, que esa vibra la hemos transimitido en
          nuestro trabajo.
        </p>
      </PageIntro>

      <Team />
    </>
  )
}
