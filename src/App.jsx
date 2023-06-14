import { AboutMe } from "./components/AboutMe";
import GlobalStyle from "./components/GlobalStyle";
import { Overview } from "./components/Overview";
import { Skills } from "./components/Skills";
import { TopMenu } from "./components/TopMenu";

function App() {
  return (
    <>
      <GlobalStyle />

      <TopMenu />
      <Overview />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
