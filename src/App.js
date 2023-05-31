import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from './theme';
import { Box } from '@mui/material'
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box className="App">
          <Routes>
            <Route index path="/" element={<LandingPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
