import { Box, Card, Stack, Typography } from "@mui/material";
import { projects } from "../utils/projects";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useCart } from "../Context";
import { useLocation } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  const projectRef = useRef(null);
  const { state, dispatch } = useCart();
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "SET_PROJECT_REF", payload: projectRef });
    if (location.state && location.state.scrollToProject) {
      const projectElement = projectRef.current;
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [projectRef, dispatch, location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Box
      ref={projectRef}
      className="section"
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <Stack sx={{ maxWidth: "1300px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography className="section-subtitle">
            Portfolio Highlights
          </Typography>
          <Typography className="section-title gradient-text">
            Featured Projects
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="card-hover"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "rgba(102, 126, 234, 0.03)",
                    cursor: "pointer",
                    overflow: "hidden",
                    position: "relative",
                    transition: "all 0.3s ease",
                  }}
                  component={motion.div}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px rgba(102, 126, 234, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <motion.div
                    style={{
                      height: "200px",
                      overflow: "hidden",
                      position: "relative",
                      background:
                        "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    {/* Overlay on hover */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(102, 126, 234, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Stack spacing={1} alignItems="center" textAlign="center">
                        <OpenInNewIcon
                          sx={{
                            fontSize: "2.5rem",
                            color: "var(--text-primary)",
                          }}
                        />
                        <Typography
                          sx={{ color: "var(--text-primary)", fontWeight: 600 }}
                        >
                          View Project
                        </Typography>
                      </Stack>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <Stack
                    sx={{
                      padding: "1.5rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "0.8rem",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </motion.div>

                    <Typography
                      sx={{
                        color: "var(--text-secondary)",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        flex: 1,
                        marginBottom: "1rem",
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* Tags/Technologies */}
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginTop: "auto",
                      }}
                    >
                      {(() => {
                        // Extract tech stack from description or project name
                        const techMap = {
                          "JGlobal Properties": [
                            "Next.js",
                            "NestJS",
                            "TypeScript",
                            "Tailwind CSS",
                          ],
                          "Ecommerce Furniture Site": [
                            "Next.js",
                            "TypeScript",
                            "Redux",
                            "Jest",
                          ],
                          Doughnation: [
                            "Next.js",
                            "Express.js",
                            "Prisma",
                            "Docker",
                          ],
                          Extreme: ["Next.js", "Redux", "MySQL", "Express.js"],
                          "Real Estate": [
                            "React",
                            "Node.js",
                            "MongoDB",
                            "Firebase",
                          ],
                          "Fifa Stream": ["React", "Web3", "TypeScript"],
                          Jiamuqu: ["Next.js", "Redux", "Tailwind CSS"],
                        };
                        const techs = techMap[item.name] || [
                          "React",
                          "JavaScript",
                        ];
                        return techs.map((tech, idx) => (
                          <motion.span key={idx} whileHover={{ scale: 1.05 }}>
                            <Box
                              sx={{
                                padding: "4px 10px",
                                borderRadius: "15px",
                                background:
                                  "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
                                color: "#667eea",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                border: "1px solid rgba(102, 126, 234, 0.3)",
                              }}
                            >
                              {tech}
                            </Box>
                          </motion.span>
                        ));
                      })()}
                    </Stack>
                  </Stack>

                  {/* Bottom accent line */}
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #667eea, #764ba2)",
                      width: "0%",
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <Box
            className="card-hover"
            sx={{
              padding: "3rem",
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              🚀 Want to see more?
            </Typography>
            <Typography
              sx={{
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                fontSize: "1rem",
              }}
            >
              Check out my GitHub for more projects and contributions
            </Typography>
            <motion.a
              href="https://github.com/spanzyteo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="primary-btn">Visit GitHub</button>
            </motion.a>
          </Box>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Projects;
