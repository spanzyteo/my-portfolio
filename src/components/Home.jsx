import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import myPicture from "../images/my-picture.jpeg";
import resume from "../resume/resume.pdf";
import Media from "./Media";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Home = () => {
  const openResume = () => {
    window.open(resume, "_blank");
  };

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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          pt: "100px",
        }}
      >
        {/* Animated background elements */}
        <motion.div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, var(--hero-orb-1), transparent)",
            top: "10%",
            left: "10%",
            zIndex: 1,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, var(--hero-orb-2), transparent)",
            bottom: "10%",
            right: "10%",
            zIndex: 1,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <Stack
          direction={{ lg: "row", xs: "column" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem",
            zIndex: 10,
            width: "100%",
          }}
        >
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ flex: 1 }}
          >
            <Stack spacing={2}>
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: { lg: "1.1rem", xs: "1rem" },
                    fontWeight: 600,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  Welcome to my portfolio
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: { lg: "4rem", sm: "2.5rem", xs: "2rem" },
                    fontWeight: 700,
                    lineHeight: "1.2",
                  }}
                >
                  Hi, I&apos;m{" "}
                  <span
                    className="gradient-text"
                    style={{ fontSize: "inherit", fontWeight: "inherit" }}
                  >
                    Confidence Theophilus
                  </span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: { lg: "1.3rem", xs: "1rem" },
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  Full-Stack Software Developer
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: { lg: "1.05rem", xs: "0.95rem" },
                    color: "var(--text-secondary)",
                    lineHeight: "1.8",
                    maxWidth: "500px",
                  }}
                >
                  With 4+ years of professional experience architecting and
                  deploying scalable, high-performance web applications.
                  Specialized in React.js, Next.js, Node.js, and modern DevOps
                  practices. Passionate about creating intuitive interfaces and
                  robust backends.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ lg: "row", xs: "column" }}
                  spacing={2}
                  sx={{ mt: "2rem !important" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="primary-btn" onClick={openResume}>
                      📄 View My Resume
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      className="secondary-btn"
                      onClick={() =>
                        document
                          .getElementById("contact")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Get In Touch
                    </button>
                  </motion.div>
                </Stack>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <Media />
              </motion.div>
            </Stack>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: { lg: "350px", sm: "250px", xs: "200px" },
                  height: { lg: "450px", sm: "350px", xs: "300px" },
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "3px solid rgba(102, 126, 234, 0.3)",
                  boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
                  background:
                    "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                }}
              >
                <img
                  src={myPicture}
                  alt="Confidence Theophilus"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Floating elements */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "-10px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #f093fb, #f5576c)",
                  boxShadow: "0 10px 30px rgba(245, 87, 108, 0.4)",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </Stack>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownwardIcon
            sx={{
              color: "var(--accent)",
              fontSize: "2rem",
              opacity: 0.6,
            }}
          />
        </motion.div>
      </Box>

      {/* About Section */}
      <Box id="about">
        <About />
      </Box>

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Projects Section */}
      <Box id="projects">
        <Projects />
      </Box>

      {/* Contact Section */}
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  );
};

export default Home;

//               src={myPicture}
//               alt="my-picture"
//             />
//             <Stack
//               position="absolute"
//               height="450px"
//               width="320px"
//               bgcolor="rgb(80, 200, 239)"
//               sx={{ opacity: 0.2 }}
//               mt="2rem"
//               ml="2rem"
//             ></Stack>
//             <Stack position="absolute" display="flex" flexDirection="column">
//               <Typography
//                 mt="16rem"
//                 variant="h2"
//                 ml="-2rem"
//                 fontFamily="Fjalla one"
//                 fontWeight={400}
//                 letterSpacing={6}
//                 sx={{
//                   WebkitTextFillColor: "rgba(0, 0, 0, 0)",
//                   WebkitTextStrokeColor: "white",
//                   WebkitTextStrokeWidth: "1px",
//                 }}
//               >
//                 Confidence
//               </Typography>
//               <Typography
//                 mt="0rem"
//                 variant="h2"
//                 ml="1rem"
//                 fontFamily="Fjalla one"
//                 fontWeight={400}
//                 letterSpacing={6}
//                 sx={{
//                   WebkitTextFillColor: "rgba(0, 0, 0, 0)",
//                   WebkitTextStrokeColor: "white",
//                   WebkitTextStrokeWidth: "1px",
//                 }}
//               >
//                 Theophilus
//               </Typography>
//             </Stack>
//           </Stack>
//         </Stack>
//       </Box>
//       <About />
//       <Projects />
//       <Contact />
//     </Box>
//   );
// }

// export default Home
