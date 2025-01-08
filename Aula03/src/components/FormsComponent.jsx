import React, { useState } from 'react';

export const FormsComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ name, email });
    }

    return (
        <div className="container mt-5">
            <hr />
            <h1 className="display-4 text-center mb-4">useState em Formulários</h1>

            {/* Isso aqui é muito foda! */}
            <h2 className='container text-center display-5  '>{name} / {email}</h2>

            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome:</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail:</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Enviar</button>
            </form>
        </div>
    );
};

export default FormsComponent;
