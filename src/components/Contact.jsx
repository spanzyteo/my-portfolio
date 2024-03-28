import { Box, Stack, TextField, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import backgroundImage from '../images/transparent-bg-portfolio.png'
import envelope from '../images/envelope.svg'

const Contact = () => {
  const form = useRef()
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let hasErrors = false
    const newErrors = {}

    // Validate each field
    if (!form.current.from_name.value.trim()) {
      newErrors.from_name = 'Full Name is required'
      hasErrors = true
    }

    if (!form.current.from_email.value.trim()) {
      newErrors.from_email = 'Email is required'
      hasErrors = true
    }

    if (!form.current.message.value.trim()) {
      newErrors.message = 'Message is required'
      hasErrors = true
    }

    // Update errors state
    setErrors(newErrors)

    return !hasErrors
  }

  const sendEmail = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      console.log('Form validation failed')
      return
    }

    emailjs
      .sendForm('contact_service', 'contact_form', form.current, {
        publicKey: 'h_JaFYTm2NAFkGlXF',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          toast.success('Form submitted successfully')
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        bgcolor: '#fff',
        opacity: 0.9,
        pt: '5rem',
        pb: '8rem',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Stack
        display="flex"
        flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
      >
        <Stack
          mt="3rem"
          display="flex"
          flexDirection="column"
          ml={{ lg: '8rem', sm: '2rem', xs: '2rem' }}
        >
          <Typography
            fontSize="1.3rem"
            // color="rgb(153, 213, 198)"
            fontFamily="DM Sans"
            fontWeight={400}
          >
            Send a Message
          </Typography>
          <Typography
            mt="1rem"
            fontFamily="Fjalla one"
            fontSize={{ lg: '3rem', sm: '2rem', xs: '2rem' }}
          >
            Connect with me
          </Typography>
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              label="Full Name"
              margin="none"
              type="text"
              name="from_name"
              error={errors.from_name}
              helperText={errors.from_name}
              sx={{
                mt: '1rem',
                width: { lg: '450px', sm: '90%', xs: '90%' },
                bgcolor: 'rgb(235, 243, 252)',
              }}
            />
            <TextField
              label="Email"
              margin="none"
              type="email"
              name="from_email"
              error={errors.from_email}
              helperText={errors.from_email}
              sx={{
                mt: '1rem',
                width: { lg: '450px', sm: '90%', xs: '90%' },
                bgcolor: 'rgb(235, 243, 252)',
              }}
            />
            <TextField
              label="Message"
              margin="normal"
              name="message"
              multiline
              rows={4}
              error={errors.message}
              helperText={errors.message}
              sx={{
                mt: '1rem',
                width: { lg: '450px', sm: '90%', xs: '90%' },
                bgcolor: 'rgb(235, 243, 252)',
              }}
            />
            <button
              className="email-button"
              type="submit"
              style={{
                marginTop: '3rem',
                border: 'none',
                backgroundColor: 'rgb(80, 200, 239)',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                paddingLeft: '1.2rem',
                paddingRight: '1.2rem',
                borderRadius: '6px',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Let's Connect
            </button>
          </form>
          <ToastContainer />
        </Stack>
        <Stack
          display={{ lg: 'block', sm: 'none', xs: 'none' }}
          mt="14rem"
          ml="4rem"
        >
          <img src={envelope} alt="envelope" />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Contact
