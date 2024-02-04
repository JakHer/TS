import { useMemo } from "react";
import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Greet } from "./components/Greet";

function App() {
  const person = useMemo(
    () => ({ firstName: "Jakub", lastName: "Hermyt" }),
    []
  );
  const personList = useMemo(
    () => [
      { firstName: "Jakub", lastName: "Hermyt" },
      { firstName: "Adam", lastName: "Hermyt" },
      { firstName: "Czerwona", lastName: "Latarnia" },
    ],
    []
  );
  return (
    <div className="App">
      <Greet name="Jakub" messagesCount={10} isLoggedIn={true} />
      <Person person={person} />
      <PersonList personList={personList} />
    </div>
  );
}

export default App;
