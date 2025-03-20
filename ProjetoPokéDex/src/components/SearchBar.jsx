import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="my-3">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar Pokémon..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
