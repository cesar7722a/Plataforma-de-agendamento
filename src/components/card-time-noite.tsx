import { useState } from "react";
import { ButtonTime } from "./buttonTime";

interface ButtonProps {
  title: string;
  isDisabled: boolean;
  id: number;
}

export function CardTimeNoite() {
  const [dataButton, setDataButton] = useState<ButtonProps[]>([
    { title: "19:00", isDisabled: false, id: 0 },
    { title: "20:00", isDisabled: false, id: 1 },
    { title: "21:00", isDisabled: false, id: 2 },
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
      <h4 className="text-gray-300 text-sm ">Noite</h4>
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
