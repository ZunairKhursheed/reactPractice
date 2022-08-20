import { ThemeProvider } from "styled-components";
import { lightTheme, GlobalStyles } from "./Theme/Theme";
import "./App.css";
import { Home } from "./Views/Home/Home";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Home />
      <div className="grid grid-cols-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
