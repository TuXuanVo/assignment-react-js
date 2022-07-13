import "./positionItem.css";

export type position = {
	name: string;
	quantity: number;
};

function PositionItem({ name, quantity }: position) {
	return (
		<div className="positionItem">
			<h5>{name}</h5>
			<h6 className="quantityPositions">{quantity} position</h6>
		</div>
	);
}

export default PositionItem;
