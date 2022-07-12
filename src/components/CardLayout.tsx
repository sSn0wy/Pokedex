import './CardLayout.scss';
import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react';

interface Props {
	children: JSX.Element[];
}

function CardLayout({ children }: Props) {
	function scrollRight() {
		const cards = document.querySelector('#cards');
		cards?.scrollBy(-500, 0);
	}

	function scrollLeft() {
		const cards = document.querySelector('#cards');
		cards?.scrollBy(500, 0);
	}

	return (
		<div className="scrollbar-container">
			<button className="btn-scroll" onClick={scrollRight}>
				<CaretCircleLeft size={36} />
			</button>
			<section className="card-list" id="cards">
				{children}
			</section>
			<button className="btn-scroll" onClick={scrollLeft}>
				<CaretCircleRight size={36} />
			</button>
		</div>
	);
}

export default CardLayout;
