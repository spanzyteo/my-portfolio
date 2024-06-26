import { Box, Stack, Typography } from '@mui/material'
import Desktop from './Desktop'
import laptopIcon from '../images/person-laptop.png'

const About = () => {
  return (
    <Box pb="5rem">
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mt="5rem"
      >
        <Stack
          display={{ lg: 'block', sm: 'none', xs: 'none' }}
          mt="2rem"
          ml="6rem"
          width="480px"
        >
          <Desktop />
        </Stack>
        <Stack display="flex" flexDirection="column" mt="2rem">
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack></Stack>
            <Stack mr={{ lg: '3rem', sm: '2rem', xs: '2rem' }}>
              <img
                className="laptop-image"
                style={{ height: '90px', width: '90px' }}
                src={laptopIcon}
                alt="laptop-icon"
              />
            </Stack>
          </Stack>
          <Stack
            display="flex"
            flexDirection="column"
            mr={{ lg: '3rem', sm: '0rem', xs: '0rem' }}
          >
            <Typography
              mr={{ lg: '0rem', sm: '0rem', xs: '0rem' }}
              ml={{ lg: '0rem', sm: '2rem', xs: '2rem' }}
              mt="1rem"
              fontSize="1.2rem"
              color="rgb(153, 213, 198)"
            >
              Who am I ?
            </Typography>
            <Typography
              mt="1rem"
              color="#fff"
              fontFamily="Fjalla one"
              letterSpacing="0.3rem"
              ml={{ lg: '0rem', sm: '2rem', xs: '2rem' }}
              fontSize={{ lg: '3rem', sm: '2rem', xs: '2rem' }}
            >
              A Bit About Me
            </Typography>
            <Typography
              width={{ lg: '520px', sm: '80%', xs: '80%' }}
              mt="2rem"
              color="#fff"
              lineHeight={{ lg: '1.7rem', sm: '2.3rem', xs: '2.3rem' }}
              ml={{ lg: '0rem', sm: '2rem', xs: '2rem' }}
              // fontWeight={600}
              fontSize={{ lg: '1rem', sm: '1.3rem', xs: '1.3rem' }}
            >
              Hey there! I'm Theophilus Confidence, a frontend developer on a
              mission to craft memorable digital experiences. I've honed my
              skills in HTML, CSS, and JavaScript to transform visions into
              stunning interfaces. Driven by curiosity and a relentless pursuit
              of excellence, I immerse myself in the latest trends and
              technologies, ensuring that every project I undertake is not just
              functional but also future-proof. Beyond the code, I'm passionate
              about collaboration and teamwork. I thrive in environments where
              ideas flow freely and diverse perspectives are valued. Whether
              it's brainstorming creative solutions or fine-tuning user
              interfaces, I believe that the best results are achieved through
              collaboration and synergy. Let's connect and embark on a journey
              to create digital experiences that leave a lasting impact!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default About
