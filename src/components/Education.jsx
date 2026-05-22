import { Box, Stack, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Plant Science and Biotechnology",
      school: "University Of Port Harcourt",
      period: "Jan 2020 – Oct 2024",
      location: "Nigeria",
      description:
        "Completed formal education with a focus on scientific research and biotechnology principles.",
      icon: "🎓",
    },
    {
      degree: "Microsoft ADC Student League Member",
      school: "Microsoft Developer Community",
      period: "Sep 2023 – Oct 2024",
      location: "Global",
      description:
        "Participated in Microsoft's developer community, engaging with cutting-edge technologies and industry practices.",
      icon: "💻",
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      className="section"
      sx={{ backgroundColor: "rgba(102, 126, 234, 0.03)" }}
    >
      <Stack sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography className="section-subtitle">
            Learning & Development
          </Typography>
          <Typography className="section-title gradient-text">
            Education & Certifications
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginTop: "3rem" }}
        >
          <Stack spacing={2}>
            {educationData.map((edu, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card
                  className="card-hover"
                  sx={{
                    padding: "2.5rem",
                    backgroundColor: "rgba(102, 126, 234, 0.05)",
                    borderLeft: "4px solid transparent",
                    backgroundImage:
                      "linear-gradient(rgba(102, 126, 234, 0.05), rgba(102, 126, 234, 0.05)), linear-gradient(90deg, #667eea, #764ba2)",
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "padding-box, border-box",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Stack direction={{ lg: "row", xs: "column" }} spacing={2}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                      viewport={{ once: true }}
                      style={{
                        fontSize: "3rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "80px",
                        height: "80px",
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
                        borderRadius: "12px",
                      }}
                    >
                      {edu.icon}
                    </motion.div>

                    <Stack spacing={1} flex={1}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                          }}
                        >
                          {edu.degree}
                        </Typography>
                      </motion.div>

                      <Stack
                        direction={{ lg: "row", xs: "column" }}
                        spacing={2}
                        sx={{
                          flexWrap: "wrap",
                          gap: "1rem",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#667eea",
                            fontWeight: 600,
                            fontSize: "1rem",
                          }}
                        >
                          {edu.school}
                        </Typography>
                        <Typography
                          sx={{
                            color: "var(--text-muted)",
                            fontSize: "0.95rem",
                          }}
                        >
                          {edu.location}
                        </Typography>
                      </Stack>

                      <Typography
                        sx={{
                          color: "var(--text-secondary)",
                          lineHeight: "1.6",
                          marginTop: "0.5rem !important",
                        }}
                      >
                        {edu.description}
                      </Typography>

                      <Box
                        sx={{
                          marginTop: "1rem",
                          padding: "0.5rem 1rem",
                          borderRadius: "20px",
                          background: "rgba(102, 126, 234, 0.2)",
                          color: "#667eea",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          width: "fit-content",
                        }}
                      >
                        {edu.period}
                      </Box>
                    </Stack>
                  </Stack>

                  {/* Animated accent line */}
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, #667eea, #764ba2, transparent)",
                    }}
                    animate={{
                      width: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        {/* Additional Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ marginTop: "3rem" }}
        >
          <Box
            className="card-hover"
            sx={{
              padding: "2rem",
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              borderRadius: "12px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              🌱 Continuous Learning
            </Typography>
            <Typography sx={{ color: "var(--text-secondary)" }}>
              Committed to staying updated with the latest technologies,
              industry best practices, and emerging trends in web development.
              Always exploring new frameworks, tools, and methodologies to
              deliver cutting-edge solutions.
            </Typography>
          </Box>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Education;
