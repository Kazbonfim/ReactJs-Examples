import React, { useState } from 'react';

export const UseStateComponents = () => {
    // useState é usado para criar um estado local no componente.
    // Aqui, 'contador' é a variável de estado, e 'setContador' é a função para atualizar esse estado.
    const [contador, setContador] = useState(0); // O valor inicial do contador é 0.

    // Função para incrementar o contador
    function incrementar() {
        // Atualizando o estado usando a função setContador.
        // Importante: Essa atualização é assíncrona, então o console.log pode não refletir imediatamente o novo valor.
        setContador(contador + 1);
        console.log(contador); // Pode mostrar o valor anterior devido à natureza assíncrona.
    }

    return (
        <div className='container text-center'>
            {/* Cabeçalho simples para exibir o título do contador */}
            <h2 className='display-3'>Contador:</h2>

            {/* Exibindo o valor do estado 'contador' */}
            <h2 className='display-3 text-primary'>{contador}</h2>

            {/* Botão para chamar a função incrementar. Note o uso de onClick para eventos */}
            <button onClick={incrementar} className='btn btn-outline-danger'>Adicionar</button>
            <hr />
        </div>
    );
};

export default UseStateComponents;