import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import backgroundImage from '../images/transparent-bg-portfolio.png'
import { projects } from '../utils/projects'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useCart } from '../Context'
import { useLocation } from 'react-router-dom'

const Projects = () => {
  const projectRef = useRef(null)
  const { state, dispatch } = useCart()
  const location = useLocation()

  useEffect(() => {
    dispatch({ type: 'SET_PROJECT_REF', payload: projectRef })
    if (location.state && location.state.scrollToProject) {
      const projectElement = projectRef.current
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [projectRef, dispatch, location])

  return (
    <Box
      ref={projectRef}
      sx={{ backgroundImage: `url(${backgroundImage})`, pb: '5rem' }}
    >
      <Stack
        display="flex"
        flexDirection="column"
        ml={{ lg: '6rem', sm: '0rem', xs: '0rem' }}
      >
        <Stack
          display="flex"
          flexDirection="column"
          mt="5rem"
          ml={{ lg: '0rem', sm: '2rem', xs: '1rem' }}
        >
          <Typography fontSize="1rem" color="rgb(153, 213, 198)">
            What have I done ?
          </Typography>
          <Typography
            mt="1rem"
            variant="h4"
            color="#fff"
            fontFamily="Fjalla one"
            letterSpacing="0.3rem"
          >
            Case Studies
          </Typography>
        </Stack>
        <Stack
          display="grid"
          gridTemplateColumns={{
            lg: 'repeat(3, 1fr)',
            sm: 'repeat(2, 1fr)',
            xs: '1fr',
          }}
          gap={3}
          mt="2rem"
          mr={{ lg: '0rem', sm: '0rem', xs: '2rem' }}
          ml={{ lg: '0rem', sm: '2rem', xs: '2rem' }}
        >
          {projects.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: { lg: '90%', sm: '90%', xs: '100%' },
              }}
            >
              <Link
                to={`${item.link}`}
                target="_blank"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150px"
                    image={item.image}
                    alt="projects"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontFamily="Fjalla one"
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Projects
