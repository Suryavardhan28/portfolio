import type { PaletteMode } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./themeContext.config";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<PaletteMode>(() => {
        const savedMode = localStorage.getItem("themeMode");
        return (savedMode as PaletteMode) || "dark";
    });

    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const contextValue = useMemo(
        () => ({
            mode,
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
