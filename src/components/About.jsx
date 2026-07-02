import { Box, Stack, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Desktop from "./Desktop";
import MonitorIcon from "@mui/icons-material/Monitor";
import TimelineIcon from "@mui/icons-material/Timeline";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PsychologyIcon from "@mui/icons-material/Psychology";

const About = () => {
  const highlights = [
    {
      icon: <MonitorIcon sx={{ fontSize: "1.75rem" }} />,
      title: "Full-Stack Development",
      description:
        "End-to-end web applications with modern frontend and robust backend architectures.",
    },
    {
      icon: <TimelineIcon sx={{ fontSize: "1.75rem" }} />,
      title: "5 Years Experience",
      description:
        "Delivering scalable, high-performance products for startups and established teams.",
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: "1.75rem" }} />,
      title: "Innovation Focused",
      description:
        "AI integration and cutting-edge tooling to build smarter, future-ready experiences.",
    },
  ];

  const techStack = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Nest.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Tailwind CSS",
  ];

  const recentProjects = [
    {
      name: "Doughnation",
      detail:
        "Full-stack donation platform with Supabase PostgreSQL, containerized Express.js, and animated Next.js UI.",
    },
    {
      name: "STAI",
      detail:
        "Led frontend development with responsive, API-driven interfaces and performance-first UX.",
    },
    {
      name: "Ecommerce & Real Estate",
      detail:
        "Optimized platforms with lazy loading and code splitting — up to 40% faster load times.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Box className="section about-section" component="section">
      <Stack sx={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography className="section-subtitle">Who am I</Typography>
          <Typography className="section-title gradient-text">
            A Bit About Me
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { lg: "1fr 1.1fr", md: "1fr", xs: "1fr" },
              gap: { lg: 4, xs: 3 },
              mt: 4,
              alignItems: "center",
            }}
          >
            <motion.div variants={itemVariants}>
              <Box
                className="about-visual-card"
                sx={{
                  p: { lg: 3, xs: 2 },
                  borderRadius: "20px",
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <Desktop />
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    color: "var(--text-primary)",
                    fontSize: { lg: "1.15rem", xs: "1rem" },
                    lineHeight: 1.8,
                  }}
                >
                  Hello! I&apos;m{" "}
                  <Box
                    component="span"
                    sx={{ color: "var(--accent)", fontWeight: 700 }}
                  >
                    Theophilus Confidence
                  </Box>
                  , a Full-Stack Software Developer with five years of
                  experience building scalable, high-performance web
                  applications.
                </Typography>

                <Typography
                  sx={{
                    color: "var(--text-secondary)",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                  }}
                >
                  I merge strong UI/UX craft with solid backend engineering —
                  from React and Next.js frontends to Node, Nest, and
                  cloud-ready deployments with Docker and CI/CD pipelines.
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      className="skill-tag"
                      sx={{ fontSize: "0.8rem" }}
                    />
                  ))}
                </Stack>
              </Stack>
            </motion.div>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "repeat(3, 1fr)", xs: "1fr" },
              gap: 2,
              mt: 4,
            }}
          >
            {highlights.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Box
                  className="card-hover about-highlight-card"
                  sx={{ p: 2.5, height: "100%" }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--accent-glow)",
                      color: "var(--accent)",
                      mb: 1.5,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    sx={{
                      color: "var(--text-primary)",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      mb: 0.75,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ mt: 4 }}>
            <Stack direction="row" alignItems="center" gap={1} mb={2}>
              <RocketLaunchIcon
                sx={{ color: "var(--accent)", fontSize: "1.4rem" }}
              />
              <Typography
                sx={{
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                }}
              >
                Recent Highlights
              </Typography>
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { md: "repeat(3, 1fr)", xs: "1fr" },
                gap: 2,
              }}
            >
              {recentProjects.map((project) => (
                <motion.div key={project.name} variants={itemVariants}>
                  <Box
                    className="card-hover"
                    sx={{
                      p: 2,
                      height: "100%",
                      borderLeft: "3px solid var(--accent)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "var(--accent)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        mb: 0.75,
                      }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "var(--text-secondary)",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {project.detail}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>

          <motion.div variants={itemVariants}>
            <Box
              className="about-closing-card"
              sx={{
                mt: 4,
                p: { lg: 3, xs: 2 },
                borderRadius: "16px",
                background: "var(--accent-glow)",
                border: "1px solid var(--card-border)",
              }}
            >
              <Stack direction="row" alignItems="flex-start" gap={1.5}>
                <PsychologyIcon sx={{ color: "var(--accent)", mt: 0.25 }} />
                <Typography
                  sx={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                  }}
                >
                  Passionate about AI-powered features, agile collaboration, and
                  continuous learning. I thrive where creative problem-solving
                  meets technical precision — let&apos;s build something
                  impactful together.
                </Typography>
              </Stack>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack
              direction={{ sm: "row", xs: "column" }}
              spacing={2}
              sx={{ mt: 3 }}
              flexWrap="wrap"
            >
              {[
                {
                  icon: <CodeIcon />,
                  label: "State: Redux, Zustand, Context API",
                },
                { icon: <MonitorIcon />, label: "Auth: JWT, Firebase Auth" },
                {
                  icon: <LightbulbIcon />,
                  label: "AI: OpenAI API integrations",
                },
              ].map((item) => (
                <Stack
                  key={item.label}
                  direction="row"
                  alignItems="center"
                  gap={1}
                  sx={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    "& svg": { fontSize: "1.1rem", color: "var(--accent)" },
                  }}
                >
                  {item.icon}
                  <Typography
                    component="span"
                    sx={{ fontSize: "inherit", color: "inherit" }}
                  >
                    {item.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </motion.div>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default About;
