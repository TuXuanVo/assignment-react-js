import "./input.css";

function Input({
	type,
	label,
	name,
	placeholder,
	onChange,
	value,
	errorMessage,
	touched,
}: {
	type: string;
	label: string;
	name: string;
	placeholder: string;
	onChange: any;
	value: string;
	errorMessage: string | undefined;
	touched: boolean | undefined;
}) {
	return (
		<div className="inputItem">
			<h4>{label}</h4>
			<input
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange(name)}
			/>
			{touched && errorMessage ? <div className="warningText">{errorMessage}</div> : null}
		</div>
	);
}

export default Input;
