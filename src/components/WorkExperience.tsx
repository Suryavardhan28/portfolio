import {
    Box,
    Container,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Experience {
    title: string;
    company: string;
    websiteLink: string;
    location: string;
    period: string;
    achievements: string[];
}

const experiences: Experience[] = [
    {
        title: "Software Engineer",
        company: "Betsol",
        websiteLink: "https://betsol.com",
        location: "Bengaluru, Karnataka",
        period: "March 2024 - Present",
        achievements: [
            "Led development of unified telecommunications platform centralizing management of 100,000+ Toll-Free Numbers and 500,000+ DIDs across multiple carriers.",
            "Built and integrated ServiceNow automation APIs eliminating manual provisioning processes and reducing order processing time from days to hours.",
            "Designed and engineered bulk operations system enabling concurrent processing of hundreds of orders with thousands of line items.",
            "Developed cross-carrier global search functionality providing real-time inventory visibility across all carriers simultaneously.",
            "Automated customer provisioning workflows using GCP Cloud Functions and Secret Manager.",
            "Collaborated in Agile sprints as technical contributor, gathering requirements from business stakeholders.",
        ],
    },
    {
        title: "Associate Software Engineer",
        company: "Betsol",
        websiteLink: "https://betsol.com",
        location: "Bengaluru, Karnataka",
        period: "January 2022 - March 2024",
        achievements: [
            "Engineered and delivered comprehensive Windows backup and restore desktop application UI using React.js and Material-UI.",
            "Architected and deployed Key Wrapping security framework for JWT access token management.",
            "Executed complete modernization of legacy codebase including package upgrades and advanced code obfuscation techniques.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "Betsol",
        websiteLink: "https://betsol.com",
        location: "Bengaluru, Karnataka",
        period: "January 2022 - April 2022",
        achievements: [
            "Enhanced and optimized Django/React.js application by integrating SurveyMonkey APIs and implementing asynchronous survey creation following SDLC practices.",
        ],
    },
];

const WorkExperience = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <Box
            id="experience"
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
                        Work Experience
                    </Typography>

                    <Box sx={{ position: "relative" }}>
                        {/* Timeline line */}
                        {!isMobile && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "50%",
                                    top: 0,
                                    bottom: 0,
                                    width: 2,
                                    bgcolor: "primary.main",
                                    opacity: 0.3,
                                }}
                            />
                        )}

                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.period}
                                variants={itemVariants}
                            >
                                {/* Timeline dot */}
                                {!isMobile && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            left: "50%",
                                            ml: 0.1,
                                            transform: "translateX(-50%)",
                                            width: 16,
                                            height: 16,
                                            borderRadius: "50%",
                                            bgcolor: "primary.main",
                                            border: "3px solid",
                                            borderColor: "background.default",
                                            zIndex: 1,
                                        }}
                                    />
                                )}

                                <Box
                                    sx={{
                                        flex: 1,
                                        pr: isMobile ? 0 : 4,
                                        pl: isMobile
                                            ? 0
                                            : index % 2 === 0
                                            ? 0
                                            : 4,
                                        ml: isMobile
                                            ? 0
                                            : index % 2 === 0
                                            ? 0
                                            : "auto",
                                        width: isMobile ? "100%" : "50%",
                                    }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            m: 0.5,
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
                                        onClick={() => {
                                            window.open(
                                                experience.websiteLink,
                                                "_blank"
                                            );
                                        }}
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            color="primary.main"
                                            sx={{ fontWeight: 600, mb: 1 }}
                                        >
                                            {experience.title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.primary"
                                            sx={{ mb: 0.5 }}
                                        >
                                            {experience.company}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="text.secondary"
                                            sx={{ mb: 2 }}
                                        >
                                            {experience.location} |{" "}
                                            {experience.period}
                                        </Typography>
                                        <Box
                                            component="ul"
                                            sx={{ m: 0, pl: 2 }}
                                        >
                                            {experience.achievements.map(
                                                (achievement, i) => (
                                                    <Typography
                                                        key={i}
                                                        component="li"
                                                        variant="body2"
                                                        color="text.primary"
                                                        sx={{ mb: 1 }}
                                                    >
                                                        {achievement}
                                                    </Typography>
                                                )
                                            )}
                                        </Box>
                                    </Paper>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default WorkExperience;
