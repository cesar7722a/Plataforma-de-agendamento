import { DatePickerDemo } from "./components/date-picker-demo";
import { CardTimeManha } from "./components/card-time-manha";
import { CardTimeTarde } from "./components/card-time-tarde";
import { CardTimeNoite } from "./components/card-time-noite";
import { CalendarDays, SquareUserRound } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { CardAgendaDate } from "./components/card-agenda-date";
import { CardAgendaDateTarde } from "./components/card-agenda-date-tarde";
import { CardAgendaDateNoite } from "./components/card-agenda-date-noite";

export function App() {
  return (
    <div className="flex">
      <div className="p-20 space-y-6 bg-gray-700 rounded-lg">
        <div className="space-y-2">
          <h1 className="text-2xl text-gray-100 font-bold">
            Agende um atendimento
          </h1>
          <h2 className="text-gray-300 text-sm w-[338px]">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </h2>
        </div>

        <div className="space-y-8">
          <div className="space-y-8">
            <span className="space-y-2">
              <h3 className="font-bold text-gray-200">Data</h3>
              <DatePickerDemo />
            </span>
          </div>
          <div>
            <div className="space-y-8">
              <span className="space-y-2">
                <h3 className="font-bold text-gray-200">Horários</h3>
                <CardTimeManha />
                <CardTimeTarde />
                <CardTimeNoite />
              </span>
              <form className="space-y-10" action="">
                <div className="space-y-2">
                  <h3 className="font-bold text-gray-200">Cliente</h3>
                  <span className="border border-gray-500 w-full flex rounded-md px-3 py-3 text-gray-200 space-x-2">
                    <SquareUserRound className="text-[#B8952E]" />
                    <input
                      className="flex-1  outline-none bg-transparent"
                      placeholder="Helena Souza"
                      type="text"
                    />
                  </span>
                </div>
                <Button className="px-4 hover:bg-[#DBC170] disabled:bg-[#846F2E] rounded-md w-full h-12 text-gray-900 font-bold bg-[#B8952E]">
                  Agendar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}
