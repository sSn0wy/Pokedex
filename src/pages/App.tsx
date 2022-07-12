import Card from '../components/Card';
import CardLayout from '../components/CardLayout';
import './App.scss';

function App() {
	return (
		<div className="home">
			<div className="pokemon-container">
				<div className="pokemon"></div>
				<div className="pokemon-stats"></div>
			</div>
			<div className="cards">
				<CardLayout>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</CardLayout>
			</div>
		</div>
	);
}

export default App;
