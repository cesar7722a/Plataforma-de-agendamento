import { SquareUserRound } from "lucide-react";
import { CardTimeManha } from "./card-time-manha";
import { CardTimeNoite } from "./card-time-noite";
import { CardTimeTarde } from "./card-time-tarde";
import { DatePickerDemo } from "./date-picker-demo";
import { Button } from "./ui/button";

export function FormAgendaData() {
  return (
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
  );
}
