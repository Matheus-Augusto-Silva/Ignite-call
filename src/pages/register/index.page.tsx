import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '../../lib/axios'
import { Container, Header, Form } from './styles'

export default function Register() {
  const [errorMessage, setErrorMessage] = useState('')

  const registerFormSchema = z.object({
    username: z
      .string()
      .min(3, { message: 'O nome de usuário deve ter no mínimo 3 letras' })
      .max(20, { message: 'O nome de usuário deve ter no máximo 20 letras' })
      .regex(/^([a-z\\-]+)$/i, {
        message: 'O nome de usuário deve conter apenas letras e hífens',
      })
      .transform((username) => username.toLowerCase()),
    name: z.string().min(3, { message: 'O nome deve ter no mínimo 3 letras' }),
  })

  type RegisterFormData = z.infer<typeof registerFormSchema>

  const router = useRouter()
  const { username } = router.query

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: username as string,
      name: '',
    },
  })

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        username: data.username,
        name: data.name,
      })
      setErrorMessage('')
      router.push(`/register/connect-calendar`)
      console.log('errorMessage', errorMessage)
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message)
      console.log('errorMessage', errorMessage)
    }
  }
  return (
    <Container>
      <Header>
        <Heading>Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep currentStep={1} size={4} />
      </Header>
      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>Nome de usuário</label>
        <TextInput prefix="ignite.com/" {...register('username')} />
        {errors.username && (
          <span style={{ color: 'red' }}>{errors.username.message}</span>
        )}
        <label>Nome completo</label>
        <TextInput {...register('name')} />
        {errors.name && (
          <span style={{ color: 'red', marginBottom: '3px' }}>
            {errors.name.message}
          </span>
        )}
        {errorMessage !== '' && (
          <span style={{ color: 'red', marginBottom: '3px' }}>
            {errorMessage}
          </span>
        )}

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
