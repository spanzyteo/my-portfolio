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
          <Stack ml={{ lg: '24rem', sm: '30rem', xs: '30rem' }}>
            <img
              style={{ height: '90px', width: '90px', marginRight: '8rem' }}
              src={laptopIcon}
              alt="laptop-icon"
            />
          </Stack>
          <Stack display="flex" flexDirection="column">
            <Typography
              mr={{ lg: '0rem', sm: '0rem', xs: '0rem' }}
              ml={{ lg: '0rem', sm: '3rem', xs: '3rem' }}
              mt="1rem"
              fontSize="1.2rem"
              color="rgb(153, 213, 198)"
            >
              Who am I ?
            </Typography>
            <Typography
              mt="1rem"
              variant="h2"
              color="#fff"
              fontFamily="Fjalla one"
              letterSpacing="0.3rem"
              ml={{ lg: '0rem', sm: '3rem', xs: '3rem' }}
            >
              A Bit About Me
            </Typography>
            <Typography
              width="520px"
              mt="2rem"
              color="#fff"
              lineHeight="1.7rem"
              ml={{ lg: '0rem', sm: '3rem', xs: '3rem' }}
              fontWeight={600}
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
