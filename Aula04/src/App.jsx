// Componente Pai
// Componente Filho
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComponentEvents from "./components/ComponentEvents";



function App() {

  return (
    <>
      <Header/>
      {/* Exemplos */}
      <ComponentEvents/>
      {/* Exemplos */}
      <Footer/>

    </>
  );
}

// É preciso exportar para usar esse também!
export default App;