'use client'
import { useState } from 'react'
import { toast } from "react-hot-toast";
import useRegisterModal from '@/app/hooks/useRegisterModal'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import Modal from './modal'
import Heading from '../shared/heading'
import Input from '../inputs/input'

export default function RegisterModal() {
  const registerModal = useRegisterModal()
  const [isLoading, setisLoading] = useState(false)
  const { handleSubmit, register, formState:{errors} } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true)
    axios
      .post('api/register', data)
      .then((response) => registerModal.onClose())
      .catch((error) => toast.error("something went wrong, try again"))
      .finally(() => setisLoading(false))
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to wanderBD' subtitle='Create an account' />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )
  return (
    <Modal
      body={bodyContent}
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Regsiter'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}
