import React from 'react';
import { useState } from 'react';

const ComponentEvents = () => {



    return (
        <div className='container text-center'>
            <div>
                <h1>Exemplo de eventos com JSX e React</h1>
                <hr />

                <div className='container text-center'>
                    <button onClick={() =>alert('Obrigado, que alívio!')} className='btn btn-outline-danger'>Clique em mim!</button>
                </div>

            </div>
        </div>
    )
}

export default ComponentEvents