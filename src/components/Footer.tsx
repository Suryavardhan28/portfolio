import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import {
    Box,
    Container,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
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
            url: "https://www.linkedin.com/in/surya-vardhan-28102000/",
            label: "LinkedIn",
        },
        {
            icon: <Email />,
            url: "mailto:suryavardhan28@gmail.com",
            label: "Email",
        },
        {
            icon: <Phone />,
            url: "tel:+919632004729",
            label: "Phone",
        },
    ];

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "background.paper",
                py: 6,
                mt: "auto",
                borderTop: "1px solid",
                borderColor: (theme) =>
                    theme.palette.mode === "light"
                        ? "rgba(0, 0, 0, 0.08)"
                        : "rgba(255, 255, 255, 0.08)",
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
                                    <Tooltip
                                        title={
                                            social.label === "Phone"
                                                ? "+91 9632004729"
                                                : social.label
                                        }
                                        arrow
                                        placement="top"
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
                                    </Tooltip>
                                </motion.div>
                            ))}
                        </Stack>
                        <Stack spacing={1} alignItems="center">
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                align="center"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                }}
                            >
                                Built with
                                <Box
                                    component="a"
                                    href="https://bun.sh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    Bun
                                </Box>
                                <Box
                                    component="span"
                                    sx={{ color: "text.secondary" }}
                                >
                                    •
                                </Box>
                                <Box
                                    component="a"
                                    href="https://react.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    React
                                </Box>
                                <Box
                                    component="span"
                                    sx={{ color: "text.secondary" }}
                                >
                                    •
                                </Box>
                                <Box
                                    component="a"
                                    href="https://www.typescriptlang.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    TypeScript
                                </Box>
                                <Box
                                    component="span"
                                    sx={{ color: "text.secondary" }}
                                >
                                    •
                                </Box>
                                <Box
                                    component="a"
                                    href="https://mui.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    Material-UI
                                </Box>
                                <Box
                                    component="span"
                                    sx={{ color: "text.secondary" }}
                                >
                                    •
                                </Box>
                                <Box
                                    component="a"
                                    href="https://www.framer.com/motion"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    Framer Motion
                                </Box>
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                align="center"
                            >
                                © {new Date().getFullYear()} Surya V. All rights
                                reserved.
                            </Typography>
                        </Stack>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Footer;
