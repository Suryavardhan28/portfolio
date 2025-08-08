import type { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  // Light mode
                  primary: {
                      main: "#6366F1", // Brighter indigo
                      light: "#818CF8", // Light indigo
                      dark: "#4F46E5", // Deep indigo
                  },
                  secondary: {
                      main: "#10B981", // Brighter emerald
                      light: "#34D399", // Light emerald
                      dark: "#059669", // Deep emerald
                  },
                  background: {
                      default: "#ffffff",
                      paper: "rgba(255, 255, 255, 0.9)",
                  },
                  text: {
                      primary: "#000000",
                      secondary: "#666666", // neutral
                  },
                  divider: "rgba(0, 0, 0, 0.08)",
              }
            : {
                  // Dark mode
                  primary: {
                      main: "#22D3EE", // Brighter cyan
                      light: "#67E8F9", // Light cyan
                      dark: "#0891B2", // Deep cyan
                  },
                  secondary: {
                      main: "#F0F9FF", // Brighter sky
                      light: "#FFFFFF", // Pure white
                      dark: "#E0F2FE", // Light sky
                  },
                  background: {
                      default: "#111827",
                      paper: "#1F2937",
                  },
                  text: {
                      primary: "#F7FAFC",
                      secondary: "#A0AEC0",
                  },
              }),
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: "2.5rem",
            "@media (min-width:600px)": {
                fontSize: "3rem",
            },
            "@media (min-width:900px)": {
                fontSize: "3.5rem",
            },
            fontWeight: 700,
            letterSpacing: "-0.01562em",
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "2rem",
            "@media (min-width:600px)": {
                fontSize: "2.5rem",
            },
            "@media (min-width:900px)": {
                fontSize: "2.75rem",
            },
            fontWeight: 600,
            letterSpacing: "-0.00833em",
            lineHeight: 1.3,
        },
        h3: {
            fontSize: "1.75rem",
            "@media (min-width:600px)": {
                fontSize: "2rem",
            },
            "@media (min-width:900px)": {
                fontSize: "2.25rem",
            },
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: 1.4,
        },
        h4: {
            fontSize: "1.5rem",
            "@media (min-width:600px)": {
                fontSize: "1.75rem",
            },
            fontWeight: 500,
            letterSpacing: "0.00735em",
            lineHeight: 1.4,
        },
        body1: {
            fontSize: "0.875rem",
            "@media (min-width:600px)": {
                fontSize: "1rem",
            },
            letterSpacing: "0.00938em",
            lineHeight: 1.6,
        },
        body2: {
            fontSize: "0.8125rem",
            "@media (min-width:600px)": {
                fontSize: "0.875rem",
            },
            letterSpacing: "0.00938em",
            lineHeight: 1.6,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    ...(mode === "light" && {
                        backgroundColor: "#f3f3f3", // gray
                        backgroundImage:
                            "linear-gradient(to bottom right, rgba(112, 115, 217, 0.05), rgba(57, 182, 128, 0.05))",
                    }),
                    "&::-webkit-scrollbar": {
                        width: "12px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background:
                            mode === "light"
                                ? "rgba(0, 0, 0, 0.08)"
                                : "rgba(255, 255, 255, 0.08)",
                        borderRadius: "8px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background:
                            mode === "light"
                                ? "rgba(99, 102, 241, 0.8)" // Light mode: bright indigo
                                : "rgba(34, 211, 238, 0.8)", // Dark mode: bright cyan
                        borderRadius: "8px",
                        border: "3px solid transparent",
                        backgroundClip: "padding-box",
                        "&:hover": {
                            background:
                                mode === "light"
                                    ? "rgba(99, 102, 241, 1)" // Full opacity on hover
                                    : "rgba(34, 211, 238, 1)", // Full opacity on hover
                            borderRadius: "8px",
                            border: "3px solid transparent",
                            backgroundClip: "padding-box",
                        },
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    ...(mode === "light" && {
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        borderColor: "rgba(0, 0, 0, 0.05)",
                    }),
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 500,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    },
                } as const,
            },
            variants: [
                {
                    props: { variant: "contained", color: "primary" } as const,
                    style: {
                        background:
                            mode === "light"
                                ? "linear-gradient(45deg, #6366F1, #4F46E5)"
                                : "linear-gradient(45deg, #22D3EE, #0891B2)",
                    },
                },
                {
                    props: {
                        variant: "contained",
                        color: "secondary",
                    } as const,
                    style: {
                        background:
                            mode === "light"
                                ? "linear-gradient(45deg, #10B981, #059669)"
                                : "linear-gradient(45deg, #F0F9FF, #E0F2FE)",
                    },
                },
            ],
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

export const getTheme = (mode: PaletteMode) =>
    createTheme(getDesignTokens(mode));
