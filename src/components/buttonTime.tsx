import { ComponentProps } from "react";
import { Button } from "./ui/button";

interface ButtonTime extends ComponentProps<"button"> {
  children: React.ReactNode;
  handleClick: () => void;
  isDisabled: boolean;
  key: number;
}
export function ButtonTime({
  children,
  handleClick,
  isDisabled,
  key,
}: ButtonTime) {
  return isDisabled ? (
    <Button
      key={key}
      onClick={handleClick}
      className="px-5 py-2.5 disabled:bg-transparent bg-gray-600 border text-[#B8952E] border-[#B8952E] rounded-md hover:cursor-pointer  hover:bg-gray-500"
    >
      {children}
    </Button>
  ) : (
    <Button
      key={key}
      onClick={handleClick}
      className="px-5 py-2.5 disabled:bg-transparent bg-gray-600 border text-gray-200 border-gray-500 rounded-md hover:cursor-pointer  hover:bg-gray-500"
    >
      {children}
    </Button>
  );
}
