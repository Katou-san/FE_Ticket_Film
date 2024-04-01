import { useContext } from "react";
import Header from "./component/Header/main-ui/Header";
import ListTicket from "./component/layouts/List_Ticket/ListTicket";
import { PageMain } from "./page";
import { contextForm } from "./Hook/Context/Context_Form";

function App() {
  const { state_Form, dispatch_Form } = useContext(contextForm);
  const { Ticket_Form_Hidden } = state_Form;
  return (
    <div className="App">
      <Header />
      <PageMain />
      <ListTicket
        Ticket_Form={Ticket_Form_Hidden}
        dispatch_Form={dispatch_Form}
      />
    </div>
  );
}

export default App;
