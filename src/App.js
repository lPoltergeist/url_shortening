import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import MainSection from "./components/MainSection/MainSection";
import SecondSection from "./components/SecondSection/SecondSection";
import BoostLinks from "./components/BoostLinks/BoostLinks";
import Footer from "./components/Footer/Footer";


function App() {
  return (

    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Navbar />
      <MainSection />
      <SecondSection />
      <BoostLinks />
      <Footer/>
    </ThemeProvider>

  );
}

export default App;
