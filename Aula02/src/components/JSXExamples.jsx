import React from 'react'

const JSXExamples = () => {

    const pokemon1 = {
        name: "Pikachu",
        type: "Elétrico",
        level: "20"
    }

    const pokemon2 = {
        name: "Bulbasaur",
        type: "Grama/Veneno",
        level: "15"
    }

    const pokemon3 = {
        name: "Charmander",
        type: "Fogo",
        level: "18"
    }

    function falarNome(nome) {
        return nome
    }

    return (
        <div className='container text-dark text-center'>
            <h4>Podemos criar variáveis FORA do return de cada componente, assim, esses dados podem ser acessados pela propriedade DENTRO do return a qualquer momento!</h4>
            <hr />

            {/* Alinha os cards na mesma linha usando Flexbox */}
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

            <div>
                <h1>Olá, {falarNome(pokemon1.name)}</h1>
            </div>
        </div>
    )
}

export default JSXExamples