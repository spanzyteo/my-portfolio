import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 999 }}>
      <Stack
        height="120px"
        width="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ outline: '0px none rgb(0, 0, 0)' }}
        borderBottom="3px solid rgb(18, 18, 18)"
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
            >
              CONFIDENCE
            </Typography>
          </Link>
        </Stack>
        <Stack
          display={{ lg: 'flex', sm: 'none', xs: 'none' }}
          flexDirection="row"
          mr="3rem"
          gap={2}
          alignItems="center"
        >
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Typography color="#fff">ABOUT</Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }}>
            <Typography color="#fff">CONTACT</Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }}>
            <Typography color="#fff">PROJECTS</Typography>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: 'rgb(80, 200, 239)',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                paddingLeft: '1.4rem',
                paddingRight: '1.4rem',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                borderRadius: '8px',
              }}
              color="#fff"
            >
              HIRE ME
            </button>
          </Link>
        </Stack>
        <Stack
          display={{ lg: 'none', sm: 'block', xs: 'block' }}
          mr="3rem"
          sx={{ cursor: 'pointer' }}
        >
          <svg width="24" height="22" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 18v4H0v-4h24Zm0-8v4H0v-4h24Zm0-8v4H0V2h24Z"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar
