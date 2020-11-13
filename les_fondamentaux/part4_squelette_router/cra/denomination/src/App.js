import { Component } from "react";
import Denomination from "./components/Denomination";
const tokens = [1, 5, 10, 20, 50, 100, 200];

class App extends Component {
  render() {
    return (
      <>
        <h1>Dénomination</h1>
        <Denomination tokens={tokens} />
      </>
    );
  }
}

export default App;