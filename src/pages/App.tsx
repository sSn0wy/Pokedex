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
				<div className="pokemon-stats">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus fugit velit eaque odit exercitationem possimus in cumque inventore. Aliquam sint cumque esse tempore! Voluptatum consequuntur ullam accusantium voluptatem, earum numquam minus nobis culpa tempora reprehenderit asperiores possimus, modi facere, natus praesentium quaerat vitae soluta magnam ipsa quibusdam repellat autem dolor atque veniam. Tempore beatae, error fuga veniam voluptatum illum ipsa!
				</div>
			</div>
			<div className="cards">
				<CardLayout>
					{pokemons.map((pokemon) => {
						return (
							<Card
								key={pokemon.name}
								name={pokemon.name}
								url={pokemon.url}
								callback={getPokemonData}
							/>
						);
					})}
				</CardLayout>
			</div>
		</div>
	);
}

export default App;
