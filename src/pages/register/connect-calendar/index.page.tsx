import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Container } from '../styles'
import { ConnectBox, ConnectItem, Header } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading>Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep currentStep={2} size={4} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant={'secondary'} size={'sm'}>
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button style={{ width: '100%' }} type="submit" disabled>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
