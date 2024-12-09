import { CardAgendaDate } from "./card-agenda-date";
import { CardAgendaDateNoite } from "./card-agenda-date-noite";
import { CardAgendaDateTarde } from "./card-agenda-date-tarde";
import { CalendarDays } from "lucide-react";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { SelectItem } from "@radix-ui/react-select";

export function CardAgendaGeral() {
  return (
    <div className="py-20 px-28 space-y-8">
      <div className="flex w-[590px] justify-between gap-4 items-center">
        <span className="space-y-1 flex-1">
          <h1 className="text-4xl font-bold text-gray-100">Sua agenda</h1>
          <h2 className="text-sm text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </h2>
        </span>
        <Select>
          <SelectTrigger className="w-[170px] flex gap-2 text-gray-200 border border-gray-500 p-3 rounded">
            <CalendarDays className="size-4 text-[#B8952E]" />
            <SelectValue placeholder="seleciona data" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">10/11/2024</SelectItem>
            <SelectItem value="2">12/03/2024</SelectItem>
            <SelectItem value="3">01/12/2024</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-3 text-gray-300 text-sm">
        <CardAgendaDate />
        <CardAgendaDateTarde />
        <CardAgendaDateNoite />
      </div>
    </div>
  );
}
