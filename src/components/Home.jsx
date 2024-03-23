import { Box, Stack, Typography } from '@mui/material'
import diagonalArrow from '../images/diagonal-arrow.png'
import myPicture from '../images/my-picture.JPG'

const Home = () => {
  return (
    <Box mt="10rem">
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          display="flex"
          flexDirection="column"
          ml={{ lg: '6rem', sm: '1rem', xs: '1rem' }}
        >
          <Typography variant="h3" color="white" fontFamily="Fjalla one">
            Hello, I'm
          </Typography>
          <Typography
            variant="h1"
            fontFamily="Teko"
            // color="white"
            fontWeight={400}
            sx={{
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
            mb="0rem"
          >
            Confidence
          </Typography>
          <Typography color="white" width="400px" mt="-1rem" lineHeight="2rem">
            Frontend Developer passionate about creating user-friendly and
            innovative web applications. Open to new opportunities.
          </Typography>
          <button
            className="resume-btn"
            style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              padding: '12px 15px',
              justifyContent: 'center',
              background: 'linear-gradient(to left, #222222, #666666)',
              width: '150px',
              borderRadius: '8px',
              border: '2px solid blue',
              gap: '10px',
              color: 'white',
              fontSize: '1rem',
            }}
          >
            My Resume{' '}
            <img
              style={{ height: '15px', width: '15px', color: '#fff' }}
              src={diagonalArrow}
              alt=""
            />
          </button>
        </Stack>
        <Stack
          display={{ lg: 'flex', sm: 'none', xs: 'none' }}
          position="relative"
          mr="12rem"
          mb="2rem"
        >
          <img
            style={{ height: '450px', width: '320px', objectFit: 'cover' }}
            src={myPicture}
            alt="my-picture"
          />
          <Stack
            position="absolute"
            height="450px"
            width="320px"
            bgcolor="rgb(88, 56, 149)"
            sx={{ opacity: 0.5 }}
            mt="2rem"
            ml="2rem"
          ></Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Home