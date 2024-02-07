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
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { User as ContextUser } from "./components/context/User";
import { Counter } from "./components/state/Counter";
import { Counter as CounterClass } from "./components/class/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRefs";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";

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
      <Container styles={{ background: "red", padding: "16px" }} />
      <LoggedIn />

      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <ContextUser />
      </UserContextProvider>

      <DomRef />
      <MutableRef />
      <CounterClass message="The count value is" />

      <Private isLoggedIn={true} component={Profile} />
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={["test", "test2", "test3"]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          {
            id: 1,
            name: "name",
            surname: "surname",
          },
          {
            id: 2,
            name: "name",
            surname: "surname",
          },
          {
            id: 3,
            name: "name",
            surname: "surname",
          },
        ]}
        onClick={(item) => console.log(item)}
      />

      <RandomNumber value={10} isNegative />
    </div>
  );
}

export default App;
