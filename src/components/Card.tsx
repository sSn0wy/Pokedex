import { useEffect, useState } from 'react';
import './Card.scss';

interface Props {
	name: string;
	url: string;
	callback: (img: string) => void;
}

function Card({ name, url, callback }: Props) {
	const [pokemon, setPokemon] = useState<string>('');

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((pokemon) =>
				setPokemon(
					pokemon.sprites.other['official-artwork'].front_default
				)
			);
	}, []);

	return (
		<article className="card" onClick={() => callback(pokemon)}>
			<header className="card-header">
				<h2>{name}</h2>
			</header>
			<img src={pokemon} alt="pokemon" />
		</article>
	);
}

export default Card;
