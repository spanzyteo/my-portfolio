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
              fontSize={{ lg: '1rem', sm: '1rem', xs: '1rem' }}
            >
              Hello! I’m Theophilus Confidence, a frontend Engineer passionate
              and results-driven Frontend Developer with expertise in React.js,
              Next.js, TypeScript, Tailwind CSS and more. I specialize in building
              scalable, high-performance web applications with a strong focus on
              UI/UX, state management, and responsive design. With a solid
              understanding of backend technologies such as Node.js, Express.js,
              Firebase, MongoDB, Mysql. I effectively collaborate with backend
              teams to ensure seamless API integrations and smooth data flow
              across applications. Driven by curiosity and continuous learning,
              I stay updated with the latest technologies to ensure scalable,
              future-ready solutions. I thrive in collaborative environments
              where creativity and teamwork fuel innovative outcomes. Let’s
              connect to bring your ideas to life with impactful, modern web
              solutions!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default About
