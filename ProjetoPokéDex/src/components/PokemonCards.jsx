import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { use } from 'react';


const PokemonCards = () => {

    const [pokemon, setPokemon] = useState([]);

    // Deixar a primeira letra maiúscula
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=251&offset=0') // Fazendo a primeira busca de dados...
            .then(response => {
                // Salvando os nomes dos Pokémon noS estadoS
                // setPokemon(response.data.results) 
                // console.log(response);
                const pokemonDetailsPromisses = response.data.results.map((pokemon) => {
                    return axios.get(pokemon.url)
                        .then(res => res.data)
                        .catch(error => {
                            console.log('Erro ao tentar buscar dados', error.stack);
                        })
                });

                Promise.all(pokemonDetailsPromisses)
                    .then(response => {
                        setPokemon(response);
                    })
                    .catch(error => {
                        console.log('Erro ao tentar buscar dados', error.stack);
                    })
            })
            .catch(error => {
                console.log('Erro ao tentar buscar dados', error.stack);
            })
    }, []);


    return (
        <div className='container d-flex flex-wrap justify-content-center'>
            {pokemon.map((pokemon) => {
                return (
                    <div key={pokemon.name} className="card m-2 shadow" style={{ width: "12rem" }}>
                        <img className='mx-auto' src={pokemon.sprites.front_default} alt={pokemon.name} style={{width: "5rem"}}/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-info-subtle fw-bold">ID: {pokemon.id}</li>
                            <li className="list-group-item bg-danger-subtle">Nome: {capitalize(pokemon.name)}</li>
                            <li className="list-group-item bg-success-subtle">
                                Tipo: { //pokemon.types.type[0, 1] => pokemon > types > type = [0, 1, 2]
                                    capitalize(pokemon.types.map(tipos => tipos.type.name).join(', '))
                                }
                            </li>
                        </ul>
                    </div>
                );
            })}
            <div className='container mb-3'>

            </div>
        </div>
    )
};

export default PokemonCards