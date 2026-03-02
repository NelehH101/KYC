import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import './index.css'
import App from './App.tsx'

// Creating a basic dark theme to match your background
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d1ff', 
    },
  },
  typography: {
    // This sets Montserrat for all Typography components
    fontFamily: '"Montserrat", sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em', // Makes the bold headers look tighter
    },
    h6: {
      fontWeight: 300,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none', // Keeps buttons from being all caps
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* This resets CSS and applies the dark background color */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)