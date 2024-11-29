import { useRef } from "react";
import { ButtonTime } from "./buttonTime";

export function CardTimeManha() {
  const buttonRef = useRef<undefined>(null);
  const handleClick = () => {
    console.log(buttonRef.current);
  };
  return (
    <div className="space-y-3">
      <h4 className="text-gray-300 text-sm ">Manhã</h4>
      <div className="grid grid-cols-4 gap-2">
        <ButtonTime handleClick={handleClick} elementRef={buttonRef}>
          9:00
        </ButtonTime>
        <ButtonTime handleClick={handleClick}>10:00</ButtonTime>
        <ButtonTime handleClick={handleClick}>11:00</ButtonTime>
        <ButtonTime handleClick={handleClick}>12:00</ButtonTime>
      </div>
    </div>
  );
}
