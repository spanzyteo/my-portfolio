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
          display={{ lg: "block", sm: "none", xs: "none" }}
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
            <Stack mr={{ lg: "3rem", sm: "2rem", xs: "2rem" }}>
              <img
                className="laptop-image"
                style={{ height: "90px", width: "90px" }}
                src={laptopIcon}
                alt="laptop-icon"
              />
            </Stack>
          </Stack>
          <Stack
            display="flex"
            flexDirection="column"
            mr={{ lg: "3rem", sm: "0rem", xs: "0rem" }}
          >
            <Typography
              mr={{ lg: "0rem", sm: "0rem", xs: "0rem" }}
              ml={{ lg: "0rem", sm: "2rem", xs: "2rem" }}
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
              ml={{ lg: "0rem", sm: "2rem", xs: "2rem" }}
              fontSize={{ lg: "3rem", sm: "2rem", xs: "2rem" }}
            >
              A Bit About Me
            </Typography>
            <Typography
              width={{ lg: "520px", sm: "80%", xs: "80%" }}
              mt="2rem"
              color="#fff"
              lineHeight={{ lg: "1.7rem", sm: "2.3rem", xs: "2.3rem" }}
              ml={{ lg: "0rem", sm: "2rem", xs: "2rem" }}
              fontSize={{ lg: "1rem", sm: "1rem", xs: "1rem" }}
            >
              Hello! I’m <strong>Theophilus Confidence</strong>, a{" "}
              <strong>Full-Stack Software Developer </strong>
              with over <strong>four years of hands-on experience</strong>{" "}
              designing and delivering scalable, high-performance web
              applications. My expertise spans
              <strong> React.js, Next.js, TypeScript, Tailwind CSS</strong>, and
              advanced UI/UX design, paired with a solid backend foundation in
              <strong>
                {" "}
                Node.js, Express.js, Nest.js, Prisma ORM, Type ORM, Supabase/PostgreSQL, MySQL, Firebase,
                and MongoDB
              </strong>
              .
              <br />
              <br />I specialize in building applications that merge aesthetics,
              performance, and functionality, with strong skills in state
              management (<strong>Redux, Zustand, Context API</strong>), API
              architecture, and secure authentication (
              <strong>JWT, Firebase Auth</strong>). My DevOps capabilities —
              including
              <strong>
                {" "}
                Docker containerization, GitHub Actions CI/CD, and cloud
                deployment
              </strong>{" "}
              — ensure smooth delivery from development to production.
              <br />
              <br />
              <strong>In recent projects, I have:</strong>
              <ul
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  paddingLeft: "1.2rem",
                }}
              >
                <li>
                  Built <strong>Doughnation</strong>, a full-stack donation
                  platform with Supabase-hosted PostgreSQL, containerized
                  Express.js backend, and an animated Next.js frontend.
                </li>
                <li>
                  Led <strong>STAI</strong>’s frontend development, creating
                  responsive, optimized, and user-focused interfaces that
                  integrate seamlessly with APIs.
                </li>
                <li>
                  Developed <strong>Ecommerce</strong> and{" "}
                  <strong>Real Estate Management</strong> platforms, optimizing
                  load times by up to 40% through lazy loading, code splitting,
                  and performance tuning.
                </li>
              </ul>
              Passionate about AI integration, I’ve also explored embedding
              <strong> OpenAI-powered features</strong> into applications to
              deliver smarter, more dynamic user experiences.
              <br />
              <br />I thrive in collaborative, agile environments where creative
              problem-solving meets technical precision, and I’m constantly
              learning to stay ahead of the curve in a rapidly evolving tech
              landscape. Let’s connect to bring your ideas to life with
              impactful, modern, and future-ready web solutions!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default About
