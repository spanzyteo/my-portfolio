import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Context'

const Navbar = () => {
  const { state } = useCart()

  const projectRef = state.projectRef

  const handleScrollToProject = () => {
    if (projectRef && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const email = 'spanzytheo@gmail.com'
  const subject = 'Portfolio Inquiry'

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}`
  }
  return (
    <Box sx={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 999 }}>
      <Stack
        height="120px"
        width={{ lg: '100%', sm: '100%', xs: '100%' }}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ outline: '0px none rgb(0, 0, 0)' }}
        borderBottom="2px solid rgb(18, 18, 18)"
        bgcolor="rgba(0, 0, 0, 0.3)"
      >
        <Stack>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              color="#fff"
              sx={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
              variant="h5"
              ml={{ lg: '3rem', sm: '1rem', xs: '1rem' }}
              fontWeight={700}
              fontSize={{ lg: '2rem', sm: '1.2rem', xs: '1.2rem' }}
            >
              CONFIDENCE
            </Typography>
          </Link>
        </Stack>
        <Stack
          display={{ lg: 'flex', sm: 'flex', xs: 'flex' }}
          flexDirection="row"
          gap={2}
          alignItems="center"
          mr={{ lg: '5rem', sm: '2rem', xs: '1rem' }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            onClick={handleScrollToProject}
          >
            <Typography
              color="#fff"
              fontSize={{ lg: '1.3rem', sm: '1.2rem', xs: '1rem' }}
            >
              PROJECTS
            </Typography>
          </Link>
          <Stack>
            <button
              onClick={handleClick}
              className="hire-me-button"
              color="#fff"
            >
              HIRE ME
            </button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar
