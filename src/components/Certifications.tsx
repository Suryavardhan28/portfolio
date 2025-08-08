import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
    Box,
    Container,
    Grid,
    Link,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Certification {
    title: string;
    issuer: string;
    link: string;
    date?: string;
}

interface Achievement {
    title: string;
    date: string;
    description?: string;
}

const certifications: Certification[] = [
    {
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        link: "https://www.credly.com/badges/755ec034-5778-4464-9f2e-715724fb8f89/linked_in_profile",
    },
    {
        title: "Advanced Java Programming",
        issuer: "NIIT",
        link: "https://drive.google.com/file/d/1VRu0SKt-Cr8g13OTrft5yKKoOK_CTu5f/view",
    },
    {
        title: "Modern JavaScript Development",
        issuer: "Udemy",
        link: "https://www.udemy.com/certificate/UC-ed92eb0e-3f44-45c3-b230-6786c7453dc3/",
    },
    {
        title: "Modern HTML5 & CSS3",
        issuer: "Udemy",
        link: "https://www.udemy.com/certificate/UC-a7ee84f6-6eba-49f1-a2b7-59bd59dd9d44/",
    },
];

const achievements: Achievement[] = [
    {
        title: "Above and Beyond Award",
        date: "August 2024",
        description: "Betsol",
    },
    {
        title: "Spot Award",
        date: "July 2023",
        description: "Betsol",
    },
    {
        title: "Team Excellence Award",
        date: "5x recipient",
        description:
            "Betsol (Nov 2022, Jan 2024, Aug 2024, Jan 2025, Jul 2025)",
    },
];

const Certifications = () => {
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
            id="certifications"
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
                        Certifications & Achievements
                    </Typography>

                    <Grid container spacing={4}>
                        {/* Certifications Section */}
                        <Grid item xs={12} md={6}>
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <VerifiedIcon color="primary" />
                                    Certifications
                                </Typography>
                                <Stack spacing={2}>
                                    {certifications.map((cert) => (
                                        <Paper
                                            key={cert.title}
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                bgcolor: "background.paper",
                                                borderRadius: 4,
                                                border: "1px solid",
                                                borderColor: "divider",
                                                transition:
                                                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                                "&:hover": {
                                                    transform:
                                                        "translateY(-4px)",
                                                    boxShadow: (theme) =>
                                                        theme.shadows[4],
                                                },
                                            }}
                                        >
                                            <Link
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                    display: "block",
                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    color="primary.main"
                                                    sx={{ mb: 1 }}
                                                >
                                                    {cert.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    color="text.secondary"
                                                >
                                                    {cert.issuer}
                                                </Typography>
                                            </Link>
                                        </Paper>
                                    ))}
                                </Stack>
                            </motion.div>
                        </Grid>

                        {/* Achievements Section */}
                        <Grid item xs={12} md={6}>
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <EmojiEventsIcon color="primary" />
                                    Achievements
                                </Typography>
                                <Stack spacing={2}>
                                    {achievements.map((achievement) => (
                                        <Paper
                                            key={achievement.title}
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                bgcolor: "background.paper",
                                                borderRadius: 4,
                                                border: "1px solid",
                                                borderColor: "divider",
                                                transition:
                                                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                                "&:hover": {
                                                    transform:
                                                        "translateY(-4px)",
                                                    boxShadow: (theme) =>
                                                        theme.shadows[4],
                                                },
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                color="primary.main"
                                                sx={{ mb: 1 }}
                                            >
                                                {achievement.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                            >
                                                {achievement.date}
                                            </Typography>
                                            {achievement.description && (
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ mt: 1 }}
                                                >
                                                    {achievement.description}
                                                </Typography>
                                            )}
                                        </Paper>
                                    ))}
                                </Stack>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Certifications;
