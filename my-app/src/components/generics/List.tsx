import { useMemo } from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  const itemsList = useMemo(
    () =>
      items.map((item) => (
        <li onClick={() => onClick(item)} key={item.id}>
          {item.id}
        </li>
      )),
    [items, onClick]
  );

  return (
    <div>
      <h2>List of items</h2>
      <ul>{itemsList}</ul>
    </div>
  );
};
