import { Box, Stack, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Engineer",
      company: "Egoras",
      period: "Jan 2026 – Present",
      location: "Port Harcourt, Nigeria (Onsite)",
      type: "Current",
      highlights: [
        "Collaborated with cross functional frontend and backend teams to build and ship a full-featured fintech trading platform, including an admin panel trading dashboard, and broker white label pages.",
        "Engineered real-time trading interfaces using WebSockets, enabling live price feeds, order book updates, and trade execution flows with sub-second latency.",
        "Built a white-label broker portal with configurable branding, theming, and dynamic data rendering to support multiple broker clients from a single codebase.",
        "Developed the admin panel with role-based access control, user management, transaction monitoring, and reporting dashboards.",
        "Managed global UI state using Zustand for complex trading workflows, ensuring predictable data flow across deeply nested components.",
        "Implemented responsive, accessible UI components with React.js and Tailwind CSS, ensuring consistent cross-device and cross browser experiences.",
      ],
      technologies: [
        "React.js",
        "WebSockets",
        "Zustand",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Smart Task AI",
      period: "Nov 2024 – Sep 2025",
      location: "Remote",
      type: "Previous",
      highlights: [
        "Designed and implemented intuitive user interfaces across STAI's responsive platform, ensuring seamless experiences across desktop and mobile devices.",
        "Enhanced navigational flows and UI components using modern web technologies (e.g., React.js, Next.js, Tailwind CSS, Framer Motion), increasing user engagement and reducing friction.",
        "Collaborated with backend teams to integrate front-end layers with APIs, ensuring accurate rendering of dynamic data and seamless data flow.",
        "Applied performance optimization techniques such as lazy loading, code splitting, and image optimization to improve page load speed and overall responsiveness.",
        "Worked closely with UI/UX designers to translate design concepts into pixel-perfect interfaces, maintaining visual consistency across features.",
        "Implemented accessibility best practices to improve platform usability for a wider range of users.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Framer Motion",
        "Tailwind CSS",
        "Performance Optimization",
      ],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "SophNex Solutions",
      period: "May 2024 – Apr 2025",
      location: "Remote",
      type: "Previous",
      highlights: [
        "Built dynamic UI components, improving reusability and reducing code duplication by 40%.",
        "Optimized image rendering and lazy loading, cutting page load times by 40%.",
        "Collaborated with backend engineers to ensure seamless API integration, reducing data transfer time by 30%.",
        "Enhanced overall user experience and performance, improving load times and interactivity.",
      ],
      technologies: [
        "React.js",
        "Performance Optimization",
        "Component Architecture",
        "API Integration",
      ],
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "Cartly",
      period: "May 2023 – Jun 2024",
      location: "Remote",
      type: "Previous",
      highlights: [
        "Spearheaded the UI redesign, improving customer retention by 20% through a modern and responsive layout.",
        "Developed responsive and visually appealing UI components in React.js and Tailwind CSS.",
        "Conducted code reviews to ensure code quality, maintainability, and best practices.",
        "Designed interactive elements with Framer Motion and GSAP, enhancing UX engagement.",
        "Optimized application performance, reducing load time by 25% through efficient state management and lazy loading.",
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "UI/UX Design",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box className="section" sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      <Stack sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography className="section-subtitle">
            Professional Journey
          </Typography>
          <Typography className="section-title gradient-text">
            Work Experience
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants}>
              <Card
                className="card-hover"
                sx={{
                  padding: "2rem",
                  marginBottom: "2rem",
                  marginTop: index === 0 ? "3rem" : "0",
                  backgroundColor: "rgba(102, 126, 234, 0.03)",
                  borderLeft: "4px solid transparent",
                  backgroundImage:
                    "linear-gradient(rgba(102, 126, 234, 0.03), rgba(102, 126, 234, 0.03)), linear-gradient(90deg, #667eea, #764ba2)",
                  backgroundClip: "padding-box, border-box",
                  backgroundOrigin: "padding-box, border-box",
                }}
              >
                <Stack
                  direction={{ lg: "row", xs: "column" }}
                  justifyContent="space-between"
                  alignItems={{ lg: "flex-start", xs: "flex-start" }}
                  marginBottom="1.5rem"
                >
                  <Stack>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {exp.title}
                      </Typography>
                    </motion.div>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ flexWrap: "wrap", gap: "1rem" }}
                    >
                      <Typography
                        sx={{
                          color: "#667eea",
                          fontWeight: 600,
                          fontSize: "1.1rem",
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography
                        sx={{ color: "#a0aec0", fontSize: "0.95rem" }}
                      >
                        {exp.location}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={{ lg: "column", xs: "row" }}
                    spacing={1}
                    textAlign={{ lg: "right", xs: "left" }}
                  >
                    <Typography
                      sx={{
                        color: "#888888",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {exp.period}
                    </Typography>
                    <Box
                      sx={{
                        display: "inline-block",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        background:
                          exp.type === "Current"
                            ? "rgba(76, 175, 80, 0.2)"
                            : "rgba(102, 126, 234, 0.2)",
                        color: exp.type === "Current" ? "#4CAF50" : "#667eea",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        width: "fit-content",
                      }}
                    >
                      {exp.type}
                    </Box>
                  </Stack>
                </Stack>

                <Stack spacing={1} marginBottom="1.5rem">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Typography
                        sx={{
                          color: "var(--text-secondary)",
                          fontSize: "0.95rem",
                          lineHeight: "1.6",
                          marginLeft: "1rem",
                          position: "relative",
                          paddingLeft: "1rem",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "0.7rem",
                            width: "4px",
                            height: "4px",
                            backgroundColor: "#667eea",
                            borderRadius: "50%",
                          },
                        }}
                      >
                        {highlight}
                      </Typography>
                    </motion.div>
                  ))}
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ flexWrap: "wrap", gap: "0.8rem" }}
                >
                  {exp.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box className="skill-tag">{tech}</Box>
                    </motion.span>
                  ))}
                </Stack>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Experience;
