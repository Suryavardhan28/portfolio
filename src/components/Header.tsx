import MenuIcon from "@mui/icons-material/Menu";
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Typography,
    useScrollTrigger,
    useTheme,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const pages = [
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Education",
    "Certifications",
];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const theme = useTheme();

    const controls = useAnimation();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    useEffect(() => {
        controls.start({
            height: trigger ? "56px" : "72px",
            backdropFilter: trigger ? "blur(10px)" : "none",
            background:
                theme.palette.mode === "light"
                    ? trigger
                        ? "linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.95)), radial-gradient(circle at top right, rgba(99, 102, 241, 0.1), transparent 60%)"
                        : "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 1)), radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 60%)"
                    : trigger
                    ? "linear-gradient(135deg, rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.95)), radial-gradient(circle at top right, rgba(34, 211, 238, 0.1), transparent 60%)"
                    : "linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 1)), radial-gradient(circle at top right, rgba(34, 211, 238, 0.15), transparent 60%)",
            backgroundBlendMode: "overlay",
            boxShadow: trigger
                ? theme.palette.mode === "light"
                    ? "0 8px 16px -4px rgba(0, 0, 0, 0.08), 0 4px 8px -4px rgba(0, 0, 0, 0.06)"
                    : "0 8px 16px -4px rgba(0, 0, 0, 0.3), 0 4px 8px -4px rgba(0, 0, 0, 0.2)"
                : "none",
            border: trigger
                ? `1px solid ${
                      theme.palette.mode === "light"
                          ? "rgba(0, 0, 0, 0.15)"
                          : "rgba(255, 255, 255, 0.15)"
                  }`
                : "none",
            scale: trigger ? 0.98 : 1,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        });
    }, [trigger, controls, theme]);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box
            sx={{
                position: "fixed",
                width: "100%",
                top: 0,
                zIndex: theme.zIndex.appBar,
                px: trigger ? 2 : 0,
                transition: "padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            <motion.div
                initial={false}
                animate={controls}
                style={{
                    width: "100%",
                    maxWidth: trigger ? "1200px" : "100%",
                    margin: "0 auto",
                    borderRadius: trigger ? "12px" : "0",
                    overflow: "hidden",
                    marginTop: trigger ? "24px" : "0",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        height: "100%",
                        px: { xs: 2, md: 3 },
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "primary.main",
                                fontSize: trigger ? "1.25rem" : "1.5rem",
                                transition: "font-size 0.2s ease-in-out",
                            }}
                        >
                            SURYA V
                        </Typography>
                    </motion.div>

                    {/* Mobile Menu */}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link
                                        to={page.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        offset={-64}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop Menu */}
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        {pages.map((page, index) => (
                            <motion.div
                                key={page}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Link
                                    to={page.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    offset={-64}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            color: "text.primary",
                                            fontSize: trigger
                                                ? "0.9rem"
                                                : "1rem",
                                            transition: "all 0.2s ease-in-out",
                                            "&:hover": {
                                                color: "primary.main",
                                                backgroundColor: "transparent",
                                            },
                                            "&:focus": {
                                                outline: "none",
                                            },
                                            "&:focus-visible": {
                                                outline: "none",
                                            },
                                        }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                href="mailto:suryavardhan28@gmail.com"
                                sx={{
                                    borderRadius: "20px",
                                    px: 3,
                                    py: trigger ? 0.75 : 1,
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "inherit",
                                        opacity: 0.9,
                                        color: "white",
                                    },
                                    "&:focus": {
                                        outline: "none",
                                    },
                                    "&:focus-visible": {
                                        outline: "none",
                                    },
                                }}
                            >
                                Contact Me
                            </Button>
                        </motion.div>
                    </Stack>
                </Stack>
            </motion.div>
        </Box>
    );
};

export default Header;
