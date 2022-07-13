import { useEffect, useState } from 'react';
import Card from '../components/Card';
import CardLayout from '../components/CardLayout';
import './App.scss';

interface PokemonList {
	name: string;
	url: string;
}

function App() {
	const [pokemons, setPokemons] = useState<PokemonList[]>([]);
	const [selectedPokemon, setSelectedPokemon] = useState<string>();

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon')
			.then((res) => res.json())
			.then((pokemon) => setPokemons(pokemon.results));
	}, []);

	function getPokemonData(img: string) {
		setSelectedPokemon(img);
	}

	return (
		<div className="home">
			<div className="pokemon-container">
				<div className="pokemon">
					<img src={selectedPokemon} alt="Sem senhum pokemon selecionado" />
				</div>
				<div className="pokemon-stats"></div>
			</div>
			<div className="cards">
				<CardLayout>
					{pokemons.map((pokemon) => {
						return (
							<Card
								name={pokemon.name}
								url={pokemon.url}
								callback={getPokemonData}
							/>
						);
					})}
				</CardLayout>
				<br />
			</div>
		</div>
	);
}

export default App;
