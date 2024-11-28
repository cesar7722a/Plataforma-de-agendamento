import { ButtonTime } from "./buttonTime";

export function CardTimeManha() {
  return (
    <div className="space-y-3">
      <h4 className="text-gray-300 text-sm ">Manhã</h4>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <ButtonTime key={index} />
        ))}
      </div>
    </div>
  );
}
