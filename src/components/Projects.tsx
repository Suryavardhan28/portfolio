import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink?: string;
}

const projects: Project[] = [
    {
        title: "E-commerce Microservices Platform",
        description:
            "Architected and built complete microservices-based e-commerce platform with 6 independent services. Established event-driven architecture using RabbitMQ for asynchronous communication between services. Containerized and deployed all services using Docker and Kubernetes.",
        technologies: [
            "Node.js",
            "React.js",
            "MongoDB",
            "Docker",
            "Kubernetes",
            "RabbitMQ",
        ],
        githubLink: "https://github.com/Suryavardhan28/ecommerce-microservices",
    },
    {
        title: "LRU Cache Management System",
        description:
            "Built and implemented web-based Least Recently Used (LRU) cache with auto-eviction, live updates, and concurrency handling.",
        technologies: ["TypeScript", "Golang", "WebSocket", "REST APIs"],
        githubLink: "https://github.com/yourusername/lru-cache",
    },
    {
        title: "School Vaccination Portal",
        description:
            "Built and deployed full-stack web application for managing school vaccination drives with role-based authentication and real-time dashboard using Agile methodology.",
        technologies: ["React", "TypeScript", "Node.js", "Material-UI", "JWT"],
        githubLink: "https://github.com/yourusername/vaccination-portal",
    },
];

const Projects = () => {
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
            id="projects"
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
                        Featured Projects
                    </Typography>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={4}
                                key={project.title}
                            >
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
                                            display: "flex",
                                            flexDirection: "column",
                                            transition:
                                                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "translateY(-4px)",
                                                boxShadow: (theme) =>
                                                    theme.shadows[4],
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            color="primary.main"
                                            sx={{ mb: 2, fontWeight: 600 }}
                                        >
                                            {project.title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            color="text.primary"
                                            sx={{ mb: 3, flex: 1 }}
                                        >
                                            {project.description}
                                        </Typography>

                                        <Stack spacing={2}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: 1,
                                                    mb: 2,
                                                }}
                                            >
                                                {project.technologies.map(
                                                    (tech) => (
                                                        <Chip
                                                            key={tech}
                                                            label={tech}
                                                            size="small"
                                                            sx={{
                                                                bgcolor:
                                                                    "background.default",
                                                                color: "text.primary",
                                                                borderRadius:
                                                                    "16px",
                                                            }}
                                                        />
                                                    )
                                                )}
                                            </Box>

                                            <Stack direction="row" spacing={2}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={<GitHubIcon />}
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    fullWidth
                                                    sx={{
                                                        borderRadius: "8px",
                                                    }}
                                                >
                                                    GitHub
                                                </Button>
                                                {project.demoLink && (
                                                    <Button
                                                        variant="outlined"
                                                        color="primary"
                                                        startIcon={
                                                            <OpenInNewIcon />
                                                        }
                                                        href={project.demoLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        fullWidth
                                                        sx={{
                                                            borderRadius: "8px",
                                                        }}
                                                    >
                                                        Live Demo
                                                    </Button>
                                                )}
                                            </Stack>
                                        </Stack>
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

export default Projects;
