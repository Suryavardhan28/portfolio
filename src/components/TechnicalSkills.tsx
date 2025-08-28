import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
    category: string;
    items: string[];
}

const skills: Skill[] = [
    {
        category: "Programming Languages",
        items: ["JavaScript", "TypeScript", "Golang", "Java", "Python"],
    },
    {
        category: "Frontend",
        items: ["React.js", "Redux", "HTML5", "CSS3", "Material-UI"],
    },
    {
        category: "Backend",
        items: [
            "Node.js",
            "Express.js",
            "FastAPI",
            "REST APIs",
            "Microservices Architecture",
        ],
    },
    {
        category: "Cloud & DevOps",
        items: [
            "GCP",
            "Azure",
            "Docker",
            "Kubernetes",
            "Cloud Functions",
            "CI/CD",
        ],
    },
    {
        category: "Databases",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
        category: "Tools & Integration",
        items: ["Git", "RabbitMQ", "JWT Authentication", "Auth0", "ServiceNow"],
    },
];

const TechnicalSkills = () => {
    const theme = useTheme();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
            id="skills"
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
                        Technical Skills
                    </Typography>

                    <Grid container spacing={4}>
                        {skills.map((skillGroup) => (
                            <Grid item xs={12} md={6} key={skillGroup.category}>
                                <motion.div variants={itemVariants}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            height: "100%",
                                            bgcolor: "background.paper",
                                            borderRadius: 4,
                                            border: "1px solid",
                                            borderColor: "divider",
                                            transition:
                                                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "translateY(-4px)",
                                                boxShadow: theme.shadows[4],
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                mb: 2,
                                                color: "primary.main",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {skillGroup.category}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 1,
                                            }}
                                        >
                                            {skillGroup.items.map((skill) => (
                                                <Box
                                                    key={skill}
                                                    sx={{
                                                        px: 2,
                                                        py: 1,
                                                        bgcolor:
                                                            "background.default",
                                                        borderRadius: "16px",
                                                        fontSize: "0.9rem",
                                                        color: "text.primary",
                                                        border: "1px solid",
                                                        borderColor: "divider",
                                                    }}
                                                >
                                                    {skill}
                                                </Box>
                                            ))}
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

export default TechnicalSkills;
