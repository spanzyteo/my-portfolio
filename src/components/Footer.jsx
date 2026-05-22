import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import MediaFooter from "./MediaFooter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <Box
      sx={{
        background: "var(--footer-bg)",
        borderTop: "1px solid var(--nav-border)",
        transition: "background 0.4s ease",
      }}
    >
      <Stack
        sx={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <Stack
            direction={{ lg: "row", xs: "column" }}
            spacing={4}
            sx={{
              display: "grid",
              gridTemplateColumns: { lg: "repeat(3, 1fr)", xs: "1fr" },
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {/* About */}
            <motion.div variants={itemVariants}>
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  Confidence Theophilus
                </Typography>
                <Typography
                  sx={{
                    color: "var(--text-secondary)",
                    lineHeight: "1.6",
                    fontSize: "0.95rem",
                  }}
                >
                  Full-Stack Software Developer passionate about creating
                  beautiful, functional web experiences. Let's build something
                  amazing together!
                </Typography>
              </Stack>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <Stack spacing={2}>
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  Quick Links
                </Typography>
                {[
                  { label: "Home", href: "#home" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Typography
                      sx={{
                        color: "var(--text-secondary)",
                        fontSize: "0.95rem",
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "var(--accent)",
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </motion.a>
                ))}
              </Stack>
            </motion.div>

            {/* Connect */}
            <motion.div variants={itemVariants}>
              <Stack spacing={2}>
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  Connect
                </Typography>
                <Stack direction="row" spacing={1}>
                  <motion.a
                    href="https://www.linkedin.com/in/confidence-theophilus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#667eea",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #667eea, #764ba2)",
                          color: "var(--text-primary)",
                          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                        },
                      }}
                    >
                      <LinkedInIcon sx={{ fontSize: "1.3rem" }} />
                    </Box>
                  </motion.a>
                  <motion.a
                    href="https://github.com/spanzyteo"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#667eea",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #667eea, #764ba2)",
                          color: "var(--text-primary)",
                          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                        },
                      }}
                    >
                      <GitHubIcon sx={{ fontSize: "1.3rem" }} />
                    </Box>
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#667eea",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #667eea, #764ba2)",
                          color: "var(--text-primary)",
                          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                        },
                      }}
                    >
                      <TwitterIcon sx={{ fontSize: "1.3rem" }} />
                    </Box>
                  </motion.a>
                </Stack>
              </Stack>
            </motion.div>
          </Stack>

          {/* Divider */}
          <Box
            sx={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent)",
              margin: "2rem 0",
            }}
          />

          {/* Bottom Section */}
          <motion.div variants={itemVariants}>
            <Stack
              direction={{ lg: "row", xs: "column" }}
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{
                paddingTop: "1rem",
              }}
            >
              <Typography
                sx={{ color: "var(--text-muted)", fontSize: "0.9rem" }}
              >
                © {currentYear} Confidence Theophilus. All Rights Reserved.
              </Typography>
              <Typography
                sx={{ color: "var(--text-muted)", fontSize: "0.9rem" }}
              >
                Built with <span style={{ color: "#f5576c" }}>❤️</span> using
                React, Next.js & Framer Motion
              </Typography>
            </Stack>
          </motion.div>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Footer;
