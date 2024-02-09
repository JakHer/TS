import "./App.css";
import {
  arr,
  convertToArray,
  createArrayPair,
  getIndexOfArrayItem,
} from "./ts/helpers";
import { Themes } from "./theme/theme";

function App() {
  console.log(convertToArray(1));

  console.log(getIndexOfArrayItem(arr, 77));
  console.log(createArrayPair("hello", 10));

  return (
    <div className="App">
      <Themes />
    </div>
  );
}

export default App;
