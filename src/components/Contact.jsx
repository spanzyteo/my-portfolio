import { Box, Stack, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let hasErrors = false;
    const newErrors = {};

    if (!form.current.from_name.value.trim()) {
      newErrors.from_name = "Full Name is required";
      hasErrors = true;
    }

    if (!form.current.from_email.value.trim()) {
      newErrors.from_email = "Email is required";
      hasErrors = true;
    }

    if (!form.current.message.value.trim()) {
      newErrors.message = "Message is required";
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Form validation failed");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "h_JaFYTm2NAFkGlXF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success(
            "Message sent successfully! I will get back to you soon.",
          );
          form.current.reset();
          setErrors({});
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        },
      );
  };

  const contactInfo = [
    {
      icon: <MailOutlineIcon sx={{ fontSize: "2rem" }} />,
      label: "Email",
      value: "confidencetheophilus05@gmail.com",
      href: "mailto:confidencetheophilus05@gmail.com",
    },
    {
      icon: <PhoneOutlinedIcon sx={{ fontSize: "2rem" }} />,
      label: "Phone",
      value: "+234 813 466 2374",
      href: "tel:+2348134662374",
    },
    {
      icon: <LocationOnOutlinedIcon sx={{ fontSize: "2rem" }} />,
      label: "Location",
      value: "Port Harcourt, River State, Nigeria",
      href: null,
    },
  ];

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
    <Box className="section" sx={{ backgroundColor: "var(--accent-glow)" }}>
      <Stack sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography className="section-subtitle">Get In Touch</Typography>
          <Typography className="section-title gradient-text">
            Let&apos;s Connect & Collaborate
          </Typography>
        </motion.div>

        <Stack
          direction={{ lg: "row", xs: "column" }}
          spacing={4}
          sx={{
            marginTop: "4rem",
          }}
        >
          {/* Contact Info & Form */}
          <Stack spacing={4} sx={{ flex: 1 }}>
            {/* Contact Info Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Stack spacing={2}>
                {contactInfo.map((info, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <Box
                      className="card-hover"
                      component={motion.div}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        padding: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        cursor: info.href ? "pointer" : "default",
                      }}
                      onClick={() => {
                        if (info.href) {
                          window.location.href = info.href;
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "12px",
                          background:
                            "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--accent)",
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Stack>
                        <Typography
                          sx={{
                            color: "var(--text-muted)",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          {info.label}
                        </Typography>
                        <Typography
                          sx={{
                            color: "var(--text-primary)",
                            fontSize: "1rem",
                            fontWeight: 500,
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Stack>
                    </Box>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
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
                    marginBottom: "1.5rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                  }}
                >
                  Connect on Social Media
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <motion.a
                    href="https://www.linkedin.com/in/confidence-theophilus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
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
                        color: "var(--text-primary)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                      }}
                    >
                      <LinkedInIcon />
                    </Box>
                  </motion.a>
                  <motion.a
                    href="https://github.com/spanzyteo"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
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
                        color: "var(--text-primary)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                      }}
                    >
                      <GitHubIcon />
                    </Box>
                  </motion.a>
                </Stack>
              </Box>
            </motion.div>
          </Stack>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ flex: 1 }}
          >
            <Box
              className="card-hover"
              sx={{
                padding: "2.5rem",
              }}
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <TextField
                    label="Full Name"
                    type="text"
                    name="from_name"
                    error={!!errors.from_name}
                    helperText={errors.from_name}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "var(--text-primary)",
                        "& fieldset": {
                          borderColor: "rgba(102, 126, 234, 0.3)",
                        },
                        "&:hover fieldset": {
                          borderColor: "#667eea",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#667eea",
                          boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "var(--text-muted)",
                        opacity: 1,
                      },
                      "& .MuiInputLabel-root": {
                        color: "var(--text-muted)",
                        "&.Mui-focused": {
                          color: "var(--accent)",
                        },
                      },
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <TextField
                    label="Email"
                    type="email"
                    name="from_email"
                    error={!!errors.from_email}
                    helperText={errors.from_email}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "var(--text-primary)",
                        "& fieldset": {
                          borderColor: "rgba(102, 126, 234, 0.3)",
                        },
                        "&:hover fieldset": {
                          borderColor: "#667eea",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#667eea",
                          boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "var(--text-muted)",
                        opacity: 1,
                      },
                      "& .MuiInputLabel-root": {
                        color: "var(--text-muted)",
                        "&.Mui-focused": {
                          color: "var(--accent)",
                        },
                      },
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "var(--text-primary)",
                        "& fieldset": {
                          borderColor: "rgba(102, 126, 234, 0.3)",
                        },
                        "&:hover fieldset": {
                          borderColor: "#667eea",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#667eea",
                          boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "var(--text-muted)",
                        opacity: 1,
                      },
                      "& .MuiInputLabel-root": {
                        color: "var(--text-muted)",
                        "&.Mui-focused": {
                          color: "var(--accent)",
                        },
                      },
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    className="primary-btn"
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </motion.div>
              </form>
            </Box>
          </motion.div>
        </Stack>
      </Stack>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Box>
  );
};

export default Contact;
