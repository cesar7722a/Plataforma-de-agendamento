interface ItemListProps {
  time: string;
  nameClient: string;
}

export function ItemList({ time, nameClient }: ItemListProps) {
  return (
    <li className="py-1 space-x-6 text-gray-200 flex">
      <span className="font-bold">{time}</span>
      <h4>{nameClient}</h4>
    </li>
  );
}
