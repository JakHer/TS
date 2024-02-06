import { PersonProps } from "./Person.types";

export const Person = ({ person: { firstName, lastName } }: PersonProps) => {
  return (
    <p>
      {firstName} {lastName}
    </p>
  );
};
