import React, { useState } from 'react';

export const ActiveComponent = () => {
    const [isVisible, setVisible] = useState(false);

    return (
        <div className="container text-center mt-3">
            <h2 className="display-3 mb-5">useState para estados:</h2>

            <div className="container">
                <button
                    onClick={() => setVisible(!isVisible)}
                    className="btn btn-outline-primary shadow mb-3"
                >
                    {isVisible ? 'Ocultar' : 'Exibir'}
                </button>

                <div className="transition">
                    {isVisible && (
                        <h3>Esse texto é invisível</h3>
                    )}
                </div>

                <hr />
            </div>
        </div>
    );
};
