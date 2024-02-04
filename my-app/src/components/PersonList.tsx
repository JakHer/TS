import { useMemo } from "react";

type PersonListProps = {
  personList: {
    firstName: string;
    lastName: string;
  }[];
};

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
