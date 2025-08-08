import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useThemeContext } from "../theme/useThemeContext";

const ThemeToggle = () => {
    const { mode, toggleColorMode } = useThemeContext();

    return (
        <Tooltip
            title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        >
            <IconButton
                onClick={toggleColorMode}
                color="inherit"
                sx={{
                    position: "fixed",
                    left: 30,
                    bottom: 30,
                    bgcolor: "background.paper",
                    boxShadow: (theme) => theme.shadows[4],
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: (theme) => theme.zIndex.appBar + 1,
                    "&:hover": {
                        bgcolor: "background.paper",
                    },
                }}
            >
                {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggle;
