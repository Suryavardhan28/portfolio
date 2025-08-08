import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#2DD4BF", // Continue-style teal
            light: "#4FD1C5",
            dark: "#285E61",
        },
        secondary: {
            main: "#805AD5", // Purple accent
            light: "#B794F4",
            dark: "#553C9A",
        },
        background: {
            default: "#111827", // Dark background
            paper: "#1F2937",
        },
        text: {
            primary: "#F7FAFC",
            secondary: "#A0AEC0",
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "3.5rem",
            },
            fontWeight: 700,
            letterSpacing: "-0.01562em",
            lineHeight: 1.2,
        },
        h2: {
            fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "2.75rem",
            },
            fontWeight: 600,
            letterSpacing: "-0.00833em",
            lineHeight: 1.3,
        },
        h3: {
            fontSize: {
                xs: "1.75rem",
                sm: "2rem",
                md: "2.25rem",
            },
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: 1.4,
        },
        h4: {
            fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "1.75rem",
            },
            fontWeight: 500,
            letterSpacing: "0.00735em",
            lineHeight: 1.4,
        },
        body1: {
            fontSize: {
                xs: "0.875rem",
                sm: "1rem",
                md: "1rem",
            },
            letterSpacing: "0.00938em",
            lineHeight: 1.6,
        },
        body2: {
            fontSize: {
                xs: "0.8125rem",
                sm: "0.875rem",
                md: "0.875rem",
            },
            letterSpacing: "0.00938em",
            lineHeight: 1.6,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: "none",
                    fontWeight: 500,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                },
            },
        },
    },
});
