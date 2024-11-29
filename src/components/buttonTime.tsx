import { Button } from "./ui/button";

interface ButtonTime {
  children: React.ReactNode;
  elementRef?: React.LegacyRef<HTMLButtonElement> | undefined;
  handleClick: () => void;
}
export function ButtonTime({ children, elementRef, handleClick }: ButtonTime) {
  return (
    <Button
      onClick={handleClick}
      ref={elementRef}
      className="px-5 py-2.5 bg-gray-600 border text-gray-200 border-gray-500 rounded-md hover:cursor-pointer  hover:bg-gray-500"
    >
      {children}
    </Button>
  );
}
