import { Box, Container, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProfessionalSummary = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
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
        <Box
            id="about"
            component="section"
            sx={{
                py: 12,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background gradient */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                        "radial-gradient(circle at bottom left, rgba(128, 90, 213, 0.1) 0%, transparent 60%)",
                    zIndex: 0,
                }}
            />

            <Container
                maxWidth={false}
                sx={{
                    position: "relative",
                    zIndex: 1,
                    px: { xs: 2, sm: 4, md: 8, lg: 12 },
                }}
            >
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 6,
                            textAlign: "center",
                            background:
                                "linear-gradient(45deg, #2DD4BF 30%, #805AD5 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        About Me
                    </Typography>

                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            bgcolor: "background.paper",
                            borderRadius: 4,
                            border: "1px solid",
                            borderColor: "divider",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <Typography
                            variant="body1"
                            color="text.primary"
                            sx={{
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 3,
                            }}
                        >
                            Full-Stack Software Engineer with 3+ years
                            developing scalable enterprise applications and
                            cloud technologies. Demonstrated expertise in
                            delivering high-impact solutions and leading
                            cross-functional teams in Agile environments.
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.primary"
                            sx={{
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 3,
                            }}
                        >
                            At Betsol, I've led the development of a unified
                            telecommunications platform managing over 100,000
                            Toll-Free Numbers and 500,000 DIDs. I've also
                            engineered automated customer provisioning workflows
                            and implemented key security frameworks,
                            significantly improving operational efficiency and
                            application security.
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.primary"
                            sx={{
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                            }}
                        >
                            I'm passionate about creating efficient, scalable
                            solutions and continuously expanding my technical
                            expertise. Currently pursuing my Master's in
                            Software Engineering at BITS Pilani, I'm always
                            eager to tackle new challenges and contribute to
                            innovative projects.
                        </Typography>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default ProfessionalSummary;
