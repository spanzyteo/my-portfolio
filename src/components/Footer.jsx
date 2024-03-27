import { Box, Typography, Stack } from '@mui/material'
import linkedIn from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import MediaFooter from './MediaFooter'

const Footer = () => {
  return (
    <>
      <Box pt="2rem">
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack ml={{ lg: '5rem', sm: '1rem', xs: '1rem' }}>
            <Typography
              color="white"
              fontFamily="Teko"
              fontSize={{ lg: '2rem', sm: '1.3rem', xs: '1.3rem' }}
              whiteSpace="nowrap"
            >
              Built With Love💚
            </Typography>
          </Stack>
          <MediaFooter />
        </Stack>
      </Box>
      <Box sx={{ bgcolor: 'rgb(88, 56, 149)', pt: '6rem' }}></Box>
    </>
  )
}

export default Footer
