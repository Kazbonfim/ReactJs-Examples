// Todo componente é uma função
function FuncComponent() {

    //  Retorna um objeto com JSX
    return (
        // Mais de um elemento, fora de uma DIV, causa bugs
        // Existe um recurso que se chama FRAGMENT, basta fazer assim: <>*seu conteudo*</>
        <div className="container mt-5">
            <small>Meu primeiro Componente!</small>
            <h1 className="text-primary">Hello, world!</h1>
            <hr />
            <h3>Bem vindo ao meu primeiro projeto em React!</h3>
        </div>
    )

}

// Para usar o componente, é preciso exportar ele antes
export default FuncComponent;