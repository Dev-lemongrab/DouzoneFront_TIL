import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import "./App.css";
import SelectColors from "./components/SelectColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
