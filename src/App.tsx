import { DatePickerDemo } from "./components/date-picker-demo";
import { CardTimeManha } from "./components/card-time-manha";
import { CardTimeTarde } from "./components/card-time-tarde";
import { CardTimeNoite } from "./components/card-time-noite";

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
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
