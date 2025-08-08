import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import TechnicalSkills from "./components/TechnicalSkills";
import WorkExperience from "./components/WorkExperience";
import { theme } from "./theme/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box
                    sx={{
                        minHeight: "100vh",
                        bgcolor: "background.default",
                        color: "text.primary",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Header />
                    <Hero />
                    <Box
                        component="main"
                        sx={{
                            py: 8,
                            flex: 1,
                            width: "100%",
                        }}
                    >
                        <ProfessionalSummary />
                        <TechnicalSkills />
                        <WorkExperience />
                        <Education />
                        <Projects />
                        <Certifications />
                    </Box>
                    <Footer />
                    <ScrollToTop />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
