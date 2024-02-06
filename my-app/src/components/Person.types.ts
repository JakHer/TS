export type PersonName = {
    firstName: string;
    lastName: string;
}

export type PersonProps = {
    person: PersonName;
  };

export type PersonListProps = {
    personList: PersonName[];
  };