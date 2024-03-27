import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

const MediaFooter = () => {
  return (
    <Box mt="2rem" mb="2rem" mr="1rem">
      <Stack display="flex" flexDirection="row" gap={2} alignItems="center">
        <Link
          to="https://www.linkedin.com/in/confidence-theophilus/"
          target="_blank"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(88, 56, 149)',
              padding: '12px',
              borderRadius: '50%',
              width: '26px', // Adjust width and height as needed
              height: '26px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#fff"
              width="26"
              height="26"
              style={{
                display: 'block',
              }}
            >
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </div>
        </Link>
        <Link to="https://github.com/spanzyteo" target="_blank">
          <img
            style={{
              height: '26px',
              width: '26px',
              color: '#fff',
              backgroundColor: 'rgb(88, 56, 149)',
              padding: '10px',
              borderRadius: '50%',
            }}
            src={github}
            alt="git-hub"
          />
        </Link>
        <Link to="https://twitter.com/spanzyteo" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#fff"
            height="26"
            width="26"
            style={{
              backgroundColor: 'rgb(88, 56, 149)',
              padding: '10px',
              borderRadius: '50%',
            }}
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </Link>
      </Stack>
    </Box>
  )
}

export default MediaFooter
