import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import styled, { StyleSheetManager, ThemeProvider } from "styled-components";
import { Page } from "./animations/page-transitions";
import Header from "./components/layout/header";
import { useLocalStorageState } from "./hooks/useLocalStorage";
import DressingRoomPage from "./pages/dressingroom-page";
import StartPage from "./pages/startpage";
import { GlobalStyles } from "./theme/GlobalStyles";
import { pinkTheme, blackTheme } from "./theme/Themes";
import { StyleColorProvider } from "./contexts/styleColorContext";
import isPropValid from "@emotion/is-prop-valid";


function App() {
  const [theme, setTheme] = useLocalStorageState("pink", "theme");
  const location = useLocation();
  const locationArr = location.pathname?.split("/") ?? [];

  const themeToggler = () => {
    theme === "pink" ? setTheme("black") : setTheme("pink");
  };


  return (
    <div className="App">
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider theme={theme === "pink" ? pinkTheme : blackTheme}>
          <StyleColorProvider>
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
          </StyleColorProvider>
        </ThemeProvider>
      </StyleSheetManager>
    </div>
  );
}
function shouldForwardProp(propName:any, target:any) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

const Main = styled.main`
  margin-top: 3rem;
`;


export default App;
