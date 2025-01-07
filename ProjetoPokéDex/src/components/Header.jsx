import React from 'react';

const Header = () => {
  return (
    // Imagem de fundo do Header
    <div className="container position-relative text-center mt-3">
      <div className="position-absolute top-50 start-50 translate-middle w-100">
        <img
          draggable="false"
          src="./images/logo.png"
          alt="Logo Pokémon"
          className="img-fluid opacity-25"
        />
      </div>
      {/* COnteúdo do logotipo */}
      <div className="position-relative">
        <h1 className="text-primary display-3">Pokémon Center</h1>
        <h2 className="text-success">Brasil</h2>
        <hr />
      </div>
    </div>
  );
};

export default Header;
