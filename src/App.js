import "./App.css";

import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import SelectedWord from "./components/SelectedWord/SelectedWord";

function App() {
  return (
    <Wrapper>
      <Header />
      <SelectedWord />
    </Wrapper>
  );
}

export default App;
