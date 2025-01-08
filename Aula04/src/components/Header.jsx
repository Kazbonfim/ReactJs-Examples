import React from 'react';

const Header = () => {
  return (
    // Imagem de fundo do Header
    <div className="container position-relative text-center mt-3">
      {/* COnteúdo do logotipo */}
      <div className="position-relative">
        <h1 className="text-primary display-1">JSX</h1>
        <h2 className="text-black">Aulão de React com o prof. Matheus</h2>
        <h2 className='display-4'>3ª Parte</h2>
        <hr />
      </div>
    </div>
  );
};

export default Header;
