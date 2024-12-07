import { Haze } from "lucide-react";

export function CardAgendaDate() {
  return (
    <div className="rounded border border-gray-600">
      <div className="flex justify-between px-5 py-3 items-center border border-b-gray-600 border-t-0 border-r-0 border-l-0">
        <span className="space-x-2 flex items-center">
          <Haze className="size-5 text-[#B8952E]" />
          <h4>Manhã</h4>
        </span>
        <span>9h-12h</span>
      </div>
      <ul className="p-5">
        <li className="py-1 space-x-6 text-gray-200 flex">
          <span>11:00</span>
          <h4>Ryan Dorwart</h4>
        </li>
        <li className="py-1 space-x-6 text-gray-200 flex">
          <span>11:00</span>
          <h4>Ryan Dorwart</h4>
        </li>
      </ul>
    </div>
  );
}
