import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ptBR } from "date-fns/locale/pt-BR";
import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./theme.ts";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <CssBaseline>
          <Container maxWidth="lg">
            <Box sx={{ my:4 }}>
              <App />
            </Box>
          </Container>
        </CssBaseline>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
