import isPropValid from '@emotion/is-prop-valid';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled, { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Page } from './animations/page-transitions';
import { headerLinksData } from './assets/data/headerLinksData';
import Header from './components/layout/header';
import { ShopProvider } from './contexts/ShopContext';
import { StyleColorProvider } from './contexts/styleColorContext';
import { UserProvider } from './contexts/UserContext';
import { WardrobeProvider } from './contexts/WardrobeContext';
import { useLocalStorageState } from './hooks/useLocalStorage';
import DowntownPage from './pages/DowntownPage';
import DressingRoomPage from './pages/dressingroom-page';
import ShopPage from './pages/ShopPage';
import StartPage from './pages/startpage';
import { GlobalStyles } from './theme/GlobalStyles';
import { blackTheme, pinkTheme } from './theme/Themes';

function App() {
  const [theme, setTheme] = useLocalStorageState('pink', 'theme');
  const location = useLocation();
  const locationArr = location.pathname?.split('/') ?? [];

  const themeToggler = () => {
    theme === 'pink' ? setTheme('black') : setTheme('pink');
  };

  return (
    <div className="App">
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider theme={theme === 'pink' ? pinkTheme : blackTheme}>
          <StyleColorProvider>
            <UserProvider>
              <ShopProvider>
                <WardrobeProvider>
                  <GlobalStyles />
                  <Header
                    theme={theme}
                    themeToggler={themeToggler}
                    headerLinks={headerLinksData}
                  />
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
                        <Route
                          path="/shop"
                          element={
                            <Page>
                              <ShopPage />
                            </Page>
                          }
                        />
                        <Route
                          path="/profile"
                          element={
                            <Page>
                              <StartPage />
                            </Page>
                          }
                        />
                        <Route
                          path="/downtown"
                          element={
                            <Page>
                              <DowntownPage />
                            </Page>
                          }
                        />
                      </Routes>
                    </AnimatePresence>
                  </Main>
                </WardrobeProvider>
              </ShopProvider>
            </UserProvider>
          </StyleColorProvider>
        </ThemeProvider>
      </StyleSheetManager>
    </div>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shouldForwardProp(propName: any, target: any) {
  if (typeof target === 'string') {
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
