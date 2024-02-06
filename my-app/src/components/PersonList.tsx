import { useMemo } from "react";
import { PersonListProps } from "./Person.types";

export const PersonList = ({ personList }: PersonListProps) => {
  const renderPersonList = useMemo(
    () =>
      personList?.map(({ firstName, lastName }) => (
        <li key={firstName + lastName}>
          {firstName} {lastName}
        </li>
      )),
    [personList]
  );
  return <ul>{renderPersonList}</ul>;
};
