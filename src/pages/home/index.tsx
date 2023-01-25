import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import calendar from '../../assets/calendar.svg'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { HeadingContainer, IndexContainer } from './style'

export default function HomePage() {
  return (
    <IndexContainer>
      <HeadingContainer>
        <Heading size={'4xl'}>Agendamento descomplicado</Heading>
        <Text size={'lg'}>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </HeadingContainer>

      <Image
        src={calendar}
        alt="Calendario simbolizando aplicação em funcionamento"
        height={400}
        quality={100}
        priority
      />
    </IndexContainer>
  )
}
