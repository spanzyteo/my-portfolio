import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        "HTML",
        "CSS",
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Svelte",
        "Vue",
        "Redux",
        "Zustand",
        "Context API",
        "Framer Motion",
        "GSAP",
        "Tailwind CSS",
        "SCSS",
        "Material UI",
      ],
      color: "#667eea",
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "Prisma ORM",
        "Type ORM",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Supabase",
        "JWT",
        "Bcrypt",
        "Helmet.js",
      ],
      color: "#764ba2",
    },
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        "OpenAI API",
        "LangChain",
        "AI-powered Chatbots",
        "AI Prompt Engineering",
        "REST API Integration for AI Services",
      ],
      color: "#f093fb",
    },
    {
      category: "Performance & Testing",
      icon: "⚡",
      skills: [
        "Jest",
        "Vitest",
        "Supertest",
        "Lazy Loading",
        "Code Splitting",
        "Web Vitals Optimization",
      ],
      color: "#4facfe",
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "Docker",
        "Vercel",
        "Netlify",
        "cPanel",
        "Postman",
        "REST APIs",
        "WebSockets",
        "Figma",
      ],
      color: "#00f2fe",
    },
    {
      category: "Soft Skills",
      icon: "💼",
      skills: [
        "Problem-Solving & Debugging",
        "Cross-Team Collaboration",
        "Agile & Scrum Methodologies",
        "UI/UX and Performance Focus",
        "Clear Communication & Documentation",
        "Git Flow",
        "Code Reviews",
      ],
      color: "#43e97b",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <Box className="section">
      <Stack sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography className="section-subtitle">
            Technical Arsenal
          </Typography>
          <Typography className="section-title gradient-text">
            Skills & Expertise
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginTop: "3rem" }}
        >
          <Stack
            direction={{ lg: "row", xs: "column" }}
            spacing={2}
            sx={{
              display: "grid",
              gridTemplateColumns: { lg: "repeat(2, 1fr)", xs: "1fr" },
              gap: "2rem",
            }}
          >
            {skillCategories.map((skillGroup, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Box
                  className="card-hover"
                  sx={{
                    padding: "2rem",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      sx={{
                        fontSize: "3rem",
                        marginBottom: "1rem",
                        display: "inline-block",
                      }}
                    >
                      {skillGroup.icon}
                    </Typography>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        marginBottom: "1.5rem",
                        background: `linear-gradient(135deg, ${skillGroup.color}, ${skillGroup.color}cc)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {skillGroup.category}
                    </Typography>
                  </motion.div>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      flexWrap: "wrap",
                      gap: "0.8rem",
                    }}
                  >
                    {skillGroup.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: `0 0 15px ${skillGroup.color}40`,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box
                          className="skill-tag"
                          sx={{
                            borderColor: `${skillGroup.color}60`,
                            "&:hover": {
                              color: "var(--text-primary)",
                              borderColor: skillGroup.color,
                              boxShadow: `0 0 15px ${skillGroup.color}40`,
                            },
                          }}
                        >
                          {skill}
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>

                  {/* Animated background gradient */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: -50,
                      right: -50,
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${skillGroup.color}20, transparent)`,
                      zIndex: -1,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Stack
            direction={{ lg: "row", xs: "column" }}
            spacing={2}
            sx={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: { lg: "repeat(4, 1fr)", xs: "1fr" },
              gap: "1.5rem",
            }}
          >
            {[
              { label: "Years of Experience", value: "4+" },
              { label: "Projects Completed", value: "10+" },
              { label: "Technologies Mastered", value: "30+" },
              { label: "Happy Clients", value: "∞" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  className="card-hover"
                  sx={{
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#667eea",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography sx={{ color: "var(--text-secondary)" }}>
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Skills;
