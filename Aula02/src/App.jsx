// Componente Pai
// Componente Filho
import JSXExamples from "./components/JSXExamples";

function App() {

  return (
    <>
      <div className="container text-center mt-5 text-primary">
        <h1>JSX</h1>
        <h2 className="text-dark">
          Segunda parte do aulão, com prof. Matheus
        </h2>
        <hr />
        {/* Componentes */}

        <JSXExamples/>

      </div>
    </>
  );
}

// É preciso exportar para usar esse também!
export default App;