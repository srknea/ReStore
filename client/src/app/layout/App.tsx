import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
  }});
    
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline/> 
      <Header/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>

  )
}

export default App
