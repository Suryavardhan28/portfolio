import { Download, GitHub, LinkedIn } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    useScrollTrigger,
    useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Specialist",
    "Cloud Solutions Developer",
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((current) => (current + 1) % roles.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);
    const scrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50, // Lower threshold to hide scroll indicator sooner
    });
    const theme = useTheme();
    const mode = theme.palette.mode;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
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
            },
        },
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                pt: { xs: "80px", md: "100px" }, // Add padding top for header
                pb: { xs: "40px", md: "60px" }, // Add padding bottom for scroll indicator
            }}
        >
            {/* Background gradient effect */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                        "radial-gradient(circle at top right, rgba(45, 212, 191, 0.1) 0%, transparent 60%)",
                    zIndex: 0,
                }}
            />

            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                }}
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ width: "100%" }}
                >
                    <Stack
                        spacing={{ xs: 3, md: 4 }}
                        maxWidth="800px"
                        sx={{ mx: "auto" }}
                    >
                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 700,
                                    textAlign: "center",
                                    background:
                                        "linear-gradient(45deg, #2DD4BF 30%, #805AD5 90%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                SURYA V
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Box
                                sx={{
                                    height: "3.5rem",
                                    position: "relative",
                                    mb: 2,
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={roles[roleIndex]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                        }}
                                    >
                                        <Typography
                                            variant="h2"
                                            color="text.primary"
                                            sx={{ textAlign: "center" }}
                                        >
                                            {roles[roleIndex]}
                                        </Typography>
                                    </motion.div>
                                </AnimatePresence>
                            </Box>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{
                                    maxWidth: "600px",
                                    textAlign: "center",
                                    mx: "auto",
                                }}
                            >
                                Building scalable enterprise applications with
                                JavaScript, React.js, Node.js, and cloud
                                technologies. Passionate about creating
                                impactful solutions and leading cross-functional
                                teams.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{ mt: 4, justifyContent: "center" }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    href="mailto:suryavardhan28@gmail.com"
                                    sx={{
                                        borderRadius: "24px",
                                        px: 4,
                                        py: 1.5,
                                        "&:hover": {
                                            backgroundColor: "inherit",
                                            opacity: 0.9,
                                            color: "white",
                                        },
                                    }}
                                >
                                    Get in Touch
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    startIcon={<GitHub />}
                                    href="https://github.com/Suryavardhan28"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        borderRadius: "24px",
                                        px: 4,
                                        py: 1.5,
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                            borderColor: "primary.main",
                                            opacity: 0.9,
                                            color:
                                                mode === "dark" ? "white" : "",
                                        },
                                    }}
                                >
                                    GitHub
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    startIcon={<LinkedIn />}
                                    href="https://www.linkedin.com/in/surya-vardhan-28102000/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        borderRadius: "24px",
                                        px: 4,
                                        py: 1.5,
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                            borderColor: "primary.main",
                                            opacity: 0.9,
                                            color:
                                                mode === "dark" ? "white" : "",
                                        },
                                    }}
                                >
                                    LinkedIn
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    startIcon={<Download />}
                                    href="/portfolio/resume.pdf"
                                    download
                                    sx={{
                                        borderRadius: "24px",
                                        px: 4,
                                        py: 1.5,
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                            borderColor: "primary.main",
                                            opacity: 0.9,
                                            color:
                                                mode === "dark" ? "white" : "",
                                        },
                                    }}
                                >
                                    Resume
                                </Button>
                            </Stack>
                        </motion.div>
                    </Stack>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    variants={itemVariants}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: [0, 8, 0],
                        opacity: scrollTrigger ? 0 : 1,
                        display: scrollTrigger ? "none" : "block",
                    }}
                    transition={{
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        opacity: {
                            duration: 0.3,
                        },
                    }}
                    style={{
                        position: "fixed",
                        bottom: "40px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1200,
                        transition: "opacity 0.3s ease-in-out",
                    }}
                >
                    <Box
                        sx={{
                            width: "30px",
                            height: "50px",
                            border: "2px solid",
                            borderColor: "primary.main",
                            borderRadius: "15px",
                            position: "relative",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                width: "6px",
                                height: "6px",
                                backgroundColor: "primary.main",
                                borderRadius: "50%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                top: "8px",
                            },
                        }}
                    />
                </motion.div>
            </Container>
        </Box>
    );
};

export default Hero;
