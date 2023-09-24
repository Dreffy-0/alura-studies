import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
}

function Button({ onClick, type = "button", children }: ButtonProps) {
	return (
		<button onClick={onClick} type={type} className={styles.botao}>
			{children}
		</button>
	);
}

export default Button;
