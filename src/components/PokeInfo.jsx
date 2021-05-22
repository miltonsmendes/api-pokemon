import { useState, useEffect } from "react";
import failedImage from '../assets/what.jpg'

export function PokeInfo(props) {
    const [pokemonData, setPokemonData] = useState([]);

    const addressPokemon = 'https://pokeapi.co/api/v2/pokemon/' + props.name.toLowerCase();



    useEffect(() => {
        setPokemonData([])
        if (props.submit) {
            fetch(addressPokemon)
                .then(response => response.json())
                .then(data => setPokemonData(data))
                .catch(error => {
                    //setPokemonData([])
                    console.log('erro')
                })
        }
    }, [addressPokemon, props.submit]);


    return (
        <>
            <section>
                <div className="container">
                    <div className="card">
                        <img src={ pokemonData.sprites && pokemonData.sprites.other["official-artwork"].front_default} alt="" />
                        <div className="infos">
                            <p>Nome: {pokemonData.name}</p>
                            <p>Peso: {pokemonData.weight}</p>
                            <p>Altura: {pokemonData.height}</p>
                            <p>Tipo: {pokemonData.types && pokemonData.types[0].type.name}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}