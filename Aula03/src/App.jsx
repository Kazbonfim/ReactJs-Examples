// Componente Pai
// Componente Filho
import { ActiveComponent } from "./components/ActiveComponent";
import { Footer } from "./components/Footer";
import { FormsComponent } from "./components/FormsComponent";
import Header from "./components/Header";
import JSXExamples from "./components/JSXExamples";
import UseStateComponents from "./components/UseStateComponents";

function App() {

  return (
    <>
      <Header/>
      {/* Exemplos */}
      <JSXExamples/>
      <UseStateComponents/>
      <FormsComponent/>
      <ActiveComponent/>
      {/* Exemplos */}
      <Footer/>

    </>
  );
}

// É preciso exportar para usar esse também!
export default App;