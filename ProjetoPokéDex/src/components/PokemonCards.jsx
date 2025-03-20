import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonCards = () => {
    const [pokemon, setPokemon] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de busca

    // Deixar a primeira letra maiúscula
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=251&offset=0') // Fazendo a primeira busca de dados...
            .then(response => {
                const pokemonDetailsPromisses = response.data.results.map((pokemon) => {
                    return axios.get(pokemon.url)
                        .then(res => res.data)
                        .catch(error => {
                            console.log('Erro ao tentar buscar dados', error.stack);
                        });
                });

                Promise.all(pokemonDetailsPromisses)
                    .then(response => {
                        setPokemon(response);
                    })
                    .catch(error => {
                        console.log('Erro ao tentar buscar dados', error.stack);
                    });
            })
            .catch(error => {
                console.log('Erro ao tentar buscar dados', error.stack);
            });
    }, []);

    // Filtra os Pokémon com base no termo de busca
    const filteredPokemon = pokemon.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container'>
            {/* Campo de busca */}
            <div className="my-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar Pokémon..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de busca
                />
            </div>

            {/* Lista de Pokémon */}
            <div className='pokemon-container d-flex flex-wrap justify-content-center'>
                {filteredPokemon.map((pokemon) => {
                    return (
                        <div key={pokemon.name} className="pokemon-card card m-2 shadow">
                            <img
                                className='mx-auto'
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                style={{ width: "5rem" }}
                            />
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-info-subtle fw-bold">ID: {pokemon.id}</li>
                                <li className="list-group-item bg-danger-subtle">
                                    Nome: {capitalize(pokemon.name)}
                                </li>
                                <li className="list-group-item bg-success-subtle">
                                    Tipo: {capitalize(pokemon.types.map(tipos => tipos.type.name).join(', '))}
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PokemonCards;