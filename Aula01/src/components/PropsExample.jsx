/* eslint-disable no-unused-vars */
import React from 'react'

function PropsExample({name, age}) {
  return (
    <div className='container text-center mt-5'>
        <small>Exemplo do uso de Props</small>
          <h1>Meu nome é {name}</h1>
          <h1>E tenho {age} anos!</h1>
    </div>
  )
}

export default PropsExample

// Primeira forma de se fazer uso das Props
// import React from 'react'

// function PropsExample(props) {
//     return (
//         <div className='container text-center text-primary'>
//             <h1>Olá, {props.name}</h1>
//             <h2>Eu tenho {props.age}</h2>
//         </div>
//     )
// }

// export default PropsExample

// Uso correto!