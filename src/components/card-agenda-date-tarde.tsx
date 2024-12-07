import { CloudSun } from "lucide-react";
import { ItemList } from "./item-list";

export function CardAgendaDateTarde() {
  return (
    <div className="rounded border border-gray-600">
      <div className="flex justify-between px-5 py-3 items-center border border-b-gray-600 border-t-0 border-r-0 border-l-0">
        <span className="space-x-2 flex items-center">
          <CloudSun className="size-5 text-[#B8952E]" />
          <h4>Tarde</h4>
        </span>
        <span>13h-18h</span>
      </div>
      <ul className="p-5">
        <ItemList nameClient="Ryan Dorwart" time="13:00" />
        <ItemList nameClient="Ryan Dorwart" time="14:00" />
        <ItemList nameClient="Ryan Dorwart" time="15:00" />
        <ItemList nameClient="Ryan Dorwart" time="16:00" />
      </ul>
    </div>
  );
}
