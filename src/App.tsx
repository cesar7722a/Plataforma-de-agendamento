import { CardAgendaGeral } from "./components/card-agenda-geral";
import { FormAgendaData } from "./components/form-agenda-data";

export function App() {
  return (
    <div className="flex">
      <FormAgendaData />
      <CardAgendaGeral />
    </div>
  );
}
