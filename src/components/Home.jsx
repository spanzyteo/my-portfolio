import { Box, Stack, Typography } from '@mui/material'
import diagonalArrow from '../images/diagonal-arrow.png'
import myPicture from '../images/my-picture.jpeg'
import backgroundImage from '../images/transparent-bg-portfolio.png'
import Media from './Media'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import resume from '../resume/resume.pdf'

const Home = () => {
  const openResume = () => {
    window.open(resume, '_blank')
  }
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            mt={{ lg: '17rem', sm: '12rem', xs: '12rem' }}
            display="flex"
            flexDirection="column"
            ml={{ lg: '6rem', sm: '2rem', xs: '2rem' }}
          >
            <Typography variant="h3" color="white" fontFamily="Fjalla one">
              Hello, I'm
            </Typography>
            <Typography
              fontSize={{ lg: '4rem', sm: '3rem', xs: '3rem' }}
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
            <Typography
              color="white"
              width={{ lg: '400px', sm: '300px', xs: '300px' }}
              mt="1rem"
              lineHeight="2rem"
              fontSize={{ lg: '1rem', sm: '1.5rem', xs: '1.5rem' }}
            >
              A Frontend Developer passionate about creating user-friendly and
              innovative web applications. Open to new opportunities.
            </Typography>
            <button
              className="resume-btn"
              onClick={openResume}
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
                cursor: 'pointer',
              }}
            >
              My Resume{' '}
              <img
                style={{ height: '15px', width: '15px', color: '#fff' }}
                src={diagonalArrow}
                alt=""
              />
            </button>
            <Media />
          </Stack>
          <Stack
            display={{ lg: 'flex', sm: 'none', xs: 'none' }}
            position="relative"
            mr="12rem"
            mb="5rem"
            mt="14rem"
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
              bgcolor="rgb(80, 200, 239)"
              sx={{ opacity: 0.2 }}
              mt="2rem"
              ml="2rem"
            ></Stack>
            <Stack position="absolute" display="flex" flexDirection="column">
              <Typography
                mt="12rem"
                variant="h2"
                ml="-2rem"
                fontFamily="Fjalla one"
                fontWeight={400}
                letterSpacing={6}
                sx={{
                  WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
                  WebkitTextStrokeColor: 'blue',
                  WebkitTextStrokeWidth: '1px',
                }}
              >
                Confidence
              </Typography>
              <Typography
                mt="0rem"
                variant="h2"
                ml="1rem"
                fontFamily="Fjalla one"
                fontWeight={400}
                letterSpacing={6}
                sx={{
                  WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
                  WebkitTextStrokeColor: 'blue',
                  WebkitTextStrokeWidth: '1px',
                }}
              >
                Theophilus
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <About />
      <Projects />
      <Contact />
    </Box>
  )
}

export default Home
