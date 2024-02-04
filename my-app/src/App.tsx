import { useMemo } from "react";
import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Greet } from "./components/Greet";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Kuba } from "./components/Kuba";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

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
      <Greet name="Jakub" messagesCount={10} isLoggedIn />
      <Heading>Heading</Heading>
      <Kuba>
        <Heading>Heading</Heading>
      </Kuba>
      <Greet name="Kuba" isLoggedIn />
      <Greet name="Kuba" />
      <Person person={person} />
      <PersonList personList={personList} />
      <Status status="loading" />
      <Button
        handlClick={(event, id) => console.log("Button Clicked", event, id)}
      />
      <Input
        value=""
        handleChange={(event) => console.log("event", event.target)}
      />
    </div>
  );
}

export default App;
