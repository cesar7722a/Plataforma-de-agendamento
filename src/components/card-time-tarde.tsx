import { useState } from "react";
import { ButtonTime } from "./buttonTime";

interface ButtonProps {
  title: string;
  isDisabled: boolean;
  id: number;
}

export function CardTimeTarde() {
  const [dataButton, setDataButton] = useState<ButtonProps[]>([
    { title: "12:00", isDisabled: false, id: 0 },
    { title: "13:00", isDisabled: false, id: 2 },
    { title: "14:00", isDisabled: false, id: 3 },
    { title: "15:00", isDisabled: false, id: 4 },
    { title: "16:00", isDisabled: false, id: 5 },
    { title: "17:00", isDisabled: false, id: 6 },
    { title: "18:00", isDisabled: false, id: 7 },
  ]);

  const handleClick = (id: number) => {
    setDataButton((prev) =>
      prev.map((item) =>
        item.id === id && item.isDisabled === false
          ? { ...item, isDisabled: true }
          : { ...item, isDisabled: false }
      )
    );
  };
  return (
    <div className="space-y-3">
      <h4 className="text-gray-300 text-sm ">Tarde</h4>
      <div className="grid grid-cols-4 gap-2">
        {dataButton.map((data) => (
          <ButtonTime
            key={data.id}
            isDisabled={data.isDisabled}
            handleClick={() => handleClick(data.id)}
          >
            {data.title}
          </ButtonTime>
        ))}
      </div>
    </div>
  );
}
