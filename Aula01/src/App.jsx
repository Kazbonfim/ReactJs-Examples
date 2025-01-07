// Componente Pai
// Componente Filho 
import FuncComponent from './components/FuncComponent'; 
import ClassComponent from './components/ClassComponent';
import PropsExample from './components/PropsExample';

function App() {

  return (
    <>
      {/* Sempre que importar, é bom dar uso ao componente, ou desativar a regra no ESLint pra ficar tudo mais claro */}
      <FuncComponent/>
      <ClassComponent/>
      <PropsExample name="Lucas" age={26}/>
    </>
  );
}

// É preciso exportar para usar esse também!
export default App;