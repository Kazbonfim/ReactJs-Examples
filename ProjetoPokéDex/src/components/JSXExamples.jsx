import React from 'react'

const JSXExamples = () => {

    const pokemon1 = {
        id: 1,
        name: "Pikachu",
        type: "Elétrico",
        level: "20"
    }

    const pokemon2 = {
        id: 2,
        name: "Bulbasaur",
        type: "Grama/Veneno",
        level: "15"
    }

    const pokemon3 = {
        id: 3,
        name: "Charmander",
        type: "Fogo",
        level: "18"
    }


    function falarNome(nome) {
        return nome
    }

    const userIsOnline = true;

    const lista = [pokemon1, pokemon2, pokemon3];

    return (
        <div className='container text-dark text-center'>
            <h4>Podemos criar variáveis FORA do return de cada componente, assim, esses dados podem ser acessados pela propriedade DENTRO do return a qualquer momento!</h4>
            <hr />

            {/* Exibindo propriedades JS dentro de elementos HTML */}
            <div className='d-flex justify-content-around'>
                {/* Card para o Pikachu */}
                <div className="card" style={{ width: '18em' }}>
                    <div className="card-header">
                        {pokemon1.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Tipo: {pokemon1.type}</li>
                        <li className="list-group-item">Level: {pokemon1.level}</li>
                    </ul>
                </div>

                {/* Card para o Bulbasaur */}
                <div className="card" style={{ width: '18em' }}>
                    <div className="card-header">
                        {pokemon2.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Tipo: {pokemon2.type}</li>
                        <li className="list-group-item">Level: {pokemon2.level}</li>
                    </ul>
                </div>

                {/* Card para o Charmander */}
                <div className="card" style={{ width: '18em' }}>
                    <div className="card-header">
                        {pokemon3.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Tipo: {pokemon3.type}</li>
                        <li className="list-group-item">Level: {pokemon3.level}</li>
                    </ul>
                </div>
            </div>

            <hr />

            {/* Usando as funções simples do HTML dentro de elementos em JSX */}
            <div>
                <h1 className='text-primary'>Usando funções dentro do JSX</h1>
                <h2>Olá, {falarNome(pokemon1.name)}!</h2>
                <br />
                <div className="container d-flex justify-content-evenly">
                    <button onClick={() => { alert(`Você escolheu o ${pokemon1.name}`) }} className="btn btn-success">
                        Pegar
                    </button>
                    <button onClick={() => { alert(`Você escolheu o ${pokemon2.name}`) }} className="btn btn-success">
                        Pegar
                    </button>
                    <button onClick={() => { alert(`Você escolheu o ${pokemon3.name}`) }} className="btn btn-success">
                        Pegar
                    </button>
                </div>
            </div>

            <hr />

            {/* Graças a Deus, existem condições aqui como existe no  Handlebars!!! */}
            <div className='container mb-5'>
                <h2 className='text-primary'>Usando condicionais dentro do JSX</h2>
                <h1>Usuário está Online?</h1>
                <br />
                <div className='container d-flex justify-content-evenly'>
                    {/* Para comparar é bem simples, basta usar um comparador ternário: {if condicao ? sim : nao} */}
                    {userIsOnline ? (
                        <div>
                            <button className="btn btn-success" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                <span className='ms-2' role="status">Online</span>
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button className="btn btn-danger" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                <span className='ms-2' role="status">Offline</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <hr />

            {/* Trabalhando com listas, por exemplo... */}
            <div className="container text-center mb-5">
                <h1 className='text-primary'>Trabalhando com listas, e método Map()</h1>
                <ul className='mt-3'>
                    {lista.map((pokemon) => {
                        return <p key={pokemon.id}>Nome: {pokemon.name} - Tipo: {pokemon.type}</p>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default JSXExamples