type PersonProps = {
  person: {
    firstName: string;
    lastName: string;
  };
};

export const Person = ({ person: { firstName, lastName } }: PersonProps) => {
  return (
    <p>
      {firstName} {lastName}
    </p>
  );
};
