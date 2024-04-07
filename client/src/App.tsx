import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Page } from "./animations/page-transitions";
import Header from "./components/layout/header";
import { useLocalStorageState } from "./hooks/useLocalStorage";
import DressingRoomPage from "./pages/dressingroom-page";
import StartPage from "./pages/startpage";
import { GlobalStyles } from "./theme/GlobalStyles";
import { pinkTheme, blackTheme } from "./theme/Themes";

function App() {
  const [theme, setTheme] = useLocalStorageState("pink", "theme");
  const location = useLocation();
  const locationArr = location.pathname?.split("/") ?? [];

  const themeToggler = () => {
    theme === "pink" ? setTheme("black") : setTheme("pink");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "pink" ? pinkTheme : blackTheme}>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} />
        <Main>
          <AnimatePresence initial={false} mode="wait">
            <Routes location={location} key={locationArr[1]}>
              <Route
                path="/"
                element={
                  <Page>
                    <StartPage />
                  </Page>
                }
              />
              <Route
                path="/dressing-room"
                element={
                  <Page>
                    <DressingRoomPage />
                  </Page>
                }
              />
            </Routes>
          </AnimatePresence>
        </Main>
      </ThemeProvider>
    </div>
  );
}

const Main = styled.main`
  margin-top: 3rem;
`;


export default App;
