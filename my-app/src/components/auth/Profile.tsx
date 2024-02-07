export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return <p>Private Profile Component: {name}</p>;
};
