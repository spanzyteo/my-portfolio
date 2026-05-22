import { Box, Stack, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context";
import { useTheme } from "../ThemeContext";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const { state } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projectRef = state.projectRef;

  const navItems = ["Projects", "About", "Contact"];

  const handleScrollToSection = (section) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Projects" && projectRef && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const email = "confidencetheophilus05@gmail.com";
  const subject = "Portfolio Inquiry";

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <Box
        sx={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--nav-border)",
          padding: "1rem 2rem",
          transition: "background 0.4s ease, border-color 0.3s ease",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  fontSize: "1.5rem",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                }}
              >
                CT
              </Box>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Typography
                  onClick={() => handleScrollToSection(item)}
                  sx={{
                    color: "var(--text-primary)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    position: "relative",
                    transition: "color 0.3s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-5px",
                      left: 0,
                      width: "0",
                      height: "2px",
                      background:
                        "linear-gradient(90deg, var(--accent), var(--accent-secondary))",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      color: "var(--accent)",
                      "&::after": {
                        width: "100%",
                      },
                    },
                  }}
                >
                  {item}
                </Typography>
              </motion.div>
            ))}
          </Stack>

          {/* Desktop CTA + Theme Toggle */}
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <button className="primary-btn" onClick={handleClick}>
                Get In Touch
              </button>
            </motion.div>
          </Stack>

          {/* Mobile Menu Button */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </button>
            <IconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{
                color: "var(--text-primary)",
                "&:hover": {
                  background: "rgba(102, 126, 234, 0.2)",
                },
              }}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Stack>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Stack
              direction="column"
              spacing={1}
              sx={{
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--nav-border)",
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography
                    onClick={() => handleScrollToSection(item)}
                    sx={{
                      color: "var(--text-primary)",
                      padding: "0.5rem 0",
                      cursor: "pointer",
                      fontWeight: 500,
                      "&:hover": {
                        color: "var(--accent)",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </motion.div>
              ))}
              <button
                className="primary-btn"
                onClick={handleClick}
                style={{ marginTop: "1rem", width: "100%" }}
              >
                Get In Touch
              </button>
            </Stack>
          </motion.div>
        )}
      </Box>
    </motion.div>
  );
};

export default Navbar;
