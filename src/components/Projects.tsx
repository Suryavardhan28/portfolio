import GitHubIcon from "@mui/icons-material/GitHub";
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
            "Developed a real-time LRU cache system with WebSocket integration for live updates, automatic eviction of expired items, and thread-safe concurrent operations. Features include key-value storage with expiration, clipboard integration, and a responsive React TypeScript frontend.",
        technologies: ["TypeScript", "Golang", "WebSocket", "REST APIs"],
        githubLink: "https://github.com/Suryavardhan28/LRU-Cache",
    },
    {
        title: "School Vaccination Portal",
        description:
            "Built a comprehensive vaccination management system with role-based access control, real-time analytics dashboard, and automated report generation. Features include student record management, vaccination drive scheduling, and multi-format data export capabilities.",
        technologies: ["React", "TypeScript", "Node.js", "Material-UI", "JWT"],
        githubLink:
            "https://github.com/Suryavardhan28/school-vaccination-portal",
    },
    {
        title: "Jenkins CI/CD Pipeline",
        description:
            "Implemented a comprehensive CI/CD pipeline using Jenkins with automated testing, security scanning, and staged deployments. Features include master-slave configuration, role-based access control, and automated rollback procedures. Supports both staging and production environments with Docker containerization.",
        technologies: [
            "Jenkins",
            "Docker",
            "Node.js",
            "Express",
            "CI/CD",
            "Shell Scripting",
        ],
        githubLink:
            "https://github.com/Suryavardhan28/jenkins-pipeline-project",
    },
    {
        title: "Modern Portfolio Website",
        description:
            "Designed and developed a modern, responsive portfolio website with smooth animations, dynamic theme switching, and glass morphism effects. Features include interactive project cards, animated section transitions, and a fully responsive layout that adapts seamlessly across all devices.",
        technologies: [
            "React",
            "TypeScript",
            "Material-UI",
            "Framer Motion",
            "Bun",
        ],
        githubLink: "https://github.com/Suryavardhan28/portfolio",
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
                        {projects.map((project) => (
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
                                            minHeight: "380px",
                                            height: "100%",
                                            bgcolor: "background.paper",
                                            borderRadius: 4,
                                            border: "1px solid",
                                            borderColor: "divider",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            transition:
                                                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "translateY(-4px)",
                                                boxShadow: (theme) =>
                                                    theme.shadows[4],
                                            },
                                        }}
                                    >
                                        {/* Title Section */}
                                        <Box sx={{ mb: 3 }}>
                                            <Typography
                                                variant="h5"
                                                color="primary.main"
                                                sx={{
                                                    fontWeight: 600,
                                                    minHeight: "32px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {project.title}
                                            </Typography>
                                        </Box>

                                        {/* Description Section */}
                                        <Box sx={{ mb: 3 }}>
                                            <Typography
                                                variant="body1"
                                                color="text.primary"
                                                sx={{
                                                    minHeight: "96px",
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {project.description}
                                            </Typography>
                                        </Box>

                                        {/* Technologies Section */}
                                        <Box sx={{ mb: "auto" }}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: 0.5,
                                                    minHeight: "32px",
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
                                                                border: "1px solid",
                                                                borderColor:
                                                                    "divider",
                                                                m: 0.5,
                                                            }}
                                                        />
                                                    )
                                                )}
                                            </Box>
                                        </Box>

                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            sx={{ mt: 2 }}
                                        >
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
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "inherit",
                                                        opacity: 0.9,
                                                        color: "white",
                                                    },
                                                }}
                                            >
                                                GitHub
                                            </Button>
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
