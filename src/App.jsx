import GlobalStyle from "./components/GlobalStyle";
import { Overview } from "./components/Overview";
import { TopMenu } from "./components/TopMenu";

function App() {
  return (
    <>
      <GlobalStyle />

      <TopMenu />
      <Overview />
    </>
  );
}

export default App;
