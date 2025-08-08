import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
    const socialLinks = [
        {
            icon: <GitHub />,
            url: "https://github.com/Suryavardhan28",
            label: "GitHub",
        },
        {
            icon: <LinkedIn />,
            url: "https://www.linkedin.com/in/your-linkedin",
            label: "LinkedIn",
        },
        {
            icon: <Email />,
            url: "mailto:suryavardhan28@gmail.com",
            label: "Email",
        },
    ];

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "background.paper",
                py: 6,
                mt: "auto",
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Stack spacing={2} alignItems="center">
                        <Stack direction="row" spacing={2}>
                            {socialLinks.map((social, index) => (
                                <motion.div
                                    key={social.label}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <IconButton
                                        component="a"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: "text.primary",
                                            "&:hover": {
                                                color: "primary.main",
                                            },
                                        }}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </IconButton>
                                </motion.div>
                            ))}
                        </Stack>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            align="center"
                        >
                            © {new Date().getFullYear()} Surya V. All rights
                            reserved.
                        </Typography>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Footer;
