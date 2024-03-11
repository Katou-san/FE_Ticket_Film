import { Outlet } from "react-router-dom";
import Header from "./component/Header/main-ui/Header";
import { PageMain } from "./page";

function App() {
  return (
    <div className="App">
      <Header />
      <PageMain />
    </div>
  );
}

export default App;
