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

const Projects = () => {
  return (
    <Box sx={{ backgroundImage: `url(${backgroundImage})`, pb: '5rem' }}>
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
            variant="h2"
            color="#fff"
            fontFamily="Fjalla one"
            letterSpacing="0.3rem"
          >
            Case Studies
          </Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
          mt="2rem"
          gap={3}
          // alignItems="center"
          // justifyContent="center"
        >
          {projects.map((item) => (
            <Card
              key={item.id}
              sx={{ width: { lg: '350px', sm: '100%', xs: '100%' } }}
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
                    <Typography
                      variant="body2"
                      // color="text.secondary"
                      // fontWeight={600}
                    >
                      {item.description}
                    </Typography>
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
