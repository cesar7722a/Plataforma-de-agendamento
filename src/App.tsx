import { DatePickerDemo } from "./components/date-picker-demo";
import { CardTimeManha } from "./components/card-time-manha";
import { CardTimeTarde } from "./components/card-time-tarde";
import { CardTimeNoite } from "./components/card-time-noite";
import { CalendarDays, CloudSun, SquareUserRound } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { SelectContent } from "@radix-ui/react-select";

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
          <div className="rounded border border-gray-600">
            <div className="flex justify-between px-5 py-3 items-center border border-b-gray-600 border-t-0 border-r-0 border-l-0">
              <span className="space-x-2 flex items-center">
                <CloudSun className="size-5 text-[#B8952E]" />
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
        </div>
      </div>
    </div>
  );
}
