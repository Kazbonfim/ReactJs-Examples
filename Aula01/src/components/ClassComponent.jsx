import react from 'react'

class ClassComponent extends react.Component {

    render() {
        return (
            <div className='container text-secondary border border-dark-subtle rounded'>
                <small>Componentes de classe, que foram descontinuados</small>
                <h2>Componentes de classes: <span className='text-danger'>descontinuados, por serem muito verbosos.</span></h2>
            </div>
        );
    }
}

export default ClassComponent;