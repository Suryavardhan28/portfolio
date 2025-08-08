import SchoolIcon from "@mui/icons-material/School";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
    grade: string;
}

const educationData: Education[] = [
    {
        degree: "Master of Technology - Software Engineering",
        institution: "BITS Pilani WILP",
        location: "Pilani, Rajasthan",
        period: "July 2024 - July 2026",
        grade: "CGPA: 9.28/10",
    },
    {
        degree: "Bachelor of Engineering - Computer Science",
        institution: "SJB Institute of Technology",
        location: "Bengaluru, Karnataka",
        period: "August 2018 - July 2022",
        grade: "CGPA: 9.1/10",
    },
];

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

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
            id="education"
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
                        "radial-gradient(circle at top right, rgba(45, 212, 191, 0.1) 0%, transparent 60%)",
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
                        Education
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {educationData.map((education, index) => (
                            <Grid item xs={12} md={6} key={education.degree}>
                                <motion.div variants={itemVariants}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            height: "100%",
                                            bgcolor: "background.paper",
                                            borderRadius: 4,
                                            border: "1px solid",
                                            borderColor: "divider",
                                            position: "relative",
                                            overflow: "hidden",
                                            transition:
                                                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "translateY(-4px)",
                                                boxShadow: (theme) =>
                                                    theme.shadows[4],
                                                "& .education-icon": {
                                                    transform: "scale(1.1)",
                                                },
                                            },
                                        }}
                                    >
                                        {/* Background Icon */}
                                        <SchoolIcon
                                            className="education-icon"
                                            sx={{
                                                position: "absolute",
                                                right: -20,
                                                bottom: -20,
                                                fontSize: 140,
                                                color: "primary.main",
                                                opacity: 0.1,
                                                transition:
                                                    "transform 0.3s ease-in-out",
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                position: "relative",
                                                zIndex: 1,
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                color="primary.main"
                                                sx={{ fontWeight: 600, mb: 2 }}
                                            >
                                                {education.degree}
                                            </Typography>

                                            <Typography
                                                variant="h6"
                                                color="text.primary"
                                                sx={{ mb: 1 }}
                                            >
                                                {education.institution}
                                            </Typography>

                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                sx={{ mb: 2 }}
                                            >
                                                {education.location}
                                            </Typography>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    color="text.secondary"
                                                >
                                                    {education.period}
                                                </Typography>

                                                <Typography
                                                    variant="body1"
                                                    color="primary.main"
                                                    sx={{ fontWeight: 600 }}
                                                >
                                                    {education.grade}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Education;
